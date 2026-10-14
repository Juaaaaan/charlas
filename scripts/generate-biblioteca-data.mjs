#!/usr/bin/env node
/**
 * Genera lib/biblioteca/data.json a partir del vault Juaaaaan/IAs-talks (GitHub, rama main).
 *
 * Alcance v1 (decidido con Juan, 2026-10-14): solo Charlas/*.md (no Charlas/guiones/)
 * y Conceptos/**\/*.md. Demos/, Recursos/ y Proyectos/ quedan fuera de esta primera versión.
 *
 * Sincronización: fetch en build desde la API pública de GitHub (sin token — el repo es
 * público). Si en el futuro se añade un GITHUB_TOKEN de entorno, se usa para evitar el
 * límite de 60 req/hora de la API sin autenticar.
 *
 * Se ejecuta como "prebuild" (ver package.json) y escribe un JSON estático que la app
 * importa en build time — no hay fetch en runtime, el sitio sigue siendo estático.
 */

import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const OWNER = "Juaaaaan";
const REPO = "IAs-talks";
const BRANCH = "main";
const OUT_DIR = path.join(process.cwd(), "lib", "biblioteca");
const OUT_FILE = path.join(OUT_DIR, "data.json");

// Nombre deliberadamente específico (no GITHUB_TOKEN): algunos entornos de CI/sandbox
// exportan GITHUB_TOKEN con un valor propio (p.ej. para git sobre HTTPS) que no sirve
// como Bearer token de la API REST y rompería el fetch con 401.
const GITHUB_TOKEN = process.env.VAULT_GITHUB_TOKEN;

function authHeaders() {
  const headers = { Accept: "application/vnd.github+json" };
  if (GITHUB_TOKEN) headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  return headers;
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: authHeaders() });
  if (!res.ok) {
    throw new Error(`GET ${url} -> ${res.status} ${res.statusText}`);
  }
  return res.json();
}

async function fetchRaw(filePath) {
  const url = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${filePath}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`GET ${url} -> ${res.status} ${res.statusText}`);
  }
  return res.text();
}

/** Carpetas en el alcance de la v1 de la Biblioteca. */
function enScope(filePath) {
  if (!filePath.endsWith(".md")) return false;
  if (filePath.startsWith("Charlas/guiones/")) return false;
  if (filePath.startsWith("Charlas/") && !filePath.includes("/", "Charlas/".length)) {
    return true;
  }
  if (filePath.startsWith("Conceptos/")) return true;
  return false;
}

function slugFromPath(filePath) {
  const base = filePath.split("/").pop() ?? filePath;
  return base.replace(/\.md$/, "");
}

function nivelFromPath(filePath) {
  // Conceptos/nivel-2-intermedios/sdd.md -> "nivel-2-intermedios"
  const parts = filePath.split("/");
  if (parts[0] === "Conceptos" && parts.length >= 2) return parts[1];
  return null;
}

/** Reemplaza [[slug]] y [[slug|Etiqueta]] por enlaces markdown si el slug está en alcance,
 *  o por texto plano (sin corchetes) si apunta fuera del alcance de la v1. */
function resolveWikilinks(body, slugsInScope) {
  return body.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, rawSlug, label) => {
    const slug = rawSlug.trim();
    const text = (label ?? rawSlug).trim();
    if (slugsInScope.has(slug)) {
      return `[${text}](/biblioteca/${slug})`;
    }
    return text;
  });
}

function normalizeRelated(related) {
  if (!related) return [];
  if (Array.isArray(related)) return related.map((r) => String(r).trim());
  // Alguna nota usa el formato multilínea `related:\n  - "[[slug]]"` en vez de array simple.
  if (typeof related === "string") {
    return related
      .split(/[\n,]/)
      .map((r) => r.replace(/[\[\]"]/g, "").trim())
      .filter(Boolean);
  }
  return [];
}

async function main() {
  console.log(`[biblioteca] Leyendo árbol de ${OWNER}/${REPO}@${BRANCH}...`);
  const tree = await fetchJson(
    `https://api.github.com/repos/${OWNER}/${REPO}/git/trees/${BRANCH}?recursive=1`,
  );

  const files = tree.tree
    .filter((entry) => entry.type === "blob" && enScope(entry.path))
    .map((entry) => entry.path);

  console.log(`[biblioteca] ${files.length} ficheros candidatos. Descargando contenido...`);

  const rawNodes = [];
  let skipped = 0;
  for (const filePath of files) {
    const raw = await fetchRaw(filePath);
    const { data: frontmatter, content: body } = matter(raw);
    const slug = slugFromPath(filePath);
    const tipoCarpeta = filePath.startsWith("Charlas/") ? "charla" : "concepto";

    // Dentro de Charlas/ convive el resumen oficial (type: Charla, un .md por charla,
    // tal como documenta CLAUDE.md) con material de preparación interno más extenso
    // (type: Material, o sin frontmatter en absoluto en algún caso heredado). La
    // Biblioteca v1 muestra solo el resumen público — el material de preparación no
    // está pensado para que lo vea un compañero que simplemente quiere "bucear".
    if (tipoCarpeta === "charla" && frontmatter.type !== "Charla") {
      skipped += 1;
      continue;
    }

    rawNodes.push({
      slug,
      path: filePath,
      tipo: tipoCarpeta,
      nivel: nivelFromPath(filePath),
      title: frontmatter.title ?? slug,
      description: frontmatter.description ?? "",
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      related: normalizeRelated(frontmatter.related),
      charla: frontmatter.charla ?? null,
      timestamp: frontmatter.timestamp ?? null,
      bodyRaw: body.trim(),
    });
  }

  const slugsInScope = new Set(rawNodes.map((n) => n.slug));

  // Grafo no dirigido: una arista existe si A declara B en related, o B declara A,
  // y ambos están en el alcance de la v1.
  const edgeSet = new Map(); // slug -> Set(slug)
  const addEdge = (a, b) => {
    if (a === b) return;
    if (!edgeSet.has(a)) edgeSet.set(a, new Set());
    if (!edgeSet.has(b)) edgeSet.set(b, new Set());
    edgeSet.get(a).add(b);
    edgeSet.get(b).add(a);
  };

  for (const node of rawNodes) {
    for (const rel of node.related) {
      if (slugsInScope.has(rel)) addEdge(node.slug, rel);
    }
  }

  const nodes = rawNodes.map((node) => {
    const connections = Array.from(edgeSet.get(node.slug) ?? []).sort();
    return {
      ...node,
      body: resolveWikilinks(node.bodyRaw, slugsInScope),
      bodyRaw: undefined,
      connections,
    };
  });

  nodes.sort((a, b) => a.title.localeCompare(b.title, "es"));

  const output = {
    generatedAt: new Date().toISOString(),
    source: `${OWNER}/${REPO}@${BRANCH}`,
    count: nodes.length,
    nodes,
  };

  await mkdir(OUT_DIR, { recursive: true });
  await writeFile(OUT_FILE, JSON.stringify(output, null, 2) + "\n", "utf-8");
  console.log(
    `[biblioteca] Escrito ${OUT_FILE} (${nodes.length} notas; ${skipped} material de preparación excluido de la v1).`,
  );
}

main().catch((err) => {
  console.error("[biblioteca] Error generando datos:", err);
  process.exit(1);
});

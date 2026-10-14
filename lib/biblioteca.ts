import data from "@/lib/biblioteca/data.json";
import type { BibliotecaData, NotaBiblioteca } from "@/lib/biblioteca/types";

const biblioteca = data as BibliotecaData;

export function getTodasLasNotas(): NotaBiblioteca[] {
  return biblioteca.nodes;
}

export function getNotaPorSlug(slug: string): NotaBiblioteca | undefined {
  return biblioteca.nodes.find((n) => n.slug === slug);
}

export function getNotasPorSlugs(slugs: string[]): NotaBiblioteca[] {
  const bySlug = new Map(biblioteca.nodes.map((n) => [n.slug, n]));
  return slugs.map((s) => bySlug.get(s)).filter((n): n is NotaBiblioteca => Boolean(n));
}

export function getTodosLosTags(): string[] {
  const tags = new Set<string>();
  for (const n of biblioteca.nodes) {
    for (const t of n.tags) tags.add(t);
  }
  return Array.from(tags).sort((a, b) => a.localeCompare(b, "es"));
}

export function getMetaBiblioteca() {
  return { generatedAt: biblioteca.generatedAt, source: biblioteca.source, count: biblioteca.count };
}

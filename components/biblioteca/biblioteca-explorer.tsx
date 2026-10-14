"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, BookOpen, Sparkles } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { NIVEL_LABEL, NIVEL_ORDEN } from "@/lib/biblioteca/types";
import type { Nivel, TipoNota } from "@/lib/biblioteca/types";

export type NotaResumen = {
  slug: string;
  tipo: TipoNota;
  nivel: Nivel | null;
  title: string;
  description: string;
  tags: string[];
  charla: string | null;
};

type FiltroTipo = "todos" | TipoNota;

export function BibliotecaExplorer({ notas }: { notas: NotaResumen[] }) {
  const [query, setQuery] = useState("");
  const [tipo, setTipo] = useState<FiltroTipo>("todos");
  const [nivel, setNivel] = useState<Nivel | "todos">("todos");

  const filtradas = useMemo(() => {
    const q = query.trim().toLowerCase();
    return notas.filter((n) => {
      if (tipo !== "todos" && n.tipo !== tipo) return false;
      if (nivel !== "todos" && n.nivel !== nivel) return false;
      if (!q) return true;
      return (
        n.title.toLowerCase().includes(q) ||
        n.description.toLowerCase().includes(q) ||
        n.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [notas, query, tipo, nivel]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por título, descripción o tag..."
            className="pl-9"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <FiltroBoton activo={tipo === "todos"} onClick={() => setTipo("todos")}>
            Todo
          </FiltroBoton>
          <FiltroBoton activo={tipo === "charla"} onClick={() => setTipo("charla")}>
            <BookOpen className="h-3.5 w-3.5" /> Charlas
          </FiltroBoton>
          <FiltroBoton activo={tipo === "concepto"} onClick={() => setTipo("concepto")}>
            <Sparkles className="h-3.5 w-3.5" /> Conceptos
          </FiltroBoton>
        </div>
      </div>

      {tipo !== "charla" && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <FiltroBoton activo={nivel === "todos"} onClick={() => setNivel("todos")} sutil>
            Todos los niveles
          </FiltroBoton>
          {NIVEL_ORDEN.map((n) => (
            <FiltroBoton key={n} activo={nivel === n} onClick={() => setNivel(n)} sutil>
              {NIVEL_LABEL[n].replace("Nivel ", "N.")}
            </FiltroBoton>
          ))}
        </div>
      )}

      <p className="mt-6 text-sm text-muted-foreground">
        {filtradas.length} {filtradas.length === 1 ? "resultado" : "resultados"}
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtradas.map((nota, index) => (
          <motion.div
            key={nota.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.4), ease: "easeOut" }}
          >
            <Link
              href={`/biblioteca/${nota.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card/70 px-5 py-5 backdrop-blur transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between gap-2">
                <Badge
                  variant="outline"
                  className={
                    nota.tipo === "charla"
                      ? "border-primary/40 text-primary"
                      : "border-border/70 text-muted-foreground"
                  }
                >
                  {nota.tipo === "charla" ? nota.charla ?? "Charla" : "Concepto"}
                </Badge>
                {nota.nivel && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {NIVEL_LABEL[nota.nivel].split(" — ")[0]}
                  </span>
                )}
              </div>

              <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                {nota.title}
              </h3>

              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-foreground/70">
                {nota.description}
              </p>

              {nota.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {nota.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary/60 px-2 py-0.5 text-[11px] text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Abrir
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      {filtradas.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">
          Nada que coincida con esa búsqueda.
        </p>
      )}
    </div>
  );
}

function FiltroBoton({
  activo,
  onClick,
  children,
  sutil = false,
}: {
  activo: boolean;
  onClick: () => void;
  children: React.ReactNode;
  sutil?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
        activo
          ? "border-primary/50 bg-primary/15 text-primary"
          : sutil
            ? "border-border/50 text-muted-foreground hover:border-border"
            : "border-border/70 text-foreground/75 hover:border-primary/30"
      }`}
    >
      {children}
    </button>
  );
}

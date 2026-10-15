import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getTodasLasNotas, getNotaPorSlug, getNotasPorSlugs } from "@/lib/biblioteca";
import { NIVEL_LABEL } from "@/lib/biblioteca/types";
import { MarkdownBody } from "@/components/biblioteca/markdown-body";
import { EgoGraph } from "@/components/biblioteca/ego-graph";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return getTodasLasNotas().map((n) => ({ slug: n.slug }));
}

type PaginaProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PaginaProps): Promise<Metadata> {
  const { slug } = await params;
  const nota = getNotaPorSlug(slug);
  if (!nota) return {};
  return {
    title: `${nota.title} — Biblioteca`,
    description: nota.description,
  };
}

export default async function NotaPage({ params }: PaginaProps) {
  const { slug } = await params;
  const nota = getNotaPorSlug(slug);
  if (!nota) notFound();

  const conexiones = getNotasPorSlugs(nota.connections);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-aura-pagina" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col px-4 py-16 lg:py-24">
        <Link
          href="/biblioteca"
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Biblioteca
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Badge
            variant="outline"
            className={
              nota.tipo === "charla" ? "border-primary/40 text-primary" : "border-border/70"
            }
          >
            {nota.tipo === "charla" ? nota.charla ?? "Charla" : "Concepto"}
          </Badge>
          {nota.nivel && (
            <Badge variant="secondary">{NIVEL_LABEL[nota.nivel]}</Badge>
          )}
        </div>

        <h1 className="mt-5 text-3xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
          {nota.title}
        </h1>

        {nota.description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/72">
            {nota.description}
          </p>
        )}

        {nota.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {nota.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-secondary/60 px-2.5 py-0.5 text-xs text-secondary-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-12 border-t border-border/60 pt-10">
          <MarkdownBody content={nota.body} />
        </div>

        {conexiones.length > 0 && (
          <div className="mt-16 border-t border-border/60 pt-10">
            <h2 className="text-xl font-semibold text-foreground">Conexiones</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Notas relacionadas con esta, tal y como están enlazadas en el vault.
            </p>

            <div className="mt-8">
              <EgoGraph
                centro={{ slug: nota.slug, title: nota.title, tipo: nota.tipo }}
                vecinos={conexiones.map((c) => ({
                  slug: c.slug,
                  title: c.title,
                  tipo: c.tipo,
                }))}
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {conexiones.map((c) => (
                <Link
                  key={c.slug}
                  href={`/biblioteca/${c.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {c.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

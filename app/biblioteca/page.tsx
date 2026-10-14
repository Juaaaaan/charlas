import type { Metadata } from "next";
import Link from "next/link";

import { getTodasLasNotas, getMetaBiblioteca } from "@/lib/biblioteca";
import { BibliotecaExplorer, type NotaResumen } from "@/components/biblioteca/biblioteca-explorer";

export const metadata: Metadata = {
  title: "Biblioteca — Charlas de IA",
  description:
    "Todas las charlas y conceptos de la serie, navegables y conectados entre sí.",
};

export default function BibliotecaPage() {
  const notas = getTodasLasNotas();
  const meta = getMetaBiblioteca();

  const resumenes: NotaResumen[] = notas.map((n) => ({
    slug: n.slug,
    tipo: n.tipo,
    nivel: n.nivel,
    title: n.title,
    description: n.description,
    tags: n.tags,
    charla: n.charla,
  }));

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <span aria-hidden="true">←</span> Charlas
      </Link>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,145,255,0.18),transparent_32%),linear-gradient(180deg,rgba(7,10,18,1)_0%,rgba(9,13,21,0.98)_54%,rgba(12,16,26,1)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,150,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,150,255,0.03)_1px,transparent_1px)] bg-[size:88px_88px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 py-20 lg:py-28">
        <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-primary">
          Biblioteca
        </span>

        <h1 className="mt-8 max-w-3xl text-4xl font-bold tracking-tight text-balance text-foreground md:text-6xl">
          Todo lo visto en la serie, conectado
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/72">
          {meta.count} notas — charlas y conceptos — enlazadas entre sí tal y
          como viven en el vault de la serie. Busca, filtra, y sigue las
          conexiones de cada nota hacia las demás.
        </p>

        <div className="mt-14">
          <BibliotecaExplorer notas={resumenes} />
        </div>
      </div>
    </main>
  );
}

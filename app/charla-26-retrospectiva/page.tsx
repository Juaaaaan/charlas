import type { Metadata } from "next";
import Link from "next/link";

import { SectionDivider } from "@/components/section-divider";
import { HeroSection26 } from "./sections/hero-section-26";
import { MapaSection26 } from "./sections/mapa-section-26";
import { RepasoSection26 } from "./sections/repaso-section-26";
import { VaultSection26 } from "./sections/vault-section-26";
import { BibliotecaSection26 } from "./sections/biblioteca-section-26";
import { ClosingSection26 } from "./sections/closing-section-26";

export const metadata: Metadata = {
  title: "Charla 26 · Retrospectiva",
  description:
    "Qué hemos visto y para qué sirve cada cosa: 32 piezas de la serie ordenadas en diez preguntas de trabajo, con una dinámica de texto difuminado para que la sala responda.",
};

export default function Charla26Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Link
        href="/"
        className="absolute left-4 top-4 z-50 lg:fixed inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <span aria-hidden="true">←</span> Charlas
      </Link>

      <HeroSection26 />
      <SectionDivider label="Bloque 2 · El mapa" />
      <MapaSection26 />
      <SectionDivider label="Bloque 3 · Las diez preguntas" />
      <RepasoSection26 />
      <SectionDivider label="Bloque 4 · Preguntarle al vault" />
      <VaultSection26 />
      <SectionDivider label="Bloque 5 · La Biblioteca" />
      <BibliotecaSection26 />
      <SectionDivider label="Bloque 6 · La chuleta" />
      <ClosingSection26 />
    </main>
  );
}

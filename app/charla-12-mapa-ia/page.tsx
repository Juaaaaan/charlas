import type { Metadata } from "next";
import Link from "next/link";

import { SectionDivider } from "@/components/section-divider";
import { HeroSectionConcept } from "@/components/sections/hero-section-concept";
import { AIFoundationsSectionConcepts } from "@/components/sections/ai-fundations-section-concepts";
import { TokenContextSectionConcept } from "@/components/sections/token-context-section";
import { PromptSectionConcept } from "@/components/sections/prompt-section-concept";
import { ClosingSectionConcept } from "@/components/sections/closing-section-concept";

export const metadata: Metadata = {
  title: "Charla 12 · El mapa de la IA",
  description:
    "Cuatro niveles de madurez en IA: fundamentos, los diez conceptos clave, dónde ya estáis sin saberlo y hacia dónde va esto.",
};

export default function Charla12Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <span aria-hidden="true">←</span> Charlas
      </Link>

      <HeroSectionConcept />
      <SectionDivider label="Nivel 1 · Lo que ya tenemos" />
      <AIFoundationsSectionConcepts />
      <SectionDivider label="Nivel 2 · Los 10 conceptos" />
      <TokenContextSectionConcept />
      <SectionDivider label="Nivel 3 · Nuestro momento" />
      <PromptSectionConcept />
      <SectionDivider label="Nivel 4 · Hacia dónde va esto" />
      <ClosingSectionConcept />
    </main>
  );
}

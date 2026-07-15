"use client";

import { SectionDivider } from "@/components/section-divider";
import { HeroSectionConcept } from "@/components/sections/hero-section-concept";
import { AIFoundationsSectionConcepts } from "@/components/sections/ai-fundations-section-concepts";
import { TokenContextSectionConcept } from "@/components/sections/token-context-section";
import { PromptSectionConcept } from "@/components/sections/prompt-section-concept";
import { ClosingSectionConcept } from "@/components/sections/closing-section-concept";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
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

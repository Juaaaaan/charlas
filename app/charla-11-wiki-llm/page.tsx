import type { Metadata } from "next";
import Link from "next/link";

import { SectionDivider } from "@/components/section-divider";
import { HeroSectionLLM } from "@/components/sections/hero-section-llm";
import { AIFoundationsSectionLLM } from "@/components/sections/ai-foundations-section-llm";
import { TokenContextSectionLLM } from "@/components/sections/token-context-section-llm";
import { PromptSectionLLM } from "@/components/sections/prompt-section-llm";
import { ClosingSectionLLM } from "@/components/sections/closing-section-llm";

export const metadata: Metadata = {
  title: "Charla 11 · Wiki LLM",
  description:
    "La IA que recuerda a tu equipo: Wiki LLM con Obsidian y GitHub como memoria persistente.",
};

export default function Charla11Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <span aria-hidden="true">←</span> Charlas
      </Link>

      <HeroSectionLLM />
      <SectionDivider label="Qué es un Wiki LLM" />
      <AIFoundationsSectionLLM />
      <SectionDivider label="Demo: Proyecto" />
      <TokenContextSectionLLM />
      <SectionDivider label="Demo: Equipo" />
      <PromptSectionLLM />
      <SectionDivider label="Cierre" />
      <ClosingSectionLLM />
    </main>
  );
}

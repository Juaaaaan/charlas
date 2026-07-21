"use client";

import { SectionDivider } from "@/components/section-divider";
import { HeroSectionConcept } from "@/components/sections/hero-section-concept";
import { AIFoundationsSectionConcepts } from "@/components/sections/ai-fundations-section-concepts";
import { TokenContextSectionConcept } from "@/components/sections/token-context-section";
import { PromptSectionConcept } from "@/components/sections/prompt-section-concept";
import { ClosingSectionConcept } from "@/components/sections/closing-section-concept";
import { HeroSectionCopilotStudio } from "@/components/sections/hero-section-13";
import { CopilotStudioSection } from "@/components/sections/copilot-studio-section";
import { DemoSection } from "@/components/sections/demo-section-13";
import { MetricsSection } from "@/components/sections/metrics-section";
import { ClosingSection } from "@/components/sections/closing-section-13";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <HeroSectionCopilotStudio />
      <SectionDivider label="Qué es Copilot Studio" />
      <CopilotStudioSection />
      <SectionDivider label="Demo en vivo" />
      <DemoSection />
      <SectionDivider label="Cómo saber si funciona" />
      <MetricsSection />
      <SectionDivider label="Cierre" />
      <ClosingSection />
    </main>
  );
}

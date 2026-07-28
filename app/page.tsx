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
import { HeroSectionGovernance } from "@/components/sections/hero-section-14";
import { CasosRealesSection } from "@/components/sections/real-examples-policy";
import { SegunRolSection } from "@/components/sections/based-on-role";
import { PoliticaUsoSection } from "@/components/sections/policy-usage-section";
import { ClosingSectionGovernance } from "@/components/sections/closing-section-14";
import { NivelesRiesgoSection } from "@/components/sections/risk-levels";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <HeroSectionGovernance />
      <SectionDivider label="Cuando la falta de gobernanza sale cara" />
      <CasosRealesSection />
      <SectionDivider label="No toda IA es igual de arriesgada" />
      <NivelesRiesgoSection />
      <SectionDivider label="La gobernanza no pesa igual para todos" />
      <SegunRolSection />
      <SectionDivider label="La política, punto por punto" />
      <PoliticaUsoSection />
      <SectionDivider label="Autoevaluación y cierre" />
      <ClosingSectionGovernance />

      {/* <HeroSectionCopilotStudio />
      <SectionDivider label="Qué es Copilot Studio" />
      <CopilotStudioSection />
      <SectionDivider label="Demo en vivo" />
      <DemoSection />
      <SectionDivider label="Cómo saber si funciona" />
      <MetricsSection />
      <SectionDivider label="Cierre" />
      <ClosingSection /> */}
    </main>
  );
}

"use client";

import { SectionDivider } from "@/components/section-divider";
import { ClosingSectionSecurity } from "@/components/sections/closing-section-15";
import { ConstitutionalAISection } from "@/components/sections/constitutional-ai-section";
import { DefenseLayersSection } from "@/components/sections/defense-layers-section";
import { HeroSectionSecurity } from "@/components/sections/hero-section-15";
import { PromptInjectionSection } from "@/components/sections/prompt-injection-section";
import { RealCasesSection15 } from "@/components/sections/real-cases-section-15";
import { ShadowAIRoleSection } from "@/components/sections/shadow-ai-role-section";
import { SupplyChainSection } from "@/components/sections/supply-chain-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <HeroSectionSecurity />
      <SectionDivider label="Cómo funciona un ataque" />
      <PromptInjectionSection />
      <SectionDivider label="Defensa en profundidad" />
      <DefenseLayersSection />
      <SectionDivider label="No es teoría de laboratorio" />
      <RealCasesSection15 />
      <SectionDivider label="Cada conexión es una puerta nueva" />
      <SupplyChainSection />
      <SectionDivider label="Por qué el modelo dice que no" />
      <ConstitutionalAISection />
      <SectionDivider label="Qué hacer, según quién eres" />
      <ShadowAIRoleSection />
      <SectionDivider label="Cierre" />
      <ClosingSectionSecurity />

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

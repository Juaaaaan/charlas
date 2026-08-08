import type { Metadata } from "next";
import Link from "next/link";

import { SectionDivider } from "@/components/section-divider";
import { HeroSectionSecurity } from "@/components/sections/hero-section-15";
import { PromptInjectionSection } from "@/components/sections/prompt-injection-section";
import { DefenseLayersSection } from "@/components/sections/defense-layers-section";
import { RealCasesSection15 } from "@/components/sections/real-cases-section-15";
import { SupplyChainSection } from "@/components/sections/supply-chain-section";
import { ConstitutionalAISection } from "@/components/sections/constitutional-ai-section";
import { ShadowAIRoleSection } from "@/components/sections/shadow-ai-role-section";
import { ClosingSectionSecurity } from "@/components/sections/closing-section-15";

export const metadata: Metadata = {
  title: "Charla 15 · Seguridad en IA",
  description:
    "Por qué la seguridad en IA es distinta: prompt injection, defensa en capas, nueve casos reales y cadena de suministro.",
};

export default function Charla15Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <span aria-hidden="true">←</span> Charlas
      </Link>

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
    </main>
  );
}

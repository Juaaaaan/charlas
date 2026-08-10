import type { Metadata } from "next";
import Link from "next/link";

import { SectionDivider } from "@/components/section-divider";
import { HeroSectionGovernance } from "@/components/sections/hero-section-14";
import { CasosRealesSection } from "@/components/sections/real-examples-policy";
import { NivelesRiesgoSection } from "@/components/sections/risk-levels";
import { SegunRolSection } from "@/components/sections/based-on-role";
import { PoliticaUsoSection } from "@/components/sections/policy-usage-section";
import { ClosingSectionGovernance } from "@/components/sections/closing-section-14";

export const metadata: Metadata = {
  title: "Charla 14 · Gobernanza de IA",
  description:
    "Casos reales, niveles de riesgo del EU AI Act, política de uso y autoevaluación del nivel de madurez en gobernanza de IA.",
};

export default function Charla14Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <span aria-hidden="true">←</span> Charlas
      </Link>

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
    </main>
  );
}

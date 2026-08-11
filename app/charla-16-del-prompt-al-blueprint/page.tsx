import type { Metadata } from "next";
import Link from "next/link";

import { SectionDivider } from "@/components/section-divider";
import { HeroSectionSdd } from "@/components/sections/hero-section-16";
import { SpecRefresherSection } from "@/components/sections/spec-refresher-section";
import { ManualSpecSection } from "@/components/sections/manual-spec-section";
import { SddEcosystemSection } from "@/components/sections/sdd-ecosystem-section";
import { DemoFlowSection } from "@/components/sections/demo-flow-section";
import { WhenToUseSection } from "@/components/sections/when-to-use-section";
import { RolesSection16 } from "@/components/sections/roles-section-16";
import { ClosingSection16 } from "@/components/sections/closing-section-16";

export const metadata: Metadata = {
  title: "Charla 16 · Del prompt al blueprint",
  description:
    "SDD con herramientas: spec manual contra OpenSpec, Spec Kit y Kiro, y una demo en directo de un issue de Jira a código con OpenSpec sobre RCA.",
};

export default function Charla16Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <span aria-hidden="true">←</span> Charlas
      </Link>

      <HeroSectionSdd />
      <SectionDivider label="El cuello de botella se movió" />
      <SpecRefresherSection />
      <SectionDivider label="SDD con las manos" />
      <ManualSpecSection />
      <SectionDivider label="Manual contra herramienta" />
      <SddEcosystemSection />
      <SectionDivider label="El corazón de la charla" />
      <DemoFlowSection />
      <SectionDivider label="Qué me llevo el lunes" />
      <WhenToUseSection />
      <SectionDivider label="También los no-devs" />
      <RolesSection16 />
      <SectionDivider label="Cierre" />
      <ClosingSection16 />
    </main>
  );
}

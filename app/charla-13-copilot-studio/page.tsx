import type { Metadata } from "next";
import Link from "next/link";

import { SectionDivider } from "@/components/section-divider";
import { HeroSectionCopilotStudio } from "@/components/sections/hero-section-13";
import { CopilotStudioSection } from "@/components/sections/copilot-studio-section";
import { DemoSection } from "@/components/sections/demo-section-13";
import { MetricsSection } from "@/components/sections/metrics-section";
import { ClosingSection } from "@/components/sections/closing-section-13";

export const metadata: Metadata = {
  title: "Charla 13 · Copilot Studio",
  description:
    "De saber a medir: construir un agente en Copilot Studio y cómo saber si la IA está funcionando.",
};

export default function Charla13Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <span aria-hidden="true">←</span> Charlas
      </Link>

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

import type { Metadata } from "next";
import Link from "next/link";

import { SectionDivider } from "@/components/section-divider";
import { HeroSectionCopilot } from "@/components/sections/hero-section-copilot";
import { ProblemSectionCopilot } from "@/components/sections/problem-section-copilot";
import { SolutionSection } from "@/components/sections/solution-section";
import { GithubStructureSection } from "@/components/sections/github-structure-section";
import { DemoSectionCopilot } from "@/components/sections/demo-section-copilot";
import { BonusSection } from "@/components/sections/bonus-section";
import { ClosingSectionCopilot } from "@/components/sections/closing-section-copilot";

export const metadata: Metadata = {
  title: "Charla 10 · Instruyendo a la IA",
  description:
    ".github/ y .claude/: instrucciones persistentes para que la IA conozca tu proyecto desde el primer prompt.",
};

export default function Charla10Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <span aria-hidden="true">←</span> Charlas
      </Link>

      <HeroSectionCopilot />
      <SectionDivider label="Bloque 1 - El problema" />
      <ProblemSectionCopilot />
      <SectionDivider label="Bloque 2 - La solución" />
      <SolutionSection />
      <SectionDivider label="Bloque 3 - .github/ para Copilot" />
      <GithubStructureSection />
      <SectionDivider label="Demo en vivo" />
      <DemoSectionCopilot />
      <SectionDivider label="Bonus - .claude/" />
      <BonusSection />
      <SectionDivider label="Cierre" />
      <ClosingSectionCopilot />
    </main>
  );
}

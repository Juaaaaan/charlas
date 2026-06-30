"use client";

import { SectionDivider } from "@/components/section-divider";
import { SolutionSection } from "@/components/sections/solution-section";
import { GithubStructureSection } from "@/components/sections/github-structure-section";
import { BonusSection } from "@/components/sections/bonus-section";
import { ClosingSectionCopilot } from "@/components/sections/closing-section-copilot";
import { DemoSectionCopilot } from "@/components/sections/demo-section-copilot";
import { ProblemSectionCopilot } from "@/components/sections/problem-section-copilot";
import { HeroSectionCopilot } from "@/components/sections/hero-section-copilot";

// Charla 7 (Skills y MCPs) - archivado, no reintroducir sin decisión consciente
// import { HeroSectionMCP } from "@/components/sections/hero-section-mcp";
// import { SkillsSection } from "@/components/sections/skills-section";
// import { McpsSection } from "@/components/sections/mcps-section";
// import { ClosingSectionMCP } from "@/components/sections/closing-section-mcp";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
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

"use client";

import { SectionDivider } from "@/components/section-divider";
import { SolutionSection } from "@/components/sections/solution-section";
import { GithubStructureSection } from "@/components/sections/github-structure-section";
import { BonusSection } from "@/components/sections/bonus-section";
import { ClosingSectionCopilot } from "@/components/sections/closing-section-copilot";
import { DemoSectionCopilot } from "@/components/sections/demo-section-copilot";
import { ProblemSectionCopilot } from "@/components/sections/problem-section-copilot";
// import { HeroSectionCopilot } from "@/components/sections/hero-section-copilot";
import { HeroSectionLLM } from "@/components/sections/hero-section-llm";
import { AIFoundationsSectionLLM } from "@/components/sections/ai-foundations-section-llm";
import { TokenContextSectionLLM } from "@/components/sections/token-context-section-llm";
import { PromptSectionLLM } from "@/components/sections/prompt-section-llm";
import { ClosingSectionLLM } from "@/components/sections/closing-section-llm";

// Charla 7 (Skills y MCPs) - archivado, no reintroducir sin decisión consciente
// import { HeroSectionMCP } from "@/components/sections/hero-section-mcp";
// import { SkillsSection } from "@/components/sections/skills-section";
// import { McpsSection } from "@/components/sections/mcps-section";
// import { ClosingSectionMCP } from "@/components/sections/closing-section-mcp";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <HeroSectionLLM />
      <SectionDivider label="Qué es un Wiki LLM" />
      <AIFoundationsSectionLLM />
      <SectionDivider label="Demo: Proyecto" />
      <TokenContextSectionLLM />
      <SectionDivider label="Demo: Equipo" />
      <PromptSectionLLM  />
      <SectionDivider label="Cierre" />
      <ClosingSectionLLM />
    </main>
  );
}

"use client"

import { SectionDivider } from "@/components/section-divider"
import { AIFoundationsSection } from "@/components/sections/ai-foundations-section"
import { ClosingSection } from "@/components/sections/closing-section"
import { HeroSection } from "@/components/sections/hero-section"
import { PromptSection } from "@/components/sections/prompt-section"
import { TokenContextSection } from "@/components/sections/token-context-section"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <HeroSection />
      <SectionDivider label="Qué cambia al ejecutar IA en local" />
      <AIFoundationsSection />
      <SectionDivider label="Leer modelos sin perderse" />
      <TokenContextSection />
      <SectionDivider label="Usos con sentido" />
      <PromptSection />
      <SectionDivider label="Límites y cierre" />
      <ClosingSection />
    </main>
  )
}

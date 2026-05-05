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
      <SectionDivider label="Del flujo manual al sistema" />
      <AIFoundationsSection />
      <SectionDivider label="Elegir el nivel adecuado" />
      <TokenContextSection />
      <SectionDivider label="Diseñar con control" />
      <PromptSection />
      <SectionDivider label="Escalar sin perder criterio" />
      <ClosingSection />
    </main>
  )
}

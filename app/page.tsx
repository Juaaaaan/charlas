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
      <SectionDivider label="Del chat al agente" />
      <AIFoundationsSection />
      <SectionDivider label="Qué delegar y qué supervisar" />
      <TokenContextSection />
      <SectionDivider label="Microsoft 365 en la práctica" />
      <PromptSection />
      <SectionDivider label="Idea final" />
      <ClosingSection />
    </main>
  )
}

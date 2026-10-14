import type { Metadata } from "next";
import Link from "next/link";

import { SectionDivider } from "@/components/section-divider";
import { HeroSection19 } from "@/components/sections/hero-section-19";
import { EscaleraSection19 } from "@/components/sections/escalera-section-19";
import { CoordinadorSection19 } from "@/components/sections/coordinador-section-19";
import { ExpertosSection19 } from "@/components/sections/expertos-section-19";
import { HerramientasSection19 } from "@/components/sections/herramientas-section-19";
import { DemoSection19 } from "@/components/sections/demo-section-19";
import { PreguntasSection19 } from "@/components/sections/preguntas-section-19";
import { ClosingSection19 } from "@/components/sections/closing-section-19";

export const metadata: Metadata = {
  title: "Charla 19 · De responder a actuar",
  description:
    "Varios agentes que colaboran en Copilot Studio. Recorrido guiado del agente multiagente 'Analista de RFP' — un coordinador y tres especialistas que leen un pliego, cazan sus trampas, estiman el esfuerzo y lo vuelcan a un Excel, parándose a pedirte la última palabra antes de actuar.",
};

export default function Charla19Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <span aria-hidden="true">←</span> Charlas
      </Link>

      <HeroSection19 />
      <SectionDivider label="Bloque 1 · De chatbot a equipo" />
      <EscaleraSection19 />
      <SectionDivider label="Parada 1 · El coordinador" />
      <CoordinadorSection19 />
      <SectionDivider label="Parada 2 · La sala de expertos" />
      <ExpertosSection19 />
      <SectionDivider label="Paradas 3 y 4 · Cerebro y manos" />
      <HerramientasSection19 />
      <SectionDivider label="Parada 5 · La demo" />
      <DemoSection19 />
      <SectionDivider label="Para la sala" />
      <PreguntasSection19 />
      <SectionDivider label="Cierre" />
      <ClosingSection19 />
    </main>
  );
}

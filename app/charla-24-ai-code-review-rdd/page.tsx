import type { Metadata } from "next";
import Link from "next/link";

import { SectionDivider } from "@/components/section-divider";
import { HeroSection24 } from "./sections/hero-section-24";
import { CapasSection24 } from "./sections/capas-section-24";
import { DemoSection24 } from "./sections/demo-section-24";
import { RddSection24 } from "./sections/rdd-section-24";
import { ClosingSection24 } from "./sections/closing-section-24";

export const metadata: Metadata = {
  title: "Charla 24 · Comprobar después de construir",
  description:
    "ai-code-review y RDD: una vez que existe un candidato de código, ¿qué evidencia necesitamos antes de aceptarlo? Revisión por capas, proporcional al riesgo y vinculada a un candidato concreto.",
};

export default function Charla24Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <span aria-hidden="true">←</span> Charlas
      </Link>

      <HeroSection24 />
      <SectionDivider label="Bloque 2-3 · El nuevo cuello de botella" />
      <CapasSection24 />
      <SectionDivider label="Bloque 4 · Demo de contraste" />
      <DemoSection24 />
      <SectionDivider label="Bloque 5 · RDD con nombre" />
      <RddSection24 />
      <SectionDivider label="Cierre" />
      <ClosingSection24 />
    </main>
  );
}

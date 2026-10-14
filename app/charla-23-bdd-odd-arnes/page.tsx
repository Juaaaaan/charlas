import type { Metadata } from "next";
import Link from "next/link";

import { SectionDivider } from "@/components/section-divider";
import { HeroSection23 } from "@/components/sections/hero-section-23";
import { EscenariosSection23 } from "@/components/sections/escenarios-section-23";
import { DemoSection23 } from "@/components/sections/demo-section-23";
import { OddSection23 } from "@/components/sections/odd-section-23";
import { ClosingSection23 } from "@/components/sections/closing-section-23";

export const metadata: Metadata = {
  title: "Charla 23 · Comprobar antes de construir",
  description:
    "BDD, ODD y el arnés con nombre: la IA no debería decidir por sí sola qué significa correcto. Primero se define el criterio de éxito; después se genera y se verifica. Demo real sobre el carrito de RCA.",
};

export default function Charla23Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <span aria-hidden="true">←</span> Charlas
      </Link>

      <HeroSection23 />
      <SectionDivider label="Bloque 2 · Antes de construir" />
      <EscenariosSection23 />
      <SectionDivider label="Bloque 3 · Demo en RCA" />
      <DemoSection23 />
      <SectionDivider label="Bloque 4 · El arnés recibe nombre" />
      <OddSection23 />
      <SectionDivider label="Cierre" />
      <ClosingSection23 />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { SectionDivider } from "@/components/section-divider";
import { HeroSection20 } from "@/components/sections/hero-section-20";
import { CorreasSection20 } from "@/components/sections/correas-section-20";
import { EjecutorCerradoSection20 } from "@/components/sections/ejecutor-cerrado-section-20";
import { OpenCodeSection20 } from "@/components/sections/opencode-section-20";
import { PorQueImportaSection20 } from "@/components/sections/por-que-importa-section-20";
import { EscenarioSection20 } from "@/components/sections/escenario-section-20";
import { VisualSection20 } from "@/components/sections/visual-section-20";
import { EquilibrioSection20 } from "@/components/sections/equilibrio-section-20";
import { ClosingSection20 } from "@/components/sections/closing-section-20";

export const metadata: Metadata = {
  title: "Charla 20 · La otra correa del arnés",
  description:
    "El ejecutor del arnés: cerrado frente a abierto. Por qué la decisión entre una herramienta atada a un proveedor y una que te deja elegir el motor afecta a toda la empresa, aunque nunca abras una terminal.",
};

export default function Charla20Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <span aria-hidden="true">←</span> Charlas
      </Link>

      <HeroSection20 />
      <SectionDivider label="Bloque 2 · Las dos correas" />
      <CorreasSection20 />
      <SectionDivider label="Bloque 3 · El ejecutor cerrado" />
      <EjecutorCerradoSection20 />
      <SectionDivider label="Bloque 4 · El giro" />
      <OpenCodeSection20 />
      <SectionDivider label="Bloque 5 · ¿Y a mí qué?" />
      <PorQueImportaSection20 />
      <SectionDivider label="Bloque 6 · Un caso cercano" />
      <EscenarioSection20 />
      <SectionDivider label="Bloque 7 · Visual guiado" />
      <VisualSection20 />
      <SectionDivider label="Bloque 8 · El equilibrio" />
      <EquilibrioSection20 />
      <SectionDivider label="Cierre" />
      <ClosingSection20 />
    </main>
  );
}

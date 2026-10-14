import type { Metadata } from "next";
import Link from "next/link";

import { SectionDivider } from "@/components/section-divider";
import { HeroSection17 } from "@/components/sections/hero-section-17";
import { HerramientaSection } from "@/components/sections/herramienta-section";
import { ModeloSection } from "@/components/sections/modelo-section";
import { ModosTrabajoSection } from "@/components/sections/modos-trabajo-section";
import { VerificacionSection } from "@/components/sections/verificacion-section";
import { RolesSection17 } from "@/components/sections/roles-section-17";
import { ClosingSection17 } from "@/components/sections/closing-section-17";

export const metadata: Metadata = {
  title: "Charla 17 · Elegir bien la IA",
  description:
    "Un método de decisión en cuatro capas que no caduca: qué IA abrir, qué modelo elegir (el dial rápido/razonador y el mapa de proveedores), en qué modo de trabajo ponerla y cuánto verificar.",
};

export default function Charla17Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <span aria-hidden="true">←</span> Charlas
      </Link>

      <HeroSection17 />
      <SectionDivider label="Capa 1 · Herramienta" />
      <HerramientaSection />
      <SectionDivider label="Capa 2 · Modelo" />
      <ModeloSection />
      <SectionDivider label="Capa 3 · Modo de trabajo" />
      <ModosTrabajoSection />
      <SectionDivider label="Capa 4 · Confianza" />
      <VerificacionSection />
      <SectionDivider label="Para todos" />
      <RolesSection17 />
      <SectionDivider label="Cierre" />
      <ClosingSection17 />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { SectionDivider } from "@/components/section-divider";
import { HeroSection18 } from "@/components/sections/hero-section-18";
import { PrediccionSection } from "@/components/sections/prediccion-section";
import { EmbeddingsSection } from "@/components/sections/embeddings-section";
import { AlucinacionesSection } from "@/components/sections/alucinaciones-section";
import { ContextoSection } from "@/components/sections/contexto-section";
import { RolesSection18 } from "@/components/sections/roles-section-18";
import { ClosingSection18 } from "@/components/sections/closing-section-18";

export const metadata: Metadata = {
  title: "Charla 18 · Abriendo la caja",
  description:
    "Cómo piensa la IA por dentro, sin una línea de código. Sobre un Excel de proyecto real afloran cuatro mecanismos internos — predice el patrón, busca por significado, alucina sin fuente (el peligro se ha movido) y su ventana de contexto se llena.",
};

export default function Charla18Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <span aria-hidden="true">←</span> Charlas
      </Link>

      <HeroSection18 />
      <SectionDivider label="Mecanismo 1 · Predice el patrón" />
      <PrediccionSection />
      <SectionDivider label="Mecanismo 2 · Significado" />
      <EmbeddingsSection />
      <SectionDivider label="Mecanismo 3 · El peligro se ha movido" />
      <AlucinacionesSection />
      <SectionDivider label="Mecanismo 4 · La mesa se llena" />
      <ContextoSection />
      <SectionDivider label="Para todos" />
      <RolesSection18 />
      <SectionDivider label="Cierre" />
      <ClosingSection18 />
    </main>
  );
}

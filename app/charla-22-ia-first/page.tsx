import type { Metadata } from "next";
import Link from "next/link";

import { SectionDivider } from "@/components/section-divider";
import { HeroSection22 } from "@/components/sections/hero-section-22";
import { CriterioSection22 } from "@/components/sections/criterio-section-22";
import { IaFirstSection22 } from "@/components/sections/ia-first-section-22";
import { EjercicioSection22 } from "@/components/sections/ejercicio-section-22";
import { CicloSection22 } from "@/components/sections/ciclo-section-22";
import { ParadasSection22 } from "@/components/sections/paradas-section-22";
import { ClosingSection22 } from "@/components/sections/closing-section-22";

export const metadata: Metadata = {
  title: "Charla 22 · IA-first: pregúntale primero",
  description:
    "Charla de hábito, no de adopción: la mentalidad IA-first y el ciclo que ya conocíais sin saberlo — idea, especificar, construir, comprobar, publicar, mantener — cada parada anclada a un ejemplo ya visto en la serie.",
};

export default function Charla22Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-foreground/80 backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <span aria-hidden="true">←</span> Charlas
      </Link>

      <HeroSection22 />
      <SectionDivider label="Bloque 2 · ¿Construir o ya existe?" />
      <CriterioSection22 />
      <SectionDivider label="Bloque 3 · El giro" />
      <IaFirstSection22 />
      <SectionDivider label="Bloque 4 · Ejercicio en vivo" />
      <EjercicioSection22 />
      <SectionDivider label="Bloque 5 · El hilo" />
      <CicloSection22 />
      <SectionDivider label="Bloque 6 · Las seis paradas" />
      <ParadasSection22 />
      <SectionDivider label="Cierre" />
      <ClosingSection22 />
    </main>
  );
}

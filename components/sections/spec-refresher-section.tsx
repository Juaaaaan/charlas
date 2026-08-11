"use client";

import { motion } from "framer-motion";

const contrast = [
  {
    name: "Vibe coding",
    detail:
      "Le sueltas un prompt vago a la IA y rezas. Funciona para un script de diez líneas; se desmorona en cuanto el proyecto crece o pasan los días.",
    tone: "muted" as const,
  },
  {
    name: "Spec-Driven Development",
    detail:
      "Escribes la intención de forma estructurada —qué, por qué, criterios de aceptación— antes de que se escriba una sola línea, y el agente ejecuta contra eso.",
    tone: "primary" as const,
  },
];

export function SpecRefresherSection() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 1 · Refresco
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Qué es un spec y por qué
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            No le das a un contratista «hazme una casa, ya te apañas». Le das
            planos. El SDD son los planos para agentes de IA: la especificación
            es la fuente de verdad, no el código.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {contrast.map((item, index) => (
            <motion.div
              key={item.name}
              className={`rounded-[1.75rem] border px-6 py-8 ${
                item.tone === "primary"
                  ? "border-primary/30 bg-primary/8"
                  : "border-border/70 bg-card/70"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <h3 className="text-2xl font-semibold text-foreground">
                {item.name}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/72">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            El dato ancla · encuesta JetBrains, enero 2026 (11.000 devs)
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-primary/20 bg-background/35 px-6 py-8 text-center">
              <p className="text-6xl font-bold text-primary md:text-7xl">90%</p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/78">
                de los desarrolladores ya usa IA en su trabajo.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-primary/20 bg-background/35 px-6 py-8 text-center">
              <p className="text-6xl font-bold text-primary md:text-7xl">13%</p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/78">
                la usa en <span className="text-foreground">todo</span> el ciclo
                de desarrollo. Casi nadie la usa para gobernar el proyecto
                entero.
              </p>
            </div>
          </div>
          <p className="mt-8 text-center text-lg leading-relaxed text-balance text-foreground/80 md:text-xl">
            Ese salto —del 90% al 13%— es exactamente lo que el SDD intenta
            cerrar.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            Casi todos usamos IA para escribir código. Muy pocos la usamos para
            dirigir el proyecto. El spec es el puente entre esas dos cosas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

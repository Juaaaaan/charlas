"use client";

import { motion } from "framer-motion";

const agenda = [
  {
    label: "Nivel 1 — Fundamentos",
    detail:
      "Lo que ya hemos construido juntos: SDD, Skills, Wiki LLM y el arnés completo.",
  },
  {
    label: "Nivel 2 — Intermedios",
    detail:
      "Diez conceptos clave, con ejemplos de vuestro trabajo diario, que vemos hoy en detalle.",
  },
  {
    label: "Nivel 3 — Avanzados",
    detail:
      "Donde ya estáis sin saberlo: agentic workflows, memoria, knowledge graphs y más.",
  },
  {
    label: "Nivel 4 — Frontera",
    detail:
      "Hacia dónde va esto: computer use, reasoning models y gobernanza de la IA.",
  },
];

export function HeroSectionConcept() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,145,255,0.22),transparent_30%),linear-gradient(180deg,rgba(7,10,18,1)_0%,rgba(9,13,21,0.98)_54%,rgba(12,16,26,1)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,150,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,150,255,0.03)_1px,transparent_1px)] bg-[size:88px_88px]" />
      <div className="absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Charla 12 · El mapa de la IA
          </span>
        </motion.div>

        <motion.h1
          className="mt-10 max-w-5xl text-5xl font-bold tracking-tight text-balance text-foreground md:text-7xl lg:text-[5.1rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
        >
          El mapa de la IA
        </motion.h1>

        <motion.p
          className="mt-8 max-w-4xl text-xl leading-relaxed text-balance text-foreground/78 md:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
        >
          Cuatro niveles de madurez para entender dónde estáis con la IA y
          descubrir que estáis más avanzados de lo que creéis.
        </motion.p>

        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
        >
          {agenda.map((item, index) => (
            <div
              key={item.label}
              className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7 backdrop-blur"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                Nivel {index + 1}
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-balance text-foreground">
                {item.label}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/72 md:text-lg">
                {item.detail}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 max-w-4xl rounded-[1.75rem] border border-primary/20 bg-primary/8 px-6 py-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: "easeOut" }}
        >
          <p className="text-2xl font-semibold leading-snug text-balance text-foreground md:text-3xl">
            No hace falta saber cómo está hecho el motor para saber conducir.
            Pero sí ayuda saber en qué marcha estás.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

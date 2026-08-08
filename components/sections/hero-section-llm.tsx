"use client"

import { motion } from "framer-motion"

const agenda = [
  {
    label: "Qué es un Wiki LLM",
    detail: "Del LLM que olvida todo al vault que recuerda: qué cambia cuando el conocimiento persiste.",
  },
  {
    label: "La herramienta",
    detail: "Obsidian + GitHub como base de conocimiento compartida, versionada y lista para la IA.",
  },
  {
    label: "Demo: Proyecto",
    detail: "Decisiones de arquitectura, dead ends y contexto técnico que la IA consulta sola.",
  },
  {
    label: "Demo: Equipo",
    detail: "Perfiles de madurez IA generados y consultados sin tocar un Excel.",
  },
]

export function HeroSectionLLM() {
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
            Charla 11 — Wiki LLM
          </span>
        </motion.div>

        <motion.h1
          className="mt-10 max-w-5xl text-5xl font-bold tracking-tight text-balance text-foreground md:text-7xl lg:text-[5.1rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
        >
          La IA que recuerda a tu equipo
        </motion.h1>

        <motion.p
          className="mt-8 max-w-4xl text-xl leading-relaxed text-balance text-foreground/78 md:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
        >
          Cada conversación nueva empieza desde cero. Hoy vamos a ver cómo cambiar eso: un vault de conocimiento
          en markdown que la IA consulta, actualiza y mantiene por ti.
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
                {index < 2 ? `Bloque ${index + 1}` : `Demo ${index - 1}`}
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-balance text-foreground">
                {item.label}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/72 md:text-lg">{item.detail}</p>
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
            El conocimiento más valioso de tu empresa no está en los documentos. Está en las cabezas.
            Y las cabezas no se indexan.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"

const agenda = [
  {
    label: "El problema",
    detail: "Cada sesión de IA empieza desde cero. No conoce vuestras convenciones, no ha leído vuestro código.",
  },
  {
    label: "La solución",
    detail: "Ficheros de instrucciones que la IA lee automáticamente. Lo decís una vez, lo respeta siempre.",
  },
  {
    label: ".github/ para Copilot",
    detail: "copilot-instructions.md, instructions/ por contexto y AGENTS.md para agentes autónomos.",
  },
  {
    label: "Demo en vivo",
    detail: "Tour por el .github/ real, prompts en directo y un equipo de agentes: developer + reviewer.",
  },
]

export function HeroSectionCopilot() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,145,255,0.22),transparent_30%),linear-gradient(180deg,rgba(7,10,18,1)_0%,rgba(9,13,21,0.98)_54%,rgba(12,16,26,1)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,150,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,150,255,0.03)_1px,transparent_1px)] bg-[size:88px_88px]" />
      <div className="absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Charla 10 — Instruyendo a la IA
          </span>
        </motion.div>

        <motion.h1
          className="mt-10 max-w-5xl text-5xl font-bold tracking-tight text-balance text-foreground md:text-7xl lg:text-[5.1rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
        >
          .github/ y .claude/
        </motion.h1>

        <motion.p
          className="mt-8 max-w-4xl text-xl leading-relaxed text-balance text-foreground/78 md:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
        >
          La semana pasada terminamos con un prompt escrito pero sin enviar. Hoy vemos cómo ese conocimiento —
          vuestras convenciones, vuestras decisiones técnicas — se convierte en instrucciones que la IA lee
          automáticamente cada vez que abre el proyecto.
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
                {index === 3 ? "Demo" : `Bloque ${index + 1}`}
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
            La IA no inventa el conocimiento de tu empresa. Lo organiza. Tú sigues siendo el que sabe.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

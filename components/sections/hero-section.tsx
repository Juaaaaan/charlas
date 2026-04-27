"use client"

import { motion } from "framer-motion"

const agenda = [
  {
    step: "01",
    label: "Del chat al agente",
  },
  {
    step: "02",
    label: "Qué delegar y qué supervisar",
  },
  {
    step: "03",
    label: "Microsoft 365 en la práctica",
  },
]

export function HeroSection() {
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
            Charla 2 · Agentes de IA y Microsoft 365
          </span>
        </motion.div>

        <motion.h1
          className="mt-10 max-w-5xl text-5xl font-bold tracking-tight text-foreground text-balance md:text-7xl lg:text-[5.5rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
        >
          Agentes de IA: de la conversación a la acción
        </motion.h1>

        <motion.p
          className="mt-8 max-w-3xl text-xl leading-relaxed text-foreground/78 text-balance md:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
        >
          Qué son, qué tareas pueden apoyar, qué límites debemos ponerles y cómo encajan en el trabajo diario con
          Microsoft 365.
        </motion.p>

        <motion.div
          className="mt-12 max-w-4xl rounded-[1.75rem] border border-primary/20 bg-primary/8 px-6 py-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
        >
          <p className="text-2xl font-semibold leading-snug text-foreground text-balance md:text-3xl">
            Un agente no es una IA mágica ni un compañero autónomo. Es una ayuda configurada con objetivo, contexto,
            reglas y herramientas para trabajar sobre tareas concretas.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-4 md:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: "easeOut" }}
        >
          {agenda.map((item) => (
            <div key={item.step} className="rounded-[1.5rem] border border-border/70 bg-card/70 px-5 py-5 backdrop-blur">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">{item.step}</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">{item.label}</h2>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

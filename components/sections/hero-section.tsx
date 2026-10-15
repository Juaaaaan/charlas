"use client"

import { motion } from "framer-motion"

const agenda = [
  {
    label: "Más allá del prompt",
    detail: "Entender que el prompt es una pieza del sistema, no todo el sistema.",
  },
  {
    label: "Diseñar contexto útil",
    detail: "Decidir qué entra, qué no entra, con qué autoridad y cómo se valida.",
  },
  {
    label: "Contexto en proyectos",
    detail: "Usar el repositorio para que Copilot y los agentes no tengan que improvisar.",
  },
  {
    label: "Cierre",
    detail: "Quedarnos con criterios simples para preparar contexto sin meter ruido.",
  },
]

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-aura-hero" />
      <div className="absolute inset-0 bg-grid-fino" />
      <div className="absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Charla 6 - Context Engineering
          </span>
        </motion.div>

        <motion.h1
          className="mt-10 max-w-5xl text-5xl font-bold tracking-tight text-balance text-foreground md:text-7xl lg:text-[5.1rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
        >
          Context Engineering
        </motion.h1>

        <motion.p
          className="mt-8 max-w-4xl text-xl leading-relaxed text-balance text-foreground/78 md:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
        >
          La IA no responde solo a lo que escribimos en el chat. Responde a todo lo que puede ver: instrucciones,
          historial, documentos, ejemplos, archivos del proyecto y reglas persistentes.
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
                Bloque {index + 1}
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
            La idea de hoy es sencilla: preparar buen contexto para que la IA entienda mejor la tarea, el proyecto y los
            límites antes de pedirle trabajo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

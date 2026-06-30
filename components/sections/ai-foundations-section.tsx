"use client"

import { motion } from "framer-motion"
import { Brain, Files, History, MessageSquare, Puzzle, Settings2 } from "lucide-react"

const contextItems = [
  {
    icon: MessageSquare,
    title: "Prompt",
    description: "La instrucción concreta que escribimos en ese momento.",
  },
  {
    icon: History,
    title: "Historial",
    description: "Lo que se ha dicho antes en la conversación.",
  },
  {
    icon: Files,
    title: "Documentos",
    description: "PDFs, tickets, tablas, notas, políticas o archivos adjuntos.",
  },
  {
    icon: Settings2,
    title: "Instrucciones",
    description: "Reglas persistentes, preferencias y límites del sistema.",
  },
  {
    icon: Puzzle,
    title: "Proyecto",
    description: "README, AGENTS.md, instrucciones de Copilot, arquitectura y tests.",
  },
  {
    icon: Brain,
    title: "Resultados previos",
    description: "Decisiones, resúmenes, salidas anteriores y estado actual de la tarea.",
  },
]

export function AIFoundationsSection() {
  return (
    <section className="relative py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 1</span>
          <h2 className="text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Más allá del prompt
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Contexto es todo lo que la IA puede ver y que puede influir en su respuesta. No es solo el prompt: es el
            entorno de información que acompaña a la tarea.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Idea central</p>
          <p className="mt-4 max-w-5xl text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
            Si puede cambiar la respuesta, es contexto.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {contextItems.map((item, index) => (
            <motion.div
              key={item.title}
              className={`rounded-[1.75rem] border p-7 ${
                index === 0 || index === 4 ? "border-primary/30 bg-primary/10" : "border-border/70 bg-card/90"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold leading-tight text-foreground">{item.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-foreground/76">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

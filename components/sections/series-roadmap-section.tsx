"use client"

import { motion } from "framer-motion"

const roadmap = [
  {
    step: "02",
    title: "Prompts que mejoran resultados",
    description: "Como pedir mejor, estructurar mejor y reducir respuestas genericas.",
  },
  {
    step: "03",
    title: "RAG y documentos",
    description: "Como dar contexto de empresa y trabajar con conocimiento interno sin entrenar un modelo desde cero.",
  },
  {
    step: "04",
    title: "Workflows",
    description: "Como encadenar tareas, reglas y aprobaciones para pasar del chat a procesos utiles.",
  },
  {
    step: "05",
    title: "Agentes e IA agentica",
    description: "Cuando tiene sentido que un sistema use herramientas, tome pasos intermedios y ejecute objetivos.",
  },
  {
    step: "06",
    title: "SDD y desarrollo asistido",
    description: "Como llevar estas capacidades a analisis, implementacion, testing y delivery real.",
  },
]

export function SeriesRoadmapSection() {
  return (
    <section className="relative flex min-h-screen items-center py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-20 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Serie
          </span>
          <h2 className="mb-8 text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl">
            Lo que viene despues
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Esta charla no intenta contarlo todo. Deja una base comun para que las siguientes sesiones entren en
            mas profundidad sin perder a nadie por el camino.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {roadmap.map((item, index) => (
            <motion.div
              key={item.step}
              className="rounded-2xl border border-border/50 bg-card p-6 transition-colors duration-300 hover:border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="rounded-xl bg-primary/10 px-3 py-2 font-mono text-sm font-semibold text-primary">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="leading-relaxed text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

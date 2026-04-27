"use client"

import { motion } from "framer-motion"
import { BarChart3, Brain, Settings } from "lucide-react"

const comparisons = [
  {
    icon: Settings,
    title: "Automatizacion",
    description: "Reglas fijas y comportamiento predecible.",
    example: "Si X, entonces Y",
    color: "text-muted-foreground",
  },
  {
    icon: BarChart3,
    title: "Analitica",
    description: "Patrones en datos y explicacion de lo que ya paso.",
    example: "Metricas, reporting, scoring",
    color: "text-muted-foreground",
  },
  {
    icon: Brain,
    title: "IA generativa",
    description: "Modelos que interpretan, redactan, resumen y generan a partir de lenguaje.",
    example: "Texto, codigo, asistencia",
    color: "text-primary",
  },
]

export function WhatIsAISection() {
  return (
    <section className="relative flex min-h-screen items-center py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-20 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Fundamentos
          </span>
          <h2 className="mb-8 text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl">
            Que es IA y que no lo es
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground">
            No todo problema necesita IA. Conviene distinguir entre automatizar, analizar y usar modelos que
            trabajan con lenguaje.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent md:block" />

          <div className="grid gap-6 md:grid-cols-3 md:gap-4">
            {comparisons.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div
                  className={`
                    relative rounded-2xl border p-8 transition-all duration-500
                    ${index === 2 ? "border-primary/30 bg-primary/5" : "border-border/50 bg-card"}
                  `}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`
                        mb-6 flex h-16 w-16 items-center justify-center rounded-2xl
                        ${index === 2 ? "bg-primary/20" : "bg-secondary"}
                      `}
                    >
                      <item.icon className={`h-8 w-8 ${item.color}`} />
                    </div>

                    <h3 className={`mb-3 text-xl font-semibold ${index === 2 ? "text-primary" : "text-foreground"}`}>
                      {item.title}
                    </h3>

                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>

                    <span
                      className={`
                        rounded-full px-3 py-1.5 font-mono text-xs
                        ${index === 2 ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"}
                      `}
                    >
                      {item.example}
                    </span>
                  </div>
                </div>

                {index === 2 && (
                  <div className="absolute top-1/2 hidden -translate-x-full -translate-y-1/2 md:block">
                    <div className="h-px w-8 bg-primary/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

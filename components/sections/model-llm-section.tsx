"use client"

import { motion } from "framer-motion"
import { Box, Cpu, Database, MessageSquare } from "lucide-react"

const flowSteps = [
  { icon: Database, label: "Datos", sublabel: "Web, codigo, documentos, corpus" },
  { icon: Cpu, label: "Entrenamiento", sublabel: "Ajuste estadistico de pesos" },
  { icon: Box, label: "Modelo base", sublabel: "Patrones aprendidos" },
  { icon: MessageSquare, label: "Uso", sublabel: "Respuesta en una app o chat" },
]

export function ModelLLMSection() {
  return (
    <section className="relative flex min-h-screen items-center py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-20 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Conceptos clave
          </span>
          <h2 className="mb-8 text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl">
            Que es un modelo y que es un LLM
          </h2>
        </motion.div>

        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full rounded-2xl border border-border/50 bg-card p-8">
              <h3 className="mb-4 text-2xl font-semibold text-foreground">Un modelo</h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Es una estructura matematica que aprende patrones de los datos. No sigue reglas escritas a mano:
                generaliza a partir de ejemplos.
              </p>
              <div className="flex items-center gap-3 rounded-xl bg-secondary/50 p-4">
                <span className="text-3xl font-mono text-primary">f(x)</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-foreground">Entrada → Probabilidad o prediccion</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="h-full rounded-2xl border border-primary/20 bg-primary/5 p-8">
              <h3 className="mb-4 text-2xl font-semibold text-primary">Un LLM</h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Large Language Model. Un modelo entrenado con muchisimo texto para predecir el siguiente token.
                Al escalar esa prediccion aparecen capacidades utiles para resumir, redactar, buscar y asistir.
              </p>
              <div className="flex items-center gap-3 rounded-xl bg-primary/10 p-4">
                <span className="font-medium text-foreground">{"\"La poliza cubre danos por...\""}</span>
                <span className="text-primary">→</span>
                <span className="font-semibold text-primary">{"\"agua\" / \"incendio\" / ..."}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl border border-border/50 bg-card p-8">
            <h4 className="mb-8 text-center text-lg font-medium text-muted-foreground">Ciclo de vida simplificado</h4>

            <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-2">
              {flowSteps.map((step, index) => (
                <div key={step.label} className="flex flex-1 items-center gap-4 md:gap-2">
                  <motion.div
                    className="flex min-w-[110px] flex-col items-center text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div
                      className={`
                        mb-3 flex h-14 w-14 items-center justify-center rounded-xl
                        ${index === 2 ? "bg-primary/20" : "bg-secondary"}
                      `}
                    >
                      <step.icon className={`h-7 w-7 ${index === 2 ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <span className={`font-medium ${index === 2 ? "text-primary" : "text-foreground"}`}>{step.label}</span>
                    <span className="mt-1 text-xs text-muted-foreground">{step.sublabel}</span>
                  </motion.div>

                  {index < flowSteps.length - 1 && (
                    <div className="hidden flex-1 items-center px-2 md:flex">
                      <div className="h-px flex-1 bg-border" />
                      <div className="-ml-1 h-2 w-2 rotate-45 border-r border-t border-border" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

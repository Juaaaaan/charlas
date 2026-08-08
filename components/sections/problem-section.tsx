"use client"

import { motion } from "framer-motion"
import { BrainCircuit, EyeOff, HandMetal, MessageSquareOff } from "lucide-react"

const problems = [
  {
    icon: EyeOff,
    title: "No sabe quiénes sois",
    description:
      "Cuando abrís Claude o Copilot, esa IA no conoce nuestros proyectos, no sabe cómo trabajáis ni conoce vuestros procedimientos.",
    note: "Cada conversación empieza desde cero.",
  },
  {
    icon: MessageSquareOff,
    title: "No puede salir del chat",
    description:
      "Puede deciros cómo crear un issue en Jira, pero no puede crearlo. Puede resumiros un sprint, pero primero tenéis que pegárselo vosotros a mano.",
    note: "Vosotros sois el puente.",
  },
  {
    icon: HandMetal,
    title: "El arnés documental resuelve solo una parte",
    description:
      "El spec.md, el plan.md, el task.md le dan contexto sobre qué construir. Pero la IA sigue sin saber cómo trabajamos y sin poder tocar vuestras herramientas.",
    note: "Necesita dos piezas más.",
  },
  {
    icon: BrainCircuit,
    title: "El arnés completo son tres capas",
    description:
      "El SDD define qué construir. Los Skills definen cómo comportarse. Los MCPs permiten actuar en el mundo real.",
    note: "Las tres juntas cierran el sistema.",
  },
]

export function ProblemSection() {
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
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 1</span>
          <h2 className="text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl">
            La IA vive en una burbuja
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-muted-foreground">
            Antes de ver las soluciones, hay que entender bien el problema. La IA que usáis cada día tiene dos
            límites estructurales que ningún buen prompt puede resolver por sí solo.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`relative h-full rounded-[1.75rem] border p-8 transition-all duration-500 ${
                  index === 3
                    ? "border-primary/30 bg-primary/10"
                    : "border-border/50 bg-card hover:border-primary/30"
                }`}
              >
                <div className="absolute inset-0 rounded-[1.75rem] bg-primary/0 transition-colors duration-500 group-hover:bg-primary/5" />

                <div className="relative z-10">
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-500 ${
                      index === 3
                        ? "bg-background/35"
                        : "bg-primary/10 group-hover:bg-primary/20"
                    }`}
                  >
                    <problem.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3
                    className={`mb-3 text-2xl font-semibold ${
                      index === 3 ? "text-foreground" : "text-foreground"
                    }`}
                  >
                    {problem.title}
                  </h3>

                  <p className="leading-relaxed text-muted-foreground">{problem.description}</p>

                  <p
                    className={`mt-5 rounded-[1.1rem] border px-4 py-3 text-base font-semibold ${
                      index === 3
                        ? "border-primary/25 bg-background/35 text-primary"
                        : "border-border/60 bg-background/35 text-foreground/80"
                    }`}
                  >
                    {problem.note}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-5xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            El arnés documental le dice qué hacer. Los Skills le dicen cómo comportarse. Los MCPs le permiten actuar.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

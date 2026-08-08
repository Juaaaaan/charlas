"use client"

import { motion } from "framer-motion"
import { Boxes, FileQuestion, UserPlus, WandSparkles } from "lucide-react"

const newHireSteps = [
  {
    icon: UserPlus,
    title: "Llega el primer día",
    description: "Le dais acceso al repo y le decís: \"implementa el navbar\". Sin más contexto.",
  },
  {
    icon: FileQuestion,
    title: "Usa lo que ya sabe",
    description:
      "Las convenciones de su trabajo anterior. NgModules en vez de standalone. Constructor injection en vez de inject().",
  },
  {
    icon: WandSparkles,
    title: "Improvisa donde no sabe",
    description: "No conoce vuestro sistema de diseño, así que rellena los huecos con su propio criterio.",
  },
]

export function ProblemSectionCopilot() {
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
            La IA sin contexto
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-muted-foreground">
            Imaginad que contratáis a un desarrollador nuevo. El primer día llega, le dais acceso al repo y le decís:
            "implementa el navbar". Sin más.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {newHireSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-full rounded-[1.75rem] border border-border/50 bg-card p-8 transition-all duration-500 hover:border-primary/30">
                <div className="absolute inset-0 rounded-[1.75rem] bg-primary/0 transition-colors duration-500 group-hover:bg-primary/5" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-500 group-hover:bg-primary/20">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold text-foreground">{step.title}</h3>

                  <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Paralelismo con la IA */}
        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-background/35">
              <Boxes className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Con la IA pasa lo mismo</p>
              <p className="mt-3 text-3xl font-semibold leading-tight text-balance text-foreground md:text-4xl">
                Cada sesión empieza desde cero. No sabe cómo trabajáis, no conoce vuestras convenciones, no ha leído
                vuestro código.
              </p>
              <p className="mt-5 text-xl leading-relaxed text-foreground/82">
                La diferencia es que al desarrollador nuevo le hacéis onboarding una vez. A la IA también podéis
                hacerlo — pero de forma persistente, en un fichero que lee automáticamente cada vez que abre vuestro
                proyecto.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Frase de cierre */}
        <motion.div
          className="mt-8 rounded-[2rem] border border-border/70 bg-card/90 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="mx-auto max-w-5xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            El onboarding que le harías a un desarrollador nuevo, escríbeselo a la IA en un fichero. Solo una vez.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"

const keyTakeaways = [
  {
    title: "Encargo",
    description: "Un agente necesita un objetivo claro.",
  },
  {
    title: "Límite",
    description: "Puede ayudar, pero no asumir responsabilidad.",
  },
  {
    title: "Contexto",
    description: "Microsoft 365 aporta parte del contexto diario.",
  },
]

const memorableIdeas = [
  "Un agente es útil cuando el encargo está claro, el contexto es suficiente y la salida se puede revisar.",
  "Si esas tres cosas fallan, la IA puede producir más ruido que ayuda.",
  "Si están bien diseñadas, puede acelerar trabajo sin sustituir criterio.",
]

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Cierre
          </span>
          <h2 className="mb-8 text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl">
            La idea final
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Agentes sí, pero con una regla simple: delegar tareas preparatorias y mantener criterio, revisión y
            responsabilidad.
          </p>
        </motion.div>

        <motion.div
          className="mb-16 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Para recordar</p>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {keyTakeaways.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-primary/20 bg-background/35 px-6 py-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{item.title}</p>
                  <p className="mt-4 text-2xl font-semibold leading-tight text-foreground text-balance md:text-3xl">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-16 grid gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          {memorableIdeas.map((idea, index) => (
            <div
              key={idea}
              className={`rounded-[1.5rem] border px-6 py-5 text-xl font-semibold leading-relaxed text-foreground md:text-2xl ${
                index === 0 ? "border-primary/25 bg-primary/8" : "border-border/70 bg-card/90"
              }`}
            >
              {idea}
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-2xl font-semibold leading-relaxed text-foreground text-balance md:text-3xl">
            Delegar mejor empieza por diseñar bien el encargo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

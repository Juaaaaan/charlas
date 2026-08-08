"use client"

import { motion } from "framer-motion"
import { BookOpenText, ShieldCheck, TimerReset, Wrench } from "lucide-react"

const reasons = [
  {
    icon: TimerReset,
    title: "Presion operativa",
    description: "Mas volumen de trabajo, mas canales y menos margen para tareas manuales repetitivas.",
  },
  {
    icon: BookOpenText,
    title: "Conocimiento disperso",
    description: "Procesos, normativa, polizas y documentacion viven repartidos en demasiados sitios.",
  },
  {
    icon: Wrench,
    title: "Herramientas maduras",
    description: "Ya no hablamos solo de demos: copilots, APIs y productos utiles ya estan disponibles.",
  },
  {
    icon: ShieldCheck,
    title: "Impacto medible",
    description: "La IA ya mejora tiempos de respuesta, productividad y acceso al conocimiento si se acota bien.",
  },
]

export function WhyNowSection() {
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
            Contexto
          </span>
          <h2 className="text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl">
            Por que esta conversacion importa ahora
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-muted-foreground">
            No porque la IA este de moda, sino porque por primera vez coinciden capacidad tecnica, interfaces
            usables y problemas de negocio donde realmente puede ayudar.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-full rounded-2xl border border-border/50 bg-card p-8 transition-all duration-500 hover:border-primary/30">
                <div className="absolute inset-0 rounded-2xl bg-primary/0 transition-colors duration-500 group-hover:bg-primary/5" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-500 group-hover:bg-primary/20">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold text-foreground">{reason.title}</h3>

                  <p className="leading-relaxed text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

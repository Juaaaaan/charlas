"use client"

import { motion } from "framer-motion"
import { Bot, Users } from "lucide-react"

const comparisonCards = [
  {
    icon: Users,
    eyebrow: "Lo que ya teníamos",
    title: "Equipo de agentes",
    description:
      "Puede resolver trabajo complejo, pero alguien tiene que arrancar el flujo, pasar contexto y decidir el siguiente paso.",
    tone: "border-border/70 bg-background/40",
  },
  {
    icon: Bot,
    eyebrow: "El siguiente salto",
    title: "Automatización con IA",
    description:
      "La capacidad ya no depende de una persona en cada paso. Entra dentro del proceso y avanza con criterios definidos.",
    tone: "border-primary/30 bg-primary/10",
  },
]

export function AIFoundationsSection() {
  return (
    <section className="relative py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 1</span>
          <h2 className="text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Del equipo de agentes a la automatización
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-foreground/76 md:text-2xl">
            La charla anterior ya nos dejaba algo potente: trabajo complejo resuelto con agentes coordinados. El
            límite es que el flujo seguía dependiendo de nosotros para arrancar, pasar información y decidir cuándo
            continuar.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 max-w-4xl rounded-[1.5rem] border border-primary/20 bg-primary/8 px-6 py-6 md:px-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">La idea clave</p>
          <p className="mt-3 max-w-3xl text-2xl font-semibold leading-tight text-balance text-foreground md:text-3xl">
            El salto no es tener más agentes. El salto es integrar la IA en el proceso correcto.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {comparisonCards.map((item, index) => (
            <motion.div
              key={item.title}
              className={`rounded-[1.75rem] border p-7 md:p-8 ${item.tone}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-primary/90">{item.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-balance text-foreground md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/74 md:text-lg">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 max-w-4xl rounded-[1.5rem] border border-border/70 bg-card/85 px-6 py-6 md:px-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Transición</p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-balance text-foreground md:text-3xl">
            Pero no todo necesita automatización.
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/74 md:text-lg">
            Antes de meter la IA dentro de un proceso, hay que elegir bien el nivel de uso. A veces basta un chat. A
            veces tiene sentido llegar mucho más lejos.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

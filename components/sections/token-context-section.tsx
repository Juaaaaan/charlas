"use client"

import { motion } from "framer-motion"
import { Bot, Layers3, MessageSquare, NotebookPen, Target, Workflow } from "lucide-react"

const usageLevels = [
  {
    icon: MessageSquare,
    title: "Nivel 1",
    label: "Chat",
    description: "Sirve para pensar mejor, explorar una idea o resolver algo puntual.",
    takeaway: "Perfecto para apoyo inmediato. No para automatizar.",
  },
  {
    icon: NotebookPen,
    title: "Nivel 2",
    label: "Prompt estructurado",
    description: "Define rol, criterios y formato para convertir una conversación en un procedimiento.",
    takeaway: "Reduce improvisación y hace la salida más consistente.",
  },
  {
    icon: Bot,
    title: "Nivel 3",
    label: "Agente individual",
    description: "Crea una pieza especializada que resuelve siempre el mismo tipo de trabajo.",
    takeaway: "Una función clara. Una respuesta más estable.",
  },
  {
    icon: Layers3,
    title: "Nivel 4",
    label: "Equipo de agentes",
    description: "Reparte tareas distintas entre varios roles, pero con coordinación humana.",
    takeaway: "El humano deja de hacer todo y pasa a dirigir.",
  },
  {
    icon: Workflow,
    title: "Nivel 5",
    label: "Automatización",
    description: "El sistema se activa por un trigger, interpreta, decide y actúa dentro del proceso.",
    takeaway: "Aquí la IA ya trabaja para ti.",
  },
]

const selectionRules = [
  "Sube de nivel cuando haya repetición, volumen y un proceso ya entendido.",
  "No subas de nivel solo porque la herramienta lo permita.",
  "Si el riesgo es alto, añade revisión humana antes de automatizar.",
  "Si la tarea cambia cada vez, probablemente aún no toca automatizar.",
]

export function TokenContextSection() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,150,255,0.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mx-auto mb-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 2</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            No hay una sola forma de usar IA
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Uno de los errores más comunes es intentar automatizar demasiado pronto. Antes hay que saber qué nivel de
            solución necesita de verdad cada problema.
          </p>
        </motion.div>

        <motion.div
          className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Escalera de madurez</p>
            <h3 className="mt-4 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
              Chat, prompt, agente, equipo de agentes y automatización.
            </h3>
            <p className="mt-5 text-xl leading-relaxed text-foreground/82 md:text-2xl">
              No son alternativas enfrentadas. Son niveles distintos de estructura, control y capacidad de escalar.
            </p>
          </div>

          <div className="mt-10 grid gap-4 xl:grid-cols-5">
            {usageLevels.map((item, index) => (
              <motion.div
                key={item.label}
                className={`rounded-[1.5rem] border p-6 ${
                  index === 4 ? "border-primary/30 bg-background/35" : "border-primary/20 bg-primary/8"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{item.title}</p>
                <h4 className="mt-3 text-2xl font-semibold text-foreground">{item.label}</h4>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.description}</p>
                <p className="mt-5 rounded-[1.1rem] border border-primary/20 bg-background/35 px-4 py-3 text-base font-semibold text-foreground">
                  {item.takeaway}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Idea clave</p>
            <h3 className="mt-4 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
              El objetivo no es llegar siempre al nivel 5.
            </h3>
            <p className="mt-6 text-xl leading-relaxed text-foreground/82 md:text-2xl">
              La clave no es automatizar todo. La clave es elegir el nivel adecuado según el tipo de trabajo, el riesgo
              y la frecuencia con la que ocurre.
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-primary/20 bg-primary/8 p-5">
              <p className="text-lg leading-relaxed text-foreground/84">
                Una buena decisión de nivel evita dos errores muy caros: quedarse corto cuando el proceso necesita más
                estructura o automatizar demasiado pronto cuando aún no hay criterio suficiente.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-background/35">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Criterio de elección</p>
            <div className="mt-8 grid gap-4">
              {selectionRules.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.35rem] border px-5 py-5 ${
                    index === 0 || index === 2 ? "border-primary/25 bg-background/35" : "border-primary/20 bg-primary/8"
                  }`}
                >
                  <p className="text-lg font-semibold leading-snug text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-2xl font-semibold leading-relaxed text-balance text-foreground md:text-3xl">
              La automatización no es el punto de partida.
              <br />
              Es un nivel de madurez.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

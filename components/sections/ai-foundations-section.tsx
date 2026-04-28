"use client"

import { motion } from "framer-motion"
import { Bot, MessageSquare, NotebookPen, Workflow } from "lucide-react"

const buildingBlocks = [
  {
    icon: MessageSquare,
    title: "Chat",
    description: "Es el punto de entrada: una conversacion rapida para resolver algo puntual.",
    example: "Explicame este cambio de forma sencilla.",
  },
  {
    icon: NotebookPen,
    title: "Prompt",
    description: "Ya no solo preguntas: estructuras mejor la instruccion para guiar la salida.",
    example: "Resume este documento en cinco ideas y separa riesgos de acciones.",
  },
  {
    icon: Bot,
    title: "Agente",
    description: "Asume una funcion mas estable y ejecuta un encargo especializado.",
    example: "Analiza un correo y detecta riesgos.",
  },
  {
    icon: Workflow,
    title: "Workflow",
    description: "Conecta pasos, roles y validaciones hasta producir una salida util.",
    example: "Entender, analizar, redactar y revisar.",
  },
]

export function AIFoundationsSection() {
  return (
    <section className="relative py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mx-auto mb-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 1</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Del chat al workflow
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            La evolucion natural no empieza en un sistema complejo. Empieza en un chat y madura paso a paso.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Piezas del sistema</p>
            <h3 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
              <>
                Del chat al prompt.
                <br />
                Del agente al workflow.
              </>
            </h3>
            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {buildingBlocks.map((item, index) => (
                <motion.div
                  key={item.title}
                  className={`rounded-[1.5rem] border p-6 ${
                    item.title === "Workflow" ? "border-primary/30 bg-background/35" : "border-primary/20 bg-primary/8"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-2xl font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.description}</p>
                  <p className="mt-5 rounded-[1.1rem] border border-primary/20 bg-primary/8 px-4 py-3 text-base font-semibold text-foreground">
                    {item.example}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 rounded-[1.5rem] border border-primary/20 bg-background/35 px-6 py-6 text-center">
              <p className="text-2xl font-semibold leading-relaxed text-balance text-foreground md:text-3xl">
                El valor no esta en usar piezas sueltas.
                <br />
                Esta en saber cuando pasar de una a otra.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

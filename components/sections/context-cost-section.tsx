"use client"

import { motion } from "framer-motion"
import { Banknote, Blocks, Gauge, Recycle, Send, SquarePen } from "lucide-react"

const tokenTypes = [
  {
    icon: Send,
    title: "Input tokens",
    description: "Todo lo que mandas al modelo: prompt, historial, documentos, instrucciones y fragmentos recuperados.",
  },
  {
    icon: SquarePen,
    title: "Output tokens",
    description: "Lo que genera el modelo: respuesta, análisis, código, JSON o documentación.",
  },
  {
    icon: Recycle,
    title: "Cache tokens",
    description: "Contexto reutilizado para no recalcularlo todo cada vez en sistemas que soportan caché.",
  },
]

const impacts = ["más coste", "más latencia", "más ruido", "peor escalabilidad si se manda todo siempre"]

const contextHelpsWith = [
  "Reducir ambigüedad sobre la tarea.",
  "Alinear la respuesta con reglas y fuentes.",
  "Dar ejemplos del resultado esperado.",
]

const contextDoesNotReplace = [
  "No convierte datos malos en datos fiables.",
  "No elimina la necesidad de criterio humano.",
  "No garantiza que el modelo razone bien siempre.",
]

export function ContextCostSection() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-primary/8 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          className="mx-auto mb-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 2</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Diseñar contexto útil
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Diseñar contexto es decidir qué información entra, qué se queda fuera y qué límites aplican. Más contexto
            puede ayudar, pero también puede añadir coste, ruido y falsa seguridad.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tokenTypes.map((item, index) => (
            <motion.div
              key={item.title}
              className={`rounded-[2rem] border p-8 md:p-9 ${
                index === 0 ? "border-primary/30 bg-primary/10" : "border-border/70 bg-card/90"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-semibold leading-tight text-foreground">{item.title}</h3>
              <p className="mt-5 text-lg leading-relaxed text-foreground/76">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-background/35">
              <Banknote className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Impacto real</p>
            <h3 className="mt-4 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
              Mandar más no siempre ayuda.
            </h3>
            <p className="mt-6 text-xl leading-relaxed text-foreground/82">
              Meter 200 páginas en cada petición puede multiplicar el coste y hacer más lenta la respuesta sin mejorar
              el resultado.
            </p>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
              <Gauge className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Consecuencias</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {impacts.map((item, index) => (
                <p
                  key={item}
                  className={`rounded-[1.35rem] border px-5 py-5 text-xl font-semibold leading-tight ${
                    index === 0 || index === 1 ? "border-primary/25 bg-primary/8" : "border-border/60 bg-background/35"
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 grid gap-6 lg:grid-cols-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-background/35">
              <Blocks className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Lo que sí puede hacer</p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight text-balance text-foreground md:text-4xl">
              Orientar mejor el trabajo del modelo.
            </h3>
            <div className="mt-7 grid gap-3">
              {contextHelpsWith.map((item) => (
                <p
                  key={item}
                  className="rounded-[1.25rem] border border-primary/20 bg-background/35 px-5 py-4 text-lg font-semibold leading-snug"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
              <Gauge className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Lo que no puede prometer</p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight text-balance text-foreground md:text-4xl">
              No convierte la IA en una fuente de verdad.
            </h3>
            <div className="mt-7 grid gap-3">
              {contextDoesNotReplace.map((item) => (
                <p
                  key={item}
                  className="rounded-[1.25rem] border border-border/60 bg-background/35 px-5 py-4 text-lg font-semibold leading-snug"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-background/35">
            <Blocks className="h-6 w-6 text-primary" />
          </div>
          <p className="mx-auto max-w-5xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            Optimizar contexto es mejorar respuestas, controlar coste y saber dónde sigue haciendo falta criterio humano.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

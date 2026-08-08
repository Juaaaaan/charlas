"use client"

import { motion } from "framer-motion"
import { CheckCheck, FileSearch, ShieldCheck } from "lucide-react"

const checklist = [
  "Cuál es la tarea real.",
  "Qué instrucciones son reglas.",
  "Qué datos necesita ver.",
  "Qué fuentes son fiables y recientes.",
  "Qué límites de seguridad aplican.",
  "Cómo vamos a validar la respuesta.",
]

const contextSignals = [
  {
    title: "Relevancia",
    description: "Entra lo que ayuda a resolver la tarea, no todo lo disponible.",
  },
  {
    title: "Autoridad",
    description: "Las fuentes importantes están claras y tienen prioridad sobre el ruido.",
  },
  {
    title: "Vigencia",
    description: "Lo obsoleto se retira, se actualiza o se marca para no confundir.",
  },
  {
    title: "Validación",
    description: "La respuesta se comprueba antes de convertirla en decisión o cambio.",
  },
]

const finalIdeas = [
  "Primero la intención; después la información.",
  "Mejor contexto es contexto seleccionado, ordenado y validado.",
  "Si el repositorio no habla claro, la IA rellena huecos.",
]

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Cierre</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Qué nos llevamos
          </h2>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Preparar contexto es decidir qué debe saber la IA antes de pedirle trabajo. No se trata de escribir más, sino
            de darle una base útil, mantenible y segura.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <motion.div
            className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-background/35">
              <CheckCheck className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Checklist práctica</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {checklist.map((item, index) => (
                <p
                  key={item}
                  className={`rounded-[1.25rem] border px-5 py-4 text-lg font-semibold leading-snug ${
                    index === 0 || index === 5 ? "border-primary/30 bg-background/35" : "border-primary/20 bg-primary/8"
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-8 text-3xl font-semibold leading-tight text-balance text-foreground">
              El buen contexto tiene propósito, límites y mantenimiento.
            </p>
          </motion.div>

          <motion.div
            className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
              <FileSearch className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Señales de buen contexto</p>
            <h3 className="mt-4 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
              No es meter más información. Es meter mejor información.
            </h3>
            <div className="mt-8 grid gap-4">
              {contextSignals.map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-[1.35rem] border p-5 ${
                    index === 1 ? "border-primary/25 bg-primary/8" : "border-border/60 bg-background/35"
                  }`}
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/12">
                    {index === 0 || index === 1 ? (
                      <FileSearch className="h-5 w-5 text-primary" />
                    ) : (
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <p className="text-lg font-semibold leading-snug text-primary">{item.title}</p>
                  <p className="mt-2 text-lg leading-relaxed text-foreground/78">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Ideas clave</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {finalIdeas.map((idea, index) => (
              <div
                key={idea}
                className={`rounded-[1.5rem] border px-6 py-8 ${
                  index === 1 ? "border-primary/30 bg-background/35" : "border-primary/20 bg-primary/8"
                }`}
              >
                <p className="text-2xl font-semibold leading-tight text-balance text-foreground md:text-3xl">{idea}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

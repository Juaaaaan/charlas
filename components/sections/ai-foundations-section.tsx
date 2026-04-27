"use client"

import { motion } from "framer-motion"
import { ArrowRight, Bot, Braces, Goal, ListChecks, Settings2, ShieldCheck } from "lucide-react"

const agentParts = [
  { icon: Goal, title: "Objetivo", description: "Para qué existe y qué resultado debe ayudar a conseguir." },
  { icon: Bot, title: "Rol", description: "Qué tipo de ayuda presta y desde qué perspectiva responde." },
  { icon: Braces, title: "Contexto", description: "La información de trabajo que necesita para no ir a ciegas." },
  { icon: ListChecks, title: "Reglas", description: "Qué debe respetar, qué debe evitar y cuándo debe pedir revisión." },
  { icon: Settings2, title: "Herramientas", description: "Si aplica, puede apoyarse en archivos, datos o acciones concretas." },
]

const comparison = [
  {
    title: "Chat",
    description: "Le pido algo una vez. La calidad depende de lo que escriba en ese momento.",
  },
  {
    title: "Agente sencillo",
    description: "Le doy una función, un contexto y unas reglas estables para repetir una tarea.",
  },
  {
    title: "Agente con herramientas",
    description: "Además puede consultar fuentes, usar archivos o encadenar pasos definidos.",
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
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 1
          </span>
          <h2 className="mb-8 text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl">
            Qué es un agente de IA
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            La idea es sencilla: pasar de una pregunta suelta a una ayuda preparada para una tarea concreta.
          </p>
        </motion.div>

        <div className="space-y-10">
          <motion.div
            className="flex min-h-[72vh] items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Idea principal</p>
              <h3 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-foreground text-balance md:text-6xl">
                Un chat responde a una petición.
                <span className="block text-primary">Un agente trabaja con un encargo.</span>
              </h3>
              <p className="mt-6 max-w-4xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                No hace falta imaginar algo complejo. Un agente es una IA configurada para ayudar siempre con el mismo
                tipo de objetivo.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex min-h-[72vh] items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">De qué está hecho</p>
              <h3 className="mt-4 text-4xl font-semibold leading-tight text-foreground text-balance md:text-5xl">
                Un agente combina pocas piezas, pero tienen que estar bien definidas.
              </h3>
              <div className="mt-10 grid gap-4 lg:grid-cols-5">
                {agentParts.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className={`rounded-[1.5rem] border p-5 ${
                      index === 0 ? "border-primary/30 bg-primary/10" : "border-primary/20 bg-background/35"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">{item.title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex min-h-[64vh] items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="grid w-full gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Comparación sencilla</p>
                <h3 className="mt-4 text-4xl font-semibold leading-tight text-foreground text-balance md:text-5xl">
                  No todo lo que se llama agente tiene el mismo nivel.
                </h3>
                <div className="mt-8 flex items-center gap-3 text-lg text-muted-foreground md:text-xl">
                  <span>Pregunta</span>
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <span>Encargo estable</span>
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <span>Herramientas</span>
                </div>
              </div>

              <div className="grid gap-4">
                {comparison.map((item, index) => (
                  <div
                    key={item.title}
                    className={`rounded-[1.5rem] border p-6 ${
                      index === 1 ? "border-primary/30 bg-primary/8" : "border-border/70 bg-card/90"
                    }`}
                  >
                    <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      0{index + 1}
                    </p>
                    <h4 className="mt-3 text-2xl font-semibold text-foreground">{item.title}</h4>
                    <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/25 bg-card/90 px-6 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <p className="text-2xl font-semibold leading-relaxed text-foreground text-balance md:text-3xl">
              Para entender los agentes, la pregunta no es si “piensan”. La pregunta es qué encargo tienen, con qué
              contexto trabajan y quién revisa el resultado.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

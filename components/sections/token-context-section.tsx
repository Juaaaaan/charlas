"use client"

import { motion } from "framer-motion"
import { ClipboardList, Eye, Flag, FolderInput, ShieldCheck, Target } from "lucide-react"

const processQuestions = [
  {
    icon: FolderInput,
    title: "Entrada",
    description: "Que informacion recibe el proceso y en que estado llega.",
  },
  {
    icon: Target,
    title: "Objetivo",
    description: "Que decision, entregable o accion necesitamos producir.",
  },
  {
    icon: ClipboardList,
    title: "Pasos",
    description: "Que transformaciones deben ocurrir entre la entrada y la salida.",
  },
  {
    icon: Eye,
    title: "Contexto",
    description: "Que materiales, reglas y referencias necesita cada fase.",
  },
  {
    icon: ShieldCheck,
    title: "Control",
    description: "Donde hace falta validar calidad, riesgo y coherencia.",
  },
]

const hiddenWork = [
  "Entender que se esta pidiendo de verdad.",
  "Recopilar informacion valida y suficiente.",
  "Separar hechos, ruido y supuestos.",
  "Analizar impacto en negocio, operacion y cliente.",
  "Redactar una salida clara para el destinatario correcto.",
  "Revisar riesgos antes de darla por buena.",
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
            Pensar el proceso antes de automatizarlo
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Casi ningun trabajo real es una sola instruccion. Antes de orquestar agentes hay que entender el flujo.
          </p>
        </motion.div>

        <motion.div
          className="grid min-h-[68vh] gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Peticion aparente</p>
            <h3 className="mt-4 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
              "Hazme un informe ejecutivo sobre este cambio"
            </h3>
            <p className="mt-6 text-xl leading-relaxed text-foreground/82 md:text-2xl">
              Parece una sola tarea, pero en realidad contiene exploracion, analisis, sintesis, redaccion y revision.
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-primary/20 bg-background/35 p-5">
              <p className="text-lg leading-relaxed text-foreground/84">
                El error habitual es abrir un chat y pedir la salida final demasiado pronto. El enfoque correcto es
                separar el trabajo en fases y decidir que necesita cada una.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {hiddenWork.map((item, index) => (
              <div
                key={item}
                className={`rounded-[1.5rem] border p-5 ${
                  index === 2 || index === 5 ? "border-primary/25 bg-primary/8" : "border-border/70 bg-card/90"
                }`}
              >
                <p className="text-lg font-semibold leading-snug text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Preguntas de diseno</p>
            <h3 className="mt-4 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
              No se empieza por Copilot ni por el agente. Se empieza por el proceso.
            </h3>
            <p className="mt-5 text-xl leading-relaxed text-foreground/82 md:text-2xl">
              Si estas cinco preguntas estan claras, luego es mucho mas facil decidir si resuelves el trabajo con un
              solo agente, con varios, con un cuaderno o con una combinacion.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {processQuestions.map((item, index) => (
              <motion.div
                key={item.title}
                className={`rounded-[1.5rem] border p-6 ${
                  index === 2 ? "border-primary/30 bg-primary/10" : "border-border/70 bg-background/35"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-2xl font-semibold text-foreground">{item.title}</h4>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-primary/20 bg-primary/8 p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-background/40">
                <Flag className="h-5 w-5 text-primary" />
              </div>
              <p className="text-2xl font-semibold leading-relaxed text-balance text-foreground md:text-3xl">
                Antes de orquestar agentes, hay que entender el trabajo.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

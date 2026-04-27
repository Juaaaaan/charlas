"use client"

import { motion } from "framer-motion"
import { BookOpenText, BriefcaseBusiness, FileStack, NotebookTabs, Sparkles, Workflow } from "lucide-react"

const copilotPlaces = [
  "Copilot Chat",
  "Outlook",
  "Word",
  "Teams",
  "Excel",
  "PowerPoint",
  "OneDrive",
  "OneNote",
]

const agentExamples = [
  "Guiar una revisión documental",
  "Preparar comunicaciones recurrentes",
  "Resumir expedientes o reuniones",
  "Ordenar información de un proyecto",
  "Ayudar a seguir un procedimiento",
]

const notebookContext = [
  "Chats",
  "Archivos",
  "Páginas",
  "Notas de reuniones",
  "Enlaces",
  "Materiales de proyecto",
]

export function PromptSection() {
  return (
    <section className="relative py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mx-auto mb-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 3
          </span>
          <h2 className="mb-8 text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl">
            Bajada a Microsoft 365
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Aquí el concepto se entiende mejor: la IA aparece dentro de las herramientas donde ya trabajamos.
          </p>
        </motion.div>

        <motion.div
          className="grid min-h-[72vh] gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-12">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
              <BriefcaseBusiness className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contexto real de trabajo</p>
            <h3 className="mt-4 text-4xl font-semibold leading-tight text-foreground text-balance md:text-5xl">
              Microsoft 365 aporta el lugar donde vive gran parte del contexto.
            </h3>
            <p className="mt-5 text-xl leading-relaxed text-foreground/82 md:text-2xl">
              Correos, documentos, reuniones, hojas de cálculo y archivos no son solo aplicaciones: son la materia prima
              sobre la que pedimos ayuda.
            </p>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Ecosistema Microsoft 365</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {copilotPlaces.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.25rem] border px-5 py-4 text-lg font-semibold text-foreground ${
                    index === 5 ? "border-primary/30 bg-primary/8" : "border-border/60 bg-background/35"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 grid min-h-[72vh] gap-6 lg:grid-cols-2 lg:items-stretch"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
              <Workflow className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Agentes en Copilot</p>
            <h3 className="text-4xl font-semibold leading-tight text-foreground text-balance md:text-5xl">
              El agente pone el enfoque.
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Permite orientar la IA hacia una tarea concreta dentro del entorno de Microsoft 365.
            </p>
            <div className="mt-8 grid gap-3">
              {agentExamples.map((item) => (
                <div key={item} className="rounded-[1.25rem] border border-border/60 bg-background/35 px-5 py-4 text-lg text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col rounded-[2rem] border border-primary/30 bg-primary/10 p-8 md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
              <NotebookTabs className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Cuadernos en Copilot</p>
            <h3 className="text-4xl font-semibold leading-tight text-foreground text-balance md:text-5xl">
              El cuaderno acota el contexto.
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-foreground/78 md:text-xl">
              Ayuda a reunir materiales relevantes de una tarea o proyecto para que la IA responda sobre una base más
              centrada.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {notebookContext.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.25rem] border px-5 py-4 text-base font-semibold text-foreground ${
                    index === 0 || index === 1 ? "border-primary/25 bg-primary/10" : "border-primary/20 bg-background/35"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 grid min-h-[58vh] gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Uso con criterio</p>
            <p className="mt-4 text-4xl font-semibold leading-tight text-foreground text-balance md:text-5xl">
              En Microsoft 365, la pregunta clave es qué contexto le estamos dando a la IA.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-border/70 bg-card/90 p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12">
                <BookOpenText className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl font-semibold text-foreground">El agente define para qué ayuda.</p>
            </div>
            <div className="rounded-[1.75rem] border border-primary/25 bg-primary/8 p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12">
                <FileStack className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl font-semibold text-foreground">El cuaderno centra sobre qué información trabaja.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

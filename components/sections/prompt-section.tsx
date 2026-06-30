"use client"

import { motion } from "framer-motion"
import { FileCode2, FileText, FolderTree, Sparkles } from "lucide-react"

const projectFiles = [
  {
    icon: Sparkles,
    title: "AGENTS.md",
    description: "Contexto persistente para agentes como Codex: objetivo, límites, comandos y forma de trabajar.",
  },
  {
    icon: FileText,
    title: "CLAUDE.md",
    description: "Instrucciones persistentes para Claude Code: arquitectura, convenciones y criterios del equipo.",
  },
  {
    icon: FileCode2,
    title: ".github/copilot-instructions.md",
    description: "Contexto general para GitHub Copilot: stack, estilo, patrones, pruebas y cosas que debe evitar.",
  },
]

const supportFiles = [
  {
    title: "README.md",
    description: "La entrada al proyecto: qué es, cómo se arranca y cómo se valida.",
  },
  {
    title: "ARCHITECTURE.md",
    description: "Cómo está pensado el sistema y qué decisiones no debería improvisar la IA.",
  },
  {
    title: "CONTRIBUTING.md",
    description: "Cómo trabaja el equipo: estilo, PRs, revisiones y criterios de calidad.",
  },
  {
    title: "SECURITY.md",
    description: "Límites importantes: secretos, datos sensibles y cosas que no se deben exponer.",
  },
]

export function PromptSection() {
  return (
    <section className="relative py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          className="mx-auto mb-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 3</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Contexto para desarrolladores
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            En desarrollo, el contexto no debería depender solo del chat. El repositorio puede explicar cómo se trabaja
            para que Copilot y los agentes partan de una base común.
          </p>
        </motion.div>

        <motion.div
          className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Repositorio como contexto</p>
            <h3 className="mt-4 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
              Si el proyecto no explica cómo se trabaja, la IA rellena huecos.
            </h3>
            <p className="mt-6 text-xl leading-relaxed text-foreground/82 md:text-2xl">
              Documentar el proyecto no solo ayuda a las personas. También crea contexto persistente para herramientas
              de IA y agentes de desarrollo.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {projectFiles.map((item, index) => (
              <motion.div
                key={item.title}
                className={`rounded-[1.5rem] border p-6 ${
                  index === 1 || index === 2 ? "border-primary/30 bg-background/35" : "border-primary/20 bg-primary/8"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="text-xl font-semibold leading-tight text-foreground">{item.title}</h4>
                <p className="mt-3 text-base leading-relaxed text-foreground/74">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
              <FolderTree className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Documentos que evitan improvisación
            </p>
            <div className="mt-8 grid gap-4">
              {supportFiles.map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-[1.35rem] border px-5 py-5 ${
                    index === 1 ? "border-primary/25 bg-primary/8" : "border-border/60 bg-background/35"
                  }`}
                >
                  <p className="text-lg font-semibold leading-tight text-primary">{item.title}</p>
                  <p className="mt-2 text-lg leading-relaxed text-foreground/78">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

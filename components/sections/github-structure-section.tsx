"use client"

import { motion } from "framer-motion"
import { Bot, FileCode2, FolderGit2, ListFilter } from "lucide-react"

const githubFiles = [
  {
    icon: FileCode2,
    title: "copilot-instructions.md",
    path: ".github/copilot-instructions.md",
    description:
      "El fichero principal. Copilot lo lee en cada sesión, en cualquier IDE — VS Code, JetBrains, Visual Studio. Convenciones globales: tecnologías, patrones, reglas que aplican a todo el código.",
    highlight: true,
  },
  {
    icon: ListFilter,
    title: "instructions/",
    path: ".github/instructions/*.instructions.md",
    description:
      "Instrucciones que solo se activan en contextos concretos: reglas para los tests, convenciones distintas para backend. Usan frontmatter applyTo: para decidir cuándo cargarse.",
    highlight: false,
  },
  {
    icon: Bot,
    title: "AGENTS.md",
    path: "AGENTS.md (raíz o por carpeta)",
    description:
      "Para Copilot en modo agente, trabajando de forma autónoma. Puede estar en la raíz o en cualquier carpeta — el agente lee el más cercano a donde está trabajando.",
    highlight: false,
  },
]

export function GithubStructureSection() {
  return (
    <section className="relative py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

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
            .github/ para Copilot
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            La carpeta .github/ ya la conocéis — workflows, plantillas de issues y pull requests. Tiene un apartado
            específico para instruir a Copilot.
          </p>
        </motion.div>

        {/* Estructura de carpeta */}
        <motion.div
          className="mb-8 rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
            <FolderGit2 className="h-6 w-6 text-primary" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">La estructura completa</p>
          <pre className="mt-6 overflow-x-auto rounded-[1.25rem] border border-border/60 bg-background/50 p-6 font-mono text-base leading-relaxed text-foreground/85">
{`.github/
├── copilot-instructions.md
├── AGENTS.md
└── instructions/
    ├── testing.instructions.md
    └── components.instructions.md`}
          </pre>
        </motion.div>

        {/* Los tres ficheros */}
        <div className="grid gap-5 lg:grid-cols-3">
          {githubFiles.map((file, index) => (
            <motion.div
              key={file.title}
              className={`rounded-[1.75rem] border p-8 ${
                file.highlight ? "border-primary/30 bg-primary/10" : "border-border/70 bg-card/90"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${
                  file.highlight ? "bg-background/35" : "bg-primary/12"
                }`}
              >
                <file.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold leading-tight text-foreground">{file.title}</h3>
              <p className="mt-2 font-mono text-sm text-primary/80">{file.path}</p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/76">{file.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Frase de cierre */}
        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="mx-auto max-w-5xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            Tres ficheros de texto. Eso es todo lo que separa a Copilot de conocer vuestro proyecto de verdad.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

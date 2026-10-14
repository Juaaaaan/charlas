"use client"

import { motion } from "framer-motion"
import { BookOpenCheck, FileStack, Repeat } from "lucide-react"

const comparisonRows = [
  {
    label: "Instrucciones globales",
    copilot: ".github/copilot-instructions.md",
    claude: "CLAUDE.md",
  },
  {
    label: "Instrucciones por ruta",
    copilot: ".github/instructions/*.instructions.md",
    claude: ".claude/rules/*.md",
  },
  {
    label: "Agentes",
    copilot: "AGENTS.md",
    claude: ".claude/agents/*.md",
  },
  {
    label: "Hooks y permisos",
    copilot: ".github/hooks/",
    claude: ".claude/settings.json",
  },
]

const keyIdeas = [
  {
    icon: FileStack,
    title: "Un fichero de texto en el repo",
    description: "Le dice a la IA quién sois, cómo trabajáis y qué convenciones seguís.",
  },
  {
    icon: Repeat,
    title: "Se lee automáticamente",
    description: "Al principio de cada sesión, sin que vosotros tengáis que recordar decírselo.",
  },
  {
    icon: BookOpenCheck,
    title: "El concepto es idéntico en ambos",
    description: "Solo cambia el nombre del fichero y dónde vive: GitHub Copilot o Claude Code.",
  },
]

export function SolutionSection() {
  return (
    <section className="relative py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

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
            Ficheros de instrucciones
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Tanto GitHub Copilot como Claude tienen un mecanismo para esto. La idea es simple: un fichero que le
            dice a la IA cómo trabajáis, una sola vez.
          </p>
        </motion.div>

        {/* Tres ideas clave */}
        <div className="mb-8 grid gap-5 md:grid-cols-3">
          {keyIdeas.map((idea, index) => (
            <motion.div
              key={idea.title}
              className={`rounded-[1.75rem] border p-7 ${
                index === 1 ? "border-primary/30 bg-primary/10" : "border-border/70 bg-card/90"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
                <idea.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold leading-tight text-foreground">{idea.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-foreground/76">{idea.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Analogía */}
        <motion.div
          className="mb-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">La analogía</p>
          <p className="mt-4 text-3xl font-semibold leading-tight text-balance text-foreground md:text-4xl">
            Es como el día uno de una persona nueva en el equipo. Le dais el manual de bienvenida.
          </p>
          <p className="mt-5 text-xl leading-relaxed text-foreground/82">
            Ese manual es el fichero de instrucciones. La diferencia es que la IA nunca se olvida de lo que hay en él.
          </p>
        </motion.div>

        {/* Tabla comparativa Copilot vs Claude Code */}
        <motion.div
          className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Los dos ecosistemas</p>
          <h3 className="mt-4 text-3xl font-semibold leading-tight text-balance text-foreground md:text-4xl">
            Mismo concepto, distinto fichero.
          </h3>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-border/60">
            <div className="grid grid-cols-3 bg-primary/10 text-sm font-semibold uppercase tracking-wide text-primary">
              <div className="px-5 py-4">Concepto</div>
              <div className="px-5 py-4">GitHub Copilot</div>
              <div className="px-5 py-4">Claude Code</div>
            </div>
            {comparisonRows.map((row, index) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 border-t border-border/60 ${
                  index % 2 === 0 ? "bg-background/35" : "bg-background/20"
                }`}
              >
                <div className="px-5 py-4 text-base font-semibold text-foreground">{row.label}</div>
                <div className="px-5 py-4 font-mono text-sm text-foreground/78">{row.copilot}</div>
                <div className="px-5 py-4 font-mono text-sm text-foreground/78">{row.claude}</div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-lg leading-relaxed text-foreground/76">
            Hoy vamos a ver cómo funciona con Copilot porque es lo que usamos en el día a día. Al final veremos
            brevemente cómo está configurado en Claude — incluyendo algo que va un paso más allá.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

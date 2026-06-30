"use client"

import { motion } from "framer-motion"
import { CirclePlay, FileCode2, GitBranch, ListChecks, Plug2, TicketCheck } from "lucide-react"

const demoSteps = [
  {
    icon: Plug2,
    step: "01",
    title: "Conectar Claude a Jira en vivo",
    description:
      "Ver el claude_desktop_config.json. Abrir Claude Desktop. Preguntar por los proyectos disponibles.",
    output: "Claude accede al proyecto RCA sin que hayamos pegado nada.",
    highlight: false,
  },
  {
    icon: ListChecks,
    step: "02",
    title: "Leer el sprint actual",
    description: "Preguntar qué issues hay en el sprint actual y cuál es el estado de cada una.",
    output: "Resumen en tiempo real del estado del equipo.",
    highlight: false,
  },
  {
    icon: GitBranch,
    step: "03",
    title: "Análisis y priorización",
    description: "Preguntar qué debería priorizar el equipo esta semana y por qué.",
    output: "Criterio de priorización basado en los datos reales del Jira.",
    highlight: false,
  },
  {
    icon: FileCode2,
    step: "04",
    title: "Puente con SDD — generar task.md",
    description:
      "Basándote en el estado actual del sprint, genera un task.md estructurado listo para usar con nuestro flujo de desarrollo.",
    output: "El arnés documental nace desde el estado real del proyecto.",
    highlight: true,
  },
  {
    icon: TicketCheck,
    step: "05",
    title: "El círculo completo — issues desde spec",
    description:
      "Con el spec.md y el task.md ya le podemos pedir a la IA que realice las tareas correspondientes de forma automática.",
    output: "Implementa RCA-20 (navbar/footer) siguiendo el task.md",
    highlight: true,
  },
]

export function DemoSection() {
  return (
    <section className="relative py-28 lg:py-32">
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
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Demo en vivo</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            El arnés completo en acción
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Claude conectado a un Jira real. Cinco pasos que muestran cómo SDD, Skills y MCPs
            trabajan como una sola pieza.
          </p>
        </motion.div>

        {/* Apertura — lo que vais a ver */}
        <motion.div
          className="mb-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-background/35">
              <CirclePlay className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Antes de empezar</p>
              <p className="mt-3 text-3xl font-semibold leading-tight text-balance text-foreground md:text-4xl">
                Vamos a hacer esto para que veamos exactamente qué implica conectar Claude a una herramienta real.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Pasos de la demo */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {demoSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className={`rounded-[1.75rem] border p-8 ${
                step.highlight
                  ? "border-primary/30 bg-primary/10"
                  : "border-border/70 bg-card/90"
              } ${index === 4 ? "md:col-span-2 xl:col-span-1" : ""}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="mb-5 flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    step.highlight ? "bg-background/35" : "bg-primary/12"
                  }`}
                >
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-mono text-sm font-bold text-primary">{step.step}</span>
              </div>

              <h3 className="text-2xl font-semibold leading-tight text-foreground">{step.title}</h3>

              <p className="mt-4 text-lg leading-relaxed text-foreground/76">{step.description}</p>

              <p
                className={`mt-5 rounded-[1.1rem] border px-4 py-3 text-base font-semibold leading-snug ${
                  step.highlight
                    ? "border-primary/25 bg-background/35 text-primary"
                    : "border-border/60 bg-background/35 text-foreground/80"
                }`}
              >
                {step.output}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Frase de cierre de la demo */}
        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="mx-auto max-w-5xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            El spec define qué construir. Jira gestiona cómo se construye. Claude los conecta y actúa en los dos sitios
            a la vez.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

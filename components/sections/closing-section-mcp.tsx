"use client"

import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Cpu, Plug2 } from "lucide-react"

const finalIdeas = [
  {
    icon: BookOpen,
    title: "El arnés documental es el punto de partida",
    description:
      "El spec.md, plan.md y task.md que vimos la semana pasada son las primeras riendas. Los Skills y MCPs son las piezas que lo completan.",
  },
  {
    icon: Cpu,
    title: "Skills: el contexto que no tenemos que repetir",
    description:
      "Con Skills damos a la IA el contexto de cómo trabajamos, una vez, para que no tengamos que explicarlo cada vez que abrimos una conversación.",
  },
  {
    icon: Plug2,
    title: "MCPs: la IA sale del chat",
    description:
      "Con MCPs la IA deja de vivir en la conversación y empieza a actuar en las herramientas donde ya ocurre nuestro trabajo. Con los permisos que nosotros decidimos.",
  },
]

const whereToStart = [
  {
    tool: "Claude Desktop",
    description: "Gratuito para descargar. El punto de entrada para explorar MCPs en vuestro equipo.",
    url: "claude.ai",
  },
  {
    tool: "MCP de Atlassian",
    description: "Disponible para cualquier cuenta de Jira Cloud. Oficial, sin API token, autenticación OAuth.",
    url: "mcp.atlassian.com",
  },
  {
    tool: "Projects de Claude",
    description: "Skills disponibles en claude.ai. Instrucciones y documentos persistentes por proyecto.",
    url: "claude.ai/projects",
  },
]

export function ClosingSectionMCP() {
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
            Tres ideas para que el arnés deje de ser una metáfora y empiece a ser una práctica en nosotros.
          </p>
        </motion.div>

        {/* Tres ideas */}
        <div className="mb-8 grid gap-5 lg:grid-cols-3">
          {finalIdeas.map((idea, index) => (
            <motion.div
              key={idea.title}
              className={`rounded-[1.75rem] border p-8 ${
                index === 1
                  ? "border-primary/30 bg-primary/10"
                  : "border-border/70 bg-card/90"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
                <idea.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold leading-tight text-foreground">{idea.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-foreground/76">{idea.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Dónde empezar hoy */}
        <motion.div
          className="mb-8 rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Dónde empezar hoy</p>
          <h3 className="mt-4 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
            Todo lo que hemos visto está disponible ahora mismo.
          </h3>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {whereToStart.map((item, index) => (
              <div
                key={item.tool}
                className={`rounded-[1.5rem] border px-6 py-6 ${
                  index === 0
                    ? "border-primary/25 bg-primary/8"
                    : "border-border/60 bg-background/35"
                }`}
              >
                <p className="text-xl font-bold text-primary">{item.tool}</p>
                <p className="mt-3 text-base leading-relaxed text-foreground/78">{item.description}</p>
                <div className="mt-4 flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary/60" />
                  <span className="font-mono text-sm text-primary/70">{item.url}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Frase final */}
        {/* <motion.div
          className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 text-center md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="mx-auto max-w-4xl text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
            La semana pasada os dieron las riendas. Hoy habéis visto cómo engancharlas al caballo.
          </p>
        </motion.div> */}
      </div>
    </section>
  )
}

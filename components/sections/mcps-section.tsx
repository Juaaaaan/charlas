"use client"

import { motion } from "framer-motion"
import { Cable, Globe, Lock, Plug2, Unplug, Wrench } from "lucide-react"

const withoutMcp = [
  "Pegamos información a Claude y/o a Copilot manualmente.",
  "Nosotros somos el puente entre la IA y las herramientas.",
  "La IA trabaja con una copia estática de los datos.",
  "Cada sesión empieza sin contexto de vuestras herramientas.",
]

const withMcp = [
  "Claude va directamente a la fuente en tiempo real.",
  "El protocolo es el puente — no nosotros.",
  "La IA lee y actúa sobre datos actuales.",
  "Nosotros controlamos qué herramientas están accesibles.",
]

const mcpTools = [
  { name: "Jira", category: "Gestión" },
  { name: "GitHub", category: "Código" },
  { name: "Google Drive", category: "Documentos" },
  { name: "Notion", category: "Conocimiento" },
  { name: "Confluence", category: "Documentos" },
  { name: "Slack", category: "Comunicación" },
]

const apiFaq = [
  {
    icon: Unplug,
    title: "Una API",
    description:
      "Es la puerta. Tú tienes que saber dónde está, cómo llamar y qué hacer con lo que te devuelve. Toda la lógica la pones tú.",
    tag: "La fontanería",
  },
  {
    icon: Plug2,
    title: "Un MCP",
    description:
      "Es el traductor universal que ya conoce todas las puertas. Claude le dice \"dame los issues del sprint\" y el MCP sabe cómo llamar a la API de Jira, qué endpoints usar y cómo formatear la respuesta. Tú no programas nada.",
    tag: "El grifo estándar",
    highlight: true,
  },
]

export function McpsSection() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,150,255,0.08),transparent_70%)]" />

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
            MCPs: el arnés de integración
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            El estándar abierto que conecta la IA con cualquier herramienta de la misma forma, con los mismos
            permisos y con el mismo control.
          </p>
        </motion.div>

        {/* Analogía USB */}
        <motion.div
          className="mb-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-background/35">
              <Cable className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">La analogía del USB</p>
              <p className="mt-3 text-3xl font-semibold leading-tight text-balance text-foreground md:text-4xl">
                Antes del USB, cada fabricante tenía su propio conector. El USB estandarizó todo. MCP es eso para la IA.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sin MCP vs Con MCP */}
        <motion.div
          className="mb-8 grid gap-6 lg:grid-cols-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
              <Unplug className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Sin MCP</p>
            <div className="mt-6 grid gap-3">
              {withoutMcp.map((item, index) => (
                <p
                  key={item}
                  className={`rounded-[1.1rem] border px-4 py-3 text-lg ${
                    index === 1
                      ? "border-primary/25 bg-primary/8 font-semibold"
                      : "border-border/60 bg-background/35"
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-background/35">
              <Plug2 className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Con MCP</p>
            <div className="mt-6 grid gap-3">
              {withMcp.map((item, index) => (
                <p
                  key={item}
                  className={`rounded-[1.1rem] border px-4 py-3 text-lg font-semibold ${
                    index === 0 || index === 2
                      ? "border-primary/30 bg-background/35"
                      : "border-primary/20 bg-primary/8"
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Herramientas disponibles */}
        <motion.div
          className="mb-8 rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
            <Globe className="h-6 w-6 text-primary" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Un conector para cualquier herramienta
          </p>
          <p className="mt-4 text-3xl font-semibold leading-tight text-balance text-foreground md:text-4xl">
            Hoy lo usan también OpenAI y Google. No es una feature de Claude — es la infraestructura.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {mcpTools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-2"
              >
                <span className="text-base font-semibold text-foreground">{tool.name}</span>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* API vs MCP */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Pregunta frecuente — ¿API o MCP?
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            {apiFaq.map((item) => (
              <div
                key={item.title}
                className={`rounded-[1.75rem] border p-8 ${
                  item.highlight
                    ? "border-primary/30 bg-primary/10"
                    : "border-border/70 bg-card/90"
                }`}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                  <span className="rounded-full border border-primary/25 bg-primary/8 px-3 py-1 font-mono text-xs text-primary">
                    {item.tag}
                  </span>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-foreground/76">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Control */}
        <motion.div
          className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/12">
              <Lock className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">El control es vuestro</p>
              <p className="mt-3 text-3xl font-semibold leading-tight text-balance text-foreground md:text-4xl">
                Vosotros decidís a qué herramientas tiene acceso la IA y con qué permisos. El MCP no da acceso
                libre — da acceso controlado.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Frase de cierre */}
        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-background/35">
            <Wrench className="h-6 w-6 text-primary" />
          </div>
          <p className="mx-auto max-w-5xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            Un MCP es un enchufe estándar entre la IA y el mundo real. Vosotros controláis qué enchufáis.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

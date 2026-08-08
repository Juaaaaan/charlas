"use client"

import { motion } from "framer-motion"
import { BookMarked, Network, Users2 } from "lucide-react"

const finalIdeas = [
  {
    icon: BookMarked,
    title: "Sin contexto, código genérico",
    description:
      "Con un fichero de instrucciones en vuestro repositorio, la IA genera código que sigue vuestras convenciones desde el primer intento.",
  },
  {
    icon: Users2,
    title: "No es solo para developers",
    description:
      "Cualquier equipo que use Copilot o Claude puede beneficiarse de instrucciones claras: cómo redactar documentos, qué tono usar, qué plantillas seguir.",
  },
  {
    icon: Network,
    title: "Vive en el repositorio",
    description:
      "Se versiona, se comparte con el equipo, evoluciona con el proyecto. No es configuración personal — es conocimiento del equipo.",
  },
]

const whereToStart = [
  {
    tool: "Carpeta .github/",
    description: "Creadla si no la tenéis y añadid un copilot-instructions.md.",
  },
  {
    tool: "Diez líneas bastan",
    description: "Describid vuestro stack y vuestras convenciones — ya notaréis la diferencia.",
  },
  {
    tool: "GitHub Desktop",
    description: "Si no os sentís cómodos con la terminal: interfaz visual oficial, sin escribir comandos.",
  },
]

export function ClosingSectionCopilot() {
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
            Tres ideas para convertir el conocimiento disperso del equipo en instrucciones que la IA nunca olvida.
          </p>
        </motion.div>

        {/* Tres ideas */}
        <div className="mb-8 grid gap-5 lg:grid-cols-3">
          {finalIdeas.map((idea, index) => (
            <motion.div
              key={idea.title}
              className={`rounded-[1.75rem] border p-8 ${
                index === 0 ? "border-primary/30 bg-primary/10" : "border-border/70 bg-card/90"
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
            Abrid vuestro repositorio ahora mismo.
          </h3>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {whereToStart.map((item, index) => (
              <div
                key={item.tool}
                className={`rounded-[1.5rem] border px-6 py-6 ${
                  index === 0 ? "border-primary/25 bg-primary/8" : "border-border/60 bg-background/35"
                }`}
              >
                <p className="text-xl font-bold text-primary">{item.tool}</p>
                <p className="mt-3 text-base leading-relaxed text-foreground/78">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gancho próxima charla */}
        <motion.div
          className="mb-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">La semana que viene</p>
          <p className="mt-4 text-3xl font-semibold leading-tight text-balance text-foreground md:text-4xl">
            Hoy le hemos dado a la IA el manual de cómo trabajamos. La semana que viene le damos el manual de por
            qué lo hacemos así.
          </p>
          <p className="mt-5 text-xl leading-relaxed text-foreground/82">
            Construiremos una Wiki LLM con Obsidian conectado a GitHub: un repositorio de conocimiento que la IA
            puede consultar, mantener y ampliar.
          </p>
        </motion.div>

        {/* Frase final */}
        <motion.div
          className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 text-center md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="mx-auto max-w-4xl text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
            La IA nunca se olvida de leerlo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

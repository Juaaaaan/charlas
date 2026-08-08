"use client"

import { motion } from "framer-motion"

const finalIdeas = [
  {
    idea: "El conocimiento más valioso no está en los sistemas.",
    detail: "Está en las personas. Un Wiki LLM es la forma de sacarlo de las cabezas y hacerlo disponible para todos.",
  },
  {
    idea: "Esto no es solo para developers.",
    detail: "Mismo mecanismo, dos problemas distintos: memoria técnica del proyecto y gestión del equipo.",
  },
  {
    idea: "El coste de empezar es cero.",
    detail: "Obsidian es gratuito. GitHub ya lo usáis. Plugin de Git en Obsidian: una configuración.",
  },
]

const nextSteps = [
  "Descarga Obsidian en obsidian.md",
  "Instala el plugin de Git",
  "Crea una carpeta para tus notas de proyecto",
  "La próxima decisión importante: escríbela en markdown, no en un correo",
]

export function ClosingSectionLLM() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Cierre</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Tres ideas para llevarse
          </h2>
        </motion.div>

        <motion.div
          className="mb-10 grid gap-6 lg:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {finalIdeas.map((item, index) => (
            <div
              key={item.idea}
              className={`rounded-[2rem] border p-8 ${
                index === 1
                  ? "border-primary/30 bg-primary/10"
                  : "border-border/70 bg-card/70"
              }`}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                {index + 1}
              </p>
              <h3 className="mt-5 text-2xl font-semibold leading-tight text-balance text-foreground md:text-3xl">
                {item.idea}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-foreground/72">{item.detail}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mb-10 grid gap-6 lg:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-[2rem] border border-border/70 bg-card/70 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Dónde empezar hoy</p>
            <div className="mt-6 grid gap-3">
              {nextSteps.map((step, index) => (
                <div
                  key={step}
                  className={`rounded-[1.25rem] border px-5 py-4 text-lg text-foreground ${
                    index === 3
                      ? "border-primary/25 bg-primary/8"
                      : "border-border/60 bg-background/35"
                  }`}
                >
                  <span className="font-mono text-sm text-primary/70 mr-3">{index + 1}.</span>
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">A continuación</p>
            <p className="mt-6 text-xl leading-relaxed text-foreground/90">
              Ahora le cedo la palabra a nuestro compañero, que lleva tiempo trabajando con Wiki LLMs
              y tiene algo que añadir a lo que hemos visto hoy.
            </p>
            <p className="mt-6 text-3xl font-semibold leading-tight text-balance text-foreground">
              El mismo concepto. Otro ángulo.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            Un Wiki LLM no es una carpeta de notas.
            <br />
            <span className="text-primary">Es la memoria persistente de tu empresa.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

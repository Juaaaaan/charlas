"use client"

import { motion } from "framer-motion"

const vaultFiles = [
  { file: "decisiones-arquitectura.md", detail: "Por qué Angular, Tailwind v4, Supabase, Vercel, Stripe" },
  { file: "decision-no-ngrx.md", detail: "Por qué Signals en lugar de NgRx y cómo gestionar el estado" },
  { file: "decision-ssr-zoneless.md", detail: "Qué implica SSR + zoneless para el desarrollo diario" },
  { file: "dead-ends.md", detail: "Problemas reales encontrados: Transloco SSR, Tailwind opacidad, mutate() deprecado", highlight: true },
  { file: "estado-sprint-actual.md", detail: "47 issues, 6 fases, prioridad recomendada esta semana" },
  { file: "contexto-proyecto.md", detail: "La cliente, restricciones de negocio y qué nunca se debe tocar" },
]

const prompts = [
  {
    label: "Consulta al vault",
    prompt: "Estoy trabajando en el proyecto RCA. ¿Por qué no usamos NgRx? ¿Hay algún dead end que deba conocer antes de tocar el sistema de estado?",
    result: "La IA responde con el contexto real del proyecto. Sin que se lo hayamos explicado.",
    highlight: false,
  },
  {
    label: "Generar y subir en vivo",
    prompt: "Acabo de decidir en reunión que no vamos a implementar modo oscuro en el proyecto RCA porque el sistema de diseño Artisanal Ether está definido únicamente en tonos cálidos. Documenta esta decisión en formato OKF y guárdala en el vault.",
    result: "El fichero aparece en Obsidian y se sube al repo. Treinta segundos.",
    highlight: true,
  },
]

export function TokenContextSectionLLM() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/4 to-background" />
      <div className="absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Demo 1 — Proyecto</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            La memoria técnica del proyecto
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Un developer trabaja en un proyecto Angular. El vault tiene todo lo que no está en el código
            pero es igual de importante.
          </p>
        </motion.div>

        <motion.div
          className="mb-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {vaultFiles.map((item) => (
            <div
              key={item.file}
              className={`rounded-[1.5rem] border px-6 py-5 ${
                item.highlight
                  ? "border-primary/30 bg-primary/10"
                  : "border-border/70 bg-card/60"
              }`}
            >
              <p className="font-mono text-xs font-semibold text-primary/80">{item.file}</p>
              <p className="mt-2 text-base leading-relaxed text-foreground/76">{item.detail}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {prompts.map((item) => (
            <div
              key={item.label}
              className={`rounded-[2rem] border p-8 ${
                item.highlight
                  ? "border-primary/30 bg-primary/10"
                  : "border-border/70 bg-card/70"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{item.label}</p>
              <p className="mt-5 rounded-[1.25rem] border border-border/50 bg-background/40 p-5 font-mono text-base leading-relaxed text-foreground/90">
                {item.prompt}
              </p>
              <p className="mt-5 text-lg font-semibold leading-relaxed text-foreground">{item.result}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-2xl font-semibold leading-relaxed text-foreground md:text-3xl">
            La próxima vez que alguien trabaje en este proyecto, la IA sabrá por qué no hay modo oscuro
            sin que nadie se lo explique.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

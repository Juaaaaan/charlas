"use client"

import { motion } from "framer-motion"

const tokens = ["La", "poliza", "cubre", "danos", "por", "___"]
const tokenColors = [
  "bg-secondary text-muted-foreground",
  "bg-secondary text-muted-foreground",
  "bg-secondary text-muted-foreground",
  "bg-secondary text-muted-foreground",
  "bg-secondary text-muted-foreground",
  "border-2 border-primary/40 bg-primary/20 text-primary",
]

const concepts = [
  {
    term: "Token",
    definition: "Unidad minima de texto con la que trabaja el modelo.",
    example: "\"inteligencia\" → varias piezas de texto",
  },
  {
    term: "Prompt",
    definition: "La instruccion que le damos al modelo.",
    example: "Resume este expediente en cinco puntos",
  },
  {
    term: "Contexto",
    definition: "Todo el texto que el modelo tiene disponible para responder.",
    example: "Conversacion, documentos, datos recuperados",
  },
  {
    term: "Prediccion",
    definition: "Calculo de probabilidades para el siguiente token.",
    example: "agua: 42%, incendio: 28%, robo: 11%...",
  },
]

const amplifiers = ["Mejor prompt", "Mas contexto", "Herramientas", "Workflow"]

export function HowLLMWorksSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,150,255,0.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            En profundidad
          </span>
          <h2 className="mb-8 text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl">
            Como responde un LLM
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground">
            La idea base es simple: predice el siguiente token usando todo el contexto anterior. Sobre esa base
            construimos sistemas cada vez mas utiles.
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-card p-8 md:p-12">
            <h4 className="mb-8 text-center text-lg font-medium text-muted-foreground">
              Prediccion del siguiente token
            </h4>

            <div className="mb-10 flex flex-wrap justify-center gap-3">
              {tokens.map((token, index) => (
                <motion.div
                  key={index}
                  className={`rounded-xl px-5 py-3 font-mono text-lg ${tokenColors[index]}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {token}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="mb-4 h-8 w-px bg-gradient-to-b from-primary/50 to-transparent" />

              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { word: "agua", prob: "42%" },
                  { word: "incendio", prob: "28%" },
                  { word: "robo", prob: "11%" },
                  { word: "...", prob: "" },
                ].map((item, index) => (
                  <div
                    key={item.word}
                    className={`
                      rounded-lg px-4 py-2 text-sm
                      ${index === 0 ? "bg-primary/20 font-medium text-primary" : "bg-secondary text-muted-foreground"}
                    `}
                  >
                    {item.word} {item.prob && <span className="opacity-60">{item.prob}</span>}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.term}
              className="rounded-2xl border border-border/50 bg-card p-6 transition-colors duration-300 hover:border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h4 className="mb-2 text-lg font-semibold text-primary">{concept.term}</h4>
              <p className="mb-3 text-sm text-muted-foreground">{concept.definition}</p>
              <code className="rounded bg-secondary px-2 py-1 text-xs text-foreground/60">{concept.example}</code>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-3 flex items-center gap-2 text-xl font-semibold text-foreground">
                <span className="h-2 w-2 rounded-full bg-muted-foreground" />
                Modelo base
              </h4>
              <p className="text-muted-foreground">
                Sin mas contexto, responde de forma generica. Ya es util, pero todavia no sabe nada de tu
                empresa, tus datos ni tus procesos.
              </p>
            </div>
            <div>
              <h4 className="mb-3 flex items-center gap-2 text-xl font-semibold text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Sistema util
              </h4>
              <p className="text-muted-foreground">
                Cuando mejoras la instruccion, anades contexto y lo conectas con herramientas o pasos de
                trabajo, aparece el valor real.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {amplifiers.map((item) => (
              <span key={item} className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-foreground">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

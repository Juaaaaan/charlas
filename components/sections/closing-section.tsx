"use client"

import { motion } from "framer-motion"

const controls = [
  "Definir el objetivo y el criterio de calidad antes de empezar.",
  "Separar bien que hace la IA y que valida la persona.",
  "Revisar puntos sensibles: cliente, normativa, compromisos y decisiones.",
  "Mantener trazabilidad de fuentes, supuestos y versiones.",
  "Escalar solo los flujos que ya funcionan de forma consistente.",
]

const risks = [
  "Errores pequenos que se encadenan entre fases.",
  "Perdida de contexto entre agentes o herramientas.",
  "Salidas demasiado genericas para un caso concreto.",
  "Exceso de confianza en un borrador convincente.",
  "Datos sensibles mal compartidos o mal interpretados.",
]

const finalIdeas = [
  "La IA aporta mas valor cuando entra en el workflow, no cuando se queda en un chat.",
  "Orquestar agentes es disenar trabajo, no solo lanzar prompts.",
  "La ventaja real sigue estando en el criterio humano que define, supervisa y valida.",
]

export function ClosingSection() {
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
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 4</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Control, limites y criterio
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Cuanto mas largo es el flujo, mas importante es controlar que pasa en cada fase y quien valida el resultado.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 lg:grid-cols-2 lg:items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Puntos de control</p>
            <div className="mt-6 grid gap-3">
              {controls.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.25rem] border px-5 py-4 text-lg text-foreground ${
                    index === 1 || index === 3 ? "border-primary/25 bg-background/35" : "border-primary/20 bg-primary/8"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Riesgos a vigilar</p>
            <div className="mt-6 grid gap-3">
              {risks.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.25rem] border px-5 py-4 text-lg text-foreground ${
                    index === 2 ? "border-primary/25 bg-primary/8" : "border-border/60 bg-background/35"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-[1.5rem] border border-primary/20 bg-primary/8 p-5 text-xl font-semibold leading-relaxed text-foreground">
              Automatizar sin control no escala productividad. Escala riesgo.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Cierre</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {finalIdeas.map((idea, index) => (
              <div
                key={idea}
                className={`rounded-[1.5rem] border px-6 py-8 ${
                  index === 1 ? "border-primary/30 bg-background/35" : "border-primary/20 bg-primary/8"
                }`}
              >
                <p className="text-2xl font-semibold leading-tight text-balance text-foreground md:text-3xl">{idea}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            La ventaja no sera tener IA. La ventaja sera saber dirigir trabajo con IA.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-foreground/78 md:text-2xl">
            Y ahora, mejor que seguir explicandolo, vamos a verlo en un ejemplo real.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

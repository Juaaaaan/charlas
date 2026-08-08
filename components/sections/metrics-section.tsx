"use client"

import { motion } from "framer-motion"

const coreMetrics = [
  {
    name: "Engagement rate",
    description: "Porcentaje de personas que abrieron el agente y le hicieron al menos una pregunta.",
    signal: "Si es bajo: el agente no está siendo descubierto o la gente no entiende para qué sirve.",
  },
  {
    name: "Resolution rate",
    description: "Porcentaje de conversaciones que terminaron con el problema resuelto.",
    signal: "La métrica más importante. Si cae, algo falla en el conocimiento o en las respuestas.",
  },
  {
    name: "Deflection rate",
    description: "Cuántas solicitudes resolvió el agente sin intervención humana.",
    signal: "Si RRHH respondía 50 preguntas al mes y el agente resuelve 35, el deflection rate es del 70%.",
  },
]

const threeQuestions = [
  { question: "¿Lo usa la gente?", metric: "Adoption rate" },
  { question: "¿Les ayuda?", metric: "Resolution rate" },
  { question: "¿Vuelven?", metric: "Retención semana a semana" },
]

export function MetricsSection() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/4 to-background" />

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
            Cómo saber si la IA está funcionando
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Copilot Studio incluye un dashboard de analytics. Estas métricas son reales — llevan activas desde que creamos el agente.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {coreMetrics.map((metric, index) => (
            <motion.div
              key={metric.name}
              className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h4 className="mt-5 text-2xl font-semibold text-foreground">{metric.name}</h4>
              <p className="mt-3 text-base leading-relaxed text-foreground/80 md:text-lg">{metric.description}</p>
              <p className="mt-4 rounded-[1.25rem] border border-primary/20 bg-background/35 px-4 py-3 text-sm text-foreground/70">
                {metric.signal}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-border/60 bg-card/70 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Custom Metrics</p>
          <p className="mt-4 text-xl leading-relaxed text-foreground">
            Podéis definir vuestras propias métricas en lenguaje natural. Sin código. Por ejemplo:{" "}
            <span className="text-primary">«¿El usuario expresó satisfacción al final de la conversación?»</span>
          </p>
        </motion.div>

        <motion.div
          className="mt-16 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-foreground md:text-4xl">Las tres preguntas que importan</h3>
          <p className="mt-4 text-xl text-foreground/70">
            Para cualquier rol — RRHH, comercial, developer, directivo — tres preguntas que cualquier métrica de IA debería poder responder.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {threeQuestions.map((item, index) => (
            <motion.div
              key={item.question}
              className="rounded-[1.75rem] border border-primary/25 bg-primary/10 px-6 py-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <p className="text-2xl font-semibold text-foreground">{item.question}</p>
              <p className="mt-3 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                {item.metric}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            Medir adopción es fácil. Medir impacto real es el siguiente reto.
          </p>
          <p className="mt-6 text-xl text-foreground/70">
            Marcos como DORA miden la salud de los equipos de desarrollo. El informe DORA 2025 lo llama el{" "}
            <span className="font-semibold text-primary">«AI Productivity Paradox»</span>: más velocidad individual, métricas de entrega planas. Eso da para una charla entera. Y la tendremos.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

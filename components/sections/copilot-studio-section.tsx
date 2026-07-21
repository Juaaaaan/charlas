"use client"

import { motion } from "framer-motion"

const chatbotVsAgent = [
  {
    type: "Chatbot clásico",
    description: "Sigue un guión predefinido. Si la pregunta no encaja, se rompe.",
    detail: "Os da opciones que no sirven, os manda en bucles, os hace repetir lo mismo tres veces.",
    highlight: false,
  },
  {
    type: "Agente",
    description: "Razona, busca en su conocimiento y construye una respuesta.",
    detail: "Cuando no sabe algo, lo dice. No te manda en círculos. No inventa.",
    highlight: true,
  },
]

const keyPoints = [
  {
    title: "Sin código",
    body: "Cualquier persona de esta sala puede construir un agente en Copilot Studio. No hace falta ser developer.",
  },
  {
    title: "Conocimiento propio",
    body: "Los documentos que conectáis no salen de la empresa. IA con vuestros datos, bajo vuestro control.",
  },
  {
    title: "Vive en Teams",
    body: "Se despliega en un canal de Teams. Sin instalar nada nuevo ni cambiar hábitos.",
  },
]

export function CopilotStudioSection() {
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
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 1</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Chatbot vs agente
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            ¿Quién ha tenido una mala experiencia con un chatbot? Hoy vamos a ver algo que parece un chatbot pero funciona de forma completamente diferente.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {chatbotVsAgent.map((item, index) => (
            <motion.div
              key={item.type}
              className={`rounded-[2rem] border p-8 md:p-10 ${
                item.highlight
                  ? "border-primary/30 bg-primary/10"
                  : "border-border/60 bg-card/70"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${
                item.highlight ? "text-primary" : "text-muted-foreground"
              }`}>
                {item.type}
              </p>
              <p className="mt-4 text-2xl font-semibold leading-snug text-foreground md:text-3xl">
                {item.description}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/72">
                {item.detail}
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
            La diferencia entre un chatbot y un agente es la misma que entre un contestador automático y una persona que realmente te escucha.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-foreground md:text-4xl">Tres cosas clave de Copilot Studio</h3>
          <p className="mt-4 text-xl text-foreground/70">
            La diferencia entre un LLM genérico y un agente de Copilot Studio es la misma que entre un becario recién llegado y alguien que lleva tres años en la empresa.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {keyPoints.map((point, index) => (
            <motion.div
              key={point.title}
              className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h4 className="mt-5 text-2xl font-semibold text-foreground">{point.title}</h4>
              <p className="mt-3 text-base leading-relaxed text-foreground/72 md:text-lg">{point.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-[1.75rem] border border-primary/20 bg-primary/8 px-6 py-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-xl font-semibold text-foreground md:text-2xl">
            Esto es el Nivel 4. Agentic. La IA no solo asiste — actúa de forma autónoma dentro de un proceso definido.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

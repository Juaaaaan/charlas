"use client"

import { motion } from "framer-motion"

const llmCards = [
  {
    term: "LLM",
    label: "El problema",
    definition:
      "Large Language Model. El motor detrás de Claude, ChatGPT y Copilot. Entiende y genera texto de forma natural. Pero no recuerda nada entre sesiones.",
  },
  {
    term: "Wiki LLM",
    label: "La solución",
    definition:
      "Base de conocimiento en markdown que la IA puede leer, actualizar y mantener. El contexto persiste entre sesiones porque vive en ficheros, no en la conversación.",
  },
  {
    term: "OKF",
    label: "El estándar",
    definition:
      "Open Knowledge Format. Estándar de Google que añade metadatos al inicio de cada fichero: tipo, descripción, etiquetas y relaciones. La wiki se convierte en un grafo navegable.",
  },
]

const toolCards = [
  {
    tool: "Obsidian",
    role: "El cuaderno",
    detail: "App de notas en markdown. Gratuita, local, sin servidores de terceros. Todo son ficheros de texto en tu ordenador.",
    highlight: false,
  },
  {
    tool: "GitHub",
    role: "La memoria compartida",
    detail: "El repositorio donde vive el vault. Se sincroniza automáticamente. Cualquier persona del equipo puede ver y contribuir.",
    highlight: false,
  },
  {
    tool: "La IA",
    role: "La que lo mantiene vivo",
    detail: "Genera ficheros, los clasifica, los sube al repo y los consulta en sesiones futuras. El trabajo que hace que los humanos abandonen sus wikis.",
    highlight: true,
  },
]

export function AIFoundationsSectionLLM() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/4 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        {/* Bloque 1 */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 1</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Qué es un Wiki LLM
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Los LLMs son potentes pero olvidadizos. Cada sesión empieza desde cero. El Wiki LLM existe para
            resolver ese límite: el conocimiento persiste fuera de la conversación.
          </p>
        </motion.div>

        <motion.div
          className="mb-8 grid gap-6 lg:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {llmCards.map((card, index) => (
            <div
              key={card.term}
              className={`rounded-[2rem] border p-8 ${
                index === 1
                  ? "border-primary/30 bg-primary/10"
                  : "border-border/70 bg-card/70"
              }`}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                {card.label}
              </p>
              <h3 className="mt-4 text-4xl font-bold text-foreground">{card.term}</h3>
              <p className="mt-4 text-lg leading-relaxed text-foreground/76">{card.definition}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mb-24 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-2xl font-semibold leading-relaxed text-foreground md:text-3xl">
            Sin Wiki LLM: le explicas el contexto a la IA cada vez que la necesitas.
            <br />
            <span className="text-primary">Con Wiki LLM: el contexto ya está ahí. La IA lo consulta sola.</span>
          </p>
        </motion.div>

        {/* Bloque 2 */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 2</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            La herramienta
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Dos herramientas gratuitas. Una conexión. Y la IA hace el resto.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {toolCards.map((card) => (
            <div
              key={card.tool}
              className={`rounded-[2rem] border p-8 ${
                card.highlight
                  ? "border-primary/30 bg-primary/10"
                  : "border-border/70 bg-card/70"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{card.role}</p>
              <h3 className="mt-4 text-4xl font-bold text-foreground">{card.tool}</h3>
              <p className="mt-4 text-lg leading-relaxed text-foreground/76">{card.detail}</p>
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
            Esto no es solo para developers. Cualquier persona del equipo puede abrir Obsidian,
            escribir una nota sobre una reunión, y en treinta segundos esa nota está disponible para la IA.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

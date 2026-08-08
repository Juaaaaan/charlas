"use client"

import { motion } from "framer-motion"
import { Brain, Database, Image, LayoutGrid, Layers3, MessageSquare, Network, Search, Table2, Thermometer, Wrench } from "lucide-react"

const tenConcepts = [
  {
    icon: MessageSquare,
    title: "System prompt",
    label: "Quién es la IA antes de que escribas",
    description:
      "Instrucciones previas que definen comportamiento y tono. El CLAUDE.md y el copilot-instructions.md de la Charla 8 son vuestro system prompt.",
    takeaway: "La diferencia entre una IA genérica y una IA que trabaja para ti.",
  },
  {
    icon: Layers3,
    title: "Context engineering",
    label: "La calidad del contexto decide el resultado",
    description: "Mismo prompt, diferente contexto, resultado completamente distinto.",
    takeaway: "Basura entra, basura sale. Contexto entra, valor sale.",
  },
  {
    icon: Search,
    title: "RAG",
    label: "Buscar antes de responder",
    description:
      "Retrieval-Augmented Generation: la IA busca en vuestros documentos antes de responder. Es lo que construimos en la Charla 11 con el vault.",
    takeaway: "La diferencia entre una IA que sabe mucho en general y una que sabe lo que necesitas.",
  },
  {
    icon: Network,
    title: "Embeddings",
    label: "El mapa del significado",
    description:
      "La forma en que la IA representa el significado como números — por eso «coche» también encuentra «automóvil».",
    takeaway: "La razón por la que la IA entiende lo que queréis decir, no solo lo que escribís.",
  },
  {
    icon: Wrench,
    title: "Function calling",
    label: "De generar texto a actuar",
    description:
      "Permite que la IA pida a otra herramienta ejecutar código, consultar una base de datos o llamar a una API — como en la Charla 7 con Jira.",
    takeaway: "Lo que convierte a la IA de generador de texto en agente que actúa.",
  },
  {
    icon: Thermometer,
    title: "Temperature",
    label: "Cuánto improvisa la IA",
    description: "Baja: predecible y precisa. Alta: creativa y variada — y más propensa a equivocarse.",
    takeaway: "Temperature baja para informes. Temperature alta para ideas.",
  },
  {
    icon: Brain,
    title: "Chain-of-thought",
    label: "Pensar en voz alta, paso a paso",
    description:
      "Pedir a la IA que razone paso a paso antes de responder mejora los resultados en problemas complejos.",
    takeaway: "Tres palabras que mejoran cualquier prompt: «piensa paso a paso».",
  },
  {
    icon: Image,
    title: "Multimodal",
    label: "Texto, imagen, audio y vídeo",
    description:
      "Los modelos multimodales entienden una foto de una pizarra, un contrato escaneado o una captura de una gráfica.",
    takeaway: "Si podéis verlo, la IA puede analizarlo.",
  },
  {
    icon: Table2,
    title: "Structured output",
    label: "El formato que necesitas, no el que la IA elige",
    description:
      "Pedir una tabla o un formato concreto que se pueda copiar a otro sistema sin reformatear nada.",
    takeaway: "Pídele el formato que necesitas, no el que la IA quiera darte.",
  },
  {
    icon: LayoutGrid,
    title: "Context window",
    label: "La mesa de trabajo de la IA",
    description:
      "Todo lo que la IA puede tener en cuenta a la vez. Si se llena, empieza a olvidar lo más antiguo — por eso existe el Wiki LLM.",
    takeaway: "La context window es la mesa de trabajo de la IA. Mantenedla ordenada.",
  },
]

const connectionNotes = [
  "System prompt + context engineering deciden la calidad base.",
  "RAG y embeddings deciden si la IA sabe lo vuestro, no solo lo general.",
  "Temperature y chain-of-thought deciden cómo piensa y cuánto improvisa.",
  "Structured output y context window deciden si el resultado es usable.",
]

export function TokenContextSectionContextConcept() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,150,255,0.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          className="mx-auto mb-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Nivel 2</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Los 10 conceptos que os faltan
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Diez conceptos, dos minutos cada uno, con ejemplos de vuestro trabajo diario.
          </p>
        </motion.div>

        <motion.div
          className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Lectura rápida</p>
            <h3 className="mt-4 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
              El vocabulario importa.
            </h3>
            <p className="mt-5 text-xl leading-relaxed text-foreground/82 md:text-2xl">
              Cuando entendéis qué es RAG o qué hace la temperature, usáis la IA mejor — sabéis qué palanca tocar.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {tenConcepts.map((item, index) => (
              <motion.div
                key={item.title}
                className={`grid gap-5 rounded-[1.5rem] border p-5 md:grid-cols-[13rem_1fr_20rem] md:items-center md:p-6 ${
                  index % 2 === 0 ? "border-primary/30 bg-background/35" : "border-primary/20 bg-primary/8"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{item.title}</p>
                    <h4 className="mt-2 text-xl font-semibold leading-tight text-foreground">{item.label}</h4>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{item.description}</p>
                <p className="rounded-[1.1rem] border border-primary/20 bg-background/35 px-4 py-3 text-base font-semibold leading-snug text-foreground">
                  {item.takeaway}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Idea clave</p>
            <h3 className="mt-4 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
              El vocabulario no es un examen. Es una caja de herramientas.
            </h3>
            <p className="mt-6 text-xl leading-relaxed text-foreground/82 md:text-2xl">
              No hace falta memorizar definiciones exactas. Hace falta saber qué palanca tocar cuando algo no
              funciona: ¿falta contexto? ¿falta system prompt? ¿necesita pensar paso a paso?
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-primary/20 bg-primary/8 p-5">
              <p className="text-lg leading-relaxed text-foreground/84">
                La pregunta útil no es «¿qué es RAG?». Es «¿qué necesito ahora: que busque, que piense o que
                actúe?».
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-background/35">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Cómo se conecta todo</p>
            <div className="mt-8 grid gap-4">
              {connectionNotes.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.35rem] border px-5 py-5 ${
                    index === 0 || index === 2 ? "border-primary/25 bg-background/35" : "border-primary/20 bg-primary/8"
                  }`}
                >
                  <p className="text-lg font-semibold leading-snug text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-2xl font-semibold leading-relaxed text-balance text-foreground md:text-3xl">
              Diez conceptos, un objetivo: que sepáis qué palanca tocar.
              <br />
              El vocabulario importa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

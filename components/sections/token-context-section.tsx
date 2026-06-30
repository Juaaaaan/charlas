"use client"

import { motion } from "framer-motion"
import {
  AlertCircle,
  CircleDollarSign,
  Compass,
  Eye,
  FileQuestion,
  FileWarning,
  Layers3,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react"

const reasons = [
  {
    icon: Eye,
    title: "Define lo que la IA puede ver",
    description: "El modelo no trabaja con la realidad completa. Trabaja con la parte de realidad que le damos.",
  },
  {
    icon: Compass,
    title: "Condiciona el criterio de respuesta",
    description: "Las reglas, fuentes y ejemplos cambian qué prioriza, qué ignora y cómo estructura la salida.",
  },
  {
    icon: ShieldCheck,
    title: "Afecta a confianza, coste y riesgo",
    description: "Un contexto bien elegido ayuda a decidir cuándo usar la respuesta y cuándo revisarla.",
  },
]

const problems = [
  {
    icon: FileQuestion,
    title: "Falta contexto",
    description: "La IA generaliza, asume demasiado o rellena huecos.",
  },
  {
    icon: Layers3,
    title: "Sobra contexto",
    description: "Se distrae, tarda más y puede perder lo importante entre ruido.",
  },
  {
    icon: FileWarning,
    title: "Está obsoleto",
    description: "Responde con reglas antiguas, documentación vieja o decisiones superadas.",
  },
  {
    icon: AlertCircle,
    title: "Es contradictorio",
    description: "Mezcla criterios y puede dar una respuesta elegante pero incoherente.",
  },
  {
    icon: ShieldAlert,
    title: "Es sensible",
    description: "Puede exponer datos, secretos o información interna que no debería procesar.",
  },
  {
    icon: CircleDollarSign,
    title: "Cuesta dinero",
    description: "Todo lo que entra y sale del modelo tiene impacto en tokens, latencia y escala.",
  },
]

export function TokenContextSection() {
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
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 1</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Por qué es importante
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            El contexto importa porque marca el terreno de juego: qué ve la IA, con qué reglas trabaja y qué parte del
            proceso seguimos teniendo que validar las personas.
          </p>
        </motion.div>

        <div className="mb-8 grid gap-5 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              className={`rounded-[1.75rem] border p-7 ${
                index === 0 ? "border-primary/30 bg-primary/10" : "border-border/70 bg-card/90"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold leading-tight text-foreground">{item.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-foreground/76">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Cuando el contexto se diseña mal
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {problems.map((item, index) => (
            <motion.div
              key={item.title}
              className={`rounded-[1.75rem] border p-7 ${
                index === 0 || index === 5 ? "border-primary/30 bg-primary/10" : "border-border/70 bg-card/90"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold leading-tight text-foreground">{item.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-foreground/76">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-5xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            Más contexto no significa mejor contexto. Mejor contexto significa contexto relevante.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { BookMarked, Building2, RefreshCw, Users } from "lucide-react"

const skillFeatures = [
  {
    icon: BookMarked,
    title: "No es un prompt",
    description:
      "Un Skill no es algo que escribís cada vez. Es contexto persistente: una configuración que arranca cargada antes de que empecéis a escribir.",
  },
  {
    icon: Building2,
    title: "Sabe cómo trabajamos",
    description:
      "Quiénes sois, qué tono usar, qué reglas seguir siempre, qué documentos son de referencia. Todo eso definido una vez, disponible siempre.",
  },
  {
    icon: Users,
    title: "Consistencia para el equipo",
    description:
      "Cualquier persona que use el Skill obtiene respuestas coherentes, sin tener que explicar el contexto cada vez.",
  },
  {
    icon: RefreshCw,
    title: "En Claude: Projects",
    description:
      "Le dais instrucciones, adjuntáis documentos, definís su comportamiento — y a partir de ahí cada conversación arranca ya con ese contexto cargado.",
  },
]

const analogy = [
  {
    label: "spec.md",
    description: "Las instrucciones para una carrera concreta.",
    highlight: false,
  },
  {
    label: "Skill",
    description: "El entrenamiento del caballo. Lo que sabe hacer siempre, antes de que le deis ninguna instrucción.",
    highlight: true,
  },
]

export function SkillsSection() {
  return (
    <section className="relative py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          className="mx-auto mb-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 2</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Skills: el arnés de comportamiento
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Si el SDD define qué construir, el Skill define cómo se comporta la IA con vuestro equipo. Persistente,
            consistente y sin repetir contexto en cada conversación.
          </p>
        </motion.div>

        {/* Analogía del arnés */}
        <motion.div
          className="mb-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">La metáfora del arnés</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {analogy.map((item) => (
              <div
                key={item.label}
                className={`rounded-[1.5rem] border px-6 py-6 ${
                  item.highlight
                    ? "border-primary/30 bg-background/35"
                    : "border-primary/20 bg-primary/8"
                }`}
              >
                <p className="text-xl font-bold text-primary">{item.label}</p>
                <p className="mt-3 text-lg leading-relaxed text-foreground/82">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Características del Skill */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`rounded-[1.75rem] border p-8 ${
                index === 3
                  ? "border-primary/30 bg-primary/10"
                  : "border-border/70 bg-card/90"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold leading-tight text-foreground">{feature.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-foreground/76">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Ejemplo concreto */}
        <motion.div
          className="mt-8 rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Ejemplo — Equipo</p>
          <p className="mt-5 text-3xl font-semibold leading-tight text-balance text-foreground md:text-4xl">
            Un Skill configurado para nuestros proyectos debería saber como trabajamos, conoce los procedimientos internos
            y sabe el tono debemos usar.
          </p>
          <p className="mt-6 text-xl leading-relaxed text-foreground/76">
            Cualquier persona del equipo que lo use obtiene respuestas consistentes, sin tener que explicar el contexto
            cada vez que abre una conversación.
          </p>
        </motion.div>

        {/* Frase de cierre */}
        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="mx-auto max-w-5xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            El Skill no es lo que le pedís a la IA. Es lo que la IA ya sabe sobre cómo trabajáis antes de que le pidáis nada.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"

const localLimits = [
  "No esperes la misma calidad que en los mejores modelos cloud.",
  "El hardware manda: RAM, VRAM y CPU/GPU cambian completamente la experiencia.",
  "Ejecutar en local da más control, pero la seguridad depende de accesos, registros y ficheros.",
  "Los modelos locales también inventan, se equivocan y necesitan revisión.",
  "Mantener modelos, versiones y configuración tiene coste operativo.",
]

const adoptionQuestions = [
  "¿Quién instala, actualiza y mantiene el modelo?",
  "¿Dónde quedan prompts, documentos, respuestas y registros?",
  "¿Qué calidad mínima hace aceptable el caso?",
  "¿Qué pasa si el modelo va lento, falla o inventa?",
  "¿Cuándo se escala a cloud o a revisión humana?",
]

const finalIdeas = [
  "Local significa control del entorno.",
  "El modelo se elige por tarea, datos y máquina.",
  "La decisión no es local contra cloud: es qué necesita el caso de uso.",
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
            Límites para decidir con criterio
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            La IA local tiene valor cuando encaja con una tarea, unos datos y una máquina concreta. Antes de adoptarla,
            conviene saber qué puede resolver, qué exige y dónde empieza a quedarse corta.
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Límites</p>
            <div className="mt-6 grid gap-3">
              {localLimits.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.25rem] border px-5 py-4 text-lg text-foreground ${
                    index === 0 || index === 4 ? "border-primary/25 bg-background/35" : "border-primary/20 bg-primary/8"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-[1.5rem] border border-primary/20 bg-background/35 p-5 text-xl font-semibold leading-relaxed text-foreground">
              Ejecutar en local reduce dependencias, pero no elimina el criterio humano.
            </p>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Antes de adoptarlo</p>
            <div className="mt-6 grid gap-3">
              {adoptionQuestions.map((item, index) => (
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
            <div className="mt-6 rounded-[1.5rem] border border-primary/20 bg-primary/8 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Aterrizaje</p>
              <p className="mt-3 text-xl leading-relaxed text-foreground">
                El límite no es solo técnico. También es operativo: responsabilidades, trazabilidad, soporte y criterio
                para parar o escalar.
              </p>
            </div>
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
            El valor no está en ejecutar IA en local por defecto.
            <br />
            Está en saber cuándo debe estar cerca de tus datos, cuándo conviene usar cloud y cómo sostener la decisión.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

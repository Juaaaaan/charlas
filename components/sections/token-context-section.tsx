"use client"

import { motion } from "framer-motion"
import { Code2, Cpu, Database, Gauge, Layers3, Ruler } from "lucide-react"

const usageLevels = [
  {
    icon: Code2,
    title: "Tarea",
    label: "¿Qué necesito que haga?",
    description:
      "No todos los modelos sirven para lo mismo: hay modelos generalistas, de código, de razonamiento, de documentos, de visión o de idiomas.",
    takeaway: "El mejor modelo no es el más famoso, es el más adecuado para la tarea.",
  },
  {
    icon: Layers3,
    title: "Tamaño",
    label: "¿Qué escala tiene?",
    description:
      "3B, 7B, 13B o 70B indican una escala aproximada del modelo. Normalmente, cuanto más grande, más capacidad tiene, pero también necesita más máquina.",
    takeaway: "Más grande puede responder mejor, pero no siempre compensa.",
  },
  {
    icon: Gauge,
    title: "Cuantización",
    label: "¿Qué versión estoy ejecutando?",
    description:
      "Q4, Q5 o Q8 son versiones más ligeras del modelo. Reducen peso y consumo para poder ejecutarlo en un ordenador normal.",
    takeaway: "Q4 tiende a ser más rápido y ligero; Q8 tiende a conservar más calidad, pero pesa más.",
  },
  {
    icon: Ruler,
    title: "Contexto",
    label: "¿Cuánto puede leer de una vez?",
    description:
      "El contexto marca cuánta información puede tener presente el modelo: documentos, instrucciones, historial o código.",
    takeaway: "Más contexto ayuda con documentos largos, pero no arregla una mala tarea.",
  },
  {
    icon: Cpu,
    title: "Hardware",
    label: "¿Mi equipo puede moverlo bien?",
    description: "CPU, RAM, GPU y VRAM condicionan si el modelo carga, si responde fluido o si va demasiado lento.",
    takeaway: "La experiencia depende tanto del modelo como del equipo.",
  },
]

const selectionRules = [
  "Empieza por un modelo pequeño o medio.",
  "Prueba con una tarea real y ejemplos representativos.",
  "Mide si responde con la calidad y velocidad que necesitas.",
  "Sube tamaño solo si realmente necesitas más calidad.",
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
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 2</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Cómo diferenciar modelos locales
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            En local el nombre del modelo no basta. Hay que mirar tamaño, formato, contexto y máquina disponible para
            saber si encaja con el caso de uso.
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
              No busques “el mejor modelo”. Busca el modelo que encaja.
            </h3>
            <p className="mt-5 text-xl leading-relaxed text-foreground/82 md:text-2xl">
              Un modelo local se elige respondiendo a tres preguntas: ¿para qué lo quiero?, ¿qué calidad necesito? y
              ¿qué puede mover mi equipo?
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {usageLevels.map((item, index) => (
              <motion.div
                key={item.label}
                className={`grid gap-5 rounded-[1.5rem] border p-5 md:grid-cols-[13rem_1fr_20rem] md:items-center md:p-6 ${
                  index === 0 || index === 4 ? "border-primary/30 bg-background/35" : "border-primary/20 bg-primary/8"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
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
              Elegir modelo es decidir una renuncia.
            </h3>
            <p className="mt-6 text-xl leading-relaxed text-foreground/82 md:text-2xl">
              Si priorizas privacidad y control, aceptas más configuración. Si priorizas calidad máxima, quizá el cloud
              siga siendo mejor. Si priorizas velocidad local, quizá necesites un modelo más pequeño.
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-primary/20 bg-primary/8 p-5">
              <p className="text-lg leading-relaxed text-foreground/84">
                La comparación útil no es “este modelo es bueno o malo”. Es “para esta tarea, en esta máquina, con
                estos datos, responde lo bastante bien”.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-background/35">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Criterio de elección</p>
            <div className="mt-8 grid gap-4">
              {selectionRules.map((item, index) => (
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
              Regla práctica: empieza pequeño, prueba con una tarea real y sube tamaño solo si necesitas más calidad.
              <br />
              La ficha técnica orienta. La prueba real decide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

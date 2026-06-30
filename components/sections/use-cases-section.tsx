"use client"

import { motion } from "framer-motion"
import { Code, FileSearch, Headset, Layers3, Shield } from "lucide-react"

const useCases = [
  {
    icon: Headset,
    title: "Atencion y soporte",
    description: "Asistir a equipos internos, mediadores o canales con respuestas sobre procesos, coberturas y operativa.",
    category: "Funcional",
  },
  {
    icon: Layers3,
    title: "Documentacion y operaciones",
    description: "Resumir expedientes, clasificar correos, extraer datos y preparar borradores de trabajo.",
    category: "Mixto",
  },
  {
    icon: Shield,
    title: "Siniestros y backoffice",
    description: "Ayudar en triage, priorizacion y siguiente accion recomendada, siempre con validacion humana.",
    category: "Funcional",
  },
  {
    icon: FileSearch,
    title: "Busqueda en conocimiento interno",
    description: "Encontrar rapidamente informacion en procedimientos, normativa, FAQs y documentacion interna.",
    category: "Mixto",
  },
  {
    icon: Code,
    title: "Desarrollo y delivery",
    description: "Acelerar analisis, pruebas, documentacion, refactor y exploracion tecnica sin perder control.",
    category: "Tecnologia",
  },
]

export function UseCasesSection() {
  return (
    <section className="relative flex min-h-screen items-center py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-20 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Valor
          </span>
          <h2 className="mb-8 text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl">
            Donde aporta valor hoy en Seguros
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Antes de hablar de modelos conviene aterrizar la pregunta importante: para que sirve esto aqui y
            donde merece la pena empezar.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              className={`
                group relative rounded-2xl border border-border/50 p-8 transition-all duration-500 hover:border-primary/30
                ${index === 0 ? "bg-primary/5 md:col-span-2 lg:col-span-1 lg:row-span-2" : "bg-card"}
              `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/0 transition-colors duration-500 group-hover:bg-primary/5" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className={`
                      flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-500
                      ${index === 0 ? "bg-primary/20" : "bg-secondary group-hover:bg-primary/10"}
                    `}
                  >
                    <useCase.icon
                      className={`
                        h-6 w-6 transition-colors duration-500
                        ${index === 0 ? "text-primary" : "text-muted-foreground group-hover:text-primary"}
                      `}
                    />
                  </div>

                  <span
                    className={`
                      rounded-full px-3 py-1 text-xs font-medium
                      ${useCase.category === "Tecnologia" ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"}
                    `}
                  >
                    {useCase.category}
                  </span>
                </div>

                <h4 className={`mb-3 text-xl font-semibold ${index === 0 ? "text-primary" : "text-foreground"}`}>
                  {useCase.title}
                </h4>

                <p className="flex-1 leading-relaxed text-muted-foreground">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 rounded-2xl border border-border/50 bg-card p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground">
            El mejor punto de entrada no suele ser el caso mas futurista, sino el mas repetitivo, frecuente y
            acotable.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Code2, FileSearch, FileText, Server, ShieldCheck } from "lucide-react"

const automationPieces = [
  {
    icon: ShieldCheck,
    title: "Documentación interna",
    description: "Preguntar, resumir o buscar en contenido sensible sin sacarlo del entorno corporativo.",
  },
  {
    icon: FileSearch,
    title: "Contratos e informes",
    description: "Extraer riesgos, obligaciones, fechas y puntos clave para preparar la revisión humana.",
  },
  {
    icon: Code2,
    title: "Desarrollo y prototipos",
    description: "Generar borradores, utilidades y pruebas rápidas cuando interesa mantener control local.",
  },
  {
    icon: FileText,
    title: "Transformación de texto",
    description: "Normalizar entradas, preparar borradores o convertir formatos repetitivos con revisión humana.",
  },
]

const controlPatterns = [
  {
    title: "Local",
    description: "Tiene sentido cuando pesan privacidad, offline, coste fijo o control de versión.",
  },
  {
    title: "Cloud",
    description: "Suele ganar cuando necesitas máxima calidad, modelos punteros, escala o menos mantenimiento.",
  },
  {
    title: "Híbrido",
    description: "En empresa lo normal es combinar: local para ciertos datos y cloud para tareas más exigentes.",
  },
  {
    title: "Decisión práctica",
    description: "Elige por carga de trabajo, datos, riesgo, calidad esperada y coste operativo.",
  },
]

export function PromptSection() {
  return (
    <section className="relative py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mx-auto mb-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 3</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Usos reales de la IA en local
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            El valor aparece cuando la ejecución local encaja con una restricción concreta: datos, coste, disponibilidad,
            velocidad de prueba o control del entorno.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Dónde aporta</p>
              <h3 className="mt-4 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
                IA local no es una categoría abstracta. Es una forma de resolver trabajos concretos con más control.
              </h3>
              <p className="mt-6 text-xl leading-relaxed text-foreground/82 md:text-2xl">
                No hace falta empezar por casos enormes. Tiene sentido probar con tareas acotadas, repetibles y fáciles
                de validar con ejemplos reales.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {automationPieces.map((item, index) => (
                <motion.div
                  key={item.title}
                  className={`rounded-[1.5rem] border p-6 ${
                    index === 0 || index === 2 ? "border-primary/30 bg-background/35" : "border-primary/20 bg-primary/8"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-2xl font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Local frente a cloud</p>
              <h3 className="mt-3 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
                La clave no es local o cloud. Es qué necesita la tarea.
              </h3>
              <div className="mt-8 grid gap-4">
                {controlPatterns.map((item, index) => (
                  <div
                    key={item.title}
                    className={`rounded-[1.35rem] border px-5 py-5 ${
                      index === 1 || index === 3 ? "border-primary/25 bg-primary/8" : "border-border/60 bg-background/35"
                    }`}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{item.title}</p>
                    <p className="mt-2 text-2xl font-semibold leading-snug text-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

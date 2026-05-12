"use client"

import { motion } from "framer-motion"
import { Cloud, MonitorCog } from "lucide-react"

const comparisonCards = [
  {
    icon: Cloud,
    eyebrow: "Uso habitual",
    title: "IA como servicio",
    description:
      "Accedes a un modelo remoto desde una web, una API o una herramienta corporativa. La potencia está fuera de tu equipo.",
    tone: "border-border/70 bg-background/40",
  },
  {
    icon: MonitorCog,
    eyebrow: "Cambio de enfoque",
    title: "IA ejecutada en local",
    description:
      "Descargas un modelo y lo ejecutas en tu máquina o en infraestructura propia. Ganas control, pero asumes límites y configuración.",
    tone: "border-primary/30 bg-primary/10",
  },
]

export function AIFoundationsSection() {
  return (
    <section className="relative py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 1</span>
          <h2 className="text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Qué significa usar IA en local
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-foreground/76 md:text-2xl">
            No hablamos de entrenar un modelo desde cero. Hablamos de descargar un modelo ya creado y ejecutarlo cerca
            del usuario, de los documentos o del entorno donde se quiere probar.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 max-w-4xl rounded-[1.5rem] border border-primary/20 bg-primary/8 px-6 py-6 md:px-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">La idea clave</p>
          <p className="mt-3 max-w-3xl text-2xl font-semibold leading-tight text-balance text-foreground md:text-3xl">
            IA en local no significa IA privada por arte de magia.
            <br />
            Significa cambiar dónde se ejecuta el modelo y quién controla el entorno.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {comparisonCards.map((item, index) => (
            <motion.div
              key={item.title}
              className={`rounded-[1.75rem] border p-7 md:p-8 ${item.tone}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-primary/90">{item.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-balance text-foreground md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/74 md:text-lg">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 max-w-4xl rounded-[1.5rem] border border-border/70 bg-card/85 px-6 py-6 md:px-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Transición</p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-balance text-foreground md:text-3xl">
            El primer reto es saber qué modelo tienes delante.
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/74 md:text-lg">
            En local aparecen nombres, tamaños, formatos y cuantizaciones. Si no sabes leer esas señales, es fácil
            elegir un modelo demasiado lento, demasiado pequeño o inadecuado para la tarea.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

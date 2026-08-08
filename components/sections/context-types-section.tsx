"use client"

import { motion } from "framer-motion"
import { Clock3, FolderCheck, RefreshCw } from "lucide-react"

const temporalItems = ["mensajes anteriores", "aclaraciones", "decisiones tomadas", "correcciones del usuario"]

const persistentItems = ["instrucciones guardadas", "preferencias", "documentación del proyecto", "archivos AGENTS.md o README.md"]

export function ContextTypesSection() {
  return (
    <section className="relative py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

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
            Contexto temporal y persistente
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Hay contexto que vive solo durante una conversación y contexto que queda preparado para futuras tareas.
            Entender la diferencia ayuda a no repetirnos y a trabajar con más consistencia.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45 }}
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
              <Clock3 className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Durante el chat</p>
            <h3 className="mt-4 text-4xl font-semibold leading-tight text-balance text-foreground">
              Contexto temporal
            </h3>
            <p className="mt-5 text-xl leading-relaxed text-foreground/78">
              Lo que ocurre en la conversación actual: matices, decisiones, cambios de criterio y respuestas anteriores.
            </p>
            <div className="mt-7 grid gap-3">
              {temporalItems.map((item) => (
                <p key={item} className="rounded-[1.1rem] border border-border/60 bg-background/35 px-4 py-3 text-lg">
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-7 rounded-[1.5rem] border border-primary/20 bg-primary/8 p-5 text-xl font-semibold leading-snug text-foreground">
              “Antes hemos decidido que esto era para dirección, no para un equipo técnico.”
            </p>
          </motion.div>

          <motion.div
            className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-background/35">
              <FolderCheck className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Entre sesiones</p>
            <h3 className="mt-4 text-4xl font-semibold leading-tight text-balance text-foreground">
              Contexto persistente
            </h3>
            <p className="mt-5 text-xl leading-relaxed text-foreground/78">
              Información que queda guardada en un entorno de trabajo: reglas, preferencias, documentación y archivos
              del proyecto.
            </p>
            <div className="mt-7 grid gap-3">
              {persistentItems.map((item) => (
                <p
                  key={item}
                  className="rounded-[1.1rem] border border-primary/20 bg-background/35 px-4 py-3 text-lg font-semibold"
                >
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-7 rounded-[1.5rem] border border-primary/20 bg-background/35 p-5 text-xl font-semibold leading-snug text-foreground">
              “En este proyecto usamos este stack, estos comandos y estas reglas de estilo.”
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-background/35">
              <RefreshCw className="h-7 w-7 text-primary" />
            </div>
            <p className="text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
              El contexto temporal ayuda en una conversación. El persistente ayuda a trabajar de forma consistente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { GitGraph, Sparkle, Webhook } from "lucide-react"

export function BonusSection() {
  return (
    <section className="relative py-24 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-12 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bonus</span>
          <h2 className="text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl">
            .claude/ y el hook de Graphify
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            El mismo concepto en Claude Code — y algo que va un paso más allá.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            className="rounded-[1.75rem] border border-border/70 bg-card p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Sparkle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">CLAUDE.md</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              El concepto es idéntico — mismo fichero, mismas convenciones. Pero en Claude Code hay algo más: el
              settings.json con hooks.
            </p>
          </motion.div>

          <motion.div
            className="rounded-[1.75rem] border border-primary/30 bg-primary/10 p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-background/35">
              <Webhook className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Hook de Graphify</h3>
            <p className="mt-4 leading-relaxed text-foreground/82">
              Antes de cada sesión, Claude lee automáticamente el grafo de conocimiento del proyecto. No solo sabe
              escribir código con vuestras convenciones — entiende la arquitectura completa.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-6 rounded-[1.75rem] border border-border/70 bg-card/90 p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <GitGraph className="h-5 w-5 text-primary" />
            </div>
            <p className="text-lg leading-relaxed text-foreground/82">
              Qué ficheros dependen de cuáles, qué módulos existen, cómo está estructurado el proyecto. Esto lo
              veremos en detalle en la próxima charla — pero es el siguiente nivel de lo que hemos visto hoy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client";

/**
 * BLOQUE 7 — VISUAL GUIADO · PLACEHOLDER
 *
 * Pendiente de contenido. El guion deja abiertas dos vías que Juan quiere
 * combinar: recorrido por opencode.ai + walkthrough de OpenCode ya montado.
 * Cuando pase el material, se rellena `pasos` con el paso a paso real y se
 * quita el aviso de pendiente.
 *
 * El reseñable objetivo del bloque NO cambia, sea cual sea el material:
 * el instante en que se elige el proveedor / modelo.
 */

import { motion } from "framer-motion";

export function VisualSection20() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 7 · Visual guiado
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Verlo con los ojos
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Hasta aquí lo hemos contado. Ahora lo miramos: dónde vive la
            herramienta, cómo se maneja, y el único gesto que resume toda la
            charla.
          </p>
        </motion.div>

        <motion.div
          className="rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            El momento que hay que mirar
          </p>
          <p className="mx-auto mt-6 max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            El instante en que se elige el proveedor. Ahí es donde se ve, en una
            pantalla, de qué hemos estado hablando toda la charla.
          </p>
        </motion.div>

        {/* Aviso de trabajo pendiente — retirar al rellenar el bloque. */}
        <motion.div
          className="mt-8 rounded-[1.75rem] border border-dashed border-border/70 bg-card/50 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
            Contenido pendiente
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/65">
            Este bloque se apoya en material visual (recorrido por el sitio de
            OpenCode y walkthrough de la herramienta ya montada) que se
            incorporará antes de impartir la charla.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

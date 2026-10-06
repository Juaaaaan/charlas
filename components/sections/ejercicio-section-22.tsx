"use client";

import { motion } from "framer-motion";

export function EjercicioSection22() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
        <motion.span
          className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          Bloque 4 · Ejercicio en vivo
        </motion.span>

        <motion.h2
          className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Pensad en algo real
        </motion.h2>

        <motion.div
          className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 backdrop-blur md:px-10 md:py-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-lg leading-relaxed text-foreground/82 md:text-xl">
            Una cosa real que tengáis que hacer esta semana — de las que
            ibais a hacer vosotros solos, sin pensarlo dos veces. Un email que
            os da pereza, una propuesta, organizar algo, preparar una
            reunión.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/68">
            No hace falta decirlo en voz alta. Solo tenedlo en la cabeza: el
            recorrido que viene son seis paradas, y en cada una la vamos a
            aplicar a esa cosa que acabáis de pensar. Si queréis escribirla en
            el chat de Teams, adelante — pero no hace falta.
          </p>
        </motion.div>

        <motion.p
          className="mt-8 text-2xl font-semibold leading-snug text-balance text-foreground md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Pensad en algo real. Lo vamos a usar.
        </motion.p>
      </div>
    </section>
  );
}

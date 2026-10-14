"use client";

import { motion } from "framer-motion";

export function ClosingSection22() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(74,145,255,0.18),transparent_36%),linear-gradient(180deg,rgba(12,16,26,1)_0%,rgba(9,13,21,0.98)_50%,rgba(7,10,18,1)_100%)]" />
      <div className="absolute left-1/2 bottom-10 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Cierre
          </span>
          <h2 className="text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            La frase, seis veces
          </h2>
        </motion.div>

        <motion.div
          className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 backdrop-blur md:px-10 md:py-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg leading-relaxed text-foreground/82 md:text-xl">
            Habéis oído la misma frase seis veces, aplicada a algo vuestro de
            verdad y a cosas que ya habíamos visto juntos. Es a propósito: eso
            es el hábito, haciéndose.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82 md:text-xl">
            Esto no iba de un ciclo de software. Iba del ciclo de cualquier
            cosa que hacéis: una idea, decidir qué queréis, hacerlo,
            comprobarlo, soltarlo, y que no se pierda. En cada parada, la
            misma pregunta.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl lg:text-[2.6rem]">
            Antes de invertir esfuerzo, pregúntale primero.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-balance text-foreground/75 md:text-xl">
            IA-first no es IA-only ni IA-always: la IA abre opciones; vuestro
            criterio decide.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Y si os lleváis una idea más
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            El arnés que llevamos meses montando para la IA, podéis
            ponéroslo también a vosotros mismos. Primero entendéis el
            camino. La IA os ayuda a explorarlo y a recorrerlo mejor.
            Vuestro criterio sigue llevando la rienda.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

import { preguntas, tramos } from "../data/piezas";

export function MapaSection26() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-aura-seccion" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 2 · El mapa
          </span>
          <h2 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Diez preguntas, cuatro tramos
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            En fila parece una lista de temas. Pero cada charla nace de una
            pregunta que tiene cualquiera que trabaje con IA.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {tramos.map((tramo, index) => (
            <motion.div
              key={tramo.id}
              className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-sm font-semibold text-primary">
                  {tramo.id}
                </span>
                <h3 className="text-2xl font-semibold text-foreground">
                  {tramo.nombre}
                </h3>
              </div>

              <ul className="mt-6 flex flex-col gap-3">
                {preguntas
                  .filter((p) => p.tramo === tramo.id)
                  .map((p) => (
                    <li key={p.numero} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/40 font-mono text-[11px] font-semibold text-foreground/70">
                        {p.numero}
                      </span>
                      <span className="text-base leading-relaxed text-foreground/85 md:text-lg">
                        {p.corta}
                      </span>
                    </li>
                  ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-foreground/76"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Cada pieza tiene su nombre y lo que hace. Si no programáis, no pasa
          nada: las reconoceréis por lo que hacen, no por cómo se llaman.
        </motion.p>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-2xl font-semibold leading-relaxed text-balance text-foreground md:text-3xl">
            No son temas sueltos: son diez preguntas.
          </p>
        </motion.div>

        <motion.p
          className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Las charlas de mi compañero completan el mapa por el lado de la
          herramienta.
        </motion.p>
      </div>
    </section>
  );
}

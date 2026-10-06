"use client";

import { motion } from "framer-motion";

export function CriterioSection22() {
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
            Bloque 2 · ¿Construir o ya existe?
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            No todo necesita un agente
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Preguntar primero no significa «móntate un agente para todo». A
            veces la pregunta correcta es la contraria: ¿hace falta construir
            algo, o ya existe una herramienta que lo resuelve?
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          <motion.div
            className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex w-fit rounded-full border border-border/70 bg-background/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/60">
              Camino claro, pasos fijos
            </span>
            <h3 className="mt-5 text-2xl font-semibold leading-tight text-foreground">
              PowerApps / Power Automate
            </h3>
            <p className="mt-4 text-base leading-relaxed text-foreground/78">
              Aplicaciones y automatizaciones que se montan arrastrando
              piezas, sin programar. Pensadas para tareas estructuradas y
              repetitivas: aprobar un gasto, recoger datos de un formulario,
              mover algo de un sitio a otro.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col rounded-[1.75rem] border border-primary/25 bg-primary/8 px-6 py-8 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Hay que pensar y decidir
            </span>
            <h3 className="mt-5 text-2xl font-semibold leading-tight text-foreground">
              Un agente — como el de la Charla 19
            </h3>
            <p className="mt-4 text-base leading-relaxed text-foreground/82">
              Para cuando hay que leer, juzgar, decidir con criterio — cosas
              sin un camino fijo de pasos. El Analista de RFP no podía ser un
              PowerApp: tenía que entender un pliego de verdad, detectar
              contradicciones, razonar. Eso no se arrastra con el ratón.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            La regla corta
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            Construir un agente a medida cuando el problema es estructurado y
            repetitivo es como contratar un arquitecto para colgar un cuadro.
            Camino claro y pasos fijos, PowerApps. Hay que pensar y decidir en
            cada caso, agente.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            No todo lo que automatizáis necesita un agente. A veces la
            pregunta IA-first es la contraria: ¿hace falta construir algo, o
            ya existe?
          </p>
        </motion.div>
      </div>
    </section>
  );
}

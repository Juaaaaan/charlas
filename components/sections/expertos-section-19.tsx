"use client";

import { motion } from "framer-motion";

const hijos = [
  {
    nombre: "Extractor de requisitos",
    solo: "Solo lee y saca la lista.",
    no: "No juzga, no estima.",
  },
  {
    nombre: "Detector de riesgos",
    solo: "Solo busca trampas, ambigüedades, contradicciones, huecos.",
    no: "No extrae.",
  },
  {
    nombre: "Estimador de tareas",
    solo: "Solo estima esfuerzo.",
    no: "No lee ni juzga.",
  },
];

export function ExpertosSection19() {
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
            Parada 2 · La sala de expertos
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Cada agente hace una cosa (y sabe qué NO hace)
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Tres especialistas a las órdenes del coordinador. Especializar mejora
            la calidad: cada uno tiene la cabeza en una sola tarea.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {hijos.map((h, index) => (
            <motion.div
              key={h.nombre}
              className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                {h.nombre}
              </span>
              <p className="mt-5 text-base leading-relaxed text-foreground/82">
                {h.solo}
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-foreground/55">
                {h.no}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base leading-relaxed text-foreground/78">
            ¿Por qué separarlos, si un solo agente «podría» hacerlo todo? Por lo
            mismo que en una empresa no le pides a una sola persona que sea
            contable, abogado y comercial a la vez.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[1.75rem] border border-primary/20 bg-primary/8 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            El detalle que vuela cabezas · cómo decide el jefe a quién llamar
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            No hay ninguna programación, ningún «si pasa esto, llama a aquel».
            Cada especialista tiene escrito, en lenguaje normal,{" "}
            <span className="font-mono text-primary/90">«úsame para detectar riesgos»</span>.
            Y el coordinador lo <span className="font-semibold text-foreground">lee</span> y
            decide. La coordinación se hace con palabras, no con código.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60">
            «No responder» · por qué el trabajo vuelve al jefe
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/80">
            Cada especialista, cuando termina, no le habla al usuario: le
            devuelve su parte al coordinador. Por eso al final veis un informe
            único y ordenado, no tres agentes hablando a la vez y pisándose. El
            jefe recoge las tres piezas y las presenta juntas.
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
            El pegamento que une a estos agentes no es código. Es lenguaje. Se
            entienden leyéndose la descripción unos a otros.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

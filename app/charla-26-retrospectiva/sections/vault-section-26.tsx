"use client";

import { motion } from "framer-motion";

const pasos = [
  "Pregunta",
  "Respuesta",
  "Fichas utilizadas",
  "Frase exacta de respaldo",
];

const consultas = [
  {
    pregunta:
      "Quiero pasar un documento con datos de clientes a una IA. ¿Qué conceptos me aplican y qué debo comprobar antes?",
    lleva: "Pregunta 5",
    piezas: "Gobernanza, inyección de instrucciones",
  },
  {
    pregunta:
      "Quiero que la IA haga un trabajo repetitivo de varios pasos. ¿Qué piezas necesito y en qué orden?",
    lleva: "Preguntas 9 y 10",
    piezas: "Encargar un trabajo grande y comprobarlo",
  },
];

export function VaultSection26() {
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
            Bloque 4 · Preguntarle al vault
          </span>
          <h2 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Todo esto está escrito
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Lo que acabáis de ver no está en una cabeza: está en una carpeta
            de ficheros de texto, la Wiki LLM de la charla 11. Sirve para
            hacerle preguntas en lenguaje normal.
          </p>
        </motion.div>

        <motion.div
          className="mb-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {pasos.map((paso, index) => (
            <div key={paso} className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-medium text-foreground/80">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-xs font-semibold text-primary">
                  {index + 1}
                </span>
                {paso}
              </span>
              {index < pasos.length - 1 ? (
                <span aria-hidden="true" className="text-foreground/40">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-2">
          {consultas.map((c, index) => (
            <motion.div
              key={c.pregunta}
              className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Consulta {index + 1}
              </p>
              <p className="mt-4 text-lg font-medium leading-relaxed text-foreground md:text-xl">
                «{c.pregunta}»
              </p>
              <p className="mt-6 rounded-[1rem] border border-border/50 bg-background/40 px-4 py-3 text-sm leading-relaxed text-foreground/70">
                Debería llevar a: <strong className="text-foreground/90">{c.lleva}</strong>
                {" · "}
                {c.piezas}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-2xl font-semibold leading-relaxed text-balance text-foreground md:text-3xl">
            Sobre nuestro trabajo, lo que no está escrito no puede conocerlo de
            forma fiable.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-xl leading-relaxed text-balance text-foreground/78 md:text-2xl">
            Lo que está en el vault puede encontrarlo, citarlo y contrastarlo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

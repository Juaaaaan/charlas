"use client";

import { motion } from "framer-motion";

const preguntas = [
  {
    q: "¿Esto se equivoca? ¿Me puedo fiar?",
    a: "Se puede equivocar, como cualquiera. Por eso está diseñado para pararse y enseñarte lo que encontró antes de hacer nada. Tú validas. Y le prohibimos inventar: si no está en el documento, lo marca como duda.",
  },
  {
    q: "¿La estimación de cuánto cuesta es fiable?",
    a: "Es una estimación de magnitud, para decidir si merece la pena ofertar, no un presupuesto cerrado. El propio agente lo marca como orientativo y lista sus supuestos.",
  },
  {
    q: "¿Nuestros datos salen fuera de la empresa?",
    a: "No. Igual que en la 13: vive en el ecosistema corporativo, con vuestras credenciales. Para el directo usamos un pliego inventado de una academia de baile, precisamente para no enseñar datos reales de nadie.",
  },
  {
    q: "¿Yo podría montar uno?",
    a: "Sí, y de eso irá la parte 2. Si en tu día a día hay una tarea repetitiva de leer-y-ordenar, hay un agente para eso.",
  },
];

export function PreguntasSection19() {
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
            Para la sala · lo que probablemente preguntáis
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Cinco dudas razonables
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {preguntas.map((item, index) => (
            <motion.div
              key={item.q}
              className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <h3 className="text-lg font-semibold leading-tight text-balance text-foreground">
                {item.q}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/74">
                {item.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

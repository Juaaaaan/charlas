"use client";

import { motion } from "framer-motion";

const layers = [
  {
    name: "Sanitización de entrada",
    detail:
      "Filtrar patrones sospechosos conocidos antes de que lleguen al modelo.",
  },
  {
    name: "Separación de contexto",
    detail: "Distinguir con claridad qué es instrucción y qué es dato.",
  },
  {
    name: "Mínimo privilegio",
    detail: "El agente solo tiene acceso a lo estrictamente necesario.",
  },
  {
    name: "Validación de salida",
    detail: "Comprobar que el resultado cumple ciertas reglas antes de usarlo.",
  },
  {
    name: "Humano en el bucle",
    detail:
      "Una persona revisa y aprueba antes de una acción sensible — el checklist de la Charla 14, aplicado.",
  },
  {
    name: "Guardrails",
    detail:
      "Reglas de fondo que limitan el comportamiento del modelo, pase lo que pase.",
  },
];

export function DefenseLayersSection() {
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
            Bloque 2
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Cómo nos defendemos
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Ninguna de estas capas es perfecta por sí sola. Por eso se usan
            varias a la vez — defensa en profundidad, no una bala de plata.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {layers.map((l, index) => (
            <motion.div
              key={l.name}
              className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                Capa {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">
                {l.name}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/72">
                {l.detail}
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
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            No estáis aquí para eliminar el riesgo. Estáis aquí para reducirlo,
            capa a capa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

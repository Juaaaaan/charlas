"use client";

import { motion } from "framer-motion";

const approaches = [
  {
    name: "RLHF - Reinforcement Learning with Human Feedback",
    detail: "Humanos evalúan qué respuesta es mejor, y el modelo aprende de esas preferencias.",
  },
  {
    name: "Constitutional AI",
    detail:
      "En vez de evaluar cada respuesta a mano, se escriben principios claros y otro modelo evalúa si se cumplen.",
  },
];

export function ConstitutionalAISection() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/4 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 5
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Por qué el modelo se niega a veces
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Seguro que el asistente os ha dicho «no puedo ayudarte con eso»
            delante de algo que os parecía razonable. Tiene un nombre.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {approaches.map((a, index) => (
            <motion.div
              key={a.name}
              className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8 md:py-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                Enfoque {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 text-3xl font-bold text-foreground">
                {a.name}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-foreground/75">
                {a.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-border/60 bg-card/70 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg leading-relaxed text-foreground/85 md:text-xl">
            Esto no es un capricho del modelo. Es la capa de alineamiento —
            la última barrera antes de que el modelo actúe. Los ataques del
            Bloque 3, en el fondo, son intentos de saltarse precisamente esta
            capa.
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
            Cuando el modelo dice que no, no está fallando. Está haciendo
            exactamente lo que le enseñaron a hacer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

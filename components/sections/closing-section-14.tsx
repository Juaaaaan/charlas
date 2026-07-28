"use client";

import { motion } from "framer-motion";

const maturityScale = [
  { score: "0", label: "Inexistente / Shadow AI" },
  { score: "1", label: "Inicial — uso individual, sin guías" },
  { score: "2", label: "Repetible — acuerdos de equipo" },
  { score: "3", label: "Gestionado — integración formal, métricas" },
  { score: "4", label: "Optimizado — gobernanza en el día a día" },
];

const finalIdeas = [
  "El Shadow AI no nace de mala fe. Nace de falta de información.",
  "Cuanto más impacto tiene la decisión sobre una persona real, más cuidado hace falta.",
  "Esto no es solo cosa de developers. Todos decidimos cada semana qué compartir con una IA.",
];

export function ClosingSectionGovernance() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 5 · Autoevaluación
          </span>
          <h2 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl">
            En qué nivel estáis vosotros
          </h2>
          <p className="max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Ya tenemos dentro de la empresa una forma de medirlo: el mismo
            framework de 8 dimensiones que usa el embajador de IA. Escala 0–4.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-5">
          {maturityScale.map((s, index) => (
            <motion.div
              key={s.score}
              className="rounded-[1.5rem] border border-border/60 bg-card/70 px-4 py-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <p className="font-mono text-4xl font-bold text-primary md:text-5xl">
                {s.score}
              </p>
              <p className="mt-3 text-sm leading-snug text-foreground/80 md:text-base">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 grid gap-4 lg:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-[1.75rem] border border-destructive/30 bg-destructive/8 px-6 py-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-destructive">
              Señal de alerta
            </p>
            <p className="mt-4 text-xl font-semibold leading-snug text-foreground md:text-2xl">
              Score ≤ 1 en Dim. 7 (Gobierno)
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground/72 md:text-lg">
              Formación urgente. Puede que se esté usando IA sin conocer las
              restricciones del cliente o del proyecto.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-primary/25 bg-primary/10 px-6 py-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Candidatos a champion
            </p>
            <p className="mt-4 text-xl font-semibold leading-snug text-foreground md:text-2xl">
              Score ≥ 3 en Dim. 8 (Cultura)
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground/72 md:text-lg">
              Personas que ayudan al resto del equipo a subir de nivel, no solo
              a cumplir la norma.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-24 mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Cierre
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Tres ideas para llevarse
          </h2>
        </motion.div>

        <motion.div
          className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {finalIdeas.map((idea, index) => (
              <div
                key={idea}
                className={`rounded-[1.5rem] border px-6 py-8 text-center ${
                  index === 1
                    ? "border-primary/30 bg-background/35"
                    : "border-primary/20 bg-primary/8"
                }`}
              >
                <p className="text-xl font-semibold leading-snug text-balance text-foreground md:text-2xl">
                  {idea}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            La semana pasada aprendimos a medir.
            <br />
            Hoy hemos aprendido a poner las reglas.
          </p>
          <p className="mt-6 text-lg text-foreground/60">
            El checklist rápido del Bloque 4.6 es lo que os lleváis a la mesa
            mañana.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

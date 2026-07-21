"use client";

import { motion } from "framer-motion";

const finalIdeas = [
  "Copilot Studio no es para developers.",
  "Construir es la parte fácil. Medir es la que marca la diferencia.",
  "Esto es el Nivel 4.",
];

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
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
          className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {finalIdeas.map((idea, index) => (
              <div
                key={idea}
                className={`rounded-[1.5rem] border px-6 py-8 ${
                  index === 1
                    ? "border-primary/30 bg-background/35"
                    : "border-primary/20 bg-primary/8"
                }`}
              >
                <p className="text-2xl font-semibold leading-tight text-balance text-foreground md:text-3xl">
                  {idea}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            La semana pasada vimos el mapa.
            <br />
            Hoy hemos puesto el primer pin.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

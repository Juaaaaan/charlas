"use client";

import { motion } from "framer-motion";

const roles = [
  {
    rol: "HR / funcional",
    lleva:
      "Para datos de empresa, quién tiene tu contexto (365 Copilot o subir el PDF). Prueba el modo «investigar» para preparar temas a fondo.",
  },
  {
    rol: "Comercial",
    lleva:
      "Coste del error alto por defecto: todo lo que va a cliente se verifica. Sube el dial para propuestas complejas.",
  },
  {
    rol: "Management",
    lleva:
      "Las cuatro capas son enseñables. Y «recordar / actuar» es donde tu equipo puede ganar tiempo de verdad. Pasadlo.",
  },
  {
    rol: "Developer",
    lleva:
      "Herramienta especializada + modelo potente + modos «actuar» (agentes). Es vuestro terreno natural.",
  },
];

export function RolesSection17() {
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
            Bloque 5 · Para todos
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Qué se lleva cada rol
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            El mismo método, aterrizado en el trabajo de cada uno.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {roles.map((r, index) => (
            <motion.div
              key={r.rol}
              className="flex flex-col rounded-[1.5rem] border border-border/70 bg-card/70 px-6 py-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                {r.rol}
              </span>
              <p className="mt-5 text-base leading-relaxed text-foreground/80">
                {r.lleva}
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
            Programéis o no, cada día tomáis estas cuatro decisiones. La única
            pregunta es si las tomáis por inercia o con criterio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

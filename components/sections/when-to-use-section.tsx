"use client";

import { motion } from "framer-motion";

const criteria = [
  {
    situation: "Tarea pequeña, bien acotada, la tienes clara",
    use: "Spec manual",
    note: "El overhead de una herramienta no compensa.",
  },
  {
    situation: "Proyecto que ya existe, cambios iterativos, ligereza sin atarte",
    use: "OpenSpec",
    note: "Delta specs sobre un spec vivo, sin lock-in.",
  },
  {
    situation: "Empiezas de cero, quieres el estándar con más comunidad",
    use: "Spec Kit",
    note: "El flujo de cinco fases y saltar entre stacks.",
  },
  {
    situation: "Tu equipo ya vive dentro de AWS y quieres rigor formal",
    use: "Kiro",
    note: "IDE integrado y EARS, a cambio de lock-in.",
  },
];

export function WhenToUseSection() {
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
            Bloque 5 · Criterio práctico
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Cuándo cada cosa
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            ¿Qué me llevo yo el lunes? No «instala OpenSpec». Me llevo un
            criterio.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {criteria.map((row, index) => (
            <motion.div
              key={row.use}
              className="grid gap-4 rounded-[1.5rem] border border-border/70 bg-card/70 px-6 py-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,0.7fr)_minmax(0,1.2fr)] md:items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <p className="text-base leading-relaxed text-foreground/80">
                {row.situation}
              </p>
              <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                {row.use}
              </span>
              <p className="text-sm leading-relaxed text-foreground/60">
                {row.note}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60">
            La advertencia honesta · cuándo NO usar spec formal
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/78">
            Para tareas triviales, montar un spec formal es contraproducente:
            genera más papeleo que valor. Corregir un typo o cambiar un color no
            necesita una constitución de proyecto. Cuanto más grande y ambigua
            es la tarea, más te salva el spec. Cuanto más pequeña y clara, más te
            estorba.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            El spec no es un impuesto que pagas siempre. Es un seguro que
            contratas cuando la tarea es lo bastante grande como para que valga
            la pena.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

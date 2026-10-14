"use client";

import { motion } from "framer-motion";

const rasgos = [
  {
    numero: "01",
    titulo: "Un único proveedor",
    detalle:
      "Funciona con el suyo y solo con el suyo. No hay motor que elegir: viene puesto de fábrica.",
  },
  {
    numero: "02",
    titulo: "Es cerrado",
    detalle:
      "No puedes ver por dentro cómo está hecho. No hay caja que abrir ni que auditar.",
  },
  {
    numero: "03",
    titulo: "Tu código sale fuera",
    detalle:
      "Para trabajar, vuestro código y vuestro contexto viajan a un servidor de un tercero.",
  },
];

const familiares = [
  {
    nombre: "Copilot de Office",
    detalle:
      "El de Word, Teams y Excel, que muchos usáis a diario. Está en este mismo lado: vuestros datos pasan por Microsoft y no hay caja que podáis abrir ni traer a casa.",
  },
  {
    nombre: "GitHub Copilot",
    detalle:
      "Su primo, el de programar: ese sí es un ejecutor. Y tiene un detalle simpático — os deja elegir el modelo, Claude, GPT o Gemini. Suena a libertad. Pero sigue siendo una caja cerrada y alojada fuera.",
  },
];

export function EjecutorCerradoSection20() {
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
            Bloque 3 · El ejecutor cerrado
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Potente, pero atado
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Un ejecutor como Claude Code es una maravilla: le das una tarea, mira
            todo el proyecto, razona y hace los cambios él solo. Es de lo mejor
            que hay. Pero fijaos en tres cosas, sin juzgarlas todavía.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {rasgos.map((r, index) => (
            <motion.div
              key={r.numero}
              className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7 backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="font-mono text-sm font-semibold text-primary/80">
                {r.numero}
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-balance text-foreground">
                {r.titulo}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/72">
                {r.detalle}
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
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            No os pilla tan lejos como parece · lo que ya usáis
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {familiares.map((f, index) => (
              <motion.div
                key={f.nombre}
                className="flex flex-col rounded-[1.5rem] border border-border/60 bg-background/40 px-5 py-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {f.nombre}
                </span>
                <p className="mt-3 text-base leading-relaxed text-foreground/78">
                  {f.detalle}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-7 text-lg leading-relaxed text-foreground/82">
            Elegir el motor dentro de la caja{" "}
            <span className="font-semibold text-foreground">
              no es lo mismo que controlar la caja
            </span>
            .
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
            No es que sea malo. Es que decides tú, o decide el proveedor por ti.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

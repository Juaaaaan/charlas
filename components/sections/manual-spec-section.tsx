"use client";

import { motion } from "framer-motion";

const anatomy = [
  {
    part: "Qué / objetivo",
    contains: "La funcionalidad en lenguaje claro, sin el «cómo» técnico todavía.",
    why: "El agente necesita saber la meta, no adivinarla.",
  },
  {
    part: "Por qué",
    contains: "El contexto y la intención detrás.",
    why: "Sin el porqué, el agente toma decisiones que rompen el sentido.",
  },
  {
    part: "Criterios de aceptación",
    contains: "Cuándo se considera «hecho», de forma verificable.",
    why: "Separa «creo que funciona» de «sé que funciona».",
  },
  {
    part: "Contexto técnico",
    contains: "Stack, patrones, restricciones (Angular, convenciones RCA).",
    why: "Evita que reinvente lo que ya existe.",
  },
  {
    part: "Tareas",
    contains: "El desglose paso a paso.",
    why: "El agente ejecuta la lista, no improvisa el orden.",
  },
];

const pros = [
  "Control total — cada línea la has decidido tú.",
  "Cero dependencias — no instalas nada, no dependes de ningún vendor.",
  "Lo entiendes entero — no hay caja negra.",
];

const cons = [
  "Toda la disciplina la pones tú — nada te obliga a incluir los criterios.",
  "No hay estructura impuesta — cada spec puede acabar con un formato distinto.",
  "Se degrada con el tiempo — actualizar los specs a mano es trabajo que casi nadie hace.",
];

export function ManualSpecSection() {
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
            Bloque 2 · En pantalla
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            El spec manual
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Un fichero de texto, en el repo, al lado del código. Lo escribo yo,
            lo reviso yo, y el agente lo ejecuta. Control total — y el 90% del
            valor está aquí, sin instalar nada.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {anatomy.map((row, index) => (
            <motion.div
              key={row.part}
              className="grid gap-4 rounded-[1.5rem] border border-border/70 bg-card/70 px-6 py-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)_minmax(0,1.3fr)] md:items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-primary/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {row.part}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-foreground/72">
                {row.contains}
              </p>
              <p className="text-base leading-relaxed text-foreground/60">
                {row.why}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <motion.div
            className="rounded-[1.75rem] border border-primary/20 bg-primary/8 px-6 py-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg font-semibold uppercase tracking-[0.14em] text-primary">
              Ventajas
            </h3>
            <ul className="mt-5 space-y-3">
              {pros.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 text-base leading-relaxed text-foreground/78"
                >
                  <span aria-hidden="true" className="text-primary">
                    ✓
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <h3 className="text-lg font-semibold uppercase tracking-[0.14em] text-foreground/70">
              Límites
            </h3>
            <ul className="mt-5 space-y-3">
              {cons.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 text-base leading-relaxed text-foreground/72"
                >
                  <span aria-hidden="true" className="text-foreground/50">
                    ⚠
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            El problema nunca es empezar un spec. Es mantenerlo vivo cuando el
            proyecto evoluciona y hay prisa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

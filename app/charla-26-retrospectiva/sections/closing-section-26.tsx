"use client";

import { motion } from "framer-motion";

import { charlaCorta, piezas, preguntas } from "../data/piezas";

export function ClosingSection26() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-aura-cierre" />
      <div className="absolute left-1/2 bottom-10 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 6 · La chuleta
          </span>
          <h2 className="text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Si os lleváis una sola cosa, que sean estas diez preguntas
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {preguntas.map((q, index) => {
            const delPregunta = piezas.filter((p) => p.pregunta === q.numero);
            return (
              <motion.div
                key={q.numero}
                className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-5 py-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: (index % 2) * 0.07 }}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-xs font-semibold text-primary">
                    {q.numero}
                  </span>
                  <p className="text-lg font-semibold leading-snug text-foreground">
                    {q.corta}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {delPregunta.map((p) => {
                    const charla = charlaCorta(p.charla);
                    return (
                      <span
                        key={p.id}
                        className="rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs leading-relaxed text-foreground/72"
                      >
                        {p.nombre}
                        {charla ? (
                          <span className="ml-1.5 font-mono text-foreground/50">
                            ({charla})
                          </span>
                        ) : null}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-10 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Una acción esta semana
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82 md:text-xl">
            Elegid una sola de estas preguntas, la que más os toque, y mirad
            la pieza correspondiente esta semana. Una. No diez.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl lg:text-[2.6rem]">
            No recordéis herramientas. Recordad preguntas.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-balance text-foreground/75 md:text-xl">
            La IA abre opciones; vuestro criterio decide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const correas = [
  {
    etiqueta: "QUÉ · especificar",
    titulo: "Decidir y describir qué queremos",
    detalle:
      "Decir bien qué hay que construir antes de que la IA toque nada. Esto es lo que vimos en la charla 16: el spec a mano frente a herramientas como OpenSpec.",
    herramientas: "OpenSpec · Spec Kit · Kiro",
    visto: "Visto en la 16",
    tono: "base",
  },
  {
    etiqueta: "QUIÉN · ejecutar",
    titulo: "El agente que de verdad hace los cambios",
    detalle:
      "Lee el código, lo entiende y lo modifica. Ese es el ejecutor. Y lo interesante no es tanto qué hace, sino de quién depende.",
    herramientas: "Claude Code · OpenCode",
    visto: "Hoy",
    tono: "alto",
  },
];

export function CorreasSection20() {
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
            Bloque 2 · El marco
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Las dos correas del arnés
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Cuando decimos que «la IA programa», juntamos dos cosas que en
            realidad son distintas.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {correas.map((c, index) => (
            <motion.div
              key={c.etiqueta}
              className={`flex flex-col rounded-[1.75rem] border px-6 py-7 ${
                c.tono === "alto"
                  ? "border-primary/30 bg-primary/10"
                  : "border-border/70 bg-card/70"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
                    c.tono === "alto"
                      ? "bg-primary/20 text-primary"
                      : "bg-foreground/10 text-foreground/70"
                  }`}
                >
                  {c.etiqueta}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/50">
                  {c.visto}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold leading-tight text-balance text-foreground">
                {c.titulo}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/74">
                {c.detalle}
              </p>
              <p className="mt-6 font-mono text-sm text-foreground/55">
                {c.herramientas}
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
            Especificar y ejecutar no son lo mismo. Son dos correas distintas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

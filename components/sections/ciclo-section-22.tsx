"use client";

import { motion } from "framer-motion";

const etapas = [
  "Idea",
  "Especificar",
  "Construir",
  "Comprobar",
  "Publicar",
  "Mantener",
];

export function CicloSection22() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,145,255,0.14),transparent_34%),linear-gradient(180deg,rgba(9,13,21,0.98)_0%,rgba(12,16,26,1)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 5 · El hilo
          </span>
          <h2 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Un ciclo que ya conocéis sin saberlo
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Casi todo lo que hacéis, por pequeño que sea, pasa por las mismas
            etapas: tenéis una idea, decidís qué queréis exactamente, lo
            hacéis, lo comprobáis, lo soltáis fuera, y luego hay que
            mantenerlo vivo.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          {etapas.map((etapa, index) => (
            <motion.div
              key={etapa}
              className="flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="rounded-[1.25rem] border border-primary/25 bg-primary/8 px-5 py-4 text-center">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-lg font-semibold text-foreground">
                  {etapa}
                </p>
              </div>
              {index < etapas.length - 1 ? (
                <span
                  className="hidden text-2xl text-primary/40 md:inline"
                  aria-hidden="true"
                >
                  →
                </span>
              ) : null}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg leading-relaxed text-foreground/82">
            Eso, en el mundo del software, tiene hasta nombre propio. Pero no
            os asustéis — no es cosa de developers. Es el ciclo de un email,
            de una propuesta, de un evento que organizáis, de una decisión que
            tomáis.
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
            No es un ciclo de software. Es el ciclo de todo lo que hacéis.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

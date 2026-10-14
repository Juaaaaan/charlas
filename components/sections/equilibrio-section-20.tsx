"use client";

import { motion } from "framer-motion";

const lados = [
  {
    etiqueta: "Cerrado",
    aFavor: ["Menos fricción", "Soporte detrás", "Todo integrado", "Funciona de fábrica"],
    tono: "base",
  },
  {
    etiqueta: "Abierto",
    aFavor: ["Control", "Gobernanza", "Flexibilidad", "Pide manos y decisiones"],
    tono: "alto",
  },
];

const preguntas = [
  {
    numero: "01",
    pregunta: "¿Qué necesito gobernar?",
    pista: "Datos, cumplimiento, auditoría.",
  },
  {
    numero: "02",
    pregunta: "¿Cuántas manos tengo?",
    pista: "Equipo para montarlo y para mantenerlo.",
  },
  {
    numero: "03",
    pregunta: "¿Qué datos toca?",
    pista: "Públicos, internos o sensibles.",
  },
];

export function EquilibrioSection20() {
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
            Bloque 8 · El equilibrio
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Ni guerra santa, ni bando
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            No os vayáis con la idea de que abierto es bueno y cerrado es malo.
            No va de eso. Cada uno tiene su momento.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {lados.map((l, index) => (
            <motion.div
              key={l.etiqueta}
              className={`flex flex-col rounded-[1.75rem] border px-6 py-7 ${
                l.tono === "alto"
                  ? "border-primary/30 bg-primary/10"
                  : "border-border/70 bg-card/70"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
                  l.tono === "alto"
                    ? "bg-primary/20 text-primary"
                    : "bg-foreground/10 text-foreground/70"
                }`}
              >
                {l.etiqueta}
              </span>
              <ul className="mt-6 flex flex-col gap-3">
                {l.aFavor.map((punto) => (
                  <li
                    key={punto}
                    className="flex items-start gap-3 text-lg leading-relaxed text-foreground/80"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                    />
                    {punto}
                  </li>
                ))}
              </ul>
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
            Las tres preguntas que vuestra empresa debería hacerse
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {preguntas.map((p, index) => (
              <motion.div
                key={p.numero}
                className="flex flex-col rounded-[1.5rem] border border-border/60 bg-background/40 px-5 py-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <span className="font-mono text-sm font-semibold text-primary/80">
                  {p.numero}
                </span>
                <h3 className="mt-4 text-xl font-semibold leading-tight text-balance text-foreground">
                  {p.pregunta}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/70">
                  {p.pista}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-7 text-lg leading-relaxed text-foreground/82">
            Aunque nunca vayáis a instalar nada, si sabéis estas tres preguntas
            entendéis la decisión que alguien está tomando por vosotros. Y
            podéis <span className="font-semibold text-foreground">pedir cuentas</span>.
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
            La pregunta no es cuál es mejor, sino qué necesitas gobernar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

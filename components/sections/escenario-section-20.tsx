"use client";

import { motion } from "framer-motion";

const caminos = [
  {
    etiqueta: "Con un ejecutor cerrado",
    veredicto: "La conversación se acaba ahí",
    detalle:
      "«No podemos: los datos salen». Legal no lo firma. Y con razón.",
    tono: "base",
  },
  {
    etiqueta: "Con un ejecutor abierto",
    veredicto: "La conversación cambia",
    detalle:
      "Conectado a un modelo interno: «sí podemos, y no sale nada de casa».",
    tono: "alto",
  },
];

export function EscenarioSection20() {
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
            Bloque 6 · Un caso cercano
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Una casa como la nuestra
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Una aseguradora. Datos de pólizas, de clientes, historiales. Quiere
            que sus desarrolladores usen IA para ir más rápido — pero no puede
            permitir que ese código y esos datos salgan a un servidor de fuera.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {caminos.map((c, index) => (
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
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
                  c.tono === "alto"
                    ? "bg-primary/20 text-primary"
                    : "bg-foreground/10 text-foreground/70"
                }`}
              >
                {c.etiqueta}
              </span>
              <h3 className="mt-5 text-2xl font-semibold leading-tight text-balance text-foreground">
                {c.veredicto}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/74">
                {c.detalle}
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
          <p className="text-lg leading-relaxed text-foreground/82">
            Misma necesidad, mismo trabajo. Lo único que cambia es{" "}
            <span className="font-semibold text-foreground">
              quién controla el motor
            </span>
            . Y eso lo cambia todo.
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
            Esto no es teoría de garaje: ya está pasando en casas como la
            nuestra.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

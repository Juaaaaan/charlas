"use client";

import { motion } from "framer-motion";

const ideas = [
  {
    idea: "Un agente ya no solo responde: puede hacer el trabajo",
    detalle:
      "El salto respecto a la 13: de un agente que sabe cosas a un equipo que las hace y las deja escritas donde trabajáis.",
  },
  {
    idea: "Coordinar agentes se hace con lenguaje, no con código",
    detalle:
      "Montar esto ha sido sobre todo escribir bien: buenos encargos, buenas descripciones. La herramienta la maneja gente de negocio, no solo developers.",
  },
  {
    idea: "El humano tiene la última palabra — y eso es un diseño",
    detalle:
      "El agente para y pregunta a propósito. Cuanto más potente es la IA, más importa ese punto de control. No es que no sepa cerrar solo: es que no debe.",
  },
];

export function ClosingSection19() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(74,145,255,0.18),transparent_36%),linear-gradient(180deg,rgba(12,16,26,1)_0%,rgba(9,13,21,0.98)_50%,rgba(7,10,18,1)_100%)]" />
      <div className="absolute left-1/2 bottom-10 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Cierre · Qué os lleváis
          </span>
          <h2 className="text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Tres ideas para llevarse
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {ideas.map((item, index) => (
            <motion.div
              key={item.idea}
              className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7 backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="font-mono text-sm font-semibold text-primary/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-balance text-foreground">
                {item.idea}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/72">
                {item.detalle}
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
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60">
            La parte 2 · sembrar, no prometer de más
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-foreground/80">
            Hoy os lo he enseñado por encima, para que entendáis QUÉ hace y POR
            QUÉ. En una próxima charla bajaremos al taller: cómo se construye esto
            paso a paso, cómo se comunican los agentes por dentro, y cómo lo
            aplicaríais a VUESTRO problema del día a día — porque RRHH ya nos ha
            pedido uno para cruzar sus Excel. Pero eso, otro miércoles.
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
            La pregunta ya no es si la IA puede ayudaros. Es qué trabajo tedioso
            le vais a delegar primero — sabiendo que seguís teniendo la última
            palabra.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const pasos = [
  {
    tag: "Punto de partida",
    title: "Mostrar el escenario ya escrito",
    detail:
      "Redactarlo entero en vivo añade riesgo y no refuerza la tesis: el criterio ya existe antes de empezar.",
  },
  {
    tag: "Contexto",
    title: "Pasarlo a la IA con el contexto de RCA",
    detail: "El agente recibe el escenario y lo necesario del proyecto.",
  },
  {
    tag: "Construir",
    title: "Pedir que implemente o ajuste la funcionalidad",
    detail: "El carrito de RCA, sobre el escenario ya mostrado.",
  },
  {
    tag: "Comprobar",
    title: "Pedir que verifique el resultado contra el mismo escenario",
    detail: "No un nuevo criterio: el mismo con el que empezamos.",
  },
  {
    tag: "Evidencia",
    title: "Mostrar evidencia observable para cada Then",
    detail: "Cada afirmación del escenario, contrastada una a una.",
  },
];

export function DemoSection23() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-aura-seccion" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 3 · Demo en RCA
          </span>
          <h2 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Primero el criterio, después el código
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            El carrito de RCA. Reutilizamos el mismo escenario del bloque
            anterior — no se introduce un segundo problema durante la demo.
          </p>
        </motion.div>

        <motion.div
          className="rounded-[1.75rem] border border-primary/25 bg-primary/8 px-6 py-7 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="overflow-x-auto rounded-[1.25rem] border border-primary/30 bg-background/55 p-5">
            <pre className="font-mono text-sm leading-relaxed text-foreground/80">
              <span className="text-primary">Feature:</span> Carrito de
              compra
              {"\n"} <span className="text-primary">Scenario:</span> Añadir
              una pieza al carrito
              {"\n"} Given que estoy viendo la ficha de un anillo de
              resina
              {"\n"} And el carrito está vacío
              {"\n"} When pulso &quot;Añadir al carrito&quot;
              {"\n"} Then el carrito muestra 1 artículo
              {"\n"} And el precio del anillo se suma al total
            </pre>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-4">
          {pasos.map((paso, index) => (
            <motion.div
              key={paso.title}
              className="flex gap-5 rounded-[1.5rem] border border-border/70 bg-card/70 px-6 py-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-lg font-semibold text-primary">
                {index + 1}
              </div>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                  {paso.tag}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-foreground">
                  {paso.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-foreground/72">
                  {paso.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 backdrop-blur md:px-10 md:py-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Pausa deliberada, tras verificar
          </p>
          <p className="mt-5 text-xl font-semibold leading-snug text-balance text-foreground md:text-2xl">
            Fijaos en lo que NO ha ocurrido.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            No hemos discutido si nos gusta. No hemos discutido si «parece
            que funciona». No hemos permitido interpretaciones distintas
            sobre el resultado. El criterio estaba escrito antes de empezar
            y, al terminar, lo hemos contrastado con ese mismo criterio.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            Esto no significa que una comprobación garantice toda la
            calidad. Significa algo más preciso: para este comportamiento
            concreto sabemos de antemano qué evidencia necesitamos
            observar.
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
            El escenario no se negocia después. Se escribe antes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

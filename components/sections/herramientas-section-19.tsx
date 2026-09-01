"use client";

import { motion } from "framer-motion";

export function HerramientasSection19() {
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
            Paradas 3 y 4 · Cerebro y manos
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            El salto: de responder a actuar
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Dos cosas que se ven en dos clics: qué modelo mueve al agente, y qué
            puede hacer con el resultado.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          <motion.div
            className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Parada 3 · el cerebro
            </span>
            <h3 className="mt-5 text-2xl font-semibold leading-tight text-foreground">
              Se le puede cambiar el motor
            </h3>
            <p className="mt-4 text-base leading-relaxed text-foreground/78">
              Un selector de modelo, como quien elige el motor de un coche —
              guiño directo a la charla 17, «elegir bien la IA». He puesto uno
              potente y estable, no un experimental, porque esto va en serio.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col rounded-[1.75rem] border border-primary/25 bg-primary/8 px-6 py-8 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Parada 4 · las manos
            </span>
            <h3 className="mt-5 text-2xl font-semibold leading-tight text-foreground">
              Herramienta · «Requisitos a Excel»
            </h3>
            <p className="mt-4 text-base leading-relaxed text-foreground/82">
              Aquí está la diferencia con el agente de la 13. Aquel respondía —
              sabía cosas y te las contaba. Este, además, tiene manos: coge el
              resultado y lo escribe en un Excel de verdad, en vuestro OneDrive,
              un fichero que abrís mañana. Ha pasado de saber a hacer.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Qué hay debajo · sin tecnicismo
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            Una pequeña automatización — lo que en Microsoft se llama Power
            Automate — coge la lista de requisitos y la vuelca fila a fila. No
            hace falta entender cómo; lo importante es la idea:{" "}
            <span className="font-semibold text-foreground">el agente piensa, y una herramienta ejecuta</span>.
            El agente no hace las cuentas de memoria, que es donde se equivocaría
            — le encarga el trabajo mecánico a la herramienta que lo hace bien.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/60">
            Eco directo de la charla 18: la IA no cuenta celdas de cabeza, delega
            lo determinista.
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
            Un agente que responde te ahorra buscar. Un agente que actúa te
            ahorra el trabajo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

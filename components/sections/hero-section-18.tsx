"use client";

import { motion } from "framer-motion";

const preguntas = [
  {
    pregunta: "¿Cómo «entiende» la hoja?",
    descubrimos: "No entiende: predice el patrón más probable.",
  },
  {
    pregunta: "¿Cómo agrupa cosas parecidas?",
    descubrimos: "Por significado, no por palabras (embeddings).",
  },
  {
    pregunta: "¿Cuándo se lo inventa (y cuándo ya no)?",
    descubrimos: "El peligro se ha movido: alucina sin fuente, no con ella.",
  },
  {
    pregunta: "¿Por qué «se le olvida» en chats largos?",
    descubrimos: "Su ventana de contexto se llena.",
  },
];

export function HeroSection18() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,145,255,0.22),transparent_30%),linear-gradient(180deg,rgba(7,10,18,1)_0%,rgba(9,13,21,0.98)_54%,rgba(12,16,26,1)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,150,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,150,255,0.03)_1px,transparent_1px)] bg-[size:88px_88px]" />
      <div className="absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-2 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Charla 18
          </span>
          <span className="inline-flex rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-foreground/70 backdrop-blur">
            Transversal · demo en vivo
          </span>
        </motion.div>

        <motion.h1
          className="mt-10 max-w-5xl text-5xl font-bold tracking-tight text-balance text-foreground md:text-7xl lg:text-[5.1rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
        >
          Abriendo la caja
        </motion.h1>

        <motion.p
          className="mt-6 max-w-4xl text-2xl font-medium leading-snug text-balance text-foreground/85 md:text-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
        >
          Cómo piensa la IA por dentro — con datos en la mano.
        </motion.p>

        <motion.p
          className="mt-8 max-w-4xl text-xl leading-relaxed text-balance text-foreground/78 md:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
        >
          La semana pasada aprendimos a elegir bien la IA. Hoy abrimos la tapa y
          contestamos el porqué. Os prometo dos cosas: no vais a ver ni una línea
          de código, y os vais a ir sabiendo cosas de cómo funciona que ahora
          mismo no sabe el 95% de quien la usa a diario.
        </motion.p>

        <motion.div
          className="mt-10 max-w-4xl rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-6 backdrop-blur"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary/90">
            La caja negra sobre la mesa
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/78">
            El vehículo es un Excel de proyecto de verdad: un plan a un año, con
            su desglose de tareas, estimaciones, equipo, presupuesto y su Gantt.
            No es un ejemplo de juguete. Se lo vamos a dar a la IA y, en vez de
            quedarnos en «mira qué bien lo resume», vamos a mirar{" "}
            <span className="text-foreground">por dentro</span> cada vez que hace
            algo.
          </p>
        </motion.div>

        <motion.p
          className="mt-14 max-w-3xl text-sm font-semibold uppercase tracking-[0.2em] text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
        >
          Las cuatro preguntas · el mapa de toda la charla
        </motion.p>

        <motion.div
          className="mt-6 grid gap-2 md:grid-cols-2 xl:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {preguntas.map((item, index) => (
            <div
              key={item.pregunta}
              className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7 backdrop-blur"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                Mecanismo {index + 1}
              </p>
              <h2 className="mt-5 text-xl font-semibold leading-tight text-balance text-foreground md:text-2xl">
                {item.pregunta}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/72">
                {item.descubrimos}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 max-w-4xl rounded-[1.75rem] border border-primary/20 bg-primary/8 px-6 py-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease: "easeOut" }}
        >
          <p className="text-2xl font-semibold leading-snug text-balance text-foreground md:text-3xl">
            No os pido que os creáis cómo funciona. Os lo voy a enseñar pasando,
            en directo, sobre este Excel. Los datos son la linterna que ilumina
            la caja negra.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

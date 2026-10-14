"use client";

import { motion } from "framer-motion";

const paradas = [
  {
    titulo: "El coordinador",
    descubrimos: "Un jefe que reparte el trabajo, no que lo hace. Definido por escrito, como a una persona nueva.",
  },
  {
    titulo: "La sala de expertos",
    descubrimos: "Tres agentes, cada uno especialista en una sola cosa. Y sabiendo qué NO le toca.",
  },
  {
    titulo: "Cerebro y manos",
    descubrimos: "Elige su modelo… y además actúa: coge el resultado y lo escribe en un Excel de verdad.",
  },
  {
    titulo: "El checkpoint humano",
    descubrimos: "Antes de tocar nada, para y te pregunta. La última palabra es tuya, a propósito.",
  },
];

export function HeroSection19() {
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
            Charla 19
          </span>
          <span className="inline-flex rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-foreground/70 backdrop-blur">
            Copilot Studio · multiagente
          </span>
          <span className="inline-flex rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-foreground/70 backdrop-blur">
            Recorrido guiado · demo
          </span>
        </motion.div>

        <motion.h1
          className="mt-10 max-w-5xl text-5xl font-bold tracking-tight text-balance text-foreground md:text-7xl lg:text-[5.1rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
        >
          De responder a actuar
        </motion.h1>

        <motion.p
          className="mt-6 max-w-4xl text-2xl font-medium leading-snug text-balance text-foreground/85 md:text-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
        >
          Varios agentes que colaboran para resolver algo — y que al final te dejan a ti la última palabra.
        </motion.p>

        <motion.p
          className="mt-8 max-w-4xl text-xl leading-relaxed text-balance text-foreground/78 md:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
        >
          En la charla 13 montamos un agente que respondía: sabía cosas y las
          contaba. Hoy damos el salto siguiente — un equipo de agentes que además
          hace el trabajo, y os lo voy a enseñar por dentro, sin una línea de
          código.
        </motion.p>

        <motion.div
          className="mt-10 max-w-4xl rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-6 backdrop-blur"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary/90">
            El caso sobre la mesa · un pliego de licitación
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/78">
            Llega una RFP: un documento de 8 páginas donde un cliente pide una
            propuesta. Alguien tiene que leérselo entero, sacar qué te piden,
            detectar las trampas y estimar cuánto trabajo es. Es tedioso, es fácil
            que se te escape algo, y lo hace gente cara. Vamos a montar un{" "}
            <span className="text-foreground">equipo de IA</span> que lo haga —
            el <span className="text-foreground">Analista de RFP</span>.
          </p>
        </motion.div>

        <motion.p
          className="mt-14 max-w-3xl text-sm font-semibold uppercase tracking-[0.2em] text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
        >
          Las paradas del recorrido · el mapa de toda la charla
        </motion.p>

        <motion.div
          className="mt-6 grid gap-2 md:grid-cols-2 xl:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {paradas.map((item, index) => (
            <div
              key={item.titulo}
              className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7 backdrop-blur"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                Parada {index + 1}
              </p>
              <h2 className="mt-5 text-xl font-semibold leading-tight text-balance text-foreground md:text-2xl">
                {item.titulo}
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
            Un agente que responde es un buen bibliotecario. Hoy vais a ver un
            equipo de agentes que, además, hace el trabajo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

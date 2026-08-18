"use client";

import { motion } from "framer-motion";

const brujula = [
  {
    capa: "Herramienta",
    pregunta: "¿Qué IA abro?",
    decide: "¿Código? ¿Datos de empresa? ¿Algo general?",
  },
  {
    capa: "Modelo",
    pregunta: "¿Qué modelo elijo?",
    decide: "Rápido o razonador — y de qué proveedor.",
  },
  {
    capa: "Modo de trabajo",
    pregunta: "¿Cómo la pongo a trabajar?",
    decide: "Preguntar / investigar / recordar / actuar.",
  },
  {
    capa: "Confianza",
    pregunta: "¿Cuánto me la juego?",
    decide: "Cuánto verifico antes de fiarme.",
  },
];

export function HeroSection17() {
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
            Charla 17
          </span>
          <span className="inline-flex rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-foreground/70 backdrop-blur">
            Transversal · sin demo en vivo
          </span>
        </motion.div>

        <motion.h1
          className="mt-10 max-w-5xl text-5xl font-bold tracking-tight text-balance text-foreground md:text-7xl lg:text-[5.1rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
        >
          Elegir bien la IA
        </motion.h1>

        <motion.p
          className="mt-8 max-w-4xl text-xl leading-relaxed text-balance text-foreground/78 md:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
        >
          Hoy no vengo a descubriros la IA: ya la usáis. Vengo con algo más
          incómodo — muchos la usáis regular sin saberlo. Abrís «la de siempre»
          por inercia, os quedáis en el modo por defecto y usáis una fracción de
          lo que ya sabe hacer. El salto no es empezar: es pasar de usarla por
          inercia a usarla con criterio.
        </motion.p>

        <motion.div
          className="mt-10 max-w-4xl rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-6 backdrop-blur"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary/90">
            Dos preguntas con manos de verdad
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/78">
            Una: ¿cuántos habéis usado una IA esta semana para el trabajo? Dos,
            la buena: ¿cuántos <span className="text-foreground">elegisteis</span>{" "}
            cuál, en qué modelo y en qué modo? ¿O abristeis la de siempre a ver
            qué salía? Casi nadie elige. Y detrás de «usar la IA» hay cuatro
            decisiones que casi nunca se toman a conciencia.
          </p>
        </motion.div>

        <motion.p
          className="mt-14 max-w-3xl text-sm font-semibold uppercase tracking-[0.2em] text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
        >
          La brújula · el mapa de toda la charla
        </motion.p>

        <motion.div
          className="mt-6 grid gap-2 md:grid-cols-2 xl:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {brujula.map((item, index) => (
            <div
              key={item.capa}
              className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7 backdrop-blur"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                Capa {index + 1} · {item.capa}
              </p>
              <h2 className="mt-5 text-xl font-semibold leading-tight text-balance text-foreground md:text-2xl">
                {item.pregunta}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/72">
                {item.decide}
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
            «Usar la IA» no es una cosa. Son cuatro decisiones. Y la calidad de
            lo que os devuelve depende de acertarlas. El método no caduca aunque
            los nombres cambien cada mes — que cambian.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const recorrido = [
  {
    titulo: "Las dos correas",
    descubrimos:
      "Especificar y ejecutar no son lo mismo. Hoy va del QUIÉN ejecuta, no del QUÉ.",
  },
  {
    titulo: "El ejecutor cerrado",
    descubrimos:
      "Potente, cómodo y atado: un proveedor, una caja que no se abre, tus datos fuera de casa.",
  },
  {
    titulo: "El ejecutor abierto",
    descubrimos:
      "El mismo trabajo, construido al revés: código a la vista, motor a elegir, datos que se quedan.",
  },
  {
    titulo: "El criterio",
    descubrimos:
      "Tres preguntas que entender aunque no instales nada nunca. Sirven para pedir cuentas.",
  },
];

export function HeroSection20() {
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
            Charla 20
          </span>
          <span className="inline-flex rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-foreground/70 backdrop-blur">
            El arnés · la correa del ejecutor
          </span>
          <span className="inline-flex rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-foreground/70 backdrop-blur">
            Teoría · sin demo en vivo
          </span>
        </motion.div>

        <motion.h1
          className="mt-10 max-w-5xl text-5xl font-bold tracking-tight text-balance text-foreground md:text-7xl lg:text-[5.1rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
        >
          La otra correa del arnés
        </motion.h1>

        <motion.p
          className="mt-6 max-w-4xl text-2xl font-medium leading-snug text-balance text-foreground/85 md:text-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
        >
          Quién controla la IA que usa tu empresa, y dónde viven tus datos.
        </motion.p>

        <motion.div
          className="mt-10 max-w-4xl rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-6 backdrop-blur"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary/90">
            Empiezo por un dato · esto ya ha cruzado la puerta
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            La herramienta de la que os voy a hablar hoy{" "}
            <span className="text-foreground">ya está entrando en la empresa</span>.
            Hay compañeros aquí, ahora mismo, usándola. Yo también puedo
            instalarla en el portátil de trabajo — lo he comprobado. O sea, esto
            no es teoría ni futurismo. Y cuando una herramienta de IA entra en
            casa, hay dos preguntas que conviene hacerse desde el primer día.
          </p>
        </motion.div>

        <motion.p
          className="mt-8 max-w-4xl text-xl leading-relaxed text-balance text-foreground/78 md:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Llevamos toda la serie montando un arnés para la IA: documentos que le
          dicen qué construir, comportamiento persistente, acceso a nuestras
          herramientas, memoria. Riendas, para que el caballo no se desboque.
          Hoy miramos el otro extremo.
        </motion.p>

        <motion.p
          className="mt-14 max-w-3xl text-sm font-semibold uppercase tracking-[0.2em] text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
        >
          El recorrido de hoy · el mapa de la charla
        </motion.p>

        <motion.div
          className="mt-6 grid gap-2 md:grid-cols-2 xl:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {recorrido.map((item, index) => (
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
            En la 16 especificamos y dejamos que Claude Code lo ejecutara. Hoy:
            ¿y si el ejecutor no te atara a nadie?
          </p>
        </motion.div>
      </div>
    </section>
  );
}

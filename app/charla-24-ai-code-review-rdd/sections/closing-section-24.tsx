"use client";

import { motion } from "framer-motion";

const antes = [
  { titulo: "BDD", detalle: "Definimos el comportamiento esperado cuando importa." },
  { titulo: "ODD", detalle: "Aplicamos una disciplina proporcional por defecto." },
];

const despues = [
  { titulo: "Checks deterministas", detalle: "Descartamos fallos objetivos y repetibles." },
  { titulo: "AI code review", detalle: "Buscamos incumplimientos, riesgos y criterios ausentes." },
  { titulo: "RDD", detalle: "Vinculamos la evidencia a un candidato concreto." },
];

export function ClosingSection24() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-aura-cierre" />
      <div className="absolute left-1/2 bottom-10 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 6 · Cierre
          </span>
          <h2 className="text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            El arco completo de Comprobar
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          <motion.div
            className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex w-fit rounded-full border border-border/70 bg-background/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/60">
              Antes de construir
            </span>
            <div className="mt-5 flex flex-col gap-4">
              {antes.map((item) => (
                <div key={item.titulo}>
                  <p className="font-semibold text-foreground">{item.titulo}</p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/72">
                    {item.detalle}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.1em] text-foreground/55">
              ¿Qué significa correcto?
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col rounded-[1.75rem] border border-primary/25 bg-primary/8 px-6 py-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Después de construir
            </span>
            <div className="mt-5 flex flex-col gap-4">
              {despues.map((item) => (
                <div key={item.titulo}>
                  <p className="font-semibold text-foreground">{item.titulo}</p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/78">
                    {item.detalle}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.1em] text-primary/85">
              ¿Qué evidencia justifica aceptar este candidato?
            </p>
          </motion.div>
        </div>

        <motion.p
          className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-foreground/72"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          ODD y RDD son independientes, no desconectados: que ODD clasifique
          una tarea como sustancial no activa automáticamente una revisión
          4R, y que RDD detecte riesgo alto no dice qué método de
          construcción se usó.
        </motion.p>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl lg:text-[2.6rem]">
            Generar produce un candidato. Verificar produce evidencia.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-balance text-foreground/75 md:text-xl">
            Un receipt deja constancia de por qué confiamos, o de por qué
            todavía no debemos confiar.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Quedan dos paradas
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            Con esto cerramos Comprobar dentro del ciclo de seis pasos:
            idea, especificar, construir, comprobar, publicar y mantener.
            Quedan Publicar y Mantener. Esa es otra charla.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-2xl font-semibold leading-snug text-balance text-foreground md:text-3xl">
            La IA genera cada vez más deprisa.
          </p>
          <p className="mt-3 text-2xl font-semibold leading-snug text-balance text-primary md:text-3xl">
            El trabajo profesional consiste en decidir qué evidencia nos
            basta para confiar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

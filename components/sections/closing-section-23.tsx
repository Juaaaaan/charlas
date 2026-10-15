"use client";

import { motion } from "framer-motion";

export function ClosingSection23() {
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
            Bloque 5 · Cierre
          </span>
          <h2 className="text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Verificar vale más que generar
          </h2>
        </motion.div>

        <motion.div
          className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 backdrop-blur md:px-10 md:py-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg leading-relaxed text-foreground/82 md:text-xl">
            Hoy hemos trabajado la mitad de Comprobar que ocurre ANTES de
            construir: definir el resultado esperado y decidir cuánta
            formalidad merece cada tarea.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82 md:text-xl">
            Para lo importante, el criterio de éxito se escribe. Para lo
            pequeño, el agente sigue una disciplina proporcional. En ambos
            casos evitamos que sea la IA quien decida sin reglas qué
            significa que algo está bien.
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
            Verifying beats generating.
            <br />
            Verificar vale más que generar.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-balance text-foreground/75 md:text-xl">
            La calidad de una solución generada por IA no depende de lo
            bien que genere. Depende de lo claro que hayamos definido qué
            significa que esté bien y de la evidencia con la que podamos
            comprobarlo.
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
            Queda la otra mitad
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            Hoy hemos comprobado antes de construir. Queda revisar lo que
            ya se ha construido, detectar problemas y demostrar que sigue
            cumpliendo lo esperado. Esa tendrá su propia charla y su propia
            demo.
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
            La IA es muy buena generando.
          </p>
          <p className="mt-3 text-2xl font-semibold leading-snug text-balance text-primary md:text-3xl">
            El trabajo profesional consiste en definir y comprobar qué
            resultado es el correcto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

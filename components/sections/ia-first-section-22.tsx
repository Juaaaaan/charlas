"use client";

import { motion } from "framer-motion";

export function IaFirstSection22() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,145,255,0.16),transparent_32%),linear-gradient(180deg,rgba(9,13,21,0.98)_0%,rgba(12,16,26,1)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 2 · El giro
          </span>
          <h2 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            La mentalidad IA-first
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            «Primero» no significa apagar la cabeza. Primero entendéis el
            problema y pensáis una solución; antes de ejecutarla, le hacéis
            una segunda pregunta a la IA.
          </p>
        </motion.div>

        <motion.div
          className="mb-10 rounded-[1.75rem] border border-primary/20 bg-primary/8 px-6 py-8 text-center md:px-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-3xl text-2xl font-semibold leading-snug text-balance text-foreground md:text-3xl">
            La IA es la primera conversación sobre tu solución, no la última
            decisión.
          </p>
        </motion.div>

        <motion.p
          className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Un concepto real, bajado de escala
        </motion.p>

        <div className="grid gap-4 md:grid-cols-2">
          <motion.div
            className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex w-fit rounded-full border border-border/70 bg-background/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/60">
              AI-enabled
            </span>
            <h3 className="mt-5 text-xl font-semibold leading-tight text-foreground">
              Usarla de vez en cuando
            </h3>
            <p className="mt-4 text-base leading-relaxed text-foreground/78">
              Recurrir a la IA para una tarea suelta, cuando os acordáis. Es
              un complemento que se añade al final, no el punto de partida.
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
              AI-first
            </span>
            <h3 className="mt-5 text-xl font-semibold leading-tight text-foreground">
              El punto de partida
            </h3>
            <p className="mt-4 text-base leading-relaxed text-foreground/82">
              Normalmente se habla de esto a nivel de empresa entera — cómo
              rediseña sus procesos y su forma de decidir. Hoy lo bajamos de
              escala: no la empresa, vosotros. El mismo principio, aplicado a
              cada tarea de vuestro día a día.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-6 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            IA-first no es IA-only ni IA-always
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            No significa que la IA sea siempre la solución, que haga todo el
            trabajo o que decida por vosotros. Una vez entendido el problema
            y antes de ejecutar vuestra solución, comprobáis si puede
            aportar opciones, preguntas, velocidad o contraste. A veces la
            respuesta será sí; otras veces, no merece la pena usarla.
          </p>
        </motion.div>

        <motion.p
          className="mb-6 mt-14 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          El antes / después · reunión con un cliente nuevo
        </motion.p>

        <div className="grid gap-4 md:grid-cols-2">
          <motion.div
            className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex w-fit rounded-full border border-border/70 bg-background/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/60">
              Modelo tradicional
            </span>
            <h3 className="mt-5 text-xl font-semibold leading-tight text-foreground">
              Entender, pensar y ejecutar seguido
            </h3>
            <p className="mt-4 text-base leading-relaxed text-foreground/78">
              Entendéis que necesitáis preparar la reunión, pensáis los
              objetivos y abrís un Word para escribir el guion. Esa primera
              reflexión es necesaria — el problema es recorrer todo el camino
              sin una segunda pregunta: ¿en qué puede ayudarme aquí la IA?
              Quizá os falte un riesgo, una objeción o una pregunta que no
              habíais considerado.
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
              Modelo IA-first
            </span>
            <h3 className="mt-5 text-xl font-semibold leading-tight text-foreground">
              Una segunda pregunta antes de redactar
            </h3>
            <p className="mt-4 text-base leading-relaxed text-foreground/82">
              Después de aclarar qué reunión tenéis y qué resultado buscáis,
              pero antes de redactarlo todo, le preguntáis: «mañana tengo una
              reunión con un cliente nuevo sobre esto, ¿qué debería cubrir, y
              qué le preguntaría yo si estuviera en su lugar?». Diez segundos
              después tenéis un primer borrador — con cosas en las que ni
              habíais caído. Y ahora decidís.
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
            La diferencia no está en quién acaba haciendo el trabajo
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            Puede que al final el guion lo escribáis enteramente vosotros. La
            diferencia está en no pasar directamente de entender el problema
            a ejecutar la primera solución: entre ambas cosas abrís una
            exploración con IA, y luego aplicáis vuestro criterio. Eso es
            IA-first — incorporar la IA temprano, no obedecerla
            automáticamente.
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/70">
            <span className="font-semibold text-foreground">
              El giro mental:
            </span>{" "}
            dejad de pensar en la tarea que tenéis delante, y pensad en el
            resultado al que queréis llegar. No «voy a escribir este
            documento», sino «quiero llegar a X» — y preguntadle primero cómo
            llegar.
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
            Antes de invertir esfuerzo, pregúntale primero.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

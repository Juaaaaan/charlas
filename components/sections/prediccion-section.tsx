"use client";

import { motion } from "framer-motion";

const consecuencias = [
  {
    titulo: "Columnas bien nombradas, pregunta clara",
    detalle:
      "Le das un patrón nítido y acierta más. El término correcto activa el patrón correcto.",
    tono: "bueno",
  },
  {
    titulo: "Pregunta vaga, contexto borroso",
    detalle:
      "Le das un patrón difuso y rellena huecos. No es mala suerte: es que le has elegido un patrón malo.",
    tono: "malo",
  },
];

export function PrediccionSection() {
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
            Bloque 1 · Mecanismo 1
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            ¿Cómo «entiende» la hoja?
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Primer experimento. No le explico nada de esta hoja: ni qué es, ni
            qué columnas tiene. Solo se la enseño y le pregunto.
          </p>
        </motion.div>

        <motion.div
          className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Herramienta · Copilot DENTRO de Excel
          </span>
          <p className="mt-5 font-mono text-sm leading-relaxed text-foreground/80 md:text-base">
            <span className="text-primary/80">›</span> Sin que te dé ninguna
            explicación, ¿de qué trata esta hoja y qué representa cada columna?
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/72">
            Copilot responde: es un plan de proyecto. Identifica el desglose de
            tareas, las estimaciones, el PERT, los responsables, el estado… Nadie
            le ha dicho que «PERT» es una estimación, ni que esa columna son
            responsables. ¿Lo ha adivinado? No exactamente.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[1.75rem] border border-primary/20 bg-primary/8 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            El «ajá» · no entiende, predice
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            Por dentro, un modelo de lenguaje hace una cosa, muy tonta y muy
            potente a la vez: predecir lo que viene después. Palabra a palabra.
            Ha leído cantidades gigantescas de texto —millones de hojas de
            proyecto entre ellas— y ha aprendido qué patrones son probables.
            Cuando ve una columna con «optimista, probable, pesimista», el patrón
            «esto es una estimación PERT» es abrumadoramente probable. Así que lo
            completa.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            No «sabe» lo que es un proyecto como lo sabéis vosotros. Reconoce el
            patrón. Es un autocompletar con esteroides. Y esto no es un defecto
            que le vayan a quitar en la próxima versión:{" "}
            <span className="font-semibold text-foreground">es lo que es</span>.
          </p>
        </motion.div>

        <motion.p
          className="mb-6 mt-16 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ¿Y esto para qué me sirve un lunes? · si funciona por patrones, cómo le
          hablas cambia el patrón que activa
        </motion.p>

        <div className="grid gap-4 md:grid-cols-2">
          {consecuencias.map((c, index) => (
            <motion.div
              key={c.titulo}
              className={`flex flex-col rounded-[1.5rem] border px-6 py-6 ${
                c.tono === "malo"
                  ? "border-destructive/30 bg-destructive/5"
                  : "border-primary/25 bg-primary/8"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
                  c.tono === "malo"
                    ? "bg-destructive/15 text-destructive"
                    : "bg-primary/15 text-primary"
                }`}
              >
                {c.tono === "malo" ? "Patrón borroso" : "Patrón nítido"}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-tight text-foreground">
                {c.titulo}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/72">
                {c.detalle}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            La IA no entiende: predice el patrón más probable. Por eso cómo le
            preguntáis no es un detalle — es lo que decide lo que os devuelve.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const ideas = [
  {
    idea: "Son cuatro decisiones, no una",
    detalle:
      "Qué IA, qué modelo, qué modo de trabajo, cuánto verifico. La brújula.",
  },
  {
    idea: "No os aprendáis nombres, que caducan",
    detalle:
      "Aprendeos los criterios: ¿código, datos de empresa o general? ¿rápido o razonador? ¿pregunto o pongo a investigar / recordar / actuar? ¿cuánto me la juego?",
  },
  {
    idea: "La seguridad con la que responde no mide si tiene razón",
    detalle:
      "Verificad según lo que os jugáis. Y en la empresa, usad solo lo aprobado — ahí cuenta también dónde acaban vuestros datos.",
  },
];

const brujula = [
  { capa: "Herramienta", pregunta: "¿Qué IA abro?" },
  { capa: "Modelo", pregunta: "¿Qué modelo elijo?" },
  { capa: "Modo de trabajo", pregunta: "¿Cómo la pongo a trabajar?" },
  { capa: "Confianza", pregunta: "¿Cuánto me la juego?" },
];

export function ClosingSection17() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(74,145,255,0.18),transparent_36%),linear-gradient(180deg,rgba(12,16,26,1)_0%,rgba(9,13,21,0.98)_50%,rgba(7,10,18,1)_100%)]" />
      <div className="absolute left-1/2 bottom-10 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Cierre · El kit del miércoles
          </span>
          <h2 className="text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Recojo en tres ideas
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {ideas.map((item, index) => (
            <motion.div
              key={item.idea}
              className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7 backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="font-mono text-sm font-semibold text-primary/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-balance text-foreground">
                {item.idea}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/72">
                {item.detalle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* La brújula, otra vez */}
        <motion.div
          className="mt-8 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7 backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            La brújula · las cuatro preguntas de 30 segundos
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {brujula.map((b, index) => (
              <div
                key={b.capa}
                className="rounded-[1.25rem] border border-border/50 bg-background/30 px-4 py-4"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                  Capa {index + 1}
                </p>
                <p className="mt-2 text-base font-semibold text-foreground">
                  {b.pregunta}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {b.capa}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* El círculo de la serie */}
        <motion.div
          className="mt-8 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60">
            El círculo de la serie · el arnés era esto
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-foreground/80">
            Llevamos meses viendo el arnés completo — especificaciones,
            comportamiento, herramientas, memoria. Hoy habéis visto que ese arnés
            no era cosa de programadores. Recordar y actuar es algo que
            cualquiera de vosotros puede usar mañana. El arnés era esto, para
            todos.
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
            La próxima vez, no abráis la de siempre en automático ni os quedéis
            en el modo por defecto. Cuatro preguntas de treinta segundos. Esa es
            la diferencia entre usar la IA… y usarla bien.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

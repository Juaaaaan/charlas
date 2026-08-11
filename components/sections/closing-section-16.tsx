"use client";

import { motion } from "framer-motion";

const finalIdeas = [
  "El cuello de botella se ha movido. Cuando la IA escribe el código, el trabajo pasa a ser saber pedir.",
  "Pedir bien tiene disciplina y nombre — SDD. Y desde este año tiene herramientas: OpenSpec, Spec Kit, Kiro. Manual contra herramienta es un espectro, no una guerra.",
  "La habéis visto funcionar de una tarea de Jira a código real, con el agente escribiendo y yo dirigiendo el qué.",
];

export function ClosingSection16() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Cierre
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Tres ideas para llevarse
          </h2>
        </motion.div>

        <motion.div
          className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {finalIdeas.map((idea, index) => (
              <div
                key={idea}
                className={`rounded-[1.5rem] border px-6 py-8 text-center ${
                  index === 1
                    ? "border-primary/30 bg-background/35"
                    : "border-primary/20 bg-primary/8"
                }`}
              >
                <p className="text-xl font-semibold leading-snug text-balance text-foreground md:text-2xl">
                  {idea}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-10 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 text-center md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-balance text-foreground/78 md:text-xl">
            Esto cierra el círculo con lo primero de la serie: el SDD era la
            primera capa del arnés — el «qué construir». La pieza más antigua de
            la serie es también la que más ha madurado.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            La pregunta ya no es «¿qué le escribo?». Es «¿le he dicho con
            claridad qué quiero y cómo sabré que lo ha hecho bien?». Eso es un
            spec.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

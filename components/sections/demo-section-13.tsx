"use client";

import { motion } from "framer-motion";

const buildSteps = [
  {
    step: "01",
    title: "Abrir Copilot Studio",
    body: "La interfaz desde la que cualquier persona puede crear un agente. Sin código.",
  },
  {
    step: "02",
    title: "Configurar el agente",
    body: "Nombre, descripción e instrucciones. Solo sobre lo que sabe. En español. Si no tiene la información, lo dice.",
  },
  {
    step: "03",
    title: "Conectar el conocimiento",
    body: "Nuestro handbook 2026 via SharePoint. No de internet — de nuestro propio documento, con nuestras credenciales corporativas.",
  },
  {
    step: "04",
    title: "Desplegar en Teams",
    body: "Un canal específico para el agente. Cualquier persona con acceso al canal puede hablar con él directamente.",
  },
];

const testQuestions = [
  {
    question: "¿Cuántos profesionales trabajamos en la empresa?",
    result: "Responde correctamente — está en el handbook.",
    ok: true,
  },
  {
    question: "¿Cuál es la política de teletrabajo?",
    result: "Dice que no tiene esa información — no está en el handbook.",
    ok: false,
  },
  {
    question: "¿Cuál es la política de bonus de fin de año?",
    result: "Dice que no tiene esa información — no está en el handbook.",
    ok: false,
  },
];

export function DemoSection() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/4 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 2 + 3
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Demo en vivo
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Construimos el agente en Copilot Studio y lo usamos en Teams. Todo
            en directo.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {buildSteps.map((item, index) => (
            <motion.div
              key={item.step}
              className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                {item.step}
              </p>
              <h4 className="mt-5 text-2xl font-semibold leading-tight text-foreground">
                {item.title}
              </h4>
              <p className="mt-3 text-base leading-relaxed text-foreground/72 md:text-lg">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-foreground md:text-4xl">
            Lo que responde y lo que no
          </h3>
          <p className="mt-4 text-xl text-foreground/70">
            Un agente bien construido sabe cuándo no tiene la respuesta. Eso es
            exactamente lo que queremos.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {testQuestions.map((item, index) => (
            <motion.div
              key={item.question}
              className={`rounded-[1.75rem] border p-6 ${
                item.ok
                  ? "border-primary/30 bg-primary/10"
                  : "border-border/60 bg-card/70"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                  item.ok ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.ok ? "Responde" : "No tiene información"}
              </p>
              <p className="mt-3 text-lg font-semibold text-foreground">
                {item.question}
              </p>
              <p className="mt-2 text-base text-foreground/70">{item.result}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            Un agente que reconoce lo que no sabe es más valioso que uno que
            siempre responde algo.
          </p>
          <p className="mt-6 text-xl text-foreground/70">
            ¿Qué habría que hacer para que supiera sobre teletrabajo? Añadir ese
            documento al conocimiento. Así de simple.
          </p>
        </motion.div>

        <motion.div
          className="mt-6 rounded-[1.75rem] border border-primary/20 bg-primary/8 px-6 py-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-xl font-semibold text-foreground md:text-2xl">
            Cualquier persona de esta sala puede tener algo así funcionando esta
            semana.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

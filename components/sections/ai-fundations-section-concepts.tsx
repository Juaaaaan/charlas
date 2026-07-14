"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, Layers, Wrench } from "lucide-react";

const foundationPillars = [
  {
    icon: FileText,
    eyebrow: "Especificar antes de construir",
    title: "SDD",
    description:
      "Especificar qué construir antes de que la IA toque código. La documentación es el punto de partida, no una tarea posterior.",
  },
  {
    icon: Wrench,
    eyebrow: "Contexto persistente",
    title: "Skills",
    description:
      "El comportamiento y las convenciones de cómo trabaja la empresa, disponibles para la IA en cada sesión.",
  },
  {
    icon: BookOpen,
    eyebrow: "Memoria documental",
    title: "Wiki LLM + OKF",
    description:
      "El repositorio de conocimiento del equipo, estructurado para que la IA lo consulte, mantenga y amplíe.",
  },
  {
    icon: Layers,
    eyebrow: "Todo conectado",
    title: "Arnés completo",
    description:
      "Las piezas — SDD, Skills, MCPs, instrucciones persistentes y Wiki LLM — conectadas entre sí.",
  },
];

export function AIFoundationsSectionConcepts() {
  return (
    <section className="relative py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Nivel 1
          </span>
          <h2 className="text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Lo que ya habéis construido
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Llevamos meses trabajando con IA: hemos conectado Claude a Jira,
            dado instrucciones a Copilot en el repositorio y construido una wiki
            que recuerda el conocimiento del equipo.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 max-w-4xl rounded-[1.5rem] border border-primary/20 bg-primary/8 px-6 py-6 md:px-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            La idea clave
          </p>
          <p className="mt-3 max-w-3xl text-2xl font-semibold leading-tight text-balance text-foreground md:text-3xl">
            Esto ya lo tenéis. No hace falta repetirlo.
            <br />
            Está aquí porque es la base sobre la que se construye todo lo demás.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {foundationPillars.map((item, index) => (
            <motion.div
              key={item.title}
              className={`rounded-[1.75rem] border p-7 md:p-8 ${
                index % 2 === 0
                  ? "border-border/70 bg-background/40"
                  : "border-primary/30 bg-primary/10"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-primary/90">
                {item.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-balance text-foreground md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/74 md:text-lg">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 max-w-4xl rounded-[1.5rem] border border-border/70 bg-card/85 px-6 py-6 md:px-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Transición
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-balance text-foreground md:text-3xl">
            Diez conceptos, dos minutos cada uno.
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/74 md:text-lg">
            Con ejemplos de vuestro trabajo diario. Vamos al Nivel 2.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

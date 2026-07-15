"use client";

import { motion } from "framer-motion";
import { Bot, GitBranch, Layers, Network, ShieldAlert } from "lucide-react";

const level3Concepts = [
  {
    icon: Bot,
    title: "Agentic workflows",
    description:
      "El agente developer implementa y el reviewer verifica de forma autónoma. Lo visteis en la Charla 8.",
  },
  {
    icon: Layers,
    title: "Memory: corto y largo plazo",
    description:
      "La context window es la memoria a corto plazo. El vault de Obsidian, construido en la Charla 11, es la memoria a largo plazo.",
  },
  {
    icon: Network,
    title: "Knowledge graphs",
    description:
      "Graphify genera un grafo de conocimiento del codebase — Charla 8, bonus. GraphRAG es RAG sobre un grafo de conocimiento.",
  },
  {
    icon: GitBranch,
    title: "Orchestration patterns",
    description:
      "El patrón developer/reviewer es un Supervisor Pattern: un agente supervisa el trabajo del otro antes de que salga.",
  },
];

const promptInjectionNotes = [
  {
    title: "Qué es",
    description:
      "Un intento de manipular a la IA con instrucciones ocultas en el contenido que procesa.",
  },
  {
    title: "Por qué importa",
    description:
      "Saber que existe y cómo defenderse también es Nivel 3 — no solo construir, también asegurar.",
  },
  {
    title: "Lo que pasó",
    description:
      "Lo probamos hace unas semanas. Copilot lo bloqueó — la defensa ya estaba integrada.",
  },
  {
    title: "La conclusión",
    description:
      "El Nivel 3 no es algo que tengáis que alcanzar. Es algo que ya estáis haciendo.",
  },
];

export function PromptSectionConcept() {
  return (
    <section className="relative py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mx-auto mb-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Nivel 3
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Ya estamos en el Nivel 3 sin saberlo
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Creíamos que estábamos en el Nivel 2. Pero llevamos semanas trabajando
            en el Nivel 3 sin que nos lo dijeran.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                El momento
              </p>
              <h3 className="mt-4 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
                No estamos en el Nivel 2 mirando el Nivel 3 desde fuera. Estamos
                dentro.
              </h3>
              <p className="mt-6 text-xl leading-relaxed text-foreground/82 md:text-2xl">
                Id concepto a concepto: cada uno ya ha pasado por nuestras manos
                en una charla anterior.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {level3Concepts.map((item, index) => (
                <motion.div
                  key={item.title}
                  className={`rounded-[1.5rem] border p-6 ${
                    index === 0 || index === 2
                      ? "border-primary/30 bg-background/35"
                      : "border-primary/20 bg-primary/8"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-2xl font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
                <ShieldAlert className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Además, sabéis defenderos
              </p>
              <h3 className="mt-3 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
                Prompt injection: lo intentamos, Copilot lo bloqueó.
              </h3>
              <div className="mt-8 grid gap-4">
                {promptInjectionNotes.map((item, index) => (
                  <div
                    key={item.title}
                    className={`rounded-[1.35rem] border px-5 py-5 ${
                      index === 1 || index === 3
                        ? "border-primary/25 bg-primary/8"
                        : "border-border/60 bg-background/35"
                    }`}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      {item.title}
                    </p>
                    <p className="mt-2 text-2xl font-semibold leading-snug text-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

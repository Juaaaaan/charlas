"use client";

import { motion } from "framer-motion";

const riskLevels = [
  {
    level: "Inaceptable",
    tone: "critical",
    example: "Scoring social, vigilancia masiva",
    context: "Prohibido por definición. No debería aparecer en nuestro trabajo.",
  },
  {
    level: "Alto riesgo",
    tone: "high",
    example:
      "Selección de personal, diagnóstico médico, scoring crediticio",
    context:
      "TODO: aterrizar en un ejemplo real de banca/seguros (scoring, detección de fraude, admisión) tras revisar la política interna.",
  },
  {
    level: "Riesgo limitado",
    tone: "medium",
    example: "Chatbots (deben avisar que son IA)",
    context: "Agentes de Copilot Studio como el que vimos la semana pasada.",
  },
  {
    level: "Riesgo mínimo",
    tone: "low",
    example: "Autocompletado, filtros de spam",
    context: "Uso de Copilot para autocompletar código en el día a día.",
  },
];

const exerciseCases = [
  {
    situation: "Usar IA para autocompletar código mientras programas",
    answer: "Riesgo mínimo",
  },
  {
    situation:
      "Un agente en Teams que responde dudas de onboarding al personal nuevo",
    answer: "Riesgo limitado — debe identificarse como IA",
  },
  {
    situation:
      "Usar IA para preseleccionar candidatos en un proceso de contratación",
    answer: "Riesgo alto — impacta directamente a personas",
  },
  {
    situation: "Pedir a una IA que redacte el borrador de un email interno",
    answer: "Riesgo mínimo",
  },
  {
    situation:
      "TODO: sustituir por un caso real del sector banca/seguros (p. ej. IA aplicada a scoring de riesgo o detección de fraude)",
    answer: "Alto riesgo casi con seguridad",
  },
];

export function NivelesRiesgoSection() {
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
            Bloque 2
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            No toda IA es igual de arriesgada
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Existe una regulación europea — el EU AI Act — que clasifica
            cualquier sistema de IA por su nivel de riesgo. La traducimos a
            ejemplos de nuestro día a día.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {riskLevels.map((r, index) => (
            <motion.div
              key={r.level}
              className={`rounded-[1.75rem] border px-6 py-8 ${
                r.tone === "critical"
                  ? "border-destructive/40 bg-destructive/10"
                  : r.tone === "high"
                    ? "border-primary/30 bg-primary/10"
                    : "border-border/60 bg-card/70"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <p
                className={`font-mono text-xs font-semibold uppercase tracking-[0.22em] ${
                  r.tone === "critical"
                    ? "text-destructive"
                    : r.tone === "high"
                      ? "text-primary"
                      : "text-primary/80"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">
                {r.level}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/85 md:text-lg">
                {r.example}
              </p>
              <p className="mt-4 rounded-[1rem] border border-border/50 bg-background/40 px-3 py-3 text-sm text-foreground/70">
                {r.context}
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
            La pregunta no es «¿puedo usar IA?». Es «¿qué está en juego si me
            equivoco?».
          </p>
        </motion.div>

        <motion.div
          className="mt-20 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-foreground md:text-4xl">
            Clasifica el riesgo
          </h3>
          <p className="mt-4 text-xl text-foreground/70">
            Ejercicio con la sala. Cinco situaciones. Vosotros decidís el nivel
            en voz alta. Después revelamos la respuesta.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {exerciseCases.map((ex, index) => (
            <motion.div
              key={index}
              className="grid gap-4 rounded-[1.5rem] border border-border/60 bg-card/70 p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-primary/90">
                Caso {String(index + 1).padStart(2, "0")}
              </p>
              <p className="text-lg leading-relaxed text-foreground md:text-xl">
                {ex.situation}
              </p>
              <p className="rounded-[1rem] border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary md:text-base">
                {ex.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

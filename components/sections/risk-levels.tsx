"use client";

import { motion } from "framer-motion";

const euRiskLevels = [
  {
    level: "Inaceptable",
    tone: "critical",
    example: "Scoring social, vigilancia masiva",
    context:
      "Prohibido por definición. No debería aparecer en nuestro trabajo.",
  },
  {
    level: "Alto riesgo",
    tone: "high",
    example: "Selección de personal, diagnóstico médico, scoring crediticio",
    context: "Ver detalle abajo en la política interna.",
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

const internalRiskLevels = [
  {
    level: "Prohibido",
    tone: "critical",
    criterios: "TODO",
    ejemplos: "TODO",
    aprobacion: "TODO",
    evidencia: "TODO",
  },
  {
    level: "Crítico",
    tone: "critical",
    criterios: "TODO",
    ejemplos: "TODO",
    aprobacion: "TODO",
    evidencia: "TODO",
  },
  {
    level: "Alto",
    tone: "high",
    criterios: "TODO",
    ejemplos: "TODO",
    aprobacion: "TODO",
    evidencia: "TODO",
  },
  {
    level: "Medio",
    tone: "medium",
    criterios: "TODO",
    ejemplos: "TODO",
    aprobacion: "TODO",
    evidencia: "TODO",
  },
  {
    level: "Bajo",
    tone: "low",
    criterios: "TODO",
    ejemplos: "TODO",
    aprobacion: "TODO",
    evidencia: "TODO",
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
          {euRiskLevels.map((r, index) => (
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
          className="mt-24 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Política interna
          </span>
          <h3 className="text-3xl font-bold text-foreground md:text-4xl">
            Nuestros 5 niveles de riesgo
          </h3>
          <p className="mt-4 max-w-3xl text-xl leading-relaxed text-foreground/72">
            El EU AI Act es el marco legal. Internamente lo aterrizamos en 5
            niveles operativos con criterios claros, aprobación mínima y
            evidencia esperada.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {internalRiskLevels.map((r, index) => (
            <motion.div
              key={r.level}
              className={`rounded-[1.75rem] border p-6 md:p-8 ${
                r.tone === "critical"
                  ? "border-destructive/40 bg-destructive/8"
                  : r.tone === "high"
                    ? "border-primary/30 bg-primary/10"
                    : "border-border/60 bg-card/70"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="flex items-baseline gap-4">
                <p
                  className={`font-mono text-xs font-semibold uppercase tracking-[0.22em] ${
                    r.tone === "critical"
                      ? "text-destructive"
                      : r.tone === "high"
                        ? "text-primary"
                        : "text-primary/80"
                  }`}
                >
                  Nivel {String(index + 1).padStart(2, "0")}
                </p>
                <h4 className="text-2xl font-semibold text-foreground md:text-3xl">
                  {r.level}
                </h4>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Criterios", value: r.criterios },
                  { label: "Ejemplos", value: r.ejemplos },
                  { label: "Aprobación mínima", value: r.aprobacion },
                  { label: "Evidencia", value: r.evidencia },
                ].map((col) => (
                  <div
                    key={col.label}
                    className="rounded-[1rem] border border-border/50 bg-background/40 px-4 py-4"
                  >
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-foreground/55">
                      {col.label}
                    </p>
                    <p
                      className={`mt-2 text-sm leading-relaxed md:text-base ${
                        col.value === "TODO"
                          ? "font-mono uppercase tracking-[0.14em] text-foreground/40"
                          : "text-foreground/85"
                      }`}
                    >
                      {col.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-border/60 bg-card/70 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl leading-relaxed text-foreground/85 md:text-2xl">
            Fijaos en el detalle importante: cuanto más alto el nivel, no solo
            cambia lo que podéis o no hacer. Cambia{" "}
            <span className="font-semibold text-primary">
              quién tiene que aprobarlo
            </span>{" "}
            y{" "}
            <span className="font-semibold text-primary">
              qué prueba hay que dejar
            </span>{" "}
            de que la decisión se tomó bien.
          </p>
          <p className="mt-4 text-lg text-foreground/70">
            Esto es lo que separa una política real de un cartel
            bienintencionado.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

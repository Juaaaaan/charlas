"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "No borres nada",
    detail:
      "Ni intentes arreglarlo tú solo. La primera reacción define si se puede investigar bien después.",
  },
  {
    title: "Repórtalo",
    detail:
      "A tu responsable directo y/o al canal de compliance/seguridad interno, cuanto antes mejor.",
  },
  {
    title: "Documenta qué pasó",
    detail: "Qué herramienta, qué datos, cuándo — sin especular sobre causas.",
  },
  {
    title: "No lo escondas",
    detail:
      "El objetivo es que la próxima persona lo reporte también, no que lo tape por miedo.",
  },
];

const roles = [
  {
    role: "Developer",
    detail:
      "Revisa qué servidores MCP y qué modelos instalas antes de confiar en ellos.",
  },
  {
    role: "PM",
    detail:
      "El checklist de la Charla 14 es la capa «humano en el bucle» que falló en media docena de casos de hoy.",
  },
  {
    role: "Comercial",
    detail:
      "Un chatbot mal configurado puede comprometer a la empresa legalmente — caso Chevrolet.",
  },
  {
    role: "RRHH / Management",
    detail:
      "Samsung no fue un ataque. Fue gente sin alternativa segura. Se previene dando herramientas, no prohibiendo.",
  },
];

export function ShadowAIRoleSection() {
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
            Bloque 6
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Shadow AI: qué hacer si algo se tuerce
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, index) => (
            <motion.div
              key={s.title}
              className="rounded-[1.5rem] border border-border/70 bg-card/70 px-5 py-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <p className="font-mono text-2xl font-bold text-primary">
                {index + 1}
              </p>
              <p className="mt-3 text-lg font-semibold text-foreground">
                {s.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {s.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-24 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 7
          </span>
          <h3 className="text-3xl font-bold text-foreground md:text-4xl">
            Aplicación práctica por rol
          </h3>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {roles.map((r, index) => (
            <motion.div
              key={r.role}
              className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                Rol {String(index + 1).padStart(2, "0")}
              </p>
              <h4 className="mt-4 text-2xl font-bold text-foreground">
                {r.role}
              </h4>
              <p className="mt-4 text-base leading-relaxed text-foreground/72 md:text-lg">
                {r.detail}
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
            Nadie necesita ser experto en ciberseguridad. Necesita saber qué
            pregunta hacerse antes de confiar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

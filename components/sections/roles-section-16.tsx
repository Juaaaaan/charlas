"use client";

import { motion } from "framer-motion";

const roles = [
  {
    role: "Developer",
    takeaway:
      "Adopta un flujo de spec, pero empieza ligero — un .md a mano o OpenSpec. La herramienta no sustituye la disciplina; la refuerza.",
  },
  {
    role: "PM / Project Manager",
    takeaway:
      "El spec es donde se negocia y se cierra el «qué» antes de construir. Un issue de Jira de dos frases es exactamente el problema que hemos resuelto: escribir mejor la tarea es la mitad del trabajo.",
  },
  {
    role: "Cualquier perfil que use IA",
    takeaway:
      "Todo esto es, en el fondo, cómo se le dan instrucciones sin ambigüedad a un agente. «Di qué quieres, con criterios de éxito, antes de pedir el resultado» vale para un correo, un análisis o un resumen. El spec es esa idea, llevada al código.",
  },
];

export function RolesSection16() {
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
            Bloque 6 · No era una charla solo para devs
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Qué se lleva cada rol
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {roles.map((r, index) => (
            <motion.div
              key={r.role}
              className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <h3 className="text-2xl font-semibold text-foreground">
                {r.role}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/74">
                {r.takeaway}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            Programéis o no, todos le pedís cosas a una IA. Y todos os
            beneficiáis de la misma disciplina: decir el qué y el porqué antes de
            pedir el cómo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const capas = [
  {
    numero: "1",
    nombre: "Checks deterministas",
    aporta: "Build, lint, tests, análisis estático, políticas automatizadas.",
    limite: "No interpretan por sí solos la intención completa del cambio.",
  },
  {
    numero: "2",
    nombre: "Revisión agéntica",
    aporta:
      "Contrasta el candidato con criterios, convenciones y señales de riesgo.",
    limite: "No obtiene autoridad para fusionar, publicar o aceptar el riesgo.",
  },
  {
    numero: "3",
    nombre: "Revisión humana",
    aporta: "Decide si la evidencia es suficiente y si el riesgo es aceptable.",
    limite:
      "No debería gastar tiempo repitiendo comprobaciones mecánicas ya automatizadas.",
  },
];

export function CapasSection24() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 2 · El nuevo cuello de botella
          </span>
          <h2 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            El tapón se ha movido
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            La IA abarata producir candidatos. No abarata automáticamente
            demostrar que son correctos.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {capas.map((capa, index) => (
            <motion.div
              key={capa.nombre}
              className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                Capa {capa.numero}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">
                {capa.nombre}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/82">
                {capa.aporta}
              </p>
              <p className="mt-4 rounded-[1rem] border border-border/50 bg-background/40 px-3 py-3 text-sm leading-relaxed text-foreground/65">
                {capa.limite}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-foreground/75"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          El ojo humano es el recurso escaso. Se gasta en decisiones, no en
          repetir comprobaciones que una máquina puede ejecutar de forma
          reproducible.
        </motion.p>

        <motion.div
          className="mt-10 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Pregunta anticipada
          </p>
          <p className="mt-3 text-xl font-semibold leading-snug text-balance text-foreground md:text-2xl">
            ¿Y si el agente revisor se equivoca?
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/78">
            Puede equivocarse. Un verde falso es especialmente peligroso
            porque crea confianza injustificada. Por eso la revisión
            agéntica no recibe autoridad de entrega: produce evidencia y
            observaciones, nunca la decisión final.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 3 · El reviewer ya existía
          </span>
          <p className="text-base leading-relaxed text-foreground/82">
            En la charla 8 vimos un agente reviewer sobre RCA. Solo leía, no
            escribía. Contrastaba el cambio con el task.md, las convenciones
            del proyecto y la cobertura de tests. Ya podía emitir una
            opinión. Faltaban dos propiedades.
          </p>
          <div className="mt-6 overflow-x-auto rounded-[1.25rem] border border-border/60 bg-background/55 p-5">
            <pre className="font-mono text-sm leading-relaxed text-foreground/80">
              <span className="text-primary">Charla 8</span>
              {"\n"} Reviewer que inspecciona y comenta
              {"\n"}
              {"\n"}
              <span className="text-primary">Hoy añadimos</span>
              {"\n"} 1. Proporcionalidad
              {"\n"} 2. Trazabilidad
            </pre>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-2xl font-semibold leading-relaxed text-balance text-foreground md:text-3xl">
            El reviewer ya existía. Ahora le damos reglas para revisar cada
            candidato con la profundidad que exige su riesgo y dejar
            constancia de qué ha comprobado.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

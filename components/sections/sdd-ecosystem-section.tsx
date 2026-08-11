"use client";

import { motion } from "framer-motion";

const tools = [
  {
    name: "OpenSpec",
    tag: "El ligero",
    points: [
      "Capa ligera para proyectos que ya existen (brownfield), open-source, sin claves de API.",
      "Su idea diferencial: delta specs — describes solo lo que cambia (AÑADIDO / MODIFICADO / ELIMINADO) sobre un único spec vivo.",
      "Funciona con lo que ya usáis: Copilot, Claude Code y ~20 más, vía slash commands. Sin lock-in. Requiere Node 20.19+.",
    ],
    toll: "El drift del spec lo gestionas tú a mano.",
    highlight: true,
  },
  {
    name: "Spec Kit",
    tag: "El estándar de comunidad",
    points: [
      "CLI open-source (specify), licencia MIT, la opción más adoptada (>100k favoritos en GitHub).",
      "Flujo de cinco fases: Constitución → Especificar → Planificar → Tareas → Implementar.",
      "La «constitución» son las reglas no negociables que todo spec futuro respeta. Funciona con 30+ agentes.",
    ],
    toll: "Las specs son estáticas — no gobiernan nada tras la primera generación; y genera mucho markdown.",
    highlight: false,
  },
  {
    name: "Kiro",
    tag: "El integrado",
    points: [
      "No es una CLI: es un IDE entero construido alrededor del spec (sobre VS Code). Reemplazo del difunto Amazon Q Developer.",
      "Las specs son objetos de primera clase en el editor. Usa notación EARS (grado aeroespacial, viene de Rolls-Royce).",
      "Agent Hooks: automatizaciones que se disparan al cambiar el código (tests, docs) — un bucle bidireccional.",
    ],
    toll: "Lock-in (specs en .kiro/, modelos por AWS Bedrock) y precios por créditos con markup que ha generado rechazo.",
    highlight: false,
  },
];

const tableCols = ["Spec manual", "OpenSpec", "Spec Kit", "Kiro"];

const tableRows = [
  {
    criterio: "Filosofía",
    values: [
      "Tú y un .md",
      "Ligero, incremental",
      "Estándar de comunidad",
      "IDE integrado y opinado",
    ],
  },
  {
    criterio: "Spec vivo o estático",
    values: [
      "Lo mantienes tú",
      "Vivo (delta specs)",
      "Estático hasta actualizar",
      "Vivo (Agent Hooks)",
    ],
  },
  {
    criterio: "Lock-in",
    values: ["Ninguno", "Ninguno", "Ninguno", "Alto (Bedrock + IDE)"],
  },
  {
    criterio: "Mejor para",
    values: [
      "Tareas pequeñas",
      "Proyectos que ya existen",
      "Empezar de cero",
      "Equipos ya en AWS",
    ],
  },
  {
    criterio: "Coste",
    values: ["Gratis", "Gratis", "Gratis", "Créditos con markup"],
  },
  {
    criterio: "Con tu stack (Copilot / Claude Code)",
    values: ["Sí", "Sí", "Sí", "Solo dentro de Kiro"],
  },
];

export function SddEcosystemSection() {
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
            Bloque 3 · El ecosistema SDD 2026
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Spec con herramienta
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Tres arquetipos, tres filosofías opuestas. No hay un ganador: hay un
            espectro entre cuánta estructura necesitas y cuánta libertad estás
            dispuesto a ceder.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className={`flex flex-col rounded-[1.75rem] border px-6 py-8 ${
                tool.highlight
                  ? "border-primary/40 bg-primary/10"
                  : "border-border/70 bg-card/70"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                {tool.tag}
              </p>
              <h3 className="mt-3 text-3xl font-bold text-foreground">
                {tool.name}
              </h3>
              <ul className="mt-6 flex-1 space-y-4">
                {tool.points.map((p) => (
                  <li
                    key={p}
                    className="text-base leading-relaxed text-foreground/74"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-[1.25rem] border border-border/60 bg-background/40 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/55">
                  El peaje
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/72">
                  {tool.toll}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabla para decidir de un vistazo */}
        <motion.div
          className="mt-10 overflow-x-auto rounded-[1.75rem] border border-border/70 bg-card/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border/70">
                <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground/55">
                  Criterio
                </th>
                {tableCols.map((col) => (
                  <th
                    key={col}
                    className={`px-5 py-4 text-sm font-semibold ${
                      col === "OpenSpec"
                        ? "text-primary"
                        : "text-foreground/80"
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => (
                <tr
                  key={row.criterio}
                  className="border-b border-border/40 last:border-b-0"
                >
                  <th className="px-5 py-4 text-sm font-medium text-foreground/70">
                    {row.criterio}
                  </th>
                  {row.values.map((value, i) => (
                    <td
                      key={`${row.criterio}-${i}`}
                      className={`px-5 py-4 text-sm leading-relaxed ${
                        tableCols[i] === "OpenSpec"
                          ? "text-foreground"
                          : "text-foreground/68"
                      }`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            Manual contra herramienta no es una guerra. Es un espectro entre
            cuánta estructura necesitas y cuánta libertad estás dispuesto a
            ceder.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

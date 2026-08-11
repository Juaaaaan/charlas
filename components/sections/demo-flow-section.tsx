"use client";

import { motion } from "framer-motion";

const steps = [
  {
    tag: "Punto de partida",
    title: "Jira",
    detail:
      "El issue RCA-21 (Cart Drawer): una tarea del backlog escrita en dos frases por un PM. Ambigua, incompleta. Justo lo que un agente odia.",
  },
  {
    tag: "/opsx-propose",
    title: "Propuesta",
    detail:
      "De las dos frases del PM, OpenSpec genera cuatro documentos: proposal.md (por qué), specs/ (qué), design.md (cómo) y tasks.md (hacer). Ni una línea de código todavía.",
  },
  {
    tag: "Revisar",
    title: "El plan, antes del código",
    detail:
      "Es más barato corregir un párrafo de Markdown que deshacer 500 líneas. ¿Ha entendido la intención? ¿El alcance cuadra? ¿Las tareas son atómicas?",
  },
  {
    tag: "/opsx-apply",
    title: "El agente implementa",
    detail:
      "Lee tasks.md y ejecuta las tareas una a una, marcando cada checkbox. Trabaja contra una checklist que yo he revisado, no contra su imaginación.",
  },
  {
    tag: "/opsx-archive",
    title: "Cierre del ciclo",
    detail:
      "Fusiona las delta specs en el spec principal y archiva el cambio. El spec principal siempre refleja el estado actual del sistema. El escenario queda limpio.",
  },
];

const commands = [
  {
    where: "Chat de Copilot",
    cmd: "/opsx-explore",
    does: "Pensar en voz alta antes de proponer nada — sin artefactos, sin código.",
  },
  {
    where: "Chat de Copilot",
    cmd: "/opsx-propose <nombre>",
    does: "Crear una propuesta completa (proposal + specs + design + tasks).",
  },
  {
    where: "Chat de Copilot",
    cmd: "/opsx-apply",
    does: "El agente implementa las tareas del tasks.md, una a una.",
  },
  {
    where: "Chat de Copilot",
    cmd: "/opsx-archive",
    does: "Archivar el cambio y fusionar las delta specs en el spec principal.",
  },
  {
    where: "Terminal",
    cmd: "openspec init",
    does: "Inicializar OpenSpec en un proyecto.",
  },
];

export function DemoFlowSection() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/8 to-background" />
      <div className="absolute left-1/2 top-24 h-[24rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 4 · Demo en directo
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            De un issue de Jira a código
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            El proyecto real de la serie —Resin Craft Art (Angular)— y la
            instancia demo de Jira. Un ciclo completo con OpenSpec, sin escribir
            el spec a mano.
          </p>
        </motion.div>

        {/* Stepper */}
        <div className="grid gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex gap-5 rounded-[1.5rem] border border-border/70 bg-card/70 px-6 py-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-lg font-semibold text-primary">
                {index + 1}
              </div>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                  {step.tag}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-foreground/72">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Delta spec — el concepto central */}
        <motion.div
          className="mt-10 rounded-[1.75rem] border border-primary/25 bg-primary/8 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            El corazón de OpenSpec · la delta spec
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">
            Un diff de requisitos, como un diff de código
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/74">
            No reescribe la especificación entera. Solo dice qué se AÑADE y qué
            se MODIFICA. Al archivar, esas deltas se fusionan solas en el spec
            principal — que crece orgánicamente, tarea a tarea, sin que nadie lo
            reescriba entero.
          </p>
          <div className="mt-6 overflow-x-auto rounded-[1.25rem] border border-border/60 bg-background/55 p-5">
            <pre className="font-mono text-sm leading-relaxed text-foreground/80">
              <span className="text-primary">## ADDED Requirements</span>
              {"\n"}
              {"\n"}### Requirement: Category Filtering
              {"\n"}The catalog page SHALL allow users to filter products by
              category.
              {"\n"}
              {"\n"} #### Scenario: Filter by category
              {"\n"} - GIVEN the user is on the catalog page
              {"\n"} - WHEN the user selects a category
              {"\n"} - THEN only products of that category are displayed
              {"\n"}
              {"\n"}
              <span className="text-primary">## MODIFIED Requirements</span>
              {"\n"}
              {"\n"}### Requirement: Catalog Display
              {"\n"}The catalog page SHALL display a category selector above the
              grid.
            </pre>
          </div>
        </motion.div>

        {/* Split OpenSpec / Git */}
        <motion.div
          className="mt-10 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-[1.5rem] border border-primary/25 bg-primary/8 px-6 py-7">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">
              OpenSpec
            </p>
            <h4 className="mt-3 text-xl font-semibold text-foreground">
              Qué construir y cómo
            </h4>
            <p className="mt-3 font-mono text-sm text-foreground/70">
              propose → revisar → apply → archive
            </p>
          </div>

          <div className="flex items-center justify-center py-2">
            <span className="rounded-full border border-border/70 bg-card/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-foreground/60">
              Aquí se para OpenSpec →
            </span>
          </div>

          <div className="rounded-[1.5rem] border border-border/70 bg-card/70 px-6 py-7">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
              Git
            </p>
            <h4 className="mt-3 text-xl font-semibold text-foreground">
              Cómo gestionas tu repo
            </h4>
            <p className="mt-3 font-mono text-sm text-foreground/70">
              branch → commit → PR → review → merge
            </p>
          </div>
        </motion.div>

        {/* Chuleta de comandos */}
        <motion.div
          className="mt-10 overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-b border-border/60 px-6 py-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60">
              Chuleta · dos sitios: terminal para instalar, chat para trabajar
            </p>
          </div>
          <div className="divide-y divide-border/40">
            {commands.map((c) => (
              <div
                key={c.cmd}
                className="grid gap-2 px-6 py-4 md:grid-cols-[minmax(0,0.7fr)_minmax(0,0.9fr)_minmax(0,1.6fr)] md:items-center"
              >
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/50">
                  {c.where}
                </span>
                <code className="font-mono text-sm text-primary">{c.cmd}</code>
                <span className="text-sm leading-relaxed text-foreground/70">
                  {c.does}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            El agente escribió el código. Yo dirigí el qué. Y el spec se
            actualizó solo. Pero la última palabra —subirlo, abrir la PR,
            mergearlo— sigue siendo mía.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

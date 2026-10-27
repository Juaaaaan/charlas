"use client";

import { motion } from "framer-motion";

const flujo = [
  "Candidato terminado",
  "Congelar la versión que se va a revisar",
  "Checks + lentes de revisión",
  "Evidencia y hallazgos",
  "Receipt ligado al candidato",
  "Decisión humana: aceptar, corregir o rechazar",
];

const profundidades = [
  {
    nivel: "Baja",
    tone: "low" as const,
    cuando: "Cambio pasivo o visual acotado, sin señales críticas.",
    tratamiento: "Checks y evidencia directa del cambio.",
  },
  {
    nivel: "Media",
    tone: "medium" as const,
    cuando: "Cambio ordinario de código con impacto localizado.",
    tratamiento: "Checks más una lente focalizada y contraste con el ticket.",
  },
  {
    nivel: "Alta",
    tone: "high" as const,
    cuando:
      "Seguridad, permisos, pagos, pérdida de datos, concurrencia u otra consecuencia difícil de revertir.",
    tratamiento: "Lentes 4R pertinentes y entrada humana explícita.",
  },
];

const lentes = [
  {
    letra: "R",
    nombre: "Risk",
    pregunta: "¿Qué daño puede causar este cambio si se equivoca?",
    ejemplo: "Vender una unidad que no existe, rechazar una compra válida.",
  },
  {
    letra: "R",
    nombre: "Resilience",
    pregunta: "¿Se comporta bien en límites, fallos y condiciones adversas?",
    ejemplo: "Stock en cero, stock en uno, dos operaciones concurrentes.",
  },
  {
    letra: "R",
    nombre: "Readability",
    pregunta: "¿Otra persona puede comprender la regla sin reconstruirla?",
    ejemplo: "La regla no queda duplicada ni contradictoria.",
  },
  {
    letra: "R",
    nombre: "Reliability",
    pregunta: "¿Qué evidencia reproducible detectaría una regresión?",
    ejemplo: "Escenario Gherkin, prueba ligada al commit revisado.",
  },
];

export function RddSection24() {
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
            Bloque 5 · RDD con nombre
          </span>
          <h2 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Receipt-Driven Development
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            La palabra importante no es solo review. Es receipt: recibo. Una
            revisión útil no termina en «el agente dice que está bien».
          </p>
        </motion.div>

        {/* Candidato congelado */}
        <motion.div
          className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            5.1 · Candidato congelado
          </p>
          <p className="mt-3 text-base leading-relaxed text-foreground/78">
            Si revisamos un commit y después cambiamos el código, el receipt
            anterior ya no demuestra nada sobre el nuevo candidato.
          </p>
          <div className="mt-6 flex flex-col gap-1.5">
            {flujo.map((paso, index) => (
              <div key={paso} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-[11px] font-semibold text-primary">
                  {index + 1}
                </span>
                <span className="text-sm leading-relaxed text-foreground/82 md:text-base">
                  {paso}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-2xl font-semibold leading-relaxed text-balance text-foreground md:text-3xl">
            Un receipt no certifica «el proyecto». Registra la evidencia
            obtenida sobre un candidato concreto.
          </p>
        </motion.div>

        {/* Profundidad proporcional */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            5.2 · Profundidad proporcional al riesgo
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-foreground/75">
            Simplificación pedagógica: lo importante es que la política
            determine la intensidad por señales de riesgo, no por intuición
            ni por volumen del diff.
          </p>
        </motion.div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {profundidades.map((p, index) => (
            <motion.div
              key={p.nivel}
              className={`flex flex-col rounded-[1.75rem] border px-6 py-7 ${
                p.tone === "high"
                  ? "border-destructive/35 bg-destructive/8"
                  : p.tone === "medium"
                    ? "border-primary/25 bg-primary/8"
                    : "border-border/60 bg-card/70"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <p
                className={`font-mono text-xs font-semibold uppercase tracking-[0.2em] ${
                  p.tone === "high" ? "text-destructive" : "text-primary"
                }`}
              >
                {p.nivel}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/82">
                {p.cuando}
              </p>
              <p className="mt-4 rounded-[1rem] border border-border/50 bg-background/40 px-3 py-3 text-sm leading-relaxed text-foreground/68">
                {p.tratamiento}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mx-auto mt-10 max-w-3xl text-center text-xl font-semibold leading-snug text-balance text-foreground md:text-2xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          El modelo propone. La política limita. La persona decide.
        </motion.p>

        {/* Las lentes 4R */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            5.3 · Las lentes 4R
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-foreground/75">
            No son cuatro sellos decorativos. Cada una obliga a formular una
            pregunta diferente y a buscar evidencia distinta.
          </p>
        </motion.div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lentes.map((l, index) => (
            <motion.div
              key={l.nombre}
              className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-5 py-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <h3 className="text-xl font-semibold text-foreground">
                {l.nombre}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-foreground/82">
                {l.pregunta}
              </p>
              <p className="mt-4 rounded-[1rem] border border-border/50 bg-background/40 px-3 py-3 text-xs leading-relaxed text-foreground/65">
                {l.ejemplo}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-foreground/72"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          RDD no sustituye los checks deterministas, BDD ni la revisión
          humana de cambios críticos. Organiza la revisión, vincula
          evidencia al candidato y devuelve la decisión de entrega a la
          persona o proceso autorizado.
        </motion.p>
      </div>
    </section>
  );
}

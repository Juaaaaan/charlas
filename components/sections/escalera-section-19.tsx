"use client";

import { motion } from "framer-motion";

const peldanos = [
  {
    nivel: "Chatbot clásico",
    detalle:
      "Sigue un guión predefinido. Si tu pregunta no encaja en un camino, se rompe y te manda en bucles. Todos hemos sufrido el del banco.",
    tono: "base",
  },
  {
    nivel: "Agente",
    detalle:
      "No sigue guión: razona. Entiende, busca y responde adaptándose. Y reconoce lo que no sabe. Esto es lo de la charla 13.",
    tono: "medio",
  },
  {
    nivel: "Equipo de agentes",
    detalle:
      "Varios agentes, cada uno especialista en una cosa, coordinados por uno que reparte el trabajo. Como un equipo humano. Esto es hoy.",
    tono: "alto",
  },
];

const asesoria = [
  {
    papel: "Jefe de proyecto",
    hace: "Recibe el encargo y reparte. No hace el trabajo: coordina y junta las piezas.",
  },
  {
    papel: "Analista",
    hace: "Lee el pliego y saca la lista de lo que piden.",
  },
  {
    papel: "Experto en riesgos",
    hace: "Busca las trampas: ambigüedades, contradicciones, huecos.",
  },
  {
    papel: "Estimador",
    hace: "Calcula cuánto trabajo costará, en órdenes de magnitud.",
  },
];

export function EscaleraSection19() {
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
            Bloque 1 · El marco
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            De un chatbot a un equipo de agentes
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            La misma escalera de la 13, con un peldaño nuevo arriba del todo.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {peldanos.map((p, index) => (
            <motion.div
              key={p.nivel}
              className={`flex flex-col rounded-[1.75rem] border px-6 py-7 ${
                p.tono === "alto"
                  ? "border-primary/30 bg-primary/10"
                  : "border-border/70 bg-card/70"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
                  p.tono === "alto"
                    ? "bg-primary/20 text-primary"
                    : "bg-foreground/10 text-foreground/70"
                }`}
              >
                Peldaño {index + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-foreground">
                {p.nivel}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/72">
                {p.detalle}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            La analogía que ancla todo · una asesoría
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            No le he pedido a una IA que lo haga todo. He montado un equipo
            pequeño donde cada uno hace una sola cosa y la hace bien —
            exactamente como organizarías a personas.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {asesoria.map((a, index) => (
              <motion.div
                key={a.papel}
                className="flex flex-col rounded-[1.5rem] border border-border/60 bg-background/40 px-5 py-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {a.papel}
                </span>
                <p className="mt-3 text-base leading-relaxed text-foreground/78">
                  {a.hace}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[1.75rem] border border-primary/20 bg-primary/8 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            La idea que hay que guardar · eco de la charla 18
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            Cuando abrimos la caja de cómo piensa la IA, aprendimos algo: no hay
            que fiarse a ciegas. Así que este equipo, antes de dar nada por
            bueno, <span className="font-semibold text-foreground">para y te pregunta</span>.
            Guardad esa idea — es el momento más importante del día.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            El jefe no hace el trabajo: coordina y junta las piezas. Eso es,
            literalmente, lo que habéis venido a ver hoy en una pantalla.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

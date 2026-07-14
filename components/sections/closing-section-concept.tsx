"use client";

import { motion } from "framer-motion";

const level4Concepts = [
  "Computer use — la IA que usa el ordenador como un humano: ve la pantalla, mueve el ratón, rellena formularios. Ya está en producción.",
  "Reasoning models — modelos que dedican tiempo a razonar sobre el problema antes de responder. Para tareas complejas, la diferencia es enorme.",
  "Autonomous coding agents — agentes que implementan features completas de forma autónoma. Lo visteis en embrión con el agente developer de la Charla 8.",
  "AI Governance: EU AI Act — entró en vigor en 2024 y se aplica progresivamente hasta 2027. Clasifica los sistemas de IA por riesgo.",
];

const takeaways = [
  "El vocabulario importa: cuando entendéis qué es RAG o qué hace la temperature, sabéis qué palanca tocar.",
  "No estáis en el principio: lleváis semanas trabajando en Nivel 3 sin saberlo.",
  "El Nivel 4 no os queda lejos: si llegasteis al Nivel 3 sin daros cuenta, el Nivel 4 es cuestión de tiempo.",
];

const finalIdeas = [
  "El vocabulario es una caja de herramientas, no un examen.",
  "Lleváis semanas en el Nivel 3 sin saberlo.",
  "El Nivel 4 es cuestión de tiempo, no de distancia.",
];

export function ClosingSectionConcept() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Nivel 4
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Hacia dónde va esto
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            La frontera: lo que está pasando ahora en los laboratorios y que en
            12-18 meses va a estar en vuestras herramientas del día a día.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 lg:grid-cols-2 lg:items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              La frontera
            </p>
            <div className="mt-6 grid gap-3">
              {level4Concepts.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.25rem] border px-5 py-4 text-lg text-foreground ${
                    index === 0 || index === 3
                      ? "border-primary/25 bg-background/35"
                      : "border-primary/20 bg-primary/8"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-[1.5rem] border border-primary/20 bg-background/35 p-5 text-xl font-semibold leading-relaxed text-foreground">
              El Nivel 4 no es el futuro. Es el presente de los que van un paso
              por delante.
            </p>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Tres ideas para llevaros
            </p>
            <div className="mt-6 grid gap-3">
              {takeaways.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.25rem] border px-5 py-4 text-lg text-foreground ${
                    index === 1
                      ? "border-primary/25 bg-primary/8"
                      : "border-border/60 bg-background/35"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-primary/20 bg-primary/8 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Aterrizaje
              </p>
              <p className="mt-3 text-xl leading-relaxed text-foreground">
                Ahora cuando alguien os hable de RAG, de agentic workflows o de
                reasoning models, no vais a necesitar que os lo expliquen.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Cierre
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {finalIdeas.map((idea, index) => (
              <div
                key={idea}
                className={`rounded-[1.5rem] border px-6 py-8 ${
                  index === 1
                    ? "border-primary/30 bg-background/35"
                    : "border-primary/20 bg-primary/8"
                }`}
              >
                <p className="text-2xl font-semibold leading-tight text-balance text-foreground md:text-3xl">
                  {idea}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            Empezamos hace semanas con prompts y contexto. Hoy tenéis el mapa
            completo.
            <br />
            Tenéis el mapa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

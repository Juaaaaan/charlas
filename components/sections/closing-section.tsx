"use client"

import { motion } from "framer-motion"

const noAutomation = [
  "No lo automatices si no sabes explicar cómo funciona el proceso.",
  "No lo automatices si el caso cambia tanto que no puedes definir un patrón estable.",
  "No lo automatices si el error es crítico y aún no has definido control humano.",
  "No lo automatices si ocurre tan poco que no compensa el esfuerzo.",
  "No lo automatices si no puedes auditar qué hizo el sistema y por qué.",
]

const requiredControls = [
  "Registro de eventos, decisiones y acciones.",
  "Avisos o escalado cuando haya excepciones.",
  "Revisión humana en pasos sensibles.",
  "Medidas de calidad para saber si mejora de verdad.",
  "Salida segura cuando el sistema no tiene suficiente confianza.",
]

const finalIdeas = [
  "La clave no es automatizar todo. Es elegir el nivel adecuado.",
  "La automatización sin control no es madurez. Es fragilidad.",
  "Automatizar con sentido exige límites, trazabilidad y responsabilidad.",
]

export function ClosingSection() {
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
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 4</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Límites, trazabilidad y criterio
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            La pregunta importante no es solo qué se puede automatizar. La pregunta importante es qué conviene
            automatizar y bajo qué control.
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Cuando no</p>
            <div className="mt-6 grid gap-3">
              {noAutomation.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.25rem] border px-5 py-4 text-lg text-foreground ${
                    index === 0 || index === 4 ? "border-primary/25 bg-background/35" : "border-primary/20 bg-primary/8"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-[1.5rem] border border-primary/20 bg-background/35 p-5 text-xl font-semibold leading-relaxed text-foreground">
              Automatizar sin control no es eficiencia. Es riesgo.
            </p>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Lo mínimo exigible</p>
            <div className="mt-6 grid gap-3">
              {requiredControls.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.25rem] border px-5 py-4 text-lg text-foreground ${
                    index === 2 ? "border-primary/25 bg-primary/8" : "border-border/60 bg-background/35"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-primary/20 bg-primary/8 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Aterrizaje</p>
              <p className="mt-3 text-xl leading-relaxed text-foreground">
                Para llevar esto a entorno real hace falta una capa que conecte eventos, IA y acciones. Copilot
                Studio encaja aquí: no como un bot aislado, sino como una forma de automatizar procesos con IA dentro
                de la empresa.
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
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Cierre</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {finalIdeas.map((idea, index) => (
              <div
                key={idea}
                className={`rounded-[1.5rem] border px-6 py-8 ${
                  index === 1 ? "border-primary/30 bg-background/35" : "border-primary/20 bg-primary/8"
                }`}
              >
                <p className="text-2xl font-semibold leading-tight text-balance text-foreground md:text-3xl">{idea}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            El valor no está en automatizar por automatizar.
            <br />
            Está en decidir bien dónde entra, cómo se controla y cuándo no debe avanzar sola.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"

const dimensions = [
  "Ideación, Planning y Diseño",
  "Desarrollo y Generación de Código",
  "Testing, Calidad y Seguridad",
  "Validación de Código Generado por IA",
  "Configuración y Assets de IA",
  "Automatización y Agentes",
  "Gobierno, Riesgo y Compliance",
  "Cultura, Skills y Adopción",
]

const prompts = [
  {
    label: "Pregunta de gestión",
    prompt: "Basándote en los perfiles del equipo que tienes en el vault, ¿a quién asignarías para liderar la adopción de Copilot en el próximo proyecto? ¿Y quién necesita formación antes de poder trabajar en modo agentic?",
    result: "La IA lee el vault y da una respuesta concreta con nombres y razones. Sin Excel. Sin reuniones.",
    highlight: false,
  },
  {
    label: "Generar perfil nuevo en vivo ⭐",
    prompt: "Acabo de entrevistar a un nuevo miembro del equipo. Usa ChatGPT puntualmente, no tiene archivos de contexto, desconoce qué es un MCP. Genera su perfil de madurez IA en formato OKF y guárdalo en el vault.",
    result: "El perfil aparece en Obsidian y se sube al repo. La próxima vez que alguien pregunte si está listo para modo agentic, la IA tiene la respuesta.",
    highlight: true,
  },
]

export function PromptSectionLLM() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute left-0 top-1/3 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Demo 2 — Equipo</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            La IA que conoce a tu equipo
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            El mismo mecanismo. Problema completamente diferente. Nada de código.
          </p>
        </motion.div>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-[2rem] border border-border/70 bg-card/70 p-8">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Assessment de Madurez IA — 8 dimensiones (0–4)
            </p>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {dimensions.map((dim, index) => (
                <div
                  key={dim}
                  className={`rounded-[1.25rem] border px-4 py-3 text-base text-foreground ${
                    index === 4
                      ? "border-primary/30 bg-primary/10"
                      : "border-border/50 bg-background/35"
                  }`}
                >
                  <span className="font-mono text-xs text-primary/70">{index + 1}. </span>
                  {dim}
                </div>
              ))}
            </div>
            <p className="mt-6 text-base text-foreground/65">
              Cada perfil del equipo tiene su score por dimensión y sus recomendaciones. La IA los genera a partir
              de las respuestas de la entrevista y los guarda en el vault.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {prompts.map((item) => (
            <div
              key={item.label}
              className={`rounded-[2rem] border p-8 ${
                item.highlight
                  ? "border-primary/30 bg-primary/10"
                  : "border-border/70 bg-card/70"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{item.label}</p>
              <p className="mt-5 rounded-[1.25rem] border border-border/50 bg-background/40 p-5 font-mono text-base leading-relaxed text-foreground/90">
                {item.prompt}
              </p>
              <p className="mt-5 text-lg font-semibold leading-relaxed text-foreground">{item.result}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-2xl font-semibold leading-relaxed text-foreground md:text-3xl">
            La IA no solo conoce el código. Ahora también conoce al equipo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

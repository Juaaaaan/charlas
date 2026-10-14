"use client"

import { motion } from "framer-motion"
import {
  CircleCheckBig,
  FileSearch,
  MessageSquareCode,
  ShieldAlert,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react"

const act1Files = [
  { name: "copilot-instructions.md", note: "Lo primero que lee Copilot en cada sesión" },
  { name: "testing.instructions.md", note: "applyTo: solo en ficheros de test" },
  { name: "components.instructions.md", note: "applyTo: solo en componentes" },
  { name: "AGENTS.md", note: "Manual de comportamiento autónomo" },
]

const act2Prompts = [
  {
    prompt: "Cambia el texto del botón principal del footer a \"Contáctanos\"",
    result: "Usa los tokens de diseño correctos, no toca nada que no debía.",
  },
  {
    prompt: "Añade un botón secundario en el header que ponga \"Suscríbete\"",
    result: "Border outline-variant, transición 300ms — exactamente el sistema de diseño.",
  },
]

const trustSignals = [
  {
    icon: CircleCheckBig,
    title: "Señales automatizables",
    items: ["Tests que pasan y cobertura suficiente", "Build sin errores", "Linter limpio", "Un segundo agente que revisa contra el task.md"],
  },
  {
    icon: UserCheck,
    title: "Señales humanas",
    items: ["La lógica de negocio solo la valida quien conoce el dominio", "Toda Pull Request pasa por una persona antes de mergear"],
  },
]

export function DemoSectionCopilot() {
  return (
    <section className="relative py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-primary/8 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          className="mx-auto mb-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Demo en vivo</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            El .github/ trabajando de verdad
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Cuatro actos sobre el proyecto RCA: tour por las instrucciones, prompts en directo, un equipo de
            agentes y cómo decidir si confiar en el resultado.
          </p>
        </motion.div>

        {/* Acto 1 — Tour */}
        <motion.div
          className="mb-6 rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
              <FileSearch className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-mono text-sm font-bold text-primary">Acto 1</p>
              <h3 className="text-2xl font-semibold text-foreground">Tour por el .github/ completo</h3>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {act1Files.map((file, index) => (
              <div
                key={file.name}
                className={`rounded-[1.25rem] border px-5 py-4 ${
                  index === 0 ? "border-primary/25 bg-primary/8" : "border-border/60 bg-background/35"
                }`}
              >
                <p className="font-mono text-base font-semibold text-foreground">{file.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/72">{file.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-[1.1rem] border border-border/60 bg-background/35 px-5 py-4 text-base leading-relaxed text-foreground/78">
            <span className="font-semibold text-primary">Anécdota:</span> una extensión de terceros (Superpowers) interceptaba
            los prompts y generaba su propia estructura de carpetas, sin avisar. Si no controláis explícitamente qué
            contexto sigue la IA, algo más lo va a decidir por vosotros.
          </p>
        </motion.div>

        {/* Acto 2 — Prompts en vivo */}
        <motion.div
          className="mb-6 rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
              <MessageSquareCode className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-mono text-sm font-bold text-primary">Acto 2</p>
              <h3 className="text-2xl font-semibold text-foreground">Prompts en vivo: modificaciones reales</h3>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {act2Prompts.map((item) => (
              <div key={item.prompt} className="rounded-[1.25rem] border border-primary/20 bg-primary/8 p-6">
                <p className="font-mono text-base leading-relaxed text-foreground">{item.prompt}</p>
                <p className="mt-4 text-base leading-relaxed text-foreground/76">{item.result}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-[1.1rem] border border-primary/25 bg-background/35 px-5 py-4 text-lg font-semibold text-foreground">
            No hace falta repetir las convenciones en cada prompt. Las dice una vez el fichero, las respeta Copilot
            siempre.
          </p>
        </motion.div>

        {/* Acto 3 — Developer + Reviewer */}
        <motion.div
          className="mb-6 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background/35">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-mono text-sm font-bold text-primary">Acto 3</p>
              <h3 className="text-2xl font-semibold text-foreground">AGENTS.md en acción: developer y reviewer</h3>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-primary/20 bg-background/35 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">@developer</p>
              <p className="mt-3 font-mono text-base leading-relaxed text-foreground">
                Añade un badge que muestre el número de items en el carrito
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/82">
                Lee sus propias instrucciones de developer.agent.md — analiza la arquitectura, identifica componentes
                reutilizables, implementa siguiendo las convenciones.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-primary/20 bg-background/35 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">@reviewer</p>
              <p className="mt-3 font-mono text-base leading-relaxed text-foreground">
                Revisa la implementación del badge
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/82">
                Solo acceso de lectura. No puede modificar nada — verifica criterios, convenciones y cobertura de
                tests, y genera un informe.
              </p>
            </div>
          </div>

          <p className="mt-6 rounded-[1.1rem] border border-primary/25 bg-background/35 px-5 py-4 text-lg font-semibold text-foreground">
            Un agente construye. Otro verifica. Ninguno de los dos trabaja sin contexto. Eso es un equipo de IA.
          </p>
        </motion.div>

        {/* Acto 4 — Confianza */}
        <motion.div
          className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
              <ShieldAlert className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-mono text-sm font-bold text-primary">Acto 4</p>
              <h3 className="text-2xl font-semibold text-foreground">¿Cómo confiar en el resultado?</h3>
            </div>
          </div>

          <p className="mb-6 text-lg leading-relaxed text-foreground/76">
            No hay un número mágico de confianza. Pero sí señales que se pueden combinar.
          </p>

          <div className="grid gap-5 lg:grid-cols-2">
            {trustSignals.map((group, index) => (
              <div
                key={group.title}
                className={`rounded-[1.5rem] border p-6 ${
                  index === 0 ? "border-primary/25 bg-primary/8" : "border-border/60 bg-background/35"
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <group.icon className="h-5 w-5 text-primary" />
                  <p className="text-lg font-semibold text-foreground">{group.title}</p>
                </div>
                <div className="grid gap-2">
                  {group.items.map((item) => (
                    <p key={item} className="text-base leading-relaxed text-foreground/78">
                      · {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-[1.1rem] border border-primary/25 bg-primary/10 px-5 py-4 text-lg font-semibold text-foreground">
            La confianza se construye en capas. La IA no sustituye la verificación humana — la hace más rápida.
          </p>
        </motion.div>

        {/* Highlight Sparkles */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-3 text-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Sparkles className="h-4 w-4 text-primary" />
          <p className="text-sm uppercase tracking-[0.18em]">Proyecto RCA — demo en directo</p>
        </motion.div>
      </div>
    </section>
  )
}

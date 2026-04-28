"use client"

import { motion } from "framer-motion"
import { Bot, GitBranch, Search, ShieldCheck, Sparkles, Users, Workflow } from "lucide-react"

const roles = [
  {
    icon: Search,
    title: "Explorador",
    description: "Busca contexto, documentos y senales relevantes.",
  },
  {
    icon: Sparkles,
    title: "Sintetizador",
    description: "Reduce ruido y ordena el material antes de decidir.",
  },
  {
    icon: Bot,
    title: "Analista",
    description: "Detecta impacto, patrones, excepciones y riesgos.",
  },
  {
    icon: Workflow,
    title: "Redactor",
    description: "Convierte conclusiones en entregables utilizables.",
  },
  {
    icon: ShieldCheck,
    title: "Revisor",
    description: "Valida coherencia, limites y puntos sensibles.",
  },
]

const orchestrationPatterns = [
  {
    title: "Secuencial",
    description: "Cada fase prepara la siguiente cuando el orden importa.",
    example: "Explorar -> analizar -> redactar -> revisar.",
  },
  {
    title: "Paralelo",
    description: "Varios agentes atacan partes independientes al mismo tiempo.",
    example: "Analizar tres documentos o tres riesgos a la vez.",
  },
  {
    title: "Supervisor + especialistas",
    description: "Un rol central reparte trabajo y consolida resultados.",
    example: "Un coordinador pide piezas y construye la respuesta final.",
  },
  {
    title: "Generador + revisor",
    description: "Una fase produce borrador y otra comprueba calidad.",
    example: "Redactar una propuesta y pasarla por control posterior.",
  },
]

const decisionRules = [
  "Un solo agente si el trabajo es corto, lineal y con poco riesgo.",
  "Varios agentes si hay funciones distintas o criterios de revision claros.",
  "Cuaderno si el valor esta en mantener contexto comun y materiales de referencia.",
  "Persona supervisando si hay impacto en cliente, normativa o decisiones relevantes.",
]

export function PromptSection() {
  return (
    <section className="relative py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mx-auto mb-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 3</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Orquestar el equipo de IA
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Orquestar agentes no es abrir muchos chats. Es repartir bien responsabilidades y controlar como circula el
            contexto.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Roles posibles</p>
              <h3 className="mt-4 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
                No estas creando un chatbot. Estas montando un pequeno equipo digital para ti.
              </h3>
              <p className="mt-6 text-xl leading-relaxed text-foreground/82 md:text-2xl">
                No siempre necesitas cinco agentes reales. A veces basta un agente con varias fases. Otras veces
                conviene repartir el trabajo para ganar claridad y control.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-5">
              {roles.map((item, index) => (
                <motion.div
                  key={item.title}
                  className={`rounded-[1.5rem] border p-6 ${
                    index === 1 || index === 4 ? "border-primary/30 bg-background/35" : "border-primary/20 bg-primary/8"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-2xl font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Patrones de orquestacion</p>
              <h3 className="mt-3 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
                No hay una unica forma correcta de repartir el trabajo.
              </h3>
              <div className="mt-8 grid gap-4">
                {orchestrationPatterns.map((item, index) => (
                  <div
                    key={item.title}
                    className={`rounded-[1.35rem] border px-5 py-5 ${
                      index === 2 ? "border-primary/25 bg-primary/8" : "border-border/60 bg-background/35"
                    }`}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{item.title}</p>
                    <p className="mt-2 text-2xl font-semibold leading-snug text-foreground">{item.description}</p>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.example}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-background/35">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Criterio de reparto</p>
              <h3 className="mt-3 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
                Repartir bien el trabajo importa mas que multiplicar agentes.
              </h3>
              <div className="mt-8 grid gap-4">
                {decisionRules.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-[1.35rem] border px-5 py-5 ${
                      index === 1 || index === 3 ? "border-primary/25 bg-background/35" : "border-primary/20 bg-primary/8"
                    }`}
                  >
                    <p className="text-lg font-semibold leading-snug text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-2xl font-semibold leading-relaxed text-balance text-foreground md:text-3xl">
                Orquestar agentes no es multiplicar chats. Es repartir bien responsabilidades.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

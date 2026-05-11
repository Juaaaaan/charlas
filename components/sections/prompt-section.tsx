"use client"

import { motion } from "framer-motion"
import { GitBranch, PlayCircle, ShieldCheck, Waypoints, Wrench } from "lucide-react"

const automationPieces = [
  {
    icon: PlayCircle,
    title: "Trigger",
    description: "Algo activa el flujo: un correo, un formulario, un archivo o un evento de negocio.",
  },
  {
    icon: Waypoints,
    title: "Ruta",
    description: "La IA interpreta la entrada y decide qué camino seguir según criterios definidos.",
  },
  {
    icon: Wrench,
    title: "Acción",
    description: "El sistema ejecuta tareas concretas sobre herramientas, datos o comunicaciones.",
  },
  {
    icon: ShieldCheck,
    title: "Supervisión",
    description: "Se define dónde hace falta aprobación humana, excepción o parada segura.",
  },
]

const controlPatterns = [
  {
    title: "Automático con aviso",
    description: "Sirve para tareas de bajo riesgo donde lo importante es velocidad y seguimiento.",
  },
  {
    title: "Automático con aprobación",
    description: "La IA prepara y propone, pero una persona confirma antes de ejecutar el paso sensible.",
  },
  {
    title: "Automático con excepciones",
    description: "El flujo avanza solo salvo cuando detecta un caso dudoso o fuera de patrón.",
  },
  {
    title: "Automático con trazabilidad",
    description: "Cada decisión deja registro para revisar qué pasó, por qué y con qué resultado.",
  },
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
            Diseñar automatización con control
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            El sistema no tiene que hacerlo todo solo. Tiene que saber avanzar bien, pedir ayuda cuando toca y dejar
            huella de lo que ha hecho.
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
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Arquitectura mínima</p>
              <h3 className="mt-4 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
                Una automatización útil combina evento, interpretación, decisión, acción y supervisión.
              </h3>
              <p className="mt-6 text-xl leading-relaxed text-foreground/82 md:text-2xl">
                Si falta una de estas piezas, normalmente no tienes una automatización madura. Tienes solo una llamada
                al modelo dentro de un proceso mal definido.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {automationPieces.map((item, index) => (
                <motion.div
                  key={item.title}
                  className={`rounded-[1.5rem] border p-6 ${
                    index === 1 || index === 3 ? "border-primary/30 bg-background/35" : "border-primary/20 bg-primary/8"
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
            className="grid gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Patrones de control</p>
              <h3 className="mt-3 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
                Automatizar no significa quitar a la persona del mapa.
              </h3>
              <div className="mt-8 grid gap-4">
                {controlPatterns.map((item, index) => (
                  <div
                    key={item.title}
                    className={`rounded-[1.35rem] border px-5 py-5 ${
                      index === 1 || index === 3 ? "border-primary/25 bg-primary/8" : "border-border/60 bg-background/35"
                    }`}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{item.title}</p>
                    <p className="mt-2 text-2xl font-semibold leading-snug text-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

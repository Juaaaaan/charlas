"use client"

import { motion } from "framer-motion"
import { FileText, Mail, Scale, SearchCheck, Table2 } from "lucide-react"

const dailyExamples = [
  { icon: FileText, title: "Resumir", description: "Convertir documentos largos en ideas, riesgos y próximos pasos." },
  { icon: SearchCheck, title: "Comparar", description: "Contrastar versiones, requisitos, pólizas o documentación relacionada." },
  { icon: Mail, title: "Redactar", description: "Preparar borradores de correos, respuestas o comunicaciones internas." },
  { icon: Table2, title: "Analizar", description: "Explorar tablas y detectar patrones, excepciones o señales que revisar." },
]

const goodAgentTasks = [
  {
    title: "Claras",
    description: "Se explican en una frase y tienen un resultado esperado fácil de reconocer.",
    message: "Ejemplo: resumir un expediente con puntos pendientes.",
  },
  {
    title: "Repetibles",
    description: "Aparecen muchas veces y siguen una lógica parecida, aunque cambie el contenido.",
    message: "Ejemplo: preparar una primera versión de comunicación.",
  },
  {
    title: "Revisables",
    description: "Permiten comprobar si la salida es útil antes de usarla en una decisión.",
    message: "Ejemplo: listar inconsistencias para revisión humana.",
  },
]

const limits = [
  "No garantiza que todo sea correcto",
  "No sustituye al responsable de negocio",
  "No conoce matices si no están en el contexto",
  "No debería decidir en casos sensibles",
  "No corrige permisos o datos mal gobernados",
  "No elimina la necesidad de revisión",
]

export function TokenContextSection() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,150,255,0.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mx-auto mb-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 2
          </span>
          <h2 className="mb-8 text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl">
            Qué pueden hacer y qué no
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Los agentes ayudan mucho cuando la tarea está acotada. Ayudan peor cuando pedimos juicio, responsabilidad o
            contexto que no les hemos dado.
          </p>
        </motion.div>

        <motion.div
          className="flex min-h-[72vh] items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid w-full gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Qué pueden hacer</p>
              <h3 className="mt-4 text-4xl font-semibold leading-tight text-foreground text-balance md:text-5xl">
                Ayudan a preparar trabajo, no a saltarse el criterio.
              </h3>
              <p className="mt-5 text-xl leading-relaxed text-foreground/82 md:text-2xl">
                El valor está en quitar fricción: ordenar información, crear borradores y señalar dónde mirar.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {dailyExamples.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="rounded-[1.5rem] border border-border/70 bg-card/90 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-2xl font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 flex min-h-[72vh] items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Dónde encajan mejor</p>
            <h3 className="max-w-4xl text-4xl font-semibold leading-tight text-foreground text-balance md:text-5xl">
              Las mejores tareas para un agente suelen tener tres rasgos.
            </h3>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {goodAgentTasks.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex min-h-[300px] flex-col rounded-[1.5rem] border p-6 ${
                    index === 1 ? "border-primary/30 bg-primary/8" : "border-border/70 bg-background/35"
                  }`}
                >
                  <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-primary">Rasgo 0{index + 1}</p>
                  <h4 className="mt-4 text-2xl font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.description}</p>
                  <p className="mt-auto rounded-[1.25rem] border border-primary/20 bg-primary/8 p-4 text-lg font-semibold leading-snug text-foreground">
                    {item.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 grid min-h-[68vh] gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12">
              <Scale className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Qué no puede hacer</p>
            <h3 className="mt-3 text-4xl font-semibold leading-tight text-foreground text-balance md:text-5xl">
              Un agente no convierte una tarea delicada en automática.
            </h3>
            <p className="mt-5 text-xl leading-relaxed text-foreground/82 md:text-2xl">
              Puede acelerar partes del trabajo, pero no absorbe responsabilidad, criterio experto ni control.
            </p>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Límites claros</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {limits.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.25rem] border px-5 py-4 text-base text-foreground ${
                    index === 2 || index === 5 ? "border-primary/20 bg-primary/8" : "border-border/60 bg-background/35"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-[1.5rem] border border-primary/20 bg-primary/8 p-5 text-xl font-semibold leading-relaxed text-foreground">
              Cuanto más impacto tenga la tarea, más importante es dejar claro qué puede hacer el agente y qué debe
              revisar una persona.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { FileText, Mail, NotebookTabs, Presentation, Table2, Users } from "lucide-react"

const inputs = [
  "Correo con la peticion inicial",
  "Acta de reunion en Teams",
  "Documento normativo o procedimiento",
  "Excel con datos de impacto",
  "Notas internas del equipo",
]

const workflowStages = [
  {
    title: "1. Explorar",
    description: "Recoger documentos, detectar cambios y separar lo importante del ruido.",
    output: "Resumen base de hechos y dudas abiertas.",
  },
  {
    title: "2. Analizar",
    description: "Cruzar el cambio con operacion, cliente, polizas y riesgos.",
    output: "Impacto, dependencias y puntos criticos.",
  },
  {
    title: "3. Redactar",
    description: "Convertir el analisis en un mensaje util para negocio o tecnologia.",
    output: "Borrador de informe ejecutivo o propuesta.",
  },
  {
    title: "4. Transformar",
    description: "Adaptar la salida al formato final que hace falta compartir.",
    output: "Correo, Word o PowerPoint segun el caso.",
  },
  {
    title: "5. Revisar",
    description: "Validar supuestos, lenguaje, riesgos y accion recomendada.",
    output: "Version final lista para circular.",
  },
]

const copilotFit = [
  {
    icon: Mail,
    title: "Outlook y Teams",
    description: "Capturar el encargo inicial, el hilo y las decisiones de reunion.",
  },
  {
    icon: NotebookTabs,
    title: "Cuaderno y documentos",
    description: "Concentrar contexto y fuentes antes de pedir una conclusion.",
  },
  {
    icon: Table2,
    title: "Excel",
    description: "Mirar volumenes, tendencias, incidencias y posibles impactos.",
  },
  {
    icon: FileText,
    title: "Word",
    description: "Construir el informe o la propuesta a partir del analisis.",
  },
  {
    icon: Presentation,
    title: "PowerPoint",
    description: "Transformar la salida en narrativa para comite o seguimiento.",
  },
]

export function CopilotWorkflowSection() {
  return (
    <section className="relative py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/6 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mx-auto mb-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">Bloque 4</span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Caso real en Copilot 365
          </h2>
          <p className="text-xl leading-relaxed text-foreground/76 md:text-2xl">
            El valor no esta en una respuesta brillante. Esta en una cadena de trabajo fiable que termina en una
            salida util.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Escenario</p>
              <h3 className="mt-4 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
                Cambio normativo en siniestros: de informacion dispersa a plan accionable
              </h3>
              <p className="mt-6 text-xl leading-relaxed text-foreground/82 md:text-2xl">
                Un equipo necesita entender un cambio, valorar impacto operativo y preparar un mensaje claro para
                negocio, tecnologia y seguimiento.
              </p>
              <div className="mt-8 rounded-[1.5rem] border border-primary/20 bg-background/35 p-5">
                <p className="text-lg leading-relaxed text-foreground/84">
                  La persona marca el objetivo y decide. La IA acelera la lectura, el analisis, la sintesis y la
                  transformacion de la salida.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Entradas reales</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {inputs.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-[1.35rem] border px-5 py-5 ${
                      index === 1 || index === 3 ? "border-primary/25 bg-primary/8" : "border-border/60 bg-background/35"
                    }`}
                  >
                    <p className="text-lg font-semibold leading-snug text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-[2rem] border border-border/70 bg-card/90 p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Workflow propuesto</p>
              <h3 className="mt-4 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
                Un caso unico bien orquestado vale mas que diez demos sueltas.
              </h3>
            </div>

            <div className="grid gap-4 lg:grid-cols-5">
              {workflowStages.map((item, index) => (
                <motion.div
                  key={item.title}
                  className={`rounded-[1.5rem] border p-6 ${
                    index === 2 ? "border-primary/30 bg-primary/10" : "border-border/70 bg-background/35"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <h4 className="text-2xl font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.description}</p>
                  <p className="mt-5 rounded-[1.1rem] border border-primary/20 bg-primary/8 px-4 py-3 text-base font-semibold text-foreground">
                    {item.output}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-background/35">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Lectura correcta</p>
              <h3 className="mt-3 text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
                Copilot 365 no es solo una interfaz. Puede ser una capa de trabajo asistido.
              </h3>
              <p className="mt-5 text-xl leading-relaxed text-foreground/82 md:text-2xl">
                La clave esta en conectar materiales, fases y formatos. No en pedir todo de golpe y esperar una salida
                perfecta desde el minuto uno.
              </p>
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-card/90 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Donde encaja cada pieza</p>
              <div className="mt-6 grid gap-4">
                {copilotFit.map((item, index) => (
                  <div
                    key={item.title}
                    className={`rounded-[1.35rem] border px-5 py-5 ${
                      index === 2 ? "border-primary/25 bg-primary/8" : "border-border/60 bg-background/35"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xl font-semibold text-foreground">{item.title}</p>
                        <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
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

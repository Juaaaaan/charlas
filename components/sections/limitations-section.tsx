"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Clock, Ghost, HelpCircle, Scale, Shield } from "lucide-react"

const limitations = [
  {
    icon: Ghost,
    title: "Alucinaciones",
    description: "Puede inventar datos, hechos o referencias con total seguridad.",
    detail: "La fluidez del texto no garantiza que sea verdad.",
  },
  {
    icon: Shield,
    title: "Privacidad y compliance",
    description: "No todo dato se puede mandar a un modelo sin controles.",
    detail: "Especial cuidado con datos sensibles, personales o regulados.",
  },
  {
    icon: Scale,
    title: "Sesgos",
    description: "Hereda y reproduce sesgos presentes en los datos de entrenamiento.",
    detail: "Puede afectar tono, priorizacion y recomendaciones.",
  },
  {
    icon: HelpCircle,
    title: "Sin contexto de empresa",
    description: "No conoce tus procesos, politicas ni criterios internos por defecto.",
    detail: "Hay que darle contexto util y bien acotado.",
  },
  {
    icon: Clock,
    title: "Conocimiento limitado",
    description: "Su conocimiento base no es equivalente a estar actualizado siempre.",
    detail: "Hay que conectar fuentes recientes cuando importe la actualidad.",
  },
  {
    icon: AlertTriangle,
    title: "No sustituye responsabilidad",
    description: "Puede asistir decisiones, no asumirlas por ti.",
    detail: "En Seguros hace falta validacion, trazabilidad y supervision humana.",
  },
]

export function LimitationsSection() {
  return (
    <section className="relative flex min-h-screen items-center py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-20 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Realidad
          </span>
          <h2 className="mb-8 text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl">
            Limites reales y controles necesarios
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground">
            La IA es util, no magica. Para que funcione en empresa hace falta combinar capacidad tecnica con
            contexto, control y criterio operativo.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {limitations.map((item, index) => (
            <motion.div
              key={item.title}
              className={`
                group relative rounded-2xl border p-6 transition-all duration-300
                ${index === 0 ? "border-destructive/20 bg-destructive/5 hover:border-destructive/40" : "border-border/50 bg-card hover:border-muted-foreground/30"}
              `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div
                className={`
                  mb-4 flex h-10 w-10 items-center justify-center rounded-xl
                  ${index === 0 ? "bg-destructive/10" : "bg-secondary"}
                `}
              >
                <item.icon className={`h-5 w-5 ${index === 0 ? "text-destructive" : "text-muted-foreground"}`} />
              </div>

              <h4 className={`mb-2 text-lg font-semibold ${index === 0 ? "text-destructive" : "text-foreground"}`}>
                {item.title}
              </h4>

              <p className="mb-3 text-sm text-muted-foreground">{item.description}</p>

              <p className="text-xs text-muted-foreground/70">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg text-muted-foreground">
            <span className="font-medium text-foreground">Regla de oro:</span> modelo + contexto + controles +
            validacion humana.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

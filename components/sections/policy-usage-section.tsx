"use client";

import { motion } from "framer-motion";

const dataPolicy = [
  {
    dataType: "Código propio sin datos de cliente",
    publicAI: "TODO",
    corpAI: "TODO",
  },
  {
    dataType: "Datos de cliente (nombres, cuentas, contratos)",
    publicAI: "Nunca",
    corpAI: "TODO — depende de configuración DLP",
  },
  {
    dataType: "Información pública o genérica",
    publicAI: "Sí",
    corpAI: "Sí",
  },
  {
    dataType: "Credenciales, claves, tokens",
    publicAI: "Nunca",
    corpAI: "Nunca",
  },
];

const reviewMatrix = [
  { output: "Borrador interno, uso propio", review: "No obligatoria" },
  { output: "Comunicación a cliente", review: "Sí, siempre" },
  {
    output: "Código que va a producción",
    review: "Sí — igual que cualquier código, con o sin IA",
  },
  {
    output: "Documento con validez contractual o legal",
    review: "Sí, con la persona responsable",
  },
];

const policyPoints = [
  {
    number: "01",
    title: "Qué datos puedo compartir con qué herramienta",
    caseApplied:
      "Un compañero pide a una IA que le ayude a mejorar el tono de un email a cliente. El texto que él ha escrito, sí. El nombre y los datos bancarios del cliente para «que quede más personalizado», no.",
    caseApplied2:
      "RRHH quiere que la IA le ayude a redactar el feedback de una evaluación. El texto genérico sobre feedback constructivo, sin problema. Pegar el historial de rendimiento real del empleado, no.",
  },
  {
    number: "02",
    title: "Qué herramientas están aprobadas",
    caseApplied:
      "Instalarse una extensión de IA de una tienda de navegador porque parece útil, sin pasar por el canal oficial — eso es Shadow AI, aunque la intención sea buena.",
    caseApplied2:
      "Un equipo descubre una herramienta gratuita para transcribir reuniones y la usa en llamadas con clientes sin consultar. La grabación puede estar pasando por servidores fuera de cualquier control.",
  },
  {
    number: "03",
    title: "Quién revisa el output antes de que llegue a un cliente",
    caseApplied:
      "Un agente puede equivocarse — vimos la semana pasada que lo bueno es cuando reconoce que no sabe algo. Pero la responsabilidad final de lo que sale hacia un cliente sigue siendo humana.",
    caseApplied2: null,
  },
  {
    number: "04",
    title: "Qué hacer si algo ya ha salido mal",
    caseApplied:
      "TODO: definir aquí el canal real de escalado en la empresa. ¿A quién se avisa si alguien detecta que se compartió un dato sensible con una IA no aprobada? Sin este punto, la política se queda coja.",
    caseApplied2: null,
  },
];

export function PoliticaUsoSection() {
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
            Bloque 4
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            La política, punto por punto
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Un documento accionable. Cuatro preguntas que responderse antes de
            usar cualquier IA.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {policyPoints.map((p, index) => (
            <motion.div
              key={p.number}
              className="rounded-[2rem] border border-border/60 bg-card/70 p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:gap-6">
                <p className="font-mono text-3xl font-bold text-primary md:text-4xl">
                  {p.number}
                </p>
                <h3 className="text-2xl font-semibold leading-snug text-foreground md:text-3xl">
                  {p.title}
                </h3>
              </div>

              {p.number === "01" && (
                <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-border/50">
                  <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-0 bg-background/40 px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground/70">
                    <p>Tipo de dato</p>
                    <p>IA pública</p>
                    <p>IA corporativa</p>
                  </div>
                  {dataPolicy.map((row, i) => (
                    <div
                      key={row.dataType}
                      className={`grid grid-cols-[1.5fr_1fr_1fr] gap-0 px-5 py-4 text-sm md:text-base ${
                        i % 2 === 0 ? "bg-card/50" : "bg-card/30"
                      }`}
                    >
                      <p className="text-foreground/85">{row.dataType}</p>
                      <p
                        className={
                          row.publicAI === "Nunca"
                            ? "font-semibold text-destructive"
                            : row.publicAI === "Sí"
                              ? "font-semibold text-primary"
                              : "font-mono text-xs uppercase tracking-[0.14em] text-foreground/50"
                        }
                      >
                        {row.publicAI}
                      </p>
                      <p
                        className={
                          row.corpAI === "Nunca"
                            ? "font-semibold text-destructive"
                            : row.corpAI === "Sí"
                              ? "font-semibold text-primary"
                              : "font-mono text-xs uppercase tracking-[0.14em] text-foreground/50"
                        }
                      >
                        {row.corpAI}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {p.number === "02" && (
                <div className="mt-8 rounded-[1.5rem] border border-border/50 bg-background/40 px-5 py-5">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground/50">
                    Herramientas aprobadas
                  </p>
                  <p className="mt-3 text-lg leading-relaxed text-foreground/85">
                    TODO: listar aquí las herramientas de IA oficialmente
                    aprobadas en la empresa (Copilot 365, Copilot Studio,
                    Claude corporativo si aplica, etc.).
                  </p>
                </div>
              )}

              {p.number === "03" && (
                <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-border/50">
                  <div className="grid grid-cols-[1.5fr_1fr] gap-0 bg-background/40 px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground/70">
                    <p>Tipo de output</p>
                    <p>Revisión humana</p>
                  </div>
                  {reviewMatrix.map((row, i) => (
                    <div
                      key={row.output}
                      className={`grid grid-cols-[1.5fr_1fr] gap-0 px-5 py-4 text-sm md:text-base ${
                        i % 2 === 0 ? "bg-card/50" : "bg-card/30"
                      }`}
                    >
                      <p className="text-foreground/85">{row.output}</p>
                      <p
                        className={
                          row.review.startsWith("Sí")
                            ? "font-semibold text-primary"
                            : "text-foreground/70"
                        }
                      >
                        {row.review}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 space-y-4">
                <div className="rounded-[1.25rem] border border-primary/20 bg-primary/8 px-5 py-4">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    Caso aplicado
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-foreground/85 md:text-lg">
                    {p.caseApplied}
                  </p>
                </div>
                {p.caseApplied2 && (
                  <div className="rounded-[1.25rem] border border-primary/20 bg-primary/8 px-5 py-4">
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      Segundo caso
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-foreground/85 md:text-lg">
                      {p.caseApplied2}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            Una política no existe para frenaros.
          </p>
          <p className="mt-6 text-xl text-foreground/70">
            Existe para que sepáis, en el momento de dudar, qué hacer sin tener
            que adivinarlo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

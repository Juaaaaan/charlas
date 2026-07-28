"use client";

import { motion } from "framer-motion";

const escenariosFases = [
  {
    fase: "Ideación, discovery y business analysis",
    permitido: "TODO",
    condicionado: "TODO",
    prohibido: "TODO",
  },
  {
    fase: "Diseño y arquitectura",
    permitido: "TODO",
    condicionado: "TODO",
    prohibido: "TODO",
  },
  {
    fase: "Desarrollo y generación de código",
    permitido: "TODO",
    condicionado: "TODO",
    prohibido: "TODO",
  },
  {
    fase: "Pruebas y QA",
    permitido: "TODO",
    condicionado: "TODO",
    prohibido: "TODO",
  },
];

const datosPermitidos = [
  {
    clase: "TODO — Ej.: datos técnicos internos",
    publico: "TODO",
    cliente: "TODO",
    condiciones: "TODO",
  },
  {
    clase: "TODO — Ej.: datos de cliente identificables",
    publico: "TODO",
    cliente: "TODO",
    condiciones: "TODO",
  },
  {
    clase: "TODO — Ej.: información pública / no sensible",
    publico: "TODO",
    cliente: "TODO",
    condiciones: "TODO",
  },
  {
    clase: "TODO — Ej.: credenciales, claves, tokens",
    publico: "TODO",
    cliente: "TODO",
    condiciones: "TODO",
  },
];

const revisionHumana = [
  {
    output: "TODO — Ej.: comunicación a cliente",
    revision: "TODO",
    aprobador: "TODO",
    evidencia: "TODO",
  },
  {
    output: "TODO — Ej.: código a producción",
    revision: "TODO",
    aprobador: "TODO",
    evidencia: "TODO",
  },
  {
    output: "TODO — Ej.: documento contractual o legal",
    revision: "TODO",
    aprobador: "TODO",
    evidencia: "TODO",
  },
  {
    output: "TODO — Ej.: borrador interno de uso propio",
    revision: "TODO",
    aprobador: "TODO",
    evidencia: "TODO",
  },
];

const procesoIncidentes = [
  {
    paso: "01",
    label: "Detección",
    detail: "TODO — Cómo se identifica que ha habido un incidente",
  },
  {
    paso: "02",
    label: "Notificación",
    detail: "TODO — A quién y en qué plazo",
  },
  {
    paso: "03",
    label: "Contención",
    detail: "TODO — Qué hacer inmediatamente",
  },
  { paso: "04", label: "Análisis y registro", detail: "TODO" },
  {
    paso: "05",
    label: "Comunicación a cliente / regulador",
    detail: "TODO — Si aplica",
  },
  {
    paso: "06",
    label: "Aprendizaje y actualización de la política",
    detail: "TODO",
  },
];

const checklistDecision = [
  "TODO — Ej.: ¿Sé en qué nivel de riesgo cae lo que voy a hacer?",
  "TODO — Ej.: ¿La herramienta que voy a usar está aprobada para este tipo de dato?",
  "TODO — Ej.: ¿Sé quién tiene que revisar el output antes de que salga?",
  "TODO — Ej.: ¿Sé qué hacer si algo sale mal?",
];

function TodoCell({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const isTodo = value === "TODO" || value.startsWith("TODO");
  return (
    <p
      className={`text-sm leading-relaxed md:text-base ${
        isTodo
          ? "font-mono text-xs uppercase tracking-[0.14em] text-foreground/40"
          : "text-foreground/85"
      } ${className}`}
    >
      {value}
    </p>
  );
}

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
            La política interna, punto por punto
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Hasta aquí hemos hablado del marco. Ahora entramos en el documento
            real: la política interna que aplica desde mañana.
          </p>
        </motion.div>

        {/* 4.1 Escenarios permitidos por fase */}
        <motion.div
          className="rounded-[2rem] border border-border/60 bg-card/70 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:gap-6">
            <p className="font-mono text-3xl font-bold text-primary md:text-4xl">
              4.1
            </p>
            <h3 className="text-2xl font-semibold leading-snug text-foreground md:text-3xl">
              Escenarios permitidos por fase de trabajo
            </h3>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-border/50">
            <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-0 bg-background/40 px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground/70">
              <p>Fase / Actividad</p>
              <p>Permitido</p>
              <p>Condicionado</p>
              <p>Prohibido</p>
            </div>
            {escenariosFases.map((row, i) => (
              <div
                key={row.fase}
                className={`grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-0 px-5 py-4 ${
                  i % 2 === 0 ? "bg-card/50" : "bg-card/30"
                }`}
              >
                <p className="text-sm text-foreground/85 md:text-base">
                  {row.fase}
                </p>
                <TodoCell value={row.permitido} />
                <TodoCell value={row.condicionado} />
                <TodoCell value={row.prohibido} />
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-[1.25rem] border border-primary/20 bg-primary/8 px-5 py-4 text-base leading-relaxed text-foreground/85 md:text-lg">
            «Condicionado» no es una casilla decorativa. Significa: sí, pero con
            estos requisitos. La responsabilidad de comprobar que se cumplen es
            tuya.
          </p>
        </motion.div>

        {/* 4.2 Datos permitidos y restringidos */}
        <motion.div
          className="mt-6 rounded-[2rem] border border-border/60 bg-card/70 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:gap-6">
            <p className="font-mono text-3xl font-bold text-primary md:text-4xl">
              4.2
            </p>
            <h3 className="text-2xl font-semibold leading-snug text-foreground md:text-3xl">
              Datos permitidos y restringidos
            </h3>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-border/50">
            <div className="grid grid-cols-[1.6fr_1fr_1fr_1.3fr] gap-0 bg-background/40 px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground/70">
              <p>Clase de dato</p>
              <p>Público / no homologado</p>
              <p>Cliente aprobado / dedicado</p>
              <p>Condiciones mínimas</p>
            </div>
            {datosPermitidos.map((row, i) => (
              <div
                key={row.clase}
                className={`grid grid-cols-[1.6fr_1fr_1fr_1.3fr] gap-0 px-5 py-4 ${
                  i % 2 === 0 ? "bg-card/50" : "bg-card/30"
                }`}
              >
                <TodoCell value={row.clase} />
                <TodoCell value={row.publico} />
                <TodoCell value={row.cliente} />
                <TodoCell value={row.condiciones} />
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-[1.25rem] border border-primary/20 bg-primary/8 px-5 py-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Caso aplicado
              </p>
              <p className="mt-3 text-base leading-relaxed text-foreground/85 md:text-lg">
                Un compañero pide a una IA que le ayude a mejorar el tono de un
                email para un cliente. El texto que ha escrito él, sí. El nombre
                y los datos bancarios del cliente para «que quede más
                personalizado», no.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-primary/20 bg-primary/8 px-5 py-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Segundo caso
              </p>
              <p className="mt-3 text-base leading-relaxed text-foreground/85 md:text-lg">
                Una persona de RRHH quiere que una IA le ayude a redactar el
                feedback de una evaluación. El texto genérico sobre feedback
                constructivo, sin problema. Pegar el historial de rendimiento
                real del empleado para que «lo resuma», ya es otra cosa.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4.3 Revisión humana obligatoria */}
        <motion.div
          className="mt-6 rounded-[2rem] border border-border/60 bg-card/70 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:gap-6">
            <p className="font-mono text-3xl font-bold text-primary md:text-4xl">
              4.3
            </p>
            <h3 className="text-2xl font-semibold leading-snug text-foreground md:text-3xl">
              Revisión humana obligatoria
            </h3>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-border/50">
            <div className="grid grid-cols-[1.6fr_1.2fr_1fr_1.2fr] gap-0 bg-background/40 px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-foreground/70">
              <p>Output / acción</p>
              <p>Revisión mínima</p>
              <p>Aprobador / owner</p>
              <p>Evidencia esperada</p>
            </div>
            {revisionHumana.map((row, i) => (
              <div
                key={row.output}
                className={`grid grid-cols-[1.6fr_1.2fr_1fr_1.2fr] gap-0 px-5 py-4 ${
                  i % 2 === 0 ? "bg-card/50" : "bg-card/30"
                }`}
              >
                <TodoCell value={row.output} />
                <TodoCell value={row.revision} />
                <TodoCell value={row.aprobador} />
                <TodoCell value={row.evidencia} />
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-[1.25rem] border border-primary/20 bg-primary/8 px-5 py-4 text-base leading-relaxed text-foreground/85 md:text-lg">
            La columna de «evidencia» es la que suele faltar en políticas mal
            hechas. Sin evidencia — un log, un firmante, una traza — la revisión
            no existe a efectos de auditoría, aunque haya ocurrido.
          </p>
        </motion.div>

        {/* 4.4 Herramientas */}
        <motion.div
          className="mt-6 rounded-[2rem] border border-border/60 bg-card/70 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:gap-6">
            <p className="font-mono text-3xl font-bold text-primary md:text-4xl">
              4.4
            </p>
            <h3 className="text-2xl font-semibold leading-snug text-foreground md:text-3xl">
              Herramientas: corporativas y restricciones con cliente
            </h3>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-border/50 bg-background/40 px-6 py-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground/50">
              Listado pendiente
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/85">
              TODO — Juan pondrá aquí el listado real de herramientas
              corporativas aprobadas con su estado y las restricciones con
              cliente aplicables.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-[1.25rem] border border-primary/20 bg-primary/8 px-5 py-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Caso aplicado
              </p>
              <p className="mt-3 text-base leading-relaxed text-foreground/85 md:text-lg">
                Instalarse una extensión de IA de una tienda de navegador porque
                parece útil, sin pasar por el canal oficial — eso es Shadow AI,
                aunque la intención sea buena.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-primary/20 bg-primary/8 px-5 py-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Segundo caso
              </p>
              <p className="mt-3 text-base leading-relaxed text-foreground/85 md:text-lg">
                Un equipo descubre una herramienta gratuita para transcribir
                reuniones y la usa en llamadas con clientes sin consultar. La
                grabación puede estar pasando por servidores fuera de cualquier
                control de la empresa.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4.5 Proceso de incidentes */}
        <motion.div
          className="mt-6 rounded-[2rem] border border-border/60 bg-card/70 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:gap-6">
            <p className="font-mono text-3xl font-bold text-primary md:text-4xl">
              4.5
            </p>
            <h3 className="text-2xl font-semibold leading-snug text-foreground md:text-3xl">
              Proceso de incidentes relacionados con IA
            </h3>
          </div>

          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {procesoIncidentes.map((step, index) => (
              <li
                key={step.paso}
                className="flex gap-4 rounded-[1.25rem] border border-border/50 bg-background/35 px-5 py-4"
              >
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-sm font-semibold text-primary">
                  {step.paso}
                </span>
                <div>
                  <p className="text-lg font-semibold text-foreground">
                    {step.label}
                  </p>
                  <p
                    className={`mt-1 text-sm leading-relaxed md:text-base ${
                      step.detail.startsWith("TODO")
                        ? "font-mono text-xs uppercase tracking-[0.14em] text-foreground/40"
                        : "text-foreground/75"
                    }`}
                  >
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-6 rounded-[1.25rem] border border-primary/20 bg-primary/8 px-5 py-4 text-base leading-relaxed text-foreground/85 md:text-lg">
            Un incidente reportado a tiempo es un problema resuelto. Un
            incidente escondido es un problema que crece. Y no venimos aquí a
            señalar culpables — venimos a evitar el segundo caso.
          </p>
        </motion.div>

        {/* 4.6 Checklist rápido */}
        <motion.div
          className="mt-6 rounded-[2rem] border border-primary/25 bg-primary/10 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:gap-6">
            <p className="font-mono text-3xl font-bold text-primary md:text-4xl">
              4.6
            </p>
            <h3 className="text-2xl font-semibold leading-snug text-foreground md:text-3xl">
              Checklist rápido de decisión
            </h3>
          </div>

          <p className="mt-5 text-lg leading-relaxed text-foreground/80 md:text-xl">
            Antes de usar una IA para algo real, cuatro preguntas. Si respondes
            «no» a alguna, para y consulta.
          </p>

          <ul className="mt-8 grid gap-3">
            {checklistDecision.map((q, index) => (
              <li
                key={index}
                className="flex items-start gap-4 rounded-[1.25rem] border border-primary/20 bg-background/40 px-5 py-4"
              >
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-xs font-semibold text-primary">
                  {index + 1}
                </span>
                <p
                  className={`text-base leading-relaxed md:text-lg ${
                    q.startsWith("TODO")
                      ? "font-mono text-sm uppercase tracking-[0.12em] text-foreground/50"
                      : "text-foreground/85"
                  }`}
                >
                  {q}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

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

"use client";

import { motion } from "framer-motion";

const receiptA = [
  { check: "build", resultado: "pass" },
  { check: "lint", resultado: "pass" },
  { check: "tests existentes", resultado: "pass" },
  { check: "comprobación visual", resultado: "pass" },
  { check: "legibilidad del texto", resultado: "comprobada" },
];

const evidenciaB = [
  { check: "build", resultado: "pass" },
  { check: "lint", resultado: "pass" },
  { check: "tests", resultado: "pass" },
  { check: "rechazo con stock 0", resultado: "demostrado" },
  { check: "mensaje «sin stock»", resultado: "demostrado" },
];

const lentesB = [
  { lente: "Risk", nota: "impacto sobre inventario y compra" },
  { lente: "Resilience", nota: "riesgo de concurrencia en la última unidad" },
  { lente: "Readability", nota: "claridad de la regla y su localización" },
  { lente: "Reliability", nota: "criterio Gherkin cubierto por evidencia" },
];

export function DemoSection24() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-aura-seccion" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 4 · Demo de contraste
          </span>
          <h2 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Dos PR, dos profundidades
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Las mismas peticiones que en la charla 23. Dos PR ya generadas y
            abiertas, sin fusionar. Hoy decidimos qué evidencia necesita
            cada una antes de aceptarla.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-2">
          {/* Caso A */}
          <motion.div
            className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex w-fit rounded-full border border-border/70 bg-background/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/60">
                Caso A · Cambio pequeño
              </span>
              <span className="inline-flex w-fit rounded-full border border-border/60 bg-background/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-foreground/55">
                Riesgo bajo
              </span>
            </div>
            <p className="mt-5 text-base leading-relaxed text-foreground/82">
              «Cambiar el color del botón &quot;Añadir al carrito&quot; a un
              tono más cálido.»
            </p>

            <div className="mt-6 overflow-x-auto rounded-[1.25rem] border border-border/60 bg-background/55 p-5">
              <pre className="font-mono text-xs leading-relaxed text-foreground/78 md:text-sm">
                <span className="text-primary">
                  Candidato: PR A / commit &lt;SHA-A&gt;
                </span>
                {"\n"}
                {receiptA.map((e) => (
                  <span key={e.check}>
                    {"  "}
                    {e.check}: {e.resultado}
                    {"\n"}
                  </span>
                ))}
              </pre>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-foreground/70">
              Un cambio pequeño no significa ausencia de evidencia. Significa
              evidencia barata, directa y proporcionada a lo que se cambió.
            </p>

            <p className="mt-auto pt-5 text-sm font-semibold text-foreground/85">
              Resultado: aceptable para revisión humana breve
            </p>
          </motion.div>

          {/* Caso B */}
          <motion.div
            className="flex flex-col rounded-[1.75rem] border border-primary/25 bg-primary/8 px-6 py-8 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Caso B · Cambio sustancial
              </span>
              <span className="inline-flex w-fit rounded-full border border-destructive/40 bg-destructive/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-destructive">
                Riesgo alto
              </span>
            </div>
            <p className="mt-5 text-base leading-relaxed text-foreground/85">
              «Impedir añadir al carrito una pieza con stock cero.»
            </p>

            <div className="mt-5 overflow-x-auto rounded-[1.25rem] border border-primary/30 bg-background/55 p-4">
              <pre className="font-mono text-xs leading-relaxed text-foreground/78">
                <span className="text-primary">Scenario:</span> No permitir
                comprar con stock a cero
                {"\n"} Given 0 unidades en stock
                {"\n"} When intento añadirla al carrito
                {"\n"} Then el sistema me impide añadirla
              </pre>
            </div>

            <div className="mt-5 overflow-x-auto rounded-[1.25rem] border border-primary/30 bg-background/55 p-5">
              <pre className="font-mono text-xs leading-relaxed text-foreground/78 md:text-sm">
                <span className="text-primary">
                  Candidato: PR B / commit &lt;SHA-B&gt;
                </span>
                {"\n"}
                {evidenciaB.map((e) => (
                  <span key={e.check}>
                    {"  "}
                    {e.check}: {e.resultado}
                    {"\n"}
                  </span>
                ))}
              </pre>
            </div>

            <div className="mt-5 flex flex-col gap-1.5">
              {lentesB.map((l) => (
                <div key={l.lente} className="flex items-start gap-2">
                  <span className="mt-0.5 w-20 shrink-0 font-mono text-xs font-semibold text-primary/80">
                    {l.lente}
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/80">
                    {l.nota}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[1rem] border border-destructive/35 bg-destructive/8 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-destructive">
                Hallazgo abierto
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground/82">
                Falta demostrar o proteger la operación concurrente sobre la
                última unidad: dos compradores, un solo stock.
              </p>
            </div>

            <p className="mt-auto pt-5 text-sm font-semibold text-destructive">
              Resultado: no aceptar todavía hasta resolver o justificar el
              hallazgo
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 backdrop-blur md:px-10 md:py-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Pausa deliberada
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            Fijaos en lo que ha decidido la diferencia. No es el número de
            líneas ni el número de archivos. Es la consecuencia de
            equivocarnos y la evidencia disponible para detectarlo.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <motion.div
            className="rounded-[1.75rem] border border-primary/20 bg-primary/8 p-6 text-center md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl font-semibold leading-relaxed text-balance text-foreground md:text-2xl">
              El tamaño del diff no decide cuánto revisar. El riesgo y la
              evidencia disponible, sí.
            </p>
          </motion.div>
          <motion.div
            className="rounded-[1.75rem] border border-primary/20 bg-primary/8 p-6 text-center md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="text-xl font-semibold leading-relaxed text-balance text-foreground md:text-2xl">
              La revisión no solo comprueba criterios. También descubre
              criterios que faltaban.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

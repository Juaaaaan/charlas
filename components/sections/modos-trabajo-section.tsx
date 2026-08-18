"use client";

import { motion } from "framer-motion";

const modos = [
  {
    modo: "Preguntar",
    resumen: "Lo que ya hacéis",
    detalle: "Pregunta → respuesta. Perfecto para lo rápido.",
    serie: "Lo básico",
    conocido: true,
  },
  {
    modo: "Investigar a fondo",
    resumen: "«Deep research»",
    detalle:
      "Le das un tema y, en vez de contestar en 3 segundos, se pasa varios minutos rastreando muchas fuentes y te devuelve un informe con referencias. Para cuando necesitas profundidad, no una respuesta rápida.",
    serie: "eval / research",
  },
  {
    modo: "Recordar",
    resumen: "Proyectos · memoria · instrucciones persistentes",
    detalle:
      "La IA que te conoce. Le das tu contexto una vez — tu rol, tu proyecto, tu estilo — y no empiezas de cero cada conversación.",
    serie: "Wiki LLM y memoria · charlas 8 y 11",
  },
  {
    modo: "Actuar",
    resumen: "Conectores · agentes",
    detalle:
      "La IA que entra en tus apps — tu correo, tu calendario, tus documentos — y HACE cosas, no solo habla.",
    serie: "MCPs · charla 7",
  },
];

export function ModosTrabajoSection() {
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
            Bloque 3 · Capa 3
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            ¿Cómo la pongo a trabajar?
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Casi todos usáis la IA de UNA sola forma — preguntar y que responda.
            Es como usar el 20% de un móvil solo para llamar. La IA de 2026 tiene
            cuatro modos de trabajo. Y solo conocéis uno.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {modos.map((m, index) => (
            <motion.div
              key={m.modo}
              className={`flex flex-col rounded-[1.5rem] border px-6 py-7 ${
                m.conocido
                  ? "border-border/60 bg-card/50"
                  : "border-primary/25 bg-primary/8"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-semibold text-primary/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-semibold text-foreground">
                  {m.modo}
                </h3>
              </div>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {m.resumen}
              </p>
              <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/78">
                {m.detalle}
              </p>
              <p className="mt-5 inline-flex w-fit rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-foreground/60">
                {m.serie}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Aquí cierro el círculo de toda la serie
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-foreground/80">
            ¿Os suena «recordar»? Es el Wiki LLM, la memoria, las instrucciones
            persistentes — charlas 8 y 11. ¿Os suena «actuar»? Son los MCPs, la
            charla 7. Todo eso que sonaba técnico y de programadores… es esto.
            Los cuatro modos que cualquiera puede usar hoy. No es otra IA: es la
            misma, puesta a trabajar de otra forma.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            Preguntar es el modo fácil, pero es solo uno de cuatro. Investigar,
            recordar y actuar es donde está el 80% que os estáis perdiendo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

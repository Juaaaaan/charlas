"use client";

import { motion } from "framer-motion";

const nombres = [
  {
    nombre: "Microsoft Copilot",
    aclara: "A secas, web/app",
    que: "Chat general, tipo ChatGPT. Para consultas generales.",
    datos: "No ve tus datos de empresa",
  },
  {
    nombre: "Microsoft 365 Copilot",
    aclara: "«Copilot 365»",
    que: "La IA DENTRO de Word, Excel, Outlook y Teams.",
    datos: "El único que ve tus documentos y correos internos",
    destacado: true,
  },
  {
    nombre: "GitHub Copilot",
    aclara: "Dentro del editor",
    que: "Para programar. Solo devs.",
    datos: "—",
  },
  {
    nombre: "Claude",
    aclara: "claude.ai",
    que: "Chat general, fuerte redactando y analizando documentos que le subes.",
    datos: "Solo lo que subas",
  },
];

const reglaTresSegundos = [
  {
    pregunta: "¿Es para programar?",
    respuesta: "GitHub Copilot (o Claude Code).",
  },
  {
    pregunta: "¿Es sobre mis correos, documentos o reuniones de la empresa?",
    respuesta: "Microsoft 365 Copilot — el único que ve tu contenido interno.",
  },
  {
    pregunta: "¿Es algo general — redactar, resumir, analizar un PDF que le pego?",
    respuesta: "Microsoft Copilot o Claude.",
  },
];

const capturas = [
  {
    escenario: "Chat general, sin darle nada",
    resultado: "Responde algo que suena bien y se lo inventa.",
    frase: "Suena convincente. Y es mentira: no conoce vuestro convenio.",
    tono: "malo",
  },
  {
    escenario: "La misma IA, con el documento cargado",
    resultado: "PDF + «cítame la página». Responde bien y cita.",
    frase: "Misma IA, misma pregunta. Solo cambió que le di el contexto.",
    tono: "bueno",
  },
  {
    escenario: "365 Copilot, que ya ve los documentos de empresa",
    resultado: "Responde sin subir nada.",
    frase: "Si tu empresa la tiene conectada, ni subes nada.",
    tono: "bueno",
  },
];

export function HerramientaSection() {
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
            Bloque 1 · Capa 1
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            ¿Qué IA abro?
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Empieza con una confusión que tiene medio mundo: la palabra
            «Copilot» no señala una cosa. Señala tres cosas distintas con el
            mismo apellido.
          </p>
        </motion.div>

        <motion.p
          className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          El lío de los nombres
        </motion.p>

        <div className="grid gap-4 md:grid-cols-2">
          {nombres.map((item, index) => (
            <motion.div
              key={item.nombre}
              className={`flex flex-col rounded-[1.5rem] border px-6 py-6 ${
                item.destacado
                  ? "border-primary/30 bg-primary/8"
                  : "border-border/70 bg-card/70"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {item.nombre}
                </h3>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {item.aclara}
                </span>
              </div>
              <p className="mt-3 text-base leading-relaxed text-foreground/78">
                {item.que}
              </p>
              <p
                className={`mt-4 text-sm font-medium ${
                  item.destacado ? "text-primary" : "text-foreground/55"
                }`}
              >
                {item.datos}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-4 rounded-[1.5rem] border border-border/50 bg-card/40 px-6 py-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-base leading-relaxed text-foreground/65">
            <span className="font-semibold text-foreground/80">
              Y un cuarto que puede sonaros: GitHub Desktop.
            </span>{" "}
            Ese ni es IA — es una app para gestionar código. Lo digo para que no
            os líe.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            La regla de 3 segundos
          </p>
          <div className="mt-6 grid gap-4">
            {reglaTresSegundos.map((row, index) => (
              <div
                key={row.pregunta}
                className="grid gap-3 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center"
              >
                <p className="text-lg font-semibold leading-snug text-foreground">
                  <span className="mr-2 font-mono text-primary/80">
                    {index + 1}.
                  </span>
                  {row.pregunta}
                </p>
                <p className="text-base leading-relaxed text-foreground/72 md:pl-6">
                  → {row.respuesta}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="mb-6 mt-16 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Misma pregunta, tres formas · «¿cuántos días de permiso por mudanza me
          corresponden?»
        </motion.p>

        <div className="grid gap-4 md:grid-cols-3">
          {capturas.map((cap, index) => (
            <motion.div
              key={cap.escenario}
              className={`flex flex-col rounded-[1.5rem] border px-6 py-6 ${
                cap.tono === "malo"
                  ? "border-destructive/30 bg-destructive/5"
                  : "border-primary/25 bg-primary/8"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
                  cap.tono === "malo"
                    ? "bg-destructive/15 text-destructive"
                    : "bg-primary/15 text-primary"
                }`}
              >
                {cap.tono === "malo" ? "Inventa" : "Cita / lo tiene"}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-tight text-foreground">
                {cap.escenario}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/72">
                {cap.resultado}
              </p>
              <p className="mt-5 text-sm italic leading-relaxed text-foreground/60">
                «{cap.frase}»
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-6 text-sm leading-relaxed text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ⚠️ La tercera requiere 365 Copilot licenciado. Esto conecta con el Wiki
          LLM de toda la serie: darle a la IA vuestro conocimiento para que no
          invente.
        </motion.p>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            No hay una IA mejor. Hay una correcta para cada tarea. Para tus
            datos, la clave es quién tiene tu contexto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

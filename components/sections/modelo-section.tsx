"use client";

import { motion } from "framer-motion";

const dial = [
  {
    modo: "Rápido",
    para: "Tareas simples",
    detalle: "Redactar, resumir corto, reformular, preguntas directas.",
    ritmo: "Instantáneo",
    chatgpt: "Instant",
    claude: "Gama ligera (Haiku / Sonnet)",
  },
  {
    modo: "Razonador",
    para: "Tareas complejas",
    detalle: "Analizar, comparar, varios pasos, una decisión, coste alto.",
    ritmo: "Tarda, pero razona",
    chatgpt: "Thinking",
    claude: "Gama potente (Opus)",
    destacado: true,
  },
];

const familias = [
  {
    titulo: "Cerrados de pago",
    subtitulo: "Frontera occidental",
    descripcion:
      "Fiables, fáciles, pensados para empresa. Primera opción para la mayoría.",
    ejemplos:
      "OpenAI (GPT), Anthropic (Claude), Google (Gemini), xAI (Grok).",
    nota: "Primera opción; verificar licencia corporativa.",
    tono: "ok",
  },
  {
    titulo: "Abiertos / open-weight",
    subtitulo: "Muchos chinos, Mistral en EU",
    descripcion:
      "Potentes, mucho más baratos, te los puedes descargar y ejecutar en tu propia máquina. Han sacudido el mercado en 2026.",
    ejemplos: "DeepSeek, Qwen, Kimi, GLM (chinos); Mistral (europeo).",
    nota: "⚠️ Residencia de datos: muchas APIs corren desde China. Cargas reguladas → solo lo aprobado.",
    tono: "warn",
  },
];

const modelos = [
  { m: "GPT-5.6 Sol", p: "OpenAI", f: "🇺🇸", bueno: "Razonamiento y tareas complejas (el potente)" },
  { m: "GPT-5.6 Luna", p: "OpenAI", f: "🇺🇸", bueno: "Volumen y velocidad (el rápido y barato)" },
  { m: "Claude Opus 4.8", p: "Anthropic", f: "🇺🇸", bueno: "Análisis a fondo, código, escritura larga (el potente)" },
  { m: "Claude Sonnet 5", p: "Anthropic", f: "🇺🇸", bueno: "El equilibrado del día a día" },
  { m: "Claude Haiku 4.5", p: "Anthropic", f: "🇺🇸", bueno: "Respuestas rápidas y simples" },
  { m: "Gemini 3 Pro", p: "Google", f: "🇺🇸", bueno: "Contexto larguísimo, multimodal, ecosistema Google" },
  { m: "Grok 4.6", p: "xAI", f: "🇺🇸", bueno: "Generalista, integrado con X" },
  { m: "DeepSeek V4", p: "DeepSeek", f: "🇨🇳", bueno: "Razonamiento barato; el que sacudió el mercado" },
  { m: "Kimi K3", p: "Moonshot", f: "🇨🇳", bueno: "Todoterreno abierto más potente ahora mismo" },
  { m: "Qwen 3 Max", p: "Alibaba", f: "🇨🇳", bueno: "Código y agentes; variantes que corren en un portátil" },
  { m: "GLM-5.2", p: "Z.ai", f: "🇨🇳", bueno: "Código y agentes de largo recorrido" },
  { m: "Mistral Large 3", p: "Mistral", f: "🇪🇺", bueno: "La opción europea (mejor encaje de residencia de datos)" },
];

export function ModeloSection() {
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
            Bloque 2 · Capa 2
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            ¿Qué modelo elijo?
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Dentro de cada herramienta no hay UN modelo: hay un selector. Y dos
            decisiones dentro: qué potencia y de qué fabricante.
          </p>
        </motion.div>

        {/* 2a — El dial */}
        <motion.p
          className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          2a · El dial — rápido vs razonador
        </motion.p>

        <div className="grid gap-4 md:grid-cols-2">
          {dial.map((d, index) => (
            <motion.div
              key={d.modo}
              className={`flex flex-col rounded-[1.5rem] border px-6 py-7 ${
                d.destacado
                  ? "border-primary/30 bg-primary/8"
                  : "border-border/70 bg-card/70"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-foreground">
                  Modo {d.modo}
                </h3>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {d.ritmo}
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary/80">
                {d.para}
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/78">
                {d.detalle}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full border border-border/60 bg-background/40 px-3 py-1 text-foreground/70">
                  ChatGPT: {d.chatgpt}
                </span>
                <span className="rounded-full border border-border/60 bg-background/40 px-3 py-1 text-foreground/70">
                  Claude: {d.claude}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-4 rounded-[1.5rem] border border-destructive/30 bg-destructive/5 px-6 py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-destructive">
            El error de método · el «ajá»
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            El modo rápido viene por defecto. Así que la gente lo usa PARA TODO,
            también para lo complejo, y luego dice «la IA razona fatal». No. Le
            pediste que corriera cuando necesitabas que pensara. Usaste el dial
            mal.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/60">
            En pantalla: la misma tarea compleja en modo rápido (superficial)
            contra razonador (estructurado, con matices). Misma IA, misma
            pregunta. Solo cambió el dial.
          </p>
        </motion.div>

        {/* 2b — El mapa de proveedores */}
        <motion.p
          className="mb-6 mt-16 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          2b · El mapa de proveedores — dos familias
        </motion.p>

        <div className="grid gap-4 md:grid-cols-2">
          {familias.map((fam, index) => (
            <motion.div
              key={fam.titulo}
              className={`flex flex-col rounded-[1.5rem] border px-6 py-7 ${
                fam.tono === "warn"
                  ? "border-amber-400/30 bg-amber-400/5"
                  : "border-primary/25 bg-primary/8"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <h3 className="text-xl font-semibold text-foreground">
                {fam.titulo}
              </h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {fam.subtitulo}
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/78">
                {fam.descripcion}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/55">
                {fam.ejemplos}
              </p>
              <p
                className={`mt-5 text-sm font-medium leading-relaxed ${
                  fam.tono === "warn" ? "text-amber-300/90" : "text-primary"
                }`}
              >
                {fam.nota}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-4 rounded-[1.5rem] border border-amber-400/30 bg-amber-400/5 px-6 py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-300">
            La regla de oro · enlaza con gobernanza y seguridad
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            «Potente y barato» no basta en una empresa. Las APIs de muchos de
            estos modelos corren desde China: hay una cuestión de dónde acaban
            vuestros datos. En el trabajo, usad solo lo aprobado por la empresa.
            En casa, experimentad lo que queráis.
          </p>
        </motion.div>

        {/* Anexo — modelos concretos */}
        <motion.div
          className="mt-16 rounded-[1.75rem] border border-border/50 bg-card/40 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60">
              Anexo · nombres concretos (por si preguntan)
            </p>
            <span className="rounded-full border border-amber-400/30 bg-amber-400/5 px-3 py-1 text-xs font-medium text-amber-300/90">
              Agosto 2026 · cambian cada semana
            </span>
          </div>
          <div className="mt-6 grid gap-2 md:grid-cols-2">
            {modelos.map((row) => (
              <div
                key={row.m}
                className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1 rounded-[1rem] border border-border/40 bg-background/30 px-4 py-3"
              >
                <span className="text-base" aria-hidden="true">
                  {row.f}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {row.m}{" "}
                    <span className="font-normal text-muted-foreground">
                      · {row.p}
                    </span>
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/60">
                    {row.bueno}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            El criterio «familia + para qué + dónde acaban mis datos» no
            envejece. Los nombres, sí. En la empresa priman los 🇺🇸/🇪🇺 aprobados.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            No os aprendáis los nombres, que la semana que viene son otros.
            Aprendeos que hay elección — y que en la empresa, la elección la
            marca también dónde acaban tus datos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

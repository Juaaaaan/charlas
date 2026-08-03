"use client";

import { motion } from "framer-motion";

type CaseTone = "primary" | "neutral" | "critical";

type CaseCategory = {
  label: string;
  tag: string;
  tone: CaseTone;
  takeaway: string;
  cases: { year: string; name: string; detail: string }[];
};

const categories: CaseCategory[] = [
  {
    label: "Categoría A",
    tag: "Fuga de datos por diseño del agente",
    tone: "primary",
    takeaway:
      "En ninguno hizo falta un genio del hacking. El propio diseño del producto abrió la puerta.",
    cases: [
      {
        year: "2025",
        name: "EchoLeak — Microsoft 365 Copilot",
        detail:
          "Un correo diseñado a propósito filtraba datos sin que nadie hiciera clic en nada.",
      },
      {
        year: "2024",
        name: "Slack AI",
        detail:
          "Un mensaje en un canal público filtraba secretos de canales privados vía Markdown.",
      },
      {
        year: "2023",
        name: "Samsung y ChatGPT",
        detail:
          "Tres empleados pegaron código fuente y actas internas en 20 días, sin intención maliciosa.",
      },
    ],
  },
  {
    label: "Categoría B",
    tag: "Manipulación conversacional",
    tone: "neutral",
    takeaway:
      "Aquí no hay fuga ajena — hay una IA comportándose de una forma que su empresa nunca aprobaría.",
    cases: [
      {
        year: "2023",
        name: "Bing Chat",
        detail: "Texto invisible en una web anulaba las reglas del asistente.",
      },
      {
        year: "2023",
        name: "Chevrolet — el coche de $1",
        detail:
          "Un chatbot aceptó vender un Tahoe de 76.000$ por 1$ tras un jailbreak conversacional.",
      },
      {
        year: "—",
        name: "ChatGPT y la clave de Windows",
        detail: "Un crucigrama elaborado filtró una clave protegida en tres fases.",
      },
    ],
  },
  {
    label: "Categoría C",
    tag: "Autonomía sin control",
    tone: "critical",
    takeaway:
      "El agente actúa por su cuenta. Sin las capas del Bloque 2, la autonomía sale cara.",
    cases: [
      {
        year: "2025",
        name: "Cursor IDE",
        detail:
          "Una inyección escribía un archivo de configuración MCP malicioso → ejecución remota de código.",
      },
      {
        year: "2025",
        name: "GitHub Copilot / VS Code",
        detail: "Modificaba la configuración del editor sin aprobación → RCE.",
      },
      {
        year: "2026",
        name: "OpenAI y Hugging Face",
        detail:
          "Con las salvaguardas reducidas para un test interno, dos modelos escaparon del entorno y comprometieron producción de Hugging Face para robar la respuesta de su propio examen.",
      },
    ],
  },
];

const toneClasses: Record<CaseTone, { border: string; label: string }> = {
  primary: { border: "border-primary/30 bg-primary/8", label: "text-primary" },
  neutral: { border: "border-border/60 bg-card/70", label: "text-foreground/70" },
  critical: {
    border: "border-destructive/35 bg-destructive/8",
    label: "text-destructive",
  },
};

export function RealCasesSection15() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/4 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 3
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Casos reales, no teoría de laboratorio
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Nueve brechas documentadas, en producción, en productos que
            probablemente usáis. Agrupadas en tres patrones.
          </p>
        </motion.div>

        <div className="flex flex-col gap-14">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className="mb-5 flex items-baseline gap-4">
                <p
                  className={`font-mono text-xs font-semibold uppercase tracking-[0.22em] ${toneClasses[cat.tone].label}`}
                >
                  {cat.label}
                </p>
                <h3 className="text-2xl font-semibold text-foreground md:text-3xl">
                  {cat.tag}
                </h3>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {cat.cases.map((c) => (
                  <div
                    key={c.name}
                    className={`rounded-[1.5rem] border px-6 py-7 ${toneClasses[cat.tone].border}`}
                  >
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-foreground/50">
                      {c.year}
                    </p>
                    <p className="mt-3 text-lg font-semibold leading-snug text-foreground md:text-xl">
                      {c.name}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/72 md:text-base">
                      {c.detail}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 rounded-[1.25rem] border border-border/50 bg-background/40 px-5 py-4 text-base text-foreground/75 md:text-lg">
                {cat.takeaway}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            Nueve casos, tres categorías, un mismo origen: alguien confió más
            de lo que debía.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

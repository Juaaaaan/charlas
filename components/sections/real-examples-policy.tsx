"use client";

import { motion } from "framer-motion";

const realCases = [
  {
    year: "2023",
    company: "Samsung",
    headline: "Código fuente pegado en ChatGPT",
    detail:
      "Varios ingenieros compartieron código propietario para depurar errores. Ese código salió del control de la empresa. Samsung acabó prohibiendo la IA generativa pública en toda la compañía.",
    takeaway: "Nadie actuó con mala intención. Nadie les había dicho que no.",
  },
  {
    year: "2024",
    company: "Air Canada",
    headline: "Un chatbot con validez legal",
    detail:
      "El chatbot de atención al cliente dio información incorrecta sobre reembolsos. La aerolínea dijo que el chatbot era «una entidad separada». Un tribunal no lo aceptó.",
    takeaway:
      "La empresa es responsable de lo que dice su IA, igual que de lo que dice un empleado.",
  },
  {
    year: "2023",
    company: "Autoridad italiana + ChatGPT",
    headline: "Un país entero bloquea la herramienta",
    detail:
      "Italia fue el primer país occidental en bloquear temporalmente ChatGPT por dudas sobre datos personales. La herramienta volvió semanas después con cambios.",
    takeaway: "Los reguladores no se van a quedar mirando.",
  },
];

export function CasosRealesSection() {
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
            Bloque 1
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Cuando la falta de gobernanza sale cara
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Tres casos reales, públicos. No son de banca ni de seguros — pero
            podrían serlo perfectamente.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {realCases.map((c, index) => (
            <motion.div
              key={c.company}
              className="flex flex-col rounded-[2rem] border border-border/60 bg-card/70 p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-baseline gap-3">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                  {c.year}
                </p>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-foreground/50">
                  Caso {String(index + 1).padStart(2, "0")}
                </p>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-foreground md:text-3xl">
                {c.company}
              </h3>
              <p className="mt-3 text-xl font-medium leading-snug text-foreground/90 md:text-2xl">
                {c.headline}
              </p>
              <p className="mt-5 text-base leading-relaxed text-foreground/72 md:text-lg">
                {c.detail}
              </p>
              <p className="mt-6 rounded-[1.25rem] border border-primary/20 bg-primary/8 px-4 py-3 text-sm font-medium text-foreground/85 md:text-base">
                {c.takeaway}
              </p>
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
            No hubo mala fe. Hubo falta de reglas claras.
          </p>
          <p className="mt-6 text-xl text-foreground/70">
            Gobernar la IA antes de que pase algo es mucho más barato que
            gobernarla después.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

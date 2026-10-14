"use client";

/**
 * BLOQUE 7 — VISUAL GUIADO · OPCIÓN A (recorrido web)
 *
 * Cero herramienta en vivo, cero instalación: se comentan capturas de
 * opencode.ai y del repo en GitHub. Las capturas se proyectan aparte; esta
 * sección es el guion visual que las acompaña.
 *
 * El pico del bloque es la parada 3 (el selector de modelo). No moverla ni
 * diluirla: es el momento en que la audiencia VE la charla entera.
 */

import { motion } from "framer-motion";

const paradas = [
  {
    numero: "01",
    titulo: "Esto existe y es real",
    captura: "Home de opencode.ai",
    detalle:
      "Que no quede como algo abstracto: es una web, un producto real. Funciona en la terminal, pero también como app de escritorio y dentro del editor. No es un juguete.",
    destacada: false,
  },
  {
    numero: "02",
    titulo: "Se parece a lo que ya conocéis",
    captura: "La interfaz trabajando · modo Plan-Build",
    detalle:
      "Le das una tarea, primero te propone un plan, y luego lo ejecuta. ¿Os suena? Claro — es el mismo tipo de herramienta que Claude Code o Copilot. Hasta aquí, igual.",
    destacada: false,
  },
  {
    numero: "03",
    titulo: "El momento · elegir el motor",
    captura: "El selector de modelo / proveedor",
    detalle:
      "Y ahora, la diferencia. Este menú. Aquí elijo YO el motor: Claude, GPT, Gemini… o un modelo que corre en mi propia máquina, sin salir de casa. En una caja cerrada, este menú no existe: el motor lo eligen por ti.",
    destacada: true,
  },
  {
    numero: "04",
    titulo: "Y es abierto de verdad",
    captura: "El repo en GitHub · licencia MIT",
    detalle:
      "Su código, a la vista, con miles de personas mirándolo y mejorándolo. Con Claude Code o Copilot, esta página sencillamente no existe.",
    destacada: false,
  },
  {
    numero: "05",
    titulo: "La gente construye encima",
    captura: "Ecosistema · frontales de la comunidad",
    detalle:
      "Como es abierto, la gente ha montado sus propias apps sobre OpenCode. Opcional, si sobra tiempo — y enlaza con lo de antes y con el cierre.",
    destacada: false,
  },
];

export function VisualSection20() {
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
            Bloque 7 · Visual guiado
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Verlo con los ojos
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Hasta aquí lo hemos contado. Ahora lo miramos: dónde vive la
            herramienta, cómo se maneja, y el único gesto que resume toda la
            charla.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {paradas.map((p, index) => (
            <motion.div
              key={p.numero}
              className={`rounded-[1.75rem] border px-6 py-7 md:px-8 ${
                p.destacada
                  ? "border-primary/30 bg-primary/10"
                  : "border-border/70 bg-card/70 backdrop-blur"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`font-mono text-sm font-semibold ${
                    p.destacada ? "text-primary" : "text-primary/80"
                  }`}
                >
                  {p.numero}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/50">
                  {p.captura}
                </span>
              </div>
              <h3
                className={`mt-4 font-semibold leading-tight text-balance text-foreground ${
                  p.destacada ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                }`}
              >
                {p.titulo}
              </h3>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-foreground/74 md:text-lg">
                {p.detalle}
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
            Todo lo de hoy cabe en este menú: quién elige el motor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

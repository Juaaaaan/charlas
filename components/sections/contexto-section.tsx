"use client";

import { motion } from "framer-motion";

const enLaMesa = [
  { etiqueta: "Las 34 tareas que pegaste", estado: "cayendo" },
  { etiqueta: "Tu 2ª pregunta", estado: "mesa" },
  { etiqueta: "Su respuesta larga", estado: "mesa" },
  { etiqueta: "Tu reformulación", estado: "mesa" },
  { etiqueta: "Lo último que preguntas", estado: "nuevo" },
];

export function ContextoSection() {
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
            Bloque 4 · Mecanismo 4
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            ¿Por qué «se le olvida» en chats largos?
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            ¿A quién le ha pasado que en una conversación larga la IA empieza a
            contestar peor, se contradice o se le olvida algo del principio? A
            todos. No es que se canse. Tiene una explicación muy concreta.
          </p>
        </motion.div>

        <motion.div
          className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Herramienta · chatbot general
          </span>
          <p className="mt-5 text-base leading-relaxed text-foreground/72">
            Pegamos las 34 tareas, tenemos una conversación de ida y vuelta de
            varios turnos y, al final, preguntamos por un detalle del principio:
          </p>
          <p className="mt-5 font-mono text-sm leading-relaxed text-foreground/80 md:text-base">
            <span className="text-primary/80">›</span> De la tarea de análisis de
            requisitos que te pasé al principio, ¿cuál era el riesgo que
            mencionaba?
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/72">
            Empieza a perder precisión o mezcla detalles. Ahí está el bajón. ¿Por
            qué?
          </p>
        </motion.div>

        {/* La mesa de tamaño fijo */}
        <motion.div
          className="mt-8 rounded-[1.75rem] border border-border/70 bg-background/40 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            La mesa de tamaño fijo · lo nuevo entra, lo viejo se cae por el borde
          </p>
          <div className="rounded-[1.25rem] border border-dashed border-border/70 bg-card/40 p-4">
            <div className="flex flex-wrap items-stretch gap-2">
              {enLaMesa.map((item) => (
                <div
                  key={item.etiqueta}
                  className={`flex-1 rounded-[1rem] border px-4 py-4 text-center text-sm font-medium leading-tight ${
                    item.estado === "cayendo"
                      ? "border-destructive/40 bg-destructive/5 text-destructive/90 opacity-60"
                      : item.estado === "nuevo"
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-border/60 bg-card/70 text-foreground/75"
                  }`}
                >
                  {item.etiqueta}
                  {item.estado === "cayendo" ? (
                    <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.16em]">
                      ↓ se cae de la mesa
                    </span>
                  ) : null}
                  {item.estado === "nuevo" ? (
                    <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.16em]">
                      empuja lo viejo
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[1.75rem] border border-primary/20 bg-primary/8 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            El «ajá» · la IA no tiene memoria, tiene una mesa
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            Imaginaos que la IA trabaja sobre una mesa de tamaño fijo. Todo lo
            que hay en la conversación —lo que le pegasteis, sus respuestas,
            vuestras preguntas— está encima. Eso es la ventana de contexto. Cuando
            la mesa se llena, para meter algo nuevo, empuja lo viejo por el borde.
            No lo «olvida» por despiste: es que literalmente ya no le cabe
            delante.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            Y ojo con el detalle del Bloque 3 aplicado aquí: cuando algo se le ha
            caído de la mesa y le preguntáis por ello, no os dice «ya no lo
            tengo». Completa el patrón. Os lo puede alucinar.{" "}
            <span className="font-semibold text-foreground">
              Los cuatro mecanismos están conectados.
            </span>
          </p>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60">
            El kit · qué hacer en conversaciones largas
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-foreground/80">
            No fiéis todo a que «se acuerde». Resumidle de vez en cuando lo
            importante, reenfocad, o empezad una conversación nueva con lo
            esencial. Y para trabajos grandes, dadle el material como fuente —un
            documento, la hoja— en vez de pegándolo en el chat: ahí no se le cae
            de la mesa.
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
            La IA no recuerda: mantiene delante lo que le cabe. En cuanto se llena
            la mesa, lo viejo se cae — y puede rellenarlo inventando.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

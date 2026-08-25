"use client";

import { motion } from "framer-motion";

const respuestas = [
  {
    idea: "No entiende: PREDICE el patrón más probable",
    detalle: "Por eso cómo le preguntáis decide lo que os da.",
  },
  {
    idea: "No busca palabras: busca SIGNIFICADOS",
    detalle:
      "Por eso os entiende aunque cambiéis las palabras, y encuentra el documento bueno.",
  },
  {
    idea: "El peligro se ha MOVIDO",
    detalle:
      "Con la fuente delante ya sabe decir «no lo tengo»; alucina sin fuente o si le cuelas una premisa falsa. Dadle la fuente y vigilad vuestras preguntas — la capa 4 de la 17.",
  },
  {
    idea: "Tiene una MESA de tamaño fijo",
    detalle: "En lo largo, resumid, reenfocad o empezad de nuevo.",
  },
];

export function ClosingSection18() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(74,145,255,0.18),transparent_36%),linear-gradient(180deg,rgba(12,16,26,1)_0%,rgba(9,13,21,0.98)_50%,rgba(7,10,18,1)_100%)]" />
      <div className="absolute left-1/2 bottom-10 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Cierre · El kit del lunes
          </span>
          <h2 className="text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Las cuatro preguntas, ahora con respuesta
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {respuestas.map((item, index) => (
            <motion.div
              key={item.idea}
              className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7 backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="font-mono text-sm font-semibold text-primary/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-balance text-foreground">
                {item.idea}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/72">
                {item.detalle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* El círculo con la 17 */}
        <motion.div
          className="mt-8 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60">
            El círculo con la 17 · elegir bien y entender por dentro son la misma
            moneda
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-foreground/80">
            La semana pasada aprendisteis a elegir la herramienta, el modelo y el
            modo. Hoy habéis visto por qué funciona así por dentro. Fijaos que
            hasta hemos cambiado de herramienta a propósito: Copilot dentro de
            Excel para lo que tiene la fuente delante, el chatbot para lo demás.
            La misma IA se comporta distinto según dónde vive y con qué la
            alimentáis.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl lg:text-[2.6rem]">
            La próxima vez que la IA os deslumbre o os falle, ya no será magia.
            Sabréis qué mecanismo está funcionando por debajo. Y eso, más que
            cualquier truco, es lo que os hace buenos usándola.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

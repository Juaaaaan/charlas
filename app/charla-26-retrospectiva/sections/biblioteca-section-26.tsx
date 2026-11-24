"use client";

import { motion } from "framer-motion";

const capacidades = [
  { titulo: "Índice", detalle: "Todas las charlas y todos los conceptos en un sitio." },
  { titulo: "Buscador", detalle: "Encontrar una pieza por lo que hace, no solo por su nombre." },
  { titulo: "Notas con enlaces", detalle: "Cada ficha apunta a las que tiene relacionadas." },
  { titulo: "Mini-grafo", detalle: "El mapa de conexiones entre fichas." },
];

export function BibliotecaSection26() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-aura-pagina" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 5 · La Biblioteca
          </span>
          <h2 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Dónde va a vivir todo esto
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            El vault guarda el conocimiento estructurado. La Biblioteca es una
            forma más cómoda de navegarlo: permite localizar charlas y
            conceptos sin recorrer las carpetas.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capacidades.map((c, index) => (
            <motion.div
              key={c.titulo}
              className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-5 py-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <h3 className="text-xl font-semibold text-foreground">
                {c.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/72">
                {c.detalle}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-foreground/72"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Todavía no está disponible para toda la empresa; es un trabajo en
          marcha. Cuando esté, lo diré por aquí.
        </motion.p>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const resenables = [
  {
    tag: "Reseñable 1",
    titulo: "Un agente es un rol que se define por escrito",
    detalle:
      "Esto no es código. Es un texto donde le explico al agente quién es y qué hace, igual que se lo explicarías a una persona nueva en su primer día.",
  },
  {
    tag: "Reseñable 2",
    titulo: "Las secciones de la instrucción están ordenadas",
    detalle:
      "Directrices generales, habilidades (el orden en que llama a los especialistas), manejo de errores, ejemplos y cierre. A la IA, un ejemplo concreto le vale más que mil instrucciones abstractas — esto lo vimos en la charla del prompting.",
  },
  {
    tag: "Reseñable 3",
    titulo: "La regla de oro anti-invención",
    detalle:
      "«Nunca inventes un requisito que no esté en el pliego; si algo no está claro, márcalo como duda». Es el arnés: le pongo límites de comportamiento por escrito. Puro eco de la 18 — el peligro es cuando rellena huecos inventando.",
  },
];

export function CoordinadorSection19() {
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
            Parada 1 · El coordinador
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            El cerebro del jefe
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Abrimos las instrucciones del agente coordinador. No hay código:
            hay un encargo bien escrito.
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
            Pantalla · Información general → Instrucciones
          </span>
          <p className="mt-5 font-mono text-sm leading-relaxed text-foreground/80 md:text-base">
            <span className="text-primary/80">›</span> Tu función NO es analizar
            tú el pliego, sino repartir el trabajo entre tus especialistas.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/72">
            Le estoy diciendo que sea jefe, no que sea currante. Y se comporta
            como tal: recibe el encargo, decide a quién llamar y recoge las
            piezas. Una sola frase, escrita en lenguaje normal, define el rol.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {resenables.map((r, index) => (
            <motion.div
              key={r.tag}
              className="flex flex-col rounded-[1.5rem] border border-border/70 bg-card/70 px-6 py-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                {r.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-tight text-foreground">
                {r.titulo}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/72">
                {r.detalle}
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
            Programar esto no ha sido escribir código. Ha sido escribir bien un
            encargo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

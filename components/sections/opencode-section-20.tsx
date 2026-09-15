"use client";

import { motion } from "framer-motion";

const propiedades = [
  {
    numero: "01",
    titulo: "Es abierto",
    detalle:
      "El código está a la vista y cualquiera lo puede auditar. No es una caja negra.",
    frenteA: "Frente a: no puedes ver por dentro cómo está hecho",
  },
  {
    numero: "02",
    titulo: "No te casa con nadie",
    detalle:
      "Le enchufas el motor que quieras: el de una empresa, el de otra, o un modelo que corra en vuestra propia máquina o en un servidor interno.",
    frenteA: "Frente a: un único proveedor, el suyo",
  },
  {
    numero: "03",
    titulo: "Los datos se quedan en casa",
    detalle:
      "Si el motor es interno o local, vuestro código nunca viaja a un tercero. Puede funcionar incluso en entornos aislados, sin internet.",
    frenteA: "Frente a: vuestro código sale a un servidor de fuera",
  },
];

export function OpenCodeSection20() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/8 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 4 · El giro
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            El ejecutor también puede ser abierto
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Imaginad el mismo tipo de herramienta —un agente que ejecuta, que lee
            vuestro código y hace los cambios— pero construido al revés en tres
            cosas. Se llama <span className="text-foreground">OpenCode</span>.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {propiedades.map((p, index) => (
            <motion.div
              key={p.numero}
              className="flex flex-col rounded-[1.75rem] border border-primary/30 bg-primary/10 px-6 py-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="font-mono text-sm font-semibold text-primary">
                {p.numero}
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-balance text-foreground">
                {p.titulo}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/76">
                {p.detalle}
              </p>
              <p className="mt-6 border-t border-primary/20 pt-4 text-sm leading-relaxed text-foreground/55">
                {p.frenteA}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60">
            Y no es un experimento de garaje
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-foreground/80">
            Es una de las herramientas de su tipo más usadas del mundo, y se
            conecta con decenas de proveedores distintos, incluidos modelos
            locales. Vive en la terminal, pero también tiene app de escritorio y
            extensión para el editor: no es solo para gente muy técnica.
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
            El mismo trabajo que hace el ejecutor cerrado. Pero el motor lo
            eliges tú, y tus datos se quedan en casa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

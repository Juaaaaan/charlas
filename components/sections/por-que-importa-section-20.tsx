"use client";

import { motion } from "framer-motion";

const razones = [
  {
    numero: "01",
    titulo: "No quedar atrapada",
    detalle:
      "Ni a un proveedor ni a su precio. Si mañana suben la tarifa o cambian las reglas, con una herramienta abierta cambias de motor y sigues. Con una cerrada, estás donde te pongan.",
  },
  {
    numero: "02",
    titulo: "Gobernar los datos",
    detalle:
      "RGPD, información sensible, datos de clientes. Con un ejecutor que corre contra modelos internos, esa información no sale de casa. Para un banco o una aseguradora no es un capricho: es la diferencia entre poder usarlo o no.",
  },
  {
    numero: "03",
    titulo: "Correr contra lo suyo",
    detalle:
      "Muchas casas ya tienen sus propios modelos o sus acuerdos. Una herramienta abierta se enchufa a eso; una cerrada te obliga a lo suyo.",
  },
];

export function PorQueImportaSection20() {
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
            Bloque 5 · ¿Y a mí qué?
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Por qué aparece en soluciones internas
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            «Vale, Juan, muy bonito, pero yo no voy a abrir una terminal en mi
            vida». Porque esta decisión se está tomando en empresas como la
            nuestra ahora mismo, y afecta a todos, toquéis código o no.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {razones.map((r, index) => (
            <motion.div
              key={r.numero}
              className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7 backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="font-mono text-sm font-semibold text-primary/80">
                {r.numero}
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-balance text-foreground">
                {r.titulo}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/72">
                {r.detalle}
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
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Vuestro trabajo hoy no es adoptarlo · es entender la decisión
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            Por eso lo veis aparecer en soluciones internas. No porque sea «más
            chulo», sino porque deja el control del lado de la empresa.
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
            Y un paso más · porque es abierto, se construye encima
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-foreground/80">
            Como el motor es abierto, la gente monta sus propias aplicaciones
            usándolo por debajo: interfaces web, apps de escritorio, de móvil.
            OpenCode hace de motor, y tú le pones la cara que quieras. Eso con
            una caja cerrada es imposible.{" "}
            <span className="font-semibold text-foreground">
              Guardad esta idea para el final.
            </span>
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
            La factura y los datos dejan de ser rehenes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

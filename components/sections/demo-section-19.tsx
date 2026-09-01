"use client";

import { motion } from "framer-motion";

const momentos = [
  {
    fase: "Momento 0",
    titulo: "Lanzar",
    detalle:
      "Le paso el pliego de una academia de baile que quiere un sistema de gestión. 8 páginas. Mientras procesa, se ve la traza: llama al Extractor… ahora al Detector… El coordinador reparte, como dijimos.",
    tipo: "normal",
  },
  {
    fase: "Momento 1 · WOW",
    titulo: "La trampa de las fechas",
    detalle:
      "El agente detecta que la fecha de decisión es ANTERIOR a la de entrega de propuestas: deciden antes de recibir lo que van a juzgar. Es imposible. Esa trampa estaba puesta a propósito — y la ha cazado. No copió el texto: lo entendió y vio la contradicción.",
    tipo: "wow",
  },
  {
    fase: "Momento 2 · WOW",
    titulo: "El requisito escondido",
    detalle:
      "En el apartado de «lo que queda fuera del proyecto» había una frase que dice que la segunda sede SÍ hay que preverla. Un descuido clásico que te cambia el presupuesto. El agente lo rescató y lo puso como requisito. Leyó la letra pequeña.",
    tipo: "wow",
  },
  {
    fase: "Momento 4",
    titulo: "Corregir en vivo",
    detalle:
      "Puedo corregirle en lenguaje normal, sin tocar ninguna configuración: «no, contemplad app móvil nativa». Le digo lo que falta y rehace. Manda el humano.",
    tipo: "normal",
  },
  {
    fase: "Momento 5",
    titulo: "El Excel apareciendo",
    detalle:
      "Refresco la pestaña del Excel y ahí están las filas escritas, en OneDrive. No es una demo de laboratorio que se queda en pantalla: acaba en un fichero que RRHH, comercial o quien sea abre mañana y usa.",
    tipo: "normal",
  },
];

export function DemoSection19() {
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
            Parada 5 · La demo
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            El equipo, trabajando de verdad
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            El Analista de RFP analizando el pliego de la academia Compás, en
            directo. Miradlo trabajar.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {momentos.map((m, index) => (
            <motion.div
              key={m.titulo}
              className={`flex flex-col rounded-[1.75rem] border px-6 py-7 ${
                m.tipo === "wow"
                  ? "border-primary/25 bg-primary/8"
                  : "border-border/70 bg-card/70"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
                  m.tipo === "wow"
                    ? "bg-primary/15 text-primary"
                    : "bg-foreground/10 text-foreground/65"
                }`}
              >
                {m.fase}
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-foreground">
                {m.titulo}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/74">
                {m.detalle}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/30 bg-primary/12 px-6 py-10 md:px-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex w-fit rounded-full border border-primary/40 bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Momento 3 · el corazón de la charla
          </span>
          <h3 className="mt-6 text-3xl font-bold leading-tight text-balance text-foreground md:text-4xl">
            El checkpoint humano
          </h3>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-foreground/85">
            Antes de generar nada, el agente se para y pregunta: «¿quieres
            corregir algo antes de generar el Excel?». Ha hecho el análisis, me
            ha enseñado lo que encontró, y me devuelve el control. No cierra a mis
            espaldas. La decisión final es mía.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-foreground/85">
            Esto es lo que aprendimos en la 18 hecho práctica: la IA hace el
            trabajo pesado, te enseña lo dudoso, y{" "}
            <span className="font-semibold text-foreground">tú decides</span>. No
            es un piloto automático. Es un copiloto que te pasa el control en el
            momento clave.
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
            La IA que da miedo es la que actúa sola. Esta, antes de tocar nada,
            levanta la mano y te pregunta.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export function ClosingSection20() {
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
            Cierre · Qué os lleváis
          </span>
          <h2 className="text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Hoy cerramos la correa del ejecutor
          </h2>
        </motion.div>

        <motion.div
          className="rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Os la lleváis con una pregunta, no con una herramienta
          </p>
          <p className="mx-auto mt-6 max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl lg:text-[2.6rem]">
            ¿Quién controla la IA que usa mi empresa, y dónde viven mis datos?
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <motion.div
            className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 backdrop-blur md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60">
              Cerrar el círculo · la charla 19 con otros ojos
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">
              Montamos un equipo de agentes que analizaba pliegos: un jefe, tres
              especialistas, hasta escribía en un Excel. Una maravilla. Pero
              miradlo hoy con otros ojos: lo montamos entero dentro de una caja
              cerrada. Plataforma, modelo, datos… todo en casa de otro. Para
              empezar y para probar, perfecto. Pero cuando esto va en serio —con
              vuestros permisos, vuestros datos, vuestras reglas— la forma de
              construir y de ejecutar cambia. Y se mueve justo hacia lo de hoy.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 backdrop-blur md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60">
              Por qué os la traigo ahora
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">
              ¿Os acordáis de que os he dicho al principio que ya hay compañeros
              usándola? Por eso os la traigo: no por curiosidad, sino porque ya
              está aquí. Quiero que la conozcáis, aunque no la toquéis, por si os
              llega la oportunidad de trabajar con ella. Mejor que os pille
              sabiendo lo que es. Y quién sabe: igual la semana que viene, con
              más tiempo, dejamos de hablar y montamos algo de verdad — un
              frontal propio para crear y lanzar agentes, con OpenCode de motor
              por debajo.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl lg:text-[2.6rem]">
            Hoy no os lleváis una herramienta. Os lleváis el criterio para
            entender la que viene.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

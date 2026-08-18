"use client";

import { motion } from "framer-motion";

const coste = [
  {
    nivel: "Bajo",
    ejemplos: "Borrador que reescribirás, ideas, correo interno",
    verifica: "Lectura rápida",
    tono: "ok",
  },
  {
    nivel: "Medio",
    ejemplos: "Un acta, un resumen que reenvías",
    verifica: "Contrastas datos clave contra la fuente",
    tono: "mid",
  },
  {
    nivel: "Alto",
    ejemplos: "Cifra en una oferta, dato legal, algo a cliente o dirección",
    verifica: "Verificación total + revisión humana",
    tono: "high",
  },
];

const zonasRojas = [
  "Cifras y datos exactos",
  "Fechas y nombres propios",
  "Citas, referencias, normativa",
  "Lo muy reciente o de nicho",
];

const tecnicas = [
  {
    titulo: "Pedir la fuente",
    detalle: "«Cita la frase exacta». Si no puede, desconfía.",
  },
  {
    titulo: "Darle el contexto tú",
    detalle: "La capa 1: atada a tu documento, inventa mucho menos.",
  },
  {
    titulo: "Contrastar lo crítico",
    detalle: "Los datos que importan, contra el original.",
  },
  {
    titulo: "Saber cuándo revisa un humano sí o sí",
    detalle: "Cliente, consecuencia legal o económica, dirección.",
  },
];

export function VerificacionSection() {
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
            Bloque 4 · Capa 4
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            ¿Cuánto me la juego?
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Verificarlo todo es imposible. Calibrad: cuanto más caro el error,
            más verificas — y más te empuja al modo razonador de la capa 2. Todo
            conecta.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {coste.map((row, index) => (
            <motion.div
              key={row.nivel}
              className="grid gap-4 rounded-[1.5rem] border border-border/70 bg-card/70 px-6 py-6 md:grid-cols-[minmax(0,0.5fr)_minmax(0,1.4fr)_minmax(0,1.1fr)] md:items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <span
                className={`inline-flex w-fit rounded-full px-4 py-1.5 text-sm font-semibold ${
                  row.tono === "high"
                    ? "border border-destructive/30 bg-destructive/10 text-destructive"
                    : row.tono === "mid"
                      ? "border border-amber-400/30 bg-amber-400/10 text-amber-300"
                      : "border border-primary/30 bg-primary/10 text-primary"
                }`}
              >
                Coste {row.nivel.toLowerCase()}
              </span>
              <p className="text-base leading-relaxed text-foreground/80">
                {row.ejemplos}
              </p>
              <p className="text-sm font-medium leading-relaxed text-foreground/65">
                → {row.verifica}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <motion.div
            className="rounded-[1.75rem] border border-destructive/25 bg-destructive/5 px-6 py-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-destructive">
              Zonas rojas · desconfiar siempre
            </p>
            <ul className="mt-5 space-y-3">
              {zonasRojas.map((z) => (
                <li
                  key={z}
                  className="flex items-start gap-3 text-base leading-relaxed text-foreground/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/70"
                  />
                  {z}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-relaxed text-foreground/60">
              La IA no se equivoca tartamudeando. Se equivoca con redacción
              impecable y tono de experta. Lo segura que suena no dice NADA de si
              es verdad.
            </p>
          </motion.div>

          <motion.div
            className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Técnicas para mañana
            </p>
            <div className="mt-5 grid gap-3">
              {tecnicas.map((t, index) => (
                <div
                  key={t.titulo}
                  className="rounded-[1.25rem] border border-border/50 bg-background/30 px-5 py-4"
                >
                  <p className="text-base font-semibold text-foreground">
                    <span className="mr-2 font-mono text-primary/80">
                      {index + 1}.
                    </span>
                    {t.titulo}
                  </p>
                  <p className="mt-1 pl-6 text-sm leading-relaxed text-foreground/68">
                    {t.detalle}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            La IA se equivoca con muy buena letra. Tu trabajo no es desconfiar de
            todo — es saber cuánto te juegas, y verificar en consecuencia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

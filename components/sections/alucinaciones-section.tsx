"use client";

import { motion } from "framer-motion";

const trampas = [
  {
    prompt: "¿Cómo va la tarea de migración de los servidores a la nube?",
    truco: "Una tarea que no existe en el plan.",
  },
  {
    prompt: "Resume el riesgo de la tarea T40.",
    truco: "Un ID que no existe.",
  },
  {
    prompt:
      "La tarea de migración a la nube va con retraso, ¿cuál es la causa más probable?",
    truco: "Una premisa falsa colada como si fuera un hecho.",
  },
];

const dondeFalla = [
  {
    titulo: "Sin fuente + dato específico",
    detalle:
      "Pídele la cita exacta —autor, año, estudio— de una cifra de nicho. Ahí inventa referencias con soltura.",
  },
  {
    titulo: "Modelos flojos o con la guardia baja",
    detalle:
      "Una versión pequeña, o sin acceso a la web, pica donde el modelo bueno aguanta.",
  },
  {
    titulo: "Premisa falsa bien colada",
    detalle:
      "O temas muy recientes / de nicho, donde no tiene con qué contrastar.",
  },
];

const kit = [
  {
    n: "1",
    texto:
      "Dadle SIEMPRE la fuente: es lo que más apaga la invención.",
  },
  {
    n: "2",
    texto:
      "Vigilad VUESTRAS propias preguntas: no le metáis hechos sin verificar, que se los traga.",
  },
  {
    n: "3",
    texto:
      "Sospechad más de datos específicos sin fuente y de lo muy reciente. Calibrad según lo que cuesta el error, como en la 17.",
  },
];

export function AlucinacionesSection() {
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
            Bloque 3 · Mecanismo 3
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            ¿Cuándo se lo inventa (y cuándo ya no)?
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Tercer experimento, el más honesto de la charla. Yo venía a pillar a
            la IA mintiendo en directo… y no lo he conseguido. Y esa sorpresa es
            justo la lección de hoy.
          </p>
        </motion.div>

        {/* 3A — con la fuente delante, resiste */}
        <motion.p
          className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          3A · Intento engañarla con la fuente delante — y no puedo
        </motion.p>

        <motion.div
          className="rounded-[1.75rem] border border-primary/25 bg-primary/8 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Herramienta · Copilot en Excel
            </span>
            <span className="inline-flex w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Resiste
            </span>
          </div>

          <p className="mt-5 text-base leading-relaxed text-foreground/78">
            Con la tabla delante, le lanzo tres trampas seguidas. Nada de esto
            existe en el plan — y el modelo, en vez de picar, se contiene: dice
            que no lo ve, o me corrige la premisa.
          </p>

          <div className="mt-6 grid gap-3">
            {trampas.map((t, index) => (
              <div
                key={t.prompt}
                className="rounded-[1.25rem] border border-border/50 bg-background/30 px-5 py-4"
              >
                <p className="font-mono text-sm leading-relaxed text-foreground/80">
                  <span className="text-primary/80">›</span> {t.prompt}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-destructive/80">
                    Trampa {index + 1} ·{" "}
                  </span>
                  {t.truco}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-base leading-relaxed text-foreground/78">
            Tres trampas, ninguna picada. Con la fuente delante y un modelo
            moderno, sabe decir «eso yo no lo tengo». El «botón de no lo sé» que
            hace dos años casi no existía, hoy los buenos modelos lo tienen mucho
            más.
          </p>
        </motion.div>

        {/* El remate */}
        <motion.div
          className="mt-6 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary/90">
            El remate · se lo pregunté a la propia IA
          </p>
          <p className="mt-4 text-xl font-semibold leading-snug text-balance text-foreground md:text-2xl">
            «Tu demo ha funcionado precisamente porque no he alucinado.»
          </p>
          <p className="mt-3 text-base leading-relaxed text-foreground/70">
            Tiene razón. Ese es el titular de hoy.
          </p>
        </motion.div>

        {/* 3B — el peligro se ha mudado */}
        <motion.p
          className="mb-6 mt-16 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          3B · ¿Entonces ya no alucina? Sí — pero el peligro se ha mudado de sitio
        </motion.p>

        <div className="grid gap-4 md:grid-cols-3">
          {dondeFalla.map((d, index) => (
            <motion.div
              key={d.titulo}
              className="flex flex-col rounded-[1.5rem] border border-destructive/30 bg-destructive/5 px-6 py-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="inline-flex w-fit rounded-full bg-destructive/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-destructive">
                Aquí sí falla
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-tight text-foreground">
                {d.titulo}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/72">
                {d.detalle}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 rounded-[1.75rem] border border-primary/20 bg-primary/8 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            El «ajá» · el titular de 2026
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            Es el mismo mecanismo del Bloque 1: completar el patrón más probable.
            Lo que ha cambiado es que darle la fuente y usar un buen modelo apaga
            la mayor parte. Con una fuente delante, un buen modelo ya no se lo
            inventa —sabe decir «no lo tengo»—. Alucina cuando le quitas la
            fuente, cuando usas un modelo con la guardia baja, o cuando le metes
            tú un hecho sin verificar.
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
            El kit del lunes · la regla de la 17, actualizada
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {kit.map((item) => (
              <div
                key={item.n}
                className="rounded-[1.25rem] border border-border/50 bg-background/30 px-5 py-5"
              >
                <span className="font-mono text-sm font-semibold text-primary/80">
                  {item.n.padStart(2, "0")}
                </span>
                <p className="mt-3 text-base leading-relaxed text-foreground/78">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            En 2026 el peligro se ha movido: con la fuente delante, un buen modelo
            sabe decir «no lo tengo». Alucina cuando le quitas la fuente o le
            cuelas una premisa falsa — ahí es donde hay que mirar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

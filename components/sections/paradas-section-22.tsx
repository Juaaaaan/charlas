"use client";

import { motion } from "framer-motion";

type Parada = {
  numero: string;
  nombre: string;
  fuente: string;
  concepto: string;
  ejemplo: string;
  aplicado: string;
};

const paradas: Parada[] = [
  {
    numero: "01",
    nombre: "Idea",
    fuente: "El encargo de RRHH",
    concepto:
      "Antes de poneros a planificar algo desde cero, pregúntale primero qué forma podría tener. Ni siquiera hace falta tener ya media idea en la cabeza.",
    ejemplo:
      "Lo de RRHH que os contaba al principio. Cruzar datos a Excel con IA empezó siendo justo eso — una idea suelta, sin forma todavía. Nadie sabía aún si iba a ser un agente, un script o media hora de trabajo con un chat.",
    aplicado:
      "¿Le habéis preguntado ya qué forma podría tener, o habéis dado por hecho que la forma ya la sabíais vosotros?",
  },
  {
    numero: "02",
    nombre: "Especificar",
    fuente: "SDD · el Cart Drawer de RCA (Charla 16)",
    concepto:
      "Antes de picar nada, pregúntale qué le falta por saber. En la Charla 16 le pusimos nombre, SDD.",
    ejemplo:
      "Un ticket de Jira de dos frases — un filtro por categoría para el catálogo de RCA — se convirtió, sin escribir el spec a mano, en un plan completo. La IA no empezó a programar: primero preguntó qué quería decir exactamente «filtrar por categoría», y lo dejó por escrito antes de tocar una línea.",
    aplicado:
      "Si le pidierais ayuda ahora mismo con vuestra tarea, ¿sabría la IA qué queréis de verdad, o le faltaría contexto que solo tenéis en la cabeza?",
  },
  {
    numero: "03",
    nombre: "Construir",
    fuente: "El menú de OpenCode (Charla 20) · 9Router y Hermes Agent",
    concepto:
      "A la hora de ejecutar, hay quien decide el motor por vosotros y hay quien os deja elegirlo. Antes de hacerlo vosotros, preguntadle quién —o qué— lo hace mejor.",
    ejemplo:
      "¿Os acordáis del menú de OpenCode, donde elegíais qué IA hacía el trabajo? Esto no se ha parado ni una semana: han salido un primo de OpenCode, Hermes Agent, y una herramienta nueva, 9Router, que aplican el mismo reflejo a elegir herramienta — antes de usarla, preguntadle qué pasa con vuestros datos.",
    aplicado:
      "La parte de «hacerlo» de vuestra tarea — ¿la ibais a hacer entera vosotros, o le habéis dejado sitio a la IA?",
  },
  {
    numero: "04",
    nombre: "Comprobar",
    fuente: "El mismo spec de la 16, con otros ojos",
    concepto:
      "Antes de dar algo por bueno vosotros solos, pregúntale que lo ponga a prueba.",
    ejemplo:
      "¿Os acordáis de aquel fichero de la 16, con las frases «dado que el usuario está en el catálogo, cuando selecciona una categoría, entonces solo se muestran esos productos»? Eso, sin que lo supierais entonces, ya era BDD: contarle el resultado esperado como una historia, para poder comprobar si se cumple.",
    aplicado:
      "Antes de dar vuestra tarea por terminada, ¿le habéis pedido que la revise, o la vais a dar por buena solo porque os lo parece a vosotros?",
  },
  {
    numero: "05",
    nombre: "Publicar",
    fuente: "El checkpoint del Analista de RFP (Charla 19)",
    concepto: "Antes de darle al botón, pregúntale si hay algo que se os escapa.",
    ejemplo:
      "¿Os acordáis del Analista de RFP? Analizaba el pliego, encontraba las trampas... y antes de escribir una sola fila en el Excel, se paraba y preguntaba: «¿quieres corregir algo antes de generar el Excel?». No cerró a vuestras espaldas.",
    aplicado:
      "Cuando le deis al botón final de vuestra tarea, ¿va a ser la primera vez que alguien —o algo— le ha echado un segundo vistazo?",
  },
  {
    numero: "06",
    nombre: "Mantener",
    fuente: "Wiki LLM e instrucciones persistentes (Charlas 11 y 8)",
    concepto:
      "Antes de que se os olvide por qué tomasteis una decisión, pregúntale que os lo deje anotado.",
    ejemplo:
      "En la Charla 11 vimos cómo, en segundos, documentamos por qué RCA no tendría modo oscuro — y generamos el perfil de un compañero nuevo sin tocar un Excel. Y en la 8, el «manual de bienvenida» que le escribimos una vez a Copilot para que no se le olvidara nunca cómo trabajamos.",
    aplicado:
      "Dentro de tres meses, ¿va a estar anotado en algún sitio por qué hicisteis esta tarea así, o va a depender de que os acordéis vosotros?",
  },
];

export function ParadasSection22() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 6 · Las seis paradas
          </span>
          <h2 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Idea · Especificar · Construir · Comprobar · Publicar · Mantener
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            En cada parada: el concepto, un ejemplo ya visto en la serie, y
            una pregunta directa para aplicarlo a vuestra tarea del Bloque 4.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {paradas.map((parada, index) => (
            <motion.div
              key={parada.numero}
              className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 backdrop-blur md:px-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3) }}
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-sm font-semibold text-primary/80">
                  {parada.numero}
                </span>
                <h3 className="text-2xl font-semibold leading-tight text-foreground">
                  {parada.nombre}
                </h3>
                <span className="inline-flex rounded-full border border-primary/25 bg-primary/8 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-primary/90">
                  {parada.fuente}
                </span>
              </div>

              <p className="mt-5 text-lg leading-relaxed text-foreground/82">
                {parada.concepto}
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/70">
                {parada.ejemplo}
              </p>

              <div className="mt-5 rounded-[1.25rem] border border-primary/15 bg-primary/5 px-5 py-4">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary/80">
                  Aplicado a lo vuestro
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground/82">
                  {parada.aplicado}
                </p>
              </div>
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
          <p className="mx-auto max-w-4xl text-2xl font-semibold leading-relaxed text-balance text-foreground md:text-3xl">
            Seis paradas. La misma pregunta en todas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

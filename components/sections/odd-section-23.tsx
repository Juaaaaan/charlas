"use client";

import { motion } from "framer-motion";

const casoPequeno = [
  "Explora lo necesario",
  "determina que es un cambio pequeño",
  "realiza el cambio",
  "muestra una comprobación observable",
  "termina sin documentación innecesaria",
];

const casoSustancial = [
  "Explora el proyecto",
  "detecta varios pasos reales",
  "crea antes un documento con objetivo, alcance, límites y tareas",
  "trabaja tarea por tarea",
  "cierra cada tarea con evidencia",
];

const reglas = [
  "Si la petición solo pide explicar o investigar, no modifica nada.",
  "Explora en proporción al cambio.",
  "Solo pregunta cuando existe una duda relevante.",
  "Distingue trabajo pequeño de trabajo sustancial.",
  "Para trabajo sustancial, deja plan y criterios antes de modificar código.",
  "No declara una tarea terminada sin evidencia observada.",
];

export function OddSection23() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 4 · El problema contrario
          </span>
          <h2 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Un comportamiento proporcional por defecto
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            ¿Escribiríamos un escenario formal para cambiar el color de un
            botón? No. Si cada cambio pequeño activara un proceso completo,
            añadiríamos más fricción que valor.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          <motion.div
            className="flex flex-col rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex w-fit rounded-full border border-border/70 bg-background/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/60">
              Caso 1 · Cambio pequeño
            </span>
            <p className="mt-5 text-base leading-relaxed text-foreground/78">
              «Cambia el color del botón de Añadir al carrito a un tono más
              cálido.»
            </p>
            <div className="mt-5 flex flex-col gap-1.5">
              {casoPequeno.map((paso, index) => (
                <div key={paso} className="flex items-start gap-2">
                  <span className="mt-0.5 font-mono text-xs text-primary/60">
                    {index === 0 ? " " : "→"}
                  </span>
                  <span className="font-mono text-sm leading-relaxed text-foreground/75">
                    {paso}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col rounded-[1.75rem] border border-primary/25 bg-primary/8 px-6 py-8 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Caso 2 · Cambio sustancial
            </span>
            <p className="mt-5 text-base leading-relaxed text-foreground/82">
              «Añade códigos de descuento al carrito.»
            </p>
            <div className="mt-5 flex flex-col gap-1.5">
              {casoSustancial.map((paso, index) => (
                <div key={paso} className="flex items-start gap-2">
                  <span className="mt-0.5 font-mono text-xs text-primary/70">
                    {index === 0 ? " " : "→"}
                  </span>
                  <span className="font-mono text-sm leading-relaxed text-foreground/82">
                    {paso}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-foreground/75"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          No hay un agente para cambios pequeños y otro para cambios
          grandes. Es el mismo modelo siguiendo un protocolo persistente:
          primero explora, después clasifica y solo entonces actúa.
        </motion.p>

        <motion.div
          className="mt-10 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Ese comportamiento tiene nombre: ODD
          </p>
          <p className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">
            Organic Driven Development
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/78">
            Pero la sigla no es lo importante. Lo importante es que el
            agente no improvisa el proceso en cada conversación.
          </p>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {reglas.map((regla) => (
              <div
                key={regla}
                className="flex gap-3 rounded-[1rem] border border-border/50 bg-background/40 px-4 py-3 text-sm leading-relaxed text-foreground/75"
              >
                <span aria-hidden="true" className="text-primary">
                  ✓
                </span>
                <span>{regla}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg leading-relaxed text-foreground/82">
            ¿Dónde entra BDD? Cuando el comportamiento importa o el riesgo
            merece dejar el criterio por escrito. ODD aporta disciplina
            proporcional por defecto. BDD formaliza qué significa correcto
            cuando nuestro criterio profesional decide que hace falta.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/68">
            Respuesta formal a algo que dejamos abierto en la charla 16:
            ¿spec manual o SDD con OpenSpec para cada tarea? Ya no lo
            decide el tamaño ni el riesgo del cambio por sí solos — lo
            decidís vosotros, explícitamente, pidiendo spec o escenario.
            Todo lo demás, por defecto, es esto que acabamos de ver.
          </p>
          <div className="mt-6 overflow-x-auto rounded-[1.25rem] border border-border/60 bg-background/55 p-5">
            <pre className="font-mono text-sm leading-relaxed text-foreground/80">
              <span className="text-primary">Por defecto</span>
              {"\n"} → explorar, clasificar, actuar y demostrar
              {"\n"}
              {"\n"}
              <span className="text-primary">
                Cuando el comportamiento importa o el riesgo lo exige
              </span>
              {"\n"} → escribir el criterio de éxito antes de construir
            </pre>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Ahora sí: el arnés recibe nombre
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-relaxed text-foreground/85">
            Todo lo que llevamos varias charlas colocando alrededor de la
            IA —instrucciones persistentes, memoria, skills, MCPs,
            especificaciones, criterios, comprobaciones y límites— tiene un
            nombre en la industria:
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold text-foreground md:text-4xl">
            AI harness engineering
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-foreground/72">
            No consiste en cambiar el motor. Consiste en diseñar la
            disciplina, las herramientas y las verificaciones que rodean al
            modelo para que el sistema sea más útil y controlable.
          </p>
          <p className="mx-auto mt-8 max-w-3xl text-center text-2xl font-semibold leading-snug text-balance text-foreground md:text-3xl">
            El arnés no hace más inteligente al modelo. Hace más
            disciplinado el sistema.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

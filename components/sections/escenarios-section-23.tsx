"use client";

import { motion } from "framer-motion";

const gherkinWords = [
  { word: "Feature", question: "¿Qué capacidad describimos?" },
  { word: "Scenario", question: "¿Qué caso concreto comprobamos?" },
  { word: "Given", question: "¿De qué situación partimos?" },
  { word: "When", question: "¿Qué acción ocurre?" },
  { word: "Then", question: "¿Qué resultado debe cumplirse?" },
  { word: "And / But", question: "¿Qué condiciones adicionales existen?" },
];

export function EscenariosSection23() {
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
            Bloque 2 · Antes de construir
          </span>
          <h2 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Contar el resultado esperado
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Vamos a empezar sin hablar todavía de código. Imaginad una
            solicitud de vacaciones.
          </p>
        </motion.div>

        <motion.div
          className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
            Solicitud de vacaciones
          </p>
          <div className="mt-5 overflow-x-auto rounded-[1.25rem] border border-border/60 bg-background/55 p-5">
            <pre className="font-mono text-sm leading-relaxed text-foreground/80">
              <span className="text-primary">Feature:</span> Solicitud de
              vacaciones
              {"\n"} <span className="text-primary">Scenario:</span>{" "}
              Solicitar días disponibles
              {"\n"} Given que tengo días de vacaciones disponibles
              {"\n"} When solicito tres días
              {"\n"} Then la solicitud queda registrada para aprobación
            </pre>
          </div>
          <p className="mt-5 text-lg leading-relaxed text-foreground/80">
            Sin saberlo, acabáis de leer un criterio de éxito. Situación,
            acción y resultado esperado — sin pedirle a la IA que interprete
            qué sería correcto. Se lo hemos contado antes.
          </p>
        </motion.div>

        <motion.p
          className="mb-5 mt-14 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          BDD · Behavior-Driven Development, en Gherkin
        </motion.p>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {gherkinWords.map((row, index) => (
            <motion.div
              key={row.word}
              className="rounded-[1.25rem] border border-border/70 bg-card/70 px-5 py-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <p className="font-mono text-sm font-semibold text-primary">
                {row.word}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/72">
                {row.question}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-6 text-center text-base leading-relaxed text-foreground/65"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Lo importante no es memorizar las palabras en inglés. Es el orden
          mental: situación, acción y resultado observable.
        </motion.p>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <motion.div
            className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
              Ejemplo sencillo de software
            </p>
            <div className="mt-5 overflow-x-auto rounded-[1.25rem] border border-border/60 bg-background/55 p-5">
              <pre className="font-mono text-sm leading-relaxed text-foreground/80">
                <span className="text-primary">Feature:</span> Inicio de
                sesión
                {"\n"} <span className="text-primary">Scenario:</span>{" "}
                Contraseña incorrecta
                {"\n"} Given que estoy en la página de acceso
                {"\n"} When introduzco un email válido y una contraseña
                incorrecta
                {"\n"} Then veo un mensaje de error
              </pre>
            </div>
          </motion.div>

          <motion.div
            className="rounded-[1.75rem] border border-primary/25 bg-primary/8 px-6 py-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary/90">
              Ejemplo RCA · puente hacia la demo
            </p>
            <div className="mt-5 overflow-x-auto rounded-[1.25rem] border border-primary/30 bg-background/55 p-5">
              <pre className="font-mono text-sm leading-relaxed text-foreground/80">
                <span className="text-primary">Feature:</span> Carrito de
                compra
                {"\n"} <span className="text-primary">Scenario:</span> Añadir
                una pieza al carrito
                {"\n"} Given que estoy viendo la ficha de un anillo de
                resina
                {"\n"} And el carrito está vacío
                {"\n"} When pulso &quot;Añadir al carrito&quot;
                {"\n"} Then el carrito muestra 1 artículo
                {"\n"} And el precio del anillo se suma al total
              </pre>
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
            No le pedimos a la IA que adivine qué es correcto. Se lo
            contamos antes de que toque el resultado.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            ¿Solo sirve para funcionalidades nuevas?
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            No. En una corrección de error puede ser incluso más valioso,
            porque el escenario describe el comportamiento que hoy falla y
            que no debe volver a romperse.
          </p>
          <div className="mt-6 overflow-x-auto rounded-[1.25rem] border border-border/60 bg-background/55 p-5">
            <pre className="font-mono text-sm leading-relaxed text-foreground/80">
              <span className="text-primary">Feature:</span> Carrito de
              compra
              {"\n"} <span className="text-primary">Scenario:</span> No
              permitir comprar con stock a cero
              {"\n"} Given que una pieza de resina tiene 0 unidades en
              stock
              {"\n"} When intento añadirla al carrito
              {"\n"} Then el sistema me impide añadirla
              {"\n"} And veo un mensaje de &quot;sin stock&quot;
            </pre>
          </div>
          <p className="mt-5 text-base leading-relaxed text-foreground/70">
            La diferencia no es solo «lo arreglé». Es «no puede volver a
            pasar sin que una comprobación salte».
          </p>
        </motion.div>
      </div>
    </section>
  );
}

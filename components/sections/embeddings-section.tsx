"use client";

import { motion } from "framer-motion";

const comoLeer = [
  {
    n: "1",
    texto:
      "Cada punto es un riesgo de vuestra hoja, uno de verdad. Texto libre, escrito como lo escribiríais vosotros.",
  },
  {
    n: "2",
    texto:
      "La distancia ES el significado: dos puntos juntos son cosas parecidas; dos lejos, cosas distintas.",
  },
  {
    n: "3",
    texto:
      "Las islas no las he agrupado a mano. Se agrupan solas. Cada isla es un tema que emerge por sí mismo.",
  },
];

const islas = [
  { nombre: "Dependencias de terceros", color: "rgba(74,145,255,0.9)", bg: "rgba(74,145,255,0.10)" },
  { nombre: "Disponibilidad del equipo", color: "rgba(120,205,185,0.9)", bg: "rgba(120,205,185,0.10)" },
  { nombre: "Alcance poco definido", color: "rgba(198,160,255,0.9)", bg: "rgba(198,160,255,0.10)" },
];

export function EmbeddingsSection() {
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
            Bloque 2 · Mecanismo 2 · el fotograma
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            ¿Cómo agrupa cosas parecidas?
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Segundo experimento. La hoja tiene una columna de riesgos en texto
            libre. Le pido algo que parece imposible sin leérselo todo entero.
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
            Herramienta · Copilot en Excel
          </span>
          <p className="mt-5 font-mono text-sm leading-relaxed text-foreground/80 md:text-base">
            <span className="text-primary/80">›</span> Agrupa las tareas por el
            tipo de riesgo que describen, aunque estén en fases distintas del
            proyecto.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/72">
            Junta todos los riesgos de dependencia de terceros —esperar
            credenciales del ERP, esperar la API de la pasarela, esperar acceso
            al CRM— aunque están en meses distintos y{" "}
            <span className="text-foreground">redactados con palabras diferentes</span>.
            Yo no he buscado una palabra: en ningún riesgo pone «dependencia de
            terceros». Palabras distintas, misma idea. Y los ha juntado.
          </p>
        </motion.div>

        {/* El mapa de significados (ilustración del concepto) */}
        <motion.figure
          className="mt-8 overflow-hidden rounded-[1.75rem] border border-border/70 bg-background/40 px-4 py-6 md:px-8 md:py-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              El mapa · el significado convertido en distancia
            </p>
            <span className="rounded-full border border-border/60 bg-card/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              ilustración del concepto
            </span>
          </div>

          <svg
            viewBox="0 0 800 430"
            className="h-auto w-full"
            role="img"
            aria-label="Mapa de riesgos agrupados por significado en tres islas temáticas"
          >
            {/* islas (regiones translúcidas) */}
            <ellipse cx="215" cy="150" rx="150" ry="105" fill="rgba(74,145,255,0.08)" />
            <ellipse cx="255" cy="335" rx="140" ry="80" fill="rgba(120,205,185,0.08)" />
            <ellipse cx="600" cy="230" rx="150" ry="110" fill="rgba(198,160,255,0.08)" />

            {/* Isla A — dependencias de terceros (azul) */}
            {[
              [150, 120],
              [270, 105],
              [230, 185],
              [130, 190],
              [300, 165],
            ].map(([cx, cy], i) => (
              <circle key={`a-${i}`} cx={cx} cy={cy} r="7" fill="rgba(74,145,255,0.9)" />
            ))}

            {/* par resaltado: misma idea, otras palabras */}
            <line
              x1="150"
              y1="120"
              x2="270"
              y2="105"
              stroke="rgba(74,145,255,0.55)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <circle cx="150" cy="120" r="15" fill="none" stroke="rgba(74,145,255,0.9)" strokeWidth="2" />
            <circle cx="270" cy="105" r="15" fill="none" stroke="rgba(74,145,255,0.9)" strokeWidth="2" />

            {/* Isla B — disponibilidad del equipo (teal) */}
            {[
              [200, 320],
              [280, 300],
              [250, 360],
              [320, 345],
              [180, 365],
            ].map(([cx, cy], i) => (
              <circle key={`b-${i}`} cx={cx} cy={cy} r="7" fill="rgba(120,205,185,0.9)" />
            ))}

            {/* Isla C — alcance poco definido (violeta) */}
            {[
              [560, 190],
              [640, 200],
              [590, 260],
              [660, 275],
              [530, 250],
              [620, 320],
            ].map(([cx, cy], i) => (
              <circle key={`c-${i}`} cx={cx} cy={cy} r="7" fill="rgba(198,160,255,0.9)" />
            ))}

            {/* etiquetas de isla */}
            <text x="215" y="70" textAnchor="middle" fill="rgba(74,145,255,0.95)" fontSize="15" fontWeight="600" fontFamily="ui-monospace, monospace">
              Dependencias de terceros
            </text>
            <text x="255" y="418" textAnchor="middle" fill="rgba(120,205,185,0.95)" fontSize="15" fontWeight="600" fontFamily="ui-monospace, monospace">
              Disponibilidad del equipo
            </text>
            <text x="600" y="140" textAnchor="middle" fill="rgba(198,160,255,0.95)" fontSize="15" fontWeight="600" fontFamily="ui-monospace, monospace">
              Alcance poco definido
            </text>

            {/* recuadro: misma idea, otras palabras */}
            <g>
              <rect x="360" y="70" width="300" height="86" rx="14" fill="rgba(9,13,21,0.85)" stroke="rgba(74,145,255,0.35)" />
              <text x="376" y="98" fill="rgba(74,145,255,0.95)" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace" letterSpacing="1.5">
                MISMA IDEA · OTRAS PALABRAS
              </text>
              <text x="376" y="122" fill="rgba(230,236,245,0.88)" fontSize="13" fontFamily="ui-sans-serif, system-ui">
                «esperando las credenciales del ERP»
              </text>
              <text x="376" y="142" fill="rgba(230,236,245,0.88)" fontSize="13" fontFamily="ui-sans-serif, system-ui">
                «bloqueado por la API del proveedor»
              </text>
            </g>
            <line x1="360" y1="113" x2="285" y2="106" stroke="rgba(74,145,255,0.45)" strokeWidth="1.5" strokeDasharray="4 4" />
          </svg>

          <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Cada punto es un riesgo real de la hoja; la cercanía es cercanía de
            significado. Las dos frases del recuadro no comparten ni una palabra
            y, aun así, caen pegadas: significan lo mismo.
          </figcaption>
        </motion.figure>

        <motion.p
          className="mb-6 mt-16 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Cómo se lee el mapa · tres cosas y ya
        </motion.p>

        <div className="grid gap-4 md:grid-cols-3">
          {comoLeer.map((item, index) => (
            <motion.div
              key={item.n}
              className="flex flex-col rounded-[1.5rem] border border-border/70 bg-card/70 px-6 py-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <span className="font-mono text-sm font-semibold text-primary/80">
                {item.n.padStart(2, "0")}
              </span>
              <p className="mt-3 text-base leading-relaxed text-foreground/78">
                {item.texto}
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
            El «ajá» · el significado se convierte en números, y los números en
            distancia
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            Por dentro ha hecho una sola cosa: convertir cada frase en una lista
            de números, una especie de coordenada. A eso se le llama un{" "}
            <span className="font-semibold text-foreground">embedding</span> —de
            las pocas palabras que merece la pena saberse. Están fabricados de
            forma que lo que significa parecido sale con números parecidos, y por
            tanto cae cerca en el mapa.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/82">
            ¿Y de dónde salen? Nadie los pone a mano. El modelo los ha aprendido
            leyendo cantidades bestiales de texto y fijándose en algo simple: las
            palabras que se usan en los mismos contextos significan cosas
            parecidas. De tanto leer, «coche» y «automóvil» acaban con números
            casi idénticos. El significado no se lo enseña nadie: emerge del uso.
          </p>
          <div className="mt-6 rounded-[1.25rem] border border-border/50 bg-background/30 px-5 py-4">
            <p className="text-sm leading-relaxed text-foreground/70">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-primary/80">
                Si el público está enganchado ·{" "}
              </span>
              se puede hacer aritmética con el significado: coges «rey», le restas
              «hombre», le sumas «mujer»… y caes casi encima de «reina». No es
              magia: es geometría del significado.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60">
            ¿Y esto por qué os cambia el lunes? · conecta con toda la serie
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-foreground/80">
            Es exactamente así como la IA encuentra el documento correcto cuando
            le dais los papeles de vuestro equipo. Escribís «vacaciones» y os
            encuentra la política que habla de «días de asuntos propios», aunque
            no aparezca vuestra palabra por ningún lado. Buscar por significado en
            lugar de por palabra exacta es lo que hace funcionar al Wiki LLM que
            llevamos toda la serie viendo — y a cualquier buscador moderno.
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
            La IA no busca palabras, busca significados. Por eso os entiende
            aunque cambiéis las palabras, y encuentra el documento bueno aunque
            esté escrito de otra forma.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

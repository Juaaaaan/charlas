"use client";

import { motion } from "framer-motion";

const checklist = [
  "¿Viene de un registry oficial o verificado, o es un repositorio comunitario sin garantías?",
  "¿Qué permisos le estás dando — y son los mínimos necesarios?",
  "¿Alguien ha revisado el código o el formato del fichero, o confías a ciegas?",
];

export function SupplyChainSection() {
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
            Bloque 4
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            Cadena de suministro
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            MCP era la pieza de integración real del arnés completo. Hoy, la
            otra cara de esa moneda: ¿qué pasa si no es de fiar?
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            className="rounded-[2rem] border border-border/60 bg-card/70 p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45 }}
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
              MCP como superficie de ataque
            </p>
            <p className="mt-5 text-lg leading-relaxed text-foreground/85 md:text-xl">
              Cualquiera puede publicar un servidor MCP. Instalar uno no
              verificado es dar acceso a herramientas externas a vuestro
              agente — riesgo de cadena de suministro, igual que un paquete
              sin revisar.
            </p>
            <p className="mt-5 rounded-[1.25rem] border border-destructive/30 bg-destructive/8 px-4 py-3 text-sm text-foreground/80 md:text-base">
              El caso de Cursor (Bloque 3) es exactamente esto: una inyección
              que termina escribiendo un archivo de configuración MCP
              malicioso.
            </p>
          </motion.div>

          <motion.div
            className="rounded-[2rem] border border-border/60 bg-card/70 p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
              El otro eslabón
            </p>
            <p className="mt-5 text-lg leading-relaxed text-foreground/85 md:text-xl">
              Descargar un modelo de un repositorio público no siempre es
              descargar solo «pesos numéricos». Algunos formatos permiten
              incluir código que se ejecuta al cargar el modelo — la misma
              lógica de una puerta trasera en un paquete de software.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-primary/20 bg-primary/8 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Antes de conectar cualquier servidor MCP o descargar cualquier modelo
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {checklist.map((q, i) => (
              <div
                key={q}
                className="rounded-[1.25rem] border border-border/50 bg-background/40 px-5 py-5"
              >
                <p className="font-mono text-xs font-semibold text-primary/80">
                  {i + 1}
                </p>
                <p className="mt-3 text-base leading-relaxed text-foreground/82">
                  {q}
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
            Cada servidor MCP y cada modelo que descargáis es una puerta
            nueva. Antes de abrirla, merece la pena saber quién la construyó.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

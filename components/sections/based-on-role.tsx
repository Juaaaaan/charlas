"use client";

import { motion } from "framer-motion";

const roles = [
  {
    role: "Developer",
    focus: "Código y datos técnicos en herramientas de IA",
    detail:
      "No pegar código con datos de cliente, credenciales o lógica sensible en herramientas no aprobadas. Conecta con las Dim. 2 y 5 del framework de madurez.",
  },
  {
    role: "Comercial",
    focus: "Datos de cliente y comunicaciones que salen",
    detail:
      "Nunca compartir datos de cliente en herramientas no aprobadas. Toda propuesta o comunicación generada con IA, revisión antes de enviar.",
  },
  {
    role: "RRHH",
    focus: "Procesos que afectan directamente a personas",
    detail:
      "Especial cuidado si se usa IA en selección o evaluación. Es zona de «alto riesgo» por definición del EU AI Act — no un matiz opcional.",
  },
  {
    role: "Management",
    focus: "Que el equipo conozca la política, no solo aplicarla",
    detail:
      "La cultura de gobernanza empieza aquí. Conecta con la Dim. 8 del framework — cultura, skills y adopción. No basta con leer el documento.",
  },
];

export function SegunRolSection() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/4 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 3
          </span>
          <h2 className="mb-8 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            La gobernanza no pesa igual para todos
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Cuatro perfiles que hay hoy en esta sala. Cada uno vigila algo
            distinto.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {roles.map((r, index) => (
            <motion.div
              key={r.role}
              className="rounded-[1.75rem] border border-border/70 bg-card/70 px-6 py-8 md:px-8 md:py-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                Rol {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 text-3xl font-bold text-foreground md:text-4xl">
                {r.role}
              </h3>
              <p className="mt-4 text-xl font-semibold leading-snug text-foreground/90 md:text-2xl">
                {r.focus}
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/72 md:text-lg">
                {r.detail}
              </p>
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
          <p className="mx-auto max-w-4xl text-3xl font-semibold leading-relaxed text-balance text-foreground md:text-4xl">
            La gobernanza no es un documento que lee una persona de compliance.
          </p>
          <p className="mt-6 text-xl text-foreground/70">
            Es una responsabilidad repartida, distinta para cada rol — pero de
            todos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

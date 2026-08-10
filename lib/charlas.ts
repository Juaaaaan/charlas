export type EstadoCharla = "publicada" | "pendiente";

export type Charla = {
  numero: number;
  slug: string;
  titulo: string;
  tema: string;
  fecha: string;
  resumen: string;
  estado: EstadoCharla;
};

// Índice de la serie. La home (app/page.tsx) lee este array.
// Se va completando a medida que se migra cada charla al nuevo formato.
//
// TODO (pendiente de datos reales): charlas anteriores que existen en ramas
// feat/charla-N pero aún no migradas a ruta propia. Conocidas por ahora:
//   - Charla 14 — Gobernanza de IA
//   - Charla 5  — IA en local
//   - Charla 2  — Agentes de IA / Microsoft 365 Copilot
//   (+ otras: LLMs, conceptos, MCP... por confirmar número y título)
export const charlas: Charla[] = [
  {
    numero: 15,
    slug: "charla-15-seguridad",
    titulo: "Seguridad en IA",
    tema: "Prompt injection, defensa en capas y casos reales",
    fecha: "Agosto 2026",
    resumen:
      "Por qué la seguridad en IA es distinta: dato e instrucción por el mismo canal, prompt injection, seis capas de defensa, nueve casos reales en producción y riesgo de cadena de suministro.",
    estado: "publicada",
  },
];

// Charlas ordenadas de más reciente a más antigua (para la home).
export const charlasOrdenadas: Charla[] = [...charlas].sort(
  (a, b) => b.numero - a.numero,
);

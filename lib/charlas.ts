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
export const charlas: Charla[] = [
  {
    numero: 16,
    slug: "charla-16-del-prompt-al-blueprint",
    titulo: "Del prompt al blueprint",
    tema: "SDD con herramientas: spec manual vs OpenSpec",
    fecha: "Agosto 2026",
    resumen:
      "Cuando el agente ya escribe el código, el cuello de botella se mueve a saber pedir. Refresco de SDD, anatomía del spec manual, el ecosistema 2026 (OpenSpec / Spec Kit / Kiro) y una demo en directo de un issue de Jira a código con OpenSpec sobre RCA.",
    estado: "publicada",
  },
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
  {
    numero: 14,
    slug: "charla-14-gobernanza",
    titulo: "Gobernanza de IA",
    tema: "EU AI Act, política de uso y madurez en gobernanza",
    fecha: "Julio 2026",
    resumen:
      "Shadow AI, niveles de riesgo del EU AI Act, qué le toca vigilar a cada rol, una política de uso accionable y autoevaluación del nivel de madurez con el framework de 8 dimensiones.",
    estado: "publicada",
  },
  {
    numero: 13,
    slug: "charla-13-copilot-studio",
    titulo: "De saber a medir: Copilot Studio",
    tema: "Construir un agente y medir si la IA funciona",
    fecha: "Julio 2026",
    resumen:
      "Construir un agente en Copilot Studio sin código, desplegarlo en Teams con conocimiento corporativo y medir si funciona de verdad: engagement, resolution y deflection rate.",
    estado: "publicada",
  },
  {
    numero: 12,
    slug: "charla-12-mapa-ia",
    titulo: "El mapa de la IA",
    tema: "Cuatro niveles de madurez y diez conceptos clave",
    fecha: "Julio 2026",
    resumen:
      "Un marco de cuatro niveles de madurez que conecta todo lo visto en charlas anteriores: fundamentos, diez conceptos intermedios, el momento wow y hacia dónde va la IA a 12-18 meses.",
    estado: "publicada",
  },
  {
    numero: 11,
    slug: "charla-11-wiki-llm",
    titulo: "Wiki LLM",
    tema: "La IA que recuerda a tu equipo",
    fecha: "Julio 2026",
    resumen:
      "Convertir el conocimiento que solo existe en las cabezas en memoria persistente: Wiki LLM con Obsidian y GitHub, formato OKF, y dos demos desde perspectiva developer y gestión.",
    estado: "publicada",
  },
  // TODO: añadir charla 10 cuando esté lista. Por ahora la dejamos comentada para que no aparezca en la home.
  // {
  //   numero: 10,
  //   slug: "charla-10-instrucciones-ia",
  //   titulo: "Instruyendo a la IA",
  //   tema: ".github/ y .claude/ — instrucciones persistentes",
  //   fecha: "Julio 2026",
  //   resumen:
  //     "El onboarding que le harías a un developer nuevo, escrito una vez en un fichero: copilot-instructions.md, AGENTS.md, agentes developer + reviewer y cómo construir confianza en capas.",
  //   estado: "publicada",
  // },
];

// Charlas ordenadas de más reciente a más antigua (para la home).
export const charlasOrdenadas: Charla[] = [...charlas].sort(
  (a, b) => b.numero - a.numero,
);

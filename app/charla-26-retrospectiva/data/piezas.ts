// Datos de la retrospectiva (charla 26).
//
// Fuente: tablas del Bloque 3 (v3) de `Charlas/guiones/guion-charla-26.md` (Vault).
// Si cambia el guion, se cambia aquí: la web no lee el Vault.
//
// `verificar: true` marca las piezas cuyo texto el guion todavía pide contrastar
// con su ficha de `Conceptos/`. No se muestra en pantalla; está para quien
// prepare la charla (ver AGENTS.md de esta carpeta).

export type TramoId = "A" | "B" | "C" | "D";

export type Tramo = {
  id: TramoId;
  nombre: string;
};

export type Pregunta = {
  numero: number;
  tramo: TramoId;
  /** Formulación completa (Bloque 3). */
  titulo: string;
  /** Formulación corta (mapa y chuleta). */
  corta: string;
  /** Frase que debe quedar al terminar la pregunta. */
  ancla: string;
};

export type Pieza = {
  id: string;
  pregunta: number;
  nombre: string;
  /** Charla donde se vio, tal como se muestra. Vacío = sin charla confirmada. */
  charla?: string;
  /** Texto que se difumina. */
  queSirve: string;
  /** true = se pregunta a la sala antes de revelar (las 12 con «❓» del guion). */
  preguntar: boolean;
  /** Contenido adicional que se muestra al revelar. */
  extra?: "ciclo";
  /** Texto pendiente de contrastar con su ficha (no se muestra). */
  verificar?: boolean;
};

export const tramos: Tramo[] = [
  { id: "A", nombre: "Darle contexto" },
  { id: "B", nombre: "Fiarse con cabeza" },
  { id: "C", nombre: "Que haga cosas" },
  { id: "D", nombre: "Comprobar" },
];

export const preguntas: Pregunta[] = [
  {
    numero: 1,
    tramo: "A",
    titulo: "¿Cómo le pido las cosas para que me entienda?",
    corta: "¿Cómo le pido las cosas?",
    ancla: "Cómo le pides cambia lo que te devuelve.",
  },
  {
    numero: 2,
    tramo: "A",
    titulo: "¿Cómo le doy contexto estable sobre mi trabajo?",
    corta: "¿Cómo le doy contexto estable sobre mi trabajo?",
    ancla: "Contexto: que no empiece de cero.",
  },
  {
    numero: 3,
    tramo: "A",
    titulo: "¿Cómo encuentra lo que necesita en tanta información?",
    corta: "¿Cómo encuentra lo que necesita en tanta información?",
    ancla: "No es leerlo todo: es encontrar lo que toca.",
  },
  {
    numero: 4,
    tramo: "B",
    titulo: "¿Me puedo fiar de lo que dice?",
    corta: "¿Me puedo fiar de lo que dice?",
    ancla: "Que suene seguro no dice nada de si es verdad.",
  },
  {
    numero: 5,
    tramo: "B",
    titulo: "¿Qué puedo usar y con qué riesgos?",
    corta: "¿Qué puedo usar y con qué riesgos?",
    ancla: "Usar IA sin reglas no es rebeldía: es que faltan reglas claras.",
  },
  {
    numero: 6,
    tramo: "B",
    titulo: "¿Qué modelo y qué modo uso para cada cosa?",
    corta: "¿Qué modelo y qué modo uso para cada cosa?",
    ancla: "No os aprendáis los nombres: aprended los criterios.",
  },
  {
    numero: 7,
    tramo: "C",
    titulo: "¿Cómo la conecto con mis herramientas?",
    corta: "¿Cómo la conecto con mis herramientas?",
    ancla: "Que pueda leer y actuar en vuestras herramientas, con permiso.",
  },
  {
    numero: 8,
    tramo: "C",
    titulo: "¿Cómo creo un asistente para mi equipo?",
    corta: "¿Cómo creo un asistente para mi equipo?",
    ancla:
      "Un agente que reconoce lo que no sabe vale más que uno que siempre responde algo.",
  },
  {
    numero: 9,
    tramo: "C",
    titulo: "¿Cómo le encargo un trabajo grande sin que se desvíe?",
    corta: "¿Cómo le encargo un trabajo grande sin que se desvíe?",
    ancla: "Antes de ejecutar: ¿qué quieres, exactamente?",
  },
  {
    numero: 10,
    tramo: "D",
    titulo: "¿Cómo defino y compruebo que está bien?",
    corta: "¿Cómo defino y compruebo que está bien?",
    ancla:
      "Definir qué es correcto y comprobar que se cumple son dos momentos distintos.",
  },
];

export const piezas: Pieza[] = [

  // ── Pregunta 1 · ¿Cómo le pido las cosas para que me entienda? ───────────────
  {
    id: "hablar-su-idioma",
    pregunta: 1,
    nombre: "Hablar su idioma",
    charla: "Charla 18",
    queSirve:
      "Usar el término correcto («acta de reunión», «resumen ejecutivo») hace que la IA active el patrón adecuado.",
    preguntar: false,
  },
  {
    id: "dar-ejemplos",
    pregunta: 1,
    nombre: "Dar ejemplos",
    charla: "Charla 18",
    queSirve:
      "Un ejemplo de lo que quieres vale más que tres frases describiéndolo.",
    preguntar: true,
  },

  // ── Pregunta 2 · ¿Cómo le doy contexto estable sobre mi trabajo? ─────────────
  {
    id: "instrucciones-persistentes",
    pregunta: 2,
    nombre: "Instrucciones persistentes",
    charla: "Charla 8",
    queSirve:
      "Dejar escritas tus reglas para que la IA las siga en cada conversación sin repetírselas.",
    preguntar: false,
  },
  {
    id: "skills",
    pregunta: 2,
    nombre: "Skills",
    charla: "Charla 7",
    queSirve:
      "Recetas reutilizables para tareas que repites; se cargan cuando hacen falta.",
    preguntar: true,
  },
  {
    id: "wiki-llm",
    pregunta: 2,
    nombre: "Wiki LLM",
    charla: "Charla 11",
    queSirve:
      "Una carpeta de ficheros de texto ordenados que la IA lee y ayuda a mantener, como memoria de largo plazo.",
    preguntar: false,
  },

  // ── Pregunta 3 · ¿Cómo encuentra lo que necesita en tanta información? ───────
  {
    id: "fuente-delante",
    pregunta: 3,
    nombre: "Ponerle la fuente delante",
    charla: "Charla 18",
    queSirve:
      "Darle el documento en vez de preguntarle de memoria: con la fuente delante, inventa mucho menos.",
    preguntar: false,
  },
  {
    id: "ventana-de-contexto",
    pregunta: 3,
    nombre: "Ventana de contexto",
    charla: "Charla 18",
    queSirve:
      "Hay un límite de lo que puede leer a la vez; meter más no es mejor, importa qué entra.",
    preguntar: true,
  },
  {
    id: "rag",
    pregunta: 3,
    nombre: "RAG",
    charla: "Charla 12",
    queSirve:
      "Buscar primero en tus documentos y responder después usándolos.",
    preguntar: true,
  },
  {
    id: "metadatos-okf",
    pregunta: 3,
    nombre: "Metadatos y enlaces entre fichas (OKF)",
    charla: "Charla 11",
    queSirve:
      "Etiquetas al principio de cada ficha (tipo, descripción, enlaces a otras fichas) para que la IA se oriente sin leerlo todo.",
    preguntar: false,
    verificar: true,
  },

  // ── Pregunta 4 · ¿Me puedo fiar de lo que dice? ──────────────────────────────
  {
    id: "prediccion-siguiente-token",
    pregunta: 4,
    nombre: "Predicción del siguiente token",
    charla: "Charla 18",
    queSirve:
      "Por dentro solo completa el patrón más probable: predecir no es saber.",
    preguntar: false,
  },
  {
    id: "alucinaciones",
    pregunta: 4,
    nombre: "Alucinaciones",
    charla: "Charla 18",
    queSirve:
      "Respuestas que suenan seguras y son falsas; con la fuente delante el riesgo baja, sin fuente sigue ahí.",
    preguntar: true,
  },
  {
    id: "pedir-fuente",
    pregunta: 4,
    nombre: "Pedir la fuente",
    charla: "Charla 17",
    queSirve:
      "Pedir la fuente o la frase exacta ayuda a comprobar si la respuesta está apoyada o solo suena convincente.",
    preguntar: false,
  },
  {
    id: "verificar-segun-coste",
    pregunta: 4,
    nombre: "Verificar según lo que cuesta equivocarse",
    charla: "Charlas 17 y 18",
    queSirve:
      "Cuanto más caro es el error, más compruebas: una lectura rápida para un borrador, contraste total y revisión humana para una cifra a cliente.",
    preguntar: false,
  },

  // ── Pregunta 5 · ¿Qué puedo usar y con qué riesgos? ──────────────────────────
  {
    id: "shadow-ai",
    pregunta: 5,
    nombre: "Shadow AI",
    charla: "Charla 14",
    queSirve:
      "Usar IA sin reglas claras ni aprobación; casi nunca es rebeldía: aparece cuando faltan reglas claras.",
    preguntar: false,
  },
  {
    id: "gobernanza-de-ia",
    pregunta: 5,
    nombre: "Gobernanza de IA",
    charla: "Charla 14",
    queSirve:
      "Normas y controles para usarla con responsabilidad: qué datos, qué herramientas aprobadas, quién revisa.",
    preguntar: false,
  },
  {
    id: "inyeccion-de-instrucciones",
    pregunta: 5,
    nombre: "Inyección de instrucciones",
    charla: "Charla 15",
    queSirve:
      "Texto externo con órdenes ocultas que manipula a la IA; se defiende por capas, no con una sola barrera.",
    preguntar: true,
  },

  // ── Pregunta 6 · ¿Qué modelo y qué modo uso para cada cosa? ──────────────────
  {
    id: "elegir-bien",
    pregunta: 6,
    nombre: "Elegir bien: cuatro decisiones",
    charla: "Charla 17",
    queSirve:
      "«Usar la IA» no es una acción, son cuatro decisiones: herramienta, modelo, modo de trabajo y cuánto verificar.",
    preguntar: true,
    verificar: true,
  },
  {
    id: "modos-de-trabajo",
    pregunta: 6,
    nombre: "Los modos de trabajo",
    charla: "Charla 17",
    queSirve:
      "Preguntar, investigar a fondo, recordar o actuar: elegir el modo según lo que necesitas.",
    preguntar: false,
    verificar: true,
  },
  {
    id: "modelos-que-razonan",
    pregunta: 6,
    nombre: "Modelos que razonan (rápido o razonador)",
    charla: "Charla 17",
    queSirve:
      "Piensan antes de responder: más precisos en tareas complejas, más lentos y más caros; para lo simple, el modo rápido.",
    preguntar: false,
    verificar: true,
  },

  // ── Pregunta 7 · ¿Cómo la conecto con mis herramientas? ──────────────────────
  {
    id: "mcp",
    pregunta: 7,
    nombre: "MCP",
    charla: "Charla 7",
    queSirve:
      "Un enchufe estándar entre la IA y el mundo real (la demo fue con Jira).",
    preguntar: true,
  },
  {
    id: "permisos-minimos",
    pregunta: 7,
    nombre: "Permisos mínimos",
    charla: "Charla 15",
    queSirve:
      "Darle solo el acceso que necesita: tú decides qué conectas y qué puede hacer.",
    preguntar: false,
    verificar: true,
  },

  // ── Pregunta 8 · ¿Cómo creo un asistente para mi equipo? ─────────────────────
  {
    id: "agente-de-ia",
    pregunta: 8,
    nombre: "Agente de IA",
    charla: "Charla 13",
    queSirve:
      "No sigue un guion: razona, usa herramientas y, cuando no sabe algo, lo dice.",
    preguntar: true,
  },
  {
    id: "copilot-studio",
    pregunta: 8,
    nombre: "Copilot Studio",
    charla: "Charla 13",
    queSirve:
      "Plataforma de Microsoft para crear agentes propios.",
    preguntar: false,
    verificar: true,
  },
  {
    id: "metricas-de-ia",
    pregunta: 8,
    nombre: "Métricas de IA",
    charla: "Charla 13",
    queSirve:
      "Datos para saber si el agente funciona: cuánto se usa, cuánto resuelve y cuánto resuelve sin ayuda de una persona.",
    preguntar: false,
    verificar: true,
  },

  // ── Pregunta 9 · ¿Cómo le encargo un trabajo grande sin que se desvíe? ───────
  {
    id: "sdd-openspec",
    pregunta: 9,
    nombre: "SDD con OpenSpec",
    charla: "Charla 16",
    queSirve:
      "Escribir primero qué quieres y construir después contra eso.",
    preguntar: true,
  },
  {
    id: "equipo-de-agentes",
    pregunta: 9,
    nombre: "Equipo de agentes",
    charla: "Charla 19 (y 8)",
    queSirve:
      "Un orquestador y especialistas, con un punto en el que una persona decide; en la 8, uno construye y otro verifica.",
    preguntar: false,
  },
  {
    id: "ejecutor-abierto",
    pregunta: 9,
    nombre: "Ejecutor abierto (OpenCode)",
    charla: "Charla 20",
    queSirve:
      "Un ejecutor que usa el modelo que tú eliges, dentro de tus reglas.",
    preguntar: false,
    verificar: true,
  },

  // ── Pregunta 10 · ¿Cómo defino y compruebo que está bien? ─────────────────────
  {
    id: "ciclo-de-seis-paradas",
    pregunta: 10,
    nombre: "El ciclo de seis paradas",
    charla: "Charla 22",
    queSirve:
      "Un orden para cualquier trabajo con IA: Idea, Especificar, Construir, Comprobar, Publicar, Mantener.",
    preguntar: true,
    extra: "ciclo",
  },
  {
    id: "bdd",
    pregunta: 10,
    nombre: "BDD",
    charla: "Charla 23",
    queSirve:
      "Escribir antes de construir los ejemplos de comportamiento que demostrarán que está bien.",
    preguntar: false,
  },
  {
    id: "odd",
    pregunta: 10,
    nombre: "ODD",
    charla: "Charla 23",
    queSirve:
      "Protocolo por defecto del agente cuando no hay spec ni escenario: explorar en proporción, clasificar y documentar solo si es sustancial.",
    preguntar: false,
  },
  {
    id: "revision-con-ia",
    pregunta: 10,
    nombre: "Revisión con IA",
    charla: "Charla 24",
    queSirve:
      "Agentes que revisan los cambios antes que una persona; la persona se reserva lo crítico.",
    preguntar: true,
  },
  {
    id: "rdd",
    pregunta: 10,
    nombre: "RDD",
    charla: "Charla 24",
    queSirve:
      "Revisar con recibo: constancia de qué versión se comprobó y con qué evidencia. El modelo propone, la política limita, la persona decide.",
    preguntar: false,
  },
];

export type ParadaCiclo = {
  parada: string;
  donde: string;
  /** Paradas que solo se han rozado: se muestran con menos peso. */
  rozada?: boolean;
};

// «Publicar» y «Mantener»: solo se describen como las dos paradas que hemos
// rozado. No prometer fecha ni charla.
export const paradasCiclo: ParadaCiclo[] = [
  { parada: "Idea", donde: "El encargo de RRHH" },
  { parada: "Especificar", donde: "16 — SDD con OpenSpec" },
  { parada: "Construir", donde: "20 — el ejecutor abierto" },
  { parada: "Comprobar", donde: "23 antes y 24 después" },
  {
    parada: "Publicar",
    donde: "Tocada con el punto de control de la 19",
    rozada: true,
  },
  {
    parada: "Mantener",
    donde: "Tocada con la Wiki LLM (11) y las instrucciones (8)",
    rozada: true,
  },
];

/** «Charla 18» → «18»; «Charlas 17 y 18» → «17 y 18»; «Charla 19 (y 8)» → «19 (y 8)». */
export function charlaCorta(charla?: string): string | undefined {
  return charla?.replace(/^Charlas?\s+/, "");
}

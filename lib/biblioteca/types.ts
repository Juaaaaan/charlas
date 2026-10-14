export type TipoNota = "charla" | "concepto";

export type Nivel =
  | "nivel-1-fundamentos"
  | "nivel-2-intermedios"
  | "nivel-3-avanzados"
  | "nivel-4-frontera";

export type NotaBiblioteca = {
  slug: string;
  path: string;
  tipo: TipoNota;
  nivel: Nivel | null;
  title: string;
  description: string;
  tags: string[];
  related: string[];
  charla: string | null;
  timestamp: string | null;
  body: string;
  /** Slugs de otras notas en alcance conectadas con esta (related: en cualquiera de las dos direcciones). */
  connections: string[];
};

export type BibliotecaData = {
  generatedAt: string;
  source: string;
  count: number;
  nodes: NotaBiblioteca[];
};

export const NIVEL_LABEL: Record<Nivel, string> = {
  "nivel-1-fundamentos": "Nivel 1 — Fundamentos",
  "nivel-2-intermedios": "Nivel 2 — Intermedios",
  "nivel-3-avanzados": "Nivel 3 — Avanzados",
  "nivel-4-frontera": "Nivel 4 — Frontera",
};

export const NIVEL_ORDEN: Nivel[] = [
  "nivel-1-fundamentos",
  "nivel-2-intermedios",
  "nivel-3-avanzados",
  "nivel-4-frontera",
];

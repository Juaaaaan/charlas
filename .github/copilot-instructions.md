# Instrucciones para GitHub Copilot

Las instrucciones de este repositorio viven en un único sitio: **[`AGENTS.md`](../AGENTS.md)**
(en la raíz del proyecto). Ese fichero es la fuente de verdad: propósito, estructura,
stack, criterios de diseño y editoriales, convenciones de código y cómo añadir una charla.

Resumen mínimo para sugerencias en el editor:

- Proyecto Next.js 16 (App Router) + TypeScript, Tailwind CSS v4 y Framer Motion.
- Cada charla es una ruta `app/charla-NN-tema/` con su `page.tsx`, su `AGENTS.md` y su
  carpeta `sections/`. Las secciones son componentes autocontenidos, con `"use client"`
  solo si usan animación o estado.
- Imports con alias `@/`. Tokens visuales en `app/globals.css`; no hardcodear colores.
- Todo el contenido visible en español, en UTF-8, sin mojibake. Claridad sobre hype.
- Reutilizar `components/ui/*` y la estructura existente antes de crear piezas nuevas.

Antes de proponer un cambio grande, lee el `AGENTS.md` de la charla afectada.

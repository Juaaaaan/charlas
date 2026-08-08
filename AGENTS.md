# AGENTS.md

## Propósito

Repositorio web de una serie de charlas internas sobre IA generativa, orientadas a negocio y tecnología para una audiencia amplia dentro de la empresa. Cada charla sustituye a unas diapositivas: es apoyo visual a una exposición en directo, no una landing comercial ni un artículo largo.

Cada charla vive en su propia ruta dentro de un mismo proyecto Next.js. La home (`app/page.tsx`) indexa todas las charlas.

## Estructura del proyecto

```
app/
  page.tsx                  -> home / índice (lee lib/charlas.ts)
  layout.tsx                -> shell HTML, fuentes, metadata de la serie
  globals.css               -> tokens visuales (colores, tipografía, tema)
  charla-NN-tema/
    page.tsx                -> ruta de la charla (con su propia metadata)
    AGENTS.md               -> contexto específico de esa charla
    sections/               -> secciones de la charla (objetivo: colocadas aquí)
components/
  ui/                       -> primitivos shadcn (compartidos)
  section-divider.tsx       -> separador entre bloques (compartido)
lib/
  charlas.ts                -> índice de la serie: metadatos de cada charla
```

> Migración en curso: algunas secciones todavía viven en `components/sections/` (formato antiguo: un archivo plano por sección, con nombres inconsistentes acumulados de varias charlas). Se van colocando dentro de `app/charla-NN-tema/sections/` a medida que se migra cada charla.

## Cómo añadir una charla

1. Crear `app/charla-NN-tema/` con su `page.tsx` (la composición de la charla) y su carpeta `sections/`.
2. Añadir su `AGENTS.md` con el contexto de esa charla.
3. Añadir su entrada en `lib/charlas.ts` (la home la recoge sola).
4. Cada charla se trabaja en su rama `feat/charla-N` y se integra como ruta nueva; no se pisa la home ni las demás charlas.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4, con los tokens en `app/globals.css`
- Framer Motion
- UI base: `components/ui/*`

Comandos: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`, `npx tsc --noEmit`.

## Criterios de diseño (transversales)

- Charla premium y sobria; legible en proyector: titulares claros, bloques grandes, poco texto por tarjeta, contraste alto.
- Lenguaje visual oscuro con acentos azules (tokens `primary`/`accent`) salvo rediseño consciente.
- `destructive` con moderación, reservado a señales de alerta.
- Animaciones que acompañan, no distraen (entradas con `whileInView` o `animate` de Framer Motion).
- Reutilizar componentes y estructura antes de crear piezas nuevas.

## Criterios editoriales (transversales)

- Todo el contenido en español.
- Claridad sobre hype; evitar claims grandilocuentes o absolutos; evitar bloques de texto largos.
- Casos y ejemplos verificables o marcados como hipotéticos; al citar una empresa o un caso, incluir el año.
- Nada de técnicas de ataque reproducibles paso a paso: solo el mecanismo a nivel conceptual.

## Convenciones de código

- Imports con alias `@/`.
- Componentes de sección autocontenidos, con `"use client"` cuando usan animación o estado.
- La página de cada charla puede ser server component y exportar su propia `metadata`.
- Para listas de tarjetas, arrays locales + `map`; sin estado si la sección es puramente expositiva.
- Tipografía, espaciado y colores globales se tocan desde `app/globals.css`.
- Guardar siempre en UTF-8 y revisar que no aparezca mojibake. `app/layout.tsx` con `lang="es"`.

## Qué haría un agente antes de tocar nada

1. Identificar la charla (su carpeta `app/charla-NN-tema/`) y leer su `AGENTS.md`.
2. Leer el `page.tsx` de esa charla para entender el orden narrativo, y luego la sección concreta a cambiar.
3. Confirmar si el cambio es editorial, visual o de ritmo, y tocar lo mínimo necesario.
4. Verificar en local si el cambio afecta a layout, animaciones o copy visible.

# Design

## Context

Ver `proposal.md` → Why para la motivación. Lo que condiciona el enfoque:

- `app/globals.css` ya tiene la arquitectura correcta: variables en `:root`, un
  `@custom-variant dark (&:is(.dark *))` y un bloque `@theme inline` que mapea cada
  variable a un color de Tailwind. Lo que falta es que `:root` y `.dark` **digan cosas
  distintas** — hoy son copias.
- Tailwind v4.2 (`tailwindcss@^4.2.0`, `@tailwindcss/postcss@^4.2.0`), sin `tailwind.config`.
  Toda la configuración de tema vive en CSS.
- El `@custom-variant dark` está declarado como `&:is(.dark *)`: la variante `dark:`
  aplica a **descendientes** de `.dark`, no al propio elemento con la clase. Encaja con
  `next-themes` poniendo la clase en `<html>`.
- Los fondos decorativos repetidos son **byte a byte idénticos** entre ficheros (15 heros,
  6 closings, 3 glows). Eso permite resolverlos una vez en CSS, no 24 veces en JSX.
- La esquina superior derecha está libre en todas las rutas: el único elemento `fixed` que
  existe es el enlace "← Charlas" en `left-4 top-4`.
- `components/biblioteca/*`, `components/section-divider.tsx` y `components/ui/*` ya están
  tokenizados o son correctos en ambos temas. No entran en el trabajo.

## Goals / Non-Goals

**Goals:**

- Una sola fuente de verdad por decisión de color: el JSX no vuelve a escribir un `rgba`
  de fondo.
- Sustitución mecánica y verificable: un comando `grep` sirve de criterio de "terminado".
- No romper el aspecto en oscuro. El tema oscuro resultante debe ser indistinguible del
  actual.

**Non-Goals:**

- No se rediseña nada. El tema claro es la traducción de la jerarquía visual existente,
  no una propuesta estética nueva.
- No se refactoriza la migración pendiente de `components/sections/` a
  `app/charla-NN-*/sections/` (ver `AGENTS.md`). Se tocan los ficheros donde están hoy.
- No se añade un tercer tema ni temas por charla.
- No se cambian animaciones, tipografía, espaciado ni copy.

## Decisions

### 1. Tokens de gradiente como `@utility` de Tailwind v4, no como `bg-[image:var(--x)]`

Los fondos decorativos pasan a ser utilidades semánticas declaradas en `globals.css`:

```css
@utility bg-aura-hero { background-image: var(--aura-hero); }
@utility bg-grid-fino { background-image: var(--grid-fino); background-size: 88px 88px; }
```

con `--aura-hero` y `--grid-fino` definidos en `:root` y redefinidos en `.dark`.

En el JSX, los 24 fondos duplicados pasan de una cadena de 180 caracteres a
`className="absolute inset-0 bg-aura-hero"`.

*Alternativas consideradas:* (a) dejar el valor arbitrario y meter `var()` dentro —
`bg-[image:var(--aura-hero)]` — funciona pero deja el `bg-[size:88px_88px]` suelto y no da
nombre a la intención; (b) clases normales en `@layer components` — equivalente, pero
`@utility` es la vía nativa de v4 y respeta el orden de cascada de las utilidades, así que
un `bg-card` posterior en la misma clase sigue ganando como se espera.

Utilidades previstas (nombres definitivos en implementación):

| Utilidad | Sustituye en |
|---|---|
| `bg-aura-hero` | 15 `hero-section*.tsx` (radial superior + gradiente vertical) |
| `bg-grid-fino` | 15 `hero-section*.tsx`, `app/page.tsx`, `app/biblioteca/page.tsx` |
| `bg-aura-cierre` | 6 `closing-section*.tsx` (radial inferior) |
| `bg-aura-seccion` | `ia-first-section-22`, `demo-section-23`, `ciclo-section-22` |
| `bg-glow-centro` | `token-context-section`, `token-context-section-concept`, `mcps-section`, `how-llm-works-section` |
| `bg-aura-pagina` | `app/page.tsx`, `app/biblioteca/page.tsx`, `app/biblioteca/[slug]/page.tsx` |

Las variantes con sólo la opacidad del radial distinta (0.22 / 0.18 / 0.16 / 0.14) se
unifican en la utilidad más cercana: la diferencia no es perceptible y mantener seis
gradientes casi iguales reintroduce el problema. Esto es un cambio visual mínimo y
deliberado en oscuro; se contrasta en la revisión visual.

### 2. El tema oscuro se mueve a `.dark`; `:root` pasa a ser el claro

`:root` deja de ser "el oscuro por defecto" y pasa a declarar la paleta clara. El bloque
`.dark` conserva exactamente los valores oscuros actuales. Así:

- Sin JS y sin clase (el estado peor), la página cae en claro, que es legible sobre el
  fondo blanco del navegador. Caer en oscuro sin clase daría texto claro sobre blanco.
- `next-themes` añade `class="dark"` a `<html>` cuando toca, que es lo que el
  `@custom-variant` ya espera.

*Alternativa considerada:* mantener el oscuro en `:root` y meter el claro en `.light` con
`attribute="class"` y `defaultTheme`. Obliga a que siempre haya una clase presente y deja
el peor caso en ilegible.

### 3. Paleta clara derivada, no inventada

El azul primario se mantiene en el mismo hue (`220`) y croma, bajando luminosidad para
contrastar sobre fondo claro (`oklch(0.65 0.18 220)` → en torno a `oklch(0.52 0.17 220)`
para `primary`, con `primary-foreground` casi blanco). Fondos y superficies invierten la
escala de luminosidad manteniendo el matiz frío (`0.01–0.014` de croma en hue `250`), de
modo que el claro sea "gris azulado", no blanco puro — coherente con la serie y más
cómodo en proyector. Valores exactos se fijan en implementación contra el criterio de
contraste del spec (WCAG AA), no a ojo.

Los `--chart-*` se mantienen con hue reconocible y luminosidad ajustada por tema.

### 4. El toggle vive en `app/layout.tsx`, en un componente cliente propio

`components/theme-toggle.tsx` (`"use client"`), botón con `Sun`/`Moon` de `lucide-react`,
`position: fixed` en `right-4 top-4 z-50`, con el mismo lenguaje visual que el enlace
"← Charlas" (`rounded-full border border-border/70 bg-card/70 backdrop-blur`) para que
lean como pareja. `aria-label` describiendo la acción ("Cambiar a tema claro/oscuro") y
`suppressHydrationWarning` en `<html>` más un guard de montaje en el botón para no pintar
el icono equivocado durante la hidratación.

Alterna sólo entre `light` y `dark` (dos estados, no tres): la preferencia del sistema es
el valor inicial vía `defaultTheme="system"` + `enableSystem`, pero el control no expone
un tercer estado "sistema" — para dos clics en mitad de una charla, un ciclo de tres
estados es peor.

`ThemeProvider` (el wrapper que ya existe en `components/theme-provider.tsx`, hoy sin usar)
envuelve `children` **y** el toggle.

### 5. Los dos diagramas que se pintan solos: `currentColor` y variables

- `embeddings-section.tsx`: su paleta categórica (azul / verde agua / violeta) se conserva
  — esos hues funcionan sobre fondo claro y oscuro. Lo que cambia es el panel
  `rgba(9,13,21,0.85)` y el texto `rgba(230,236,245,0.88)`, que pasan a `var(--card)` /
  `var(--foreground)`. Los tres colores de categoría se suben a variables CSS por tema
  (`--dato-1/2/3`) en lugar de quedar literales en el array del módulo, para poder
  oscurecerlos un punto en claro.
- `ai-evolution-section.tsx`: los `rgba(255,255,255, x)` de `style` inline pasan a
  `color-mix(in oklch, var(--foreground) N%, transparent)`, que invierte solo.

## Risks / Trade-offs

- **Las 41 variantes `dark:` de shadcn se activan de golpe** (hoy no hacen nada porque
  `.dark` = `:root`) → La revisión visual incluye explícitamente los primitivos que las
  llevan: `button`, `badge`, `input`, `toggle`, `table`, `sidebar`. Es el comportamiento
  que shadcn pretende, pero no se ha visto nunca en este repo.
- **Unificar opacidades de gradiente cambia ligeramente el oscuro actual** → Se compara
  antes/después en las rutas afectadas; si alguna pierde profundidad, se le deja su propia
  utilidad en vez de forzar la unificación.
- **33 ficheros tocados a mano: riesgo de literal olvidado** → El criterio de cierre es un
  `grep` que debe volver vacío sobre `app/` y `components/sections/`, no una impresión.
- **Destello de tema incorrecto en la primera pintura** → `next-themes` inyecta su script
  antes de la hidratación; `suppressHydrationWarning` en `<html>` evita el aviso de React.
  Se verifica a mano con el sistema en claro y en oscuro.
- **Contraste en claro peor de lo esperado en texto sobre gradiente** → El texto del hero
  va sobre el aura; si en claro no llega a 4.5:1, se baja la opacidad del aura antes de
  tocar el color del texto.
- **El toggle `fixed` puede tapar contenido en móvil** → Se comprueba en ancho de teléfono
  en la home y en una charla; la esquina está libre hoy, pero el contenido scrollea por
  debajo.

## Migration Plan

1. Rama nueva desde `main` (`feat/tema-claro-oscuro`), sin push.
2. Primero infraestructura (provider + paleta + utilidades), luego sustituciones por
   grupos de ficheros idénticos, luego los dos diagramas propios.
3. Verificación: `npm run lint`, `npx tsc --noEmit`, `npm run build` (toca layout y
   `globals.css`), y repaso visual en claro y oscuro de: home, Biblioteca, una ficha de
   nota y al menos tres charlas de distinta generación (p. ej. 10, 17, 23).
4. El usuario prueba en local. La PR se abre sólo tras su visto bueno.
5. Rollback: el cambio es un commit de CSS/JSX sin migración de datos ni dependencias
   nuevas; revertir la rama basta.

# Tasks

> Criterio de cierre transversal, usado en varias tareas como verificación:
>
> ```bash
> grep -rnE 'rgba?\([0-9]|#[0-9a-fA-F]{6}\b' app components/sections components/biblioteca --include='*.tsx'
> ```
>
> Debe volver vacío al final del grupo 5. `components/ui/*` queda fuera a propósito:
> sus `bg-black/50`, `text-white` y `bg-white` son correctos en ambos temas.

## 1. Rama de trabajo

- [x] 1.1 Crear `feat/tema-claro-oscuro` desde `main` sin hacer push, y verificar con
      `git status -sb` que la rama está limpia y por delante de nada

## 2. Paleta por tema en `app/globals.css`

- [x] 2.1 Mover la paleta oscura actual de `:root` a `.dark` sin cambiar ni un valor, y
      verificar que el diff muestra el bloque `.dark` idéntico al `:root` anterior
- [x] 2.2 Escribir en `:root` la paleta clara (fondos y superficies en gris azulado hue
      250, `primary`/`accent`/`ring` en torno a `oklch(0.52 0.17 220)`, `destructive`
      legible sobre claro), y verificar en el navegador con `npm run dev` que la home sin
      clase `dark` en `<html>` se lee en claro
- [x] 2.3 Comprobar el contraste de `foreground` sobre `background`, `card-foreground`
      sobre `card`, `muted-foreground` sobre `background` y `primary-foreground` sobre
      `primary` en ambos bloques, y verificar que todos cumplen 4.5:1 (3:1 para texto
      grande) con las devtools del navegador; ajustar luminosidades hasta que lo cumplan
- [x] 2.4 Declarar las variables de gradiente (`--aura-hero`, `--grid-fino`,
      `--aura-cierre`, `--aura-seccion`, `--glow-centro`, `--aura-pagina`) en `:root` y
      redefinirlas en `.dark` con los valores oscuros actuales, y verificar que el
      `background-image` radial del `body` en `@layer base` también queda por tema
- [x] 2.5 Declarar las `@utility` correspondientes (`bg-aura-hero`, `bg-grid-fino` con su
      `background-size: 88px 88px`, `bg-aura-cierre`, `bg-aura-seccion`, `bg-glow-centro`,
      `bg-aura-pagina`) y verificar en una página de prueba que la clase pinta el mismo
      fondo que el valor arbitrario al que sustituye
- [x] 2.6 Declarar `--dato-1`, `--dato-2`, `--dato-3` (azul / verde agua / violeta) por
      tema para el diagrama de embeddings, y verificar que en `.dark` coinciden con los
      `rgba` actuales de `embeddings-section.tsx`

## 3. Provider y control de tema

- [x] 3.1 Montar `ThemeProvider` (el de `components/theme-provider.tsx`, ya existente) en
      `app/layout.tsx` con `attribute="class"`, `defaultTheme="system"`, `enableSystem`,
      envolviendo `children`, y añadir `suppressHydrationWarning` a `<html>`; verificar que
      `<html>` recibe `class="dark"` o `class="light"` según el tema del sistema
- [x] 3.2 Crear `components/theme-toggle.tsx` (`"use client"`): botón `fixed right-4 top-4
      z-50` con el lenguaje visual del enlace "← Charlas" (`rounded-full border
      border-border/70 bg-card/70 backdrop-blur`), iconos `Sun`/`Moon` de `lucide-react`,
      alternancia binaria `light` ↔ `dark`, `aria-label` que describe la acción y guard de
      montaje para no pintar el icono equivocado; verificar que al pulsarlo la clase de
      `<html>` cambia y el sitio cambia de tema sin recargar
- [x] 3.3 Renderizar el toggle dentro del `ThemeProvider` en `app/layout.tsx` y verificar
      que aparece en la home, en `/biblioteca`, en una ficha de nota y en una charla, sin
      solaparse con el enlace "← Charlas" de la esquina izquierda
- [x] 3.4 Verificar persistencia y precedencia: elegir claro, navegar a una charla y
      recargar — sigue en claro; con el sistema en oscuro y elección manual en claro, gana
      el claro
- [x] 3.5 Verificar accesibilidad del control: llega por `Tab` con foco visible, se activa
      con `Enter` y `Space`, y su nombre accesible describe la acción
- [x] 3.6 Verificar que no hay destello de tema incorrecto en la primera pintura, con el
      sistema en claro y con el sistema en oscuro, recargando en duro

## 4. Sustituir los fondos duplicados

- [x] 4.1 Sustituir el par de gradientes por `bg-aura-hero` + `bg-grid-fino` en los 15
      `components/sections/hero-section*.tsx` (`-13`, `-14`, `-15`, `-16`, `-17`, `-18`,
      `-19`, `-20`, `-22`, `-23`, `-concept`, `-copilot`, `-llm`, `-mcp` y el base), y
      verificar con `grep -c 'rgba(' components/sections/hero-section*.tsx` que todos dan 0
- [x] 4.2 Sustituir el gradiente por `bg-aura-cierre` en los 6
      `components/sections/closing-section*.tsx` que lo llevan (`-17`, `-18`, `-19`, `-20`,
      `-22`, `-23`) y verificar que el `grep` de literales sobre `closing-section*.tsx`
      vuelve vacío
- [x] 4.3 Sustituir por `bg-aura-seccion` en `ia-first-section-22.tsx`,
      `demo-section-23.tsx` y `ciclo-section-22.tsx`, y por `bg-glow-centro` en
      `token-context-section.tsx`, `token-context-section-concept.tsx`,
      `mcps-section.tsx` y `how-llm-works-section.tsx`; verificar que el `grep` sobre esos
      7 ficheros vuelve vacío
- [x] 4.4 Sustituir por `bg-aura-pagina` + `bg-grid-fino` en `app/page.tsx`,
      `app/biblioteca/page.tsx` y `app/biblioteca/[slug]/page.tsx`, y verificar que el
      `grep` sobre `app/` vuelve vacío
- [x] 4.5 Comparar en oscuro, antes y después, el hero y el cierre de tres charlas de
      distinta generación (10, 17, 23) más la home y `/biblioteca`; verificar que la
      unificación de opacidades no ha aplanado ninguna, y si alguna pierde profundidad,
      darle su propia variable en vez de unificarla

## 5. Los dos diagramas con color propio

- [x] 5.1 En `components/sections/embeddings-section.tsx`, pasar el panel
      `rgba(9,13,21,0.85)` a `var(--card)`, el texto `rgba(230,236,245,0.88)` a
      `var(--foreground)` y los tres colores de categoría del array del módulo a
      `var(--dato-1/2/3)`; verificar en claro y en oscuro que el diagrama se lee sobre el
      fondo y que las tres categorías siguen distinguiéndose
- [x] 5.2 En `components/sections/ai-evolution-section.tsx`, pasar los
      `rgba(255,255,255, x)` del `style` inline a
      `color-mix(in oklch, var(--foreground) N%, transparent)` y verificar en ambos temas
      que las capas mantienen su jerarquía de opacidad
- [x] 5.3 Ejecutar el `grep` de cierre sobre `app`, `components/sections` y
      `components/biblioteca` y verificar que vuelve vacío

## 6. Revisión integrada

- [x] 6.1 Revisar en claro los primitivos de `components/ui/*` que llevan variantes
      `dark:` y que hoy no se aplicaban (`button`, `badge`, `input`, `toggle`, `table`,
      `sidebar`), y verificar que ninguno queda con texto o borde invisible
- [x] 6.2 Revisar `/biblioteca` y una ficha de nota en claro: tarjetas del explorador,
      filtros, cuerpo markdown (código, tabla, cita) y el grafo de conexiones; verificar
      que el grafo y sus líneas `currentColor` se leen sobre fondo claro
- [x] 6.3 Revisar en ancho de teléfono que el toggle no tapa contenido en la home ni en
      una charla, y que no aparece scroll horizontal
- [x] 6.4 Ejecutar `npm run lint`, `npx tsc --noEmit` y `npm run build`, y verificar que
      los tres terminan sin errores
- [x] 6.5 Dejar la rama con los cambios commiteados y **sin push**, y avisar al usuario de
      que puede probarla en local; no abrir PR hasta su visto bueno

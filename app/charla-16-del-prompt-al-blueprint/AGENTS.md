# Charla 16 — Del prompt al blueprint: SDD con herramientas

> Contexto específico de esta charla. Las reglas transversales del proyecto (stack, diseño, cómo se añade una charla) están en el `AGENTS.md` de la raíz.

- **Ruta:** `/charla-16-sdd-herramientas`
- **Estado:** pendiente (🔲 borrador — listo para revisión y ensayo)
- **Formato:** técnica, ~50-55 min + preguntas. Pantalla compartida y demo en directo. Cambio de registro deliberado tras varias charlas transversales — se avisa en la apertura.

## Objetivo

Que la audiencia entienda que, cuando el agente ya escribe el código, el cuello de botella se mueve a saber pedir sin ambigüedad — y que eso (SDD) tiene disciplina y, desde este año, herramientas. Ideas clave:

- el valor pasa de teclear a saber pedir
- refresco compacto de spec (vibe coding contra SDD, metáfora de los planos)
- anatomía de un spec manual y sus límites (se degrada con el tiempo)
- tres arquetipos de herramienta: OpenSpec (ligero) / Spec Kit (estándar) / Kiro (integrado)
- demo end-to-end: de un issue de Jira a código con OpenSpec sobre RCA
- criterio de cuándo usar cada cosa — y cuándo NO montar un spec formal
- qué se lleva cada rol, también los no-devs

## Estructura narrativa (orden de `page.tsx`)

1. Hero — Del prompt al blueprint (gancho + agenda de 6 bloques)
2. Bloque 1 — Refresco: qué es un spec (dato ancla 90% / 13%)
3. Bloque 2 — Spec manual (anatomía + ventajas/límites)
4. Bloque 3 — Ecosistema SDD 2026 (OpenSpec / Spec Kit / Kiro + tabla)
5. Bloque 4 — Demo en directo (flujo Jira → propose → revisar → apply → archive, delta spec, split OpenSpec/Git, chuleta de comandos)
6. Bloque 5 — Cuándo cada cosa (criterio + cuándo NO)
7. Bloque 6 — Qué se lleva cada rol
8. Cierre — Tres ideas finales

Frases que deben quedar (respetar salvo rediseño consciente):

- Hero: «Cuando la IA escribe el código gratis, el valor deja de estar en teclear. Pasa a estar en saber pedir.»
- Bloque 1: «El spec es el puente entre escribir código y dirigir el proyecto.»
- Bloque 2: «El problema nunca es empezar un spec. Es mantenerlo vivo cuando el proyecto evoluciona y hay prisa.»
- Bloque 3: «Manual contra herramienta no es una guerra. Es un espectro.»
- Bloque 4: «El agente escribió el código. Yo dirigí el qué. Pero la última palabra sigue siendo mía.»
- Bloque 5: «El spec no es un impuesto que pagas siempre. Es un seguro que contratas cuando la tarea es lo bastante grande.»
- Bloque 6: «Decir el qué y el porqué antes de pedir el cómo.»
- Cierre: «La pregunta ya no es "¿qué le escribo?". Es "¿le he dicho con claridad qué quiero y cómo sabré que lo ha hecho bien?".»

## Componentes (secciones), en el orden de `page.tsx`

- `hero-section-16.tsx` — Hero / agenda
- `spec-refresher-section.tsx` — Bloque 1
- `manual-spec-section.tsx` — Bloque 2
- `sdd-ecosystem-section.tsx` — Bloque 3
- `demo-flow-section.tsx` — Bloque 4
- `when-to-use-section.tsx` — Bloque 5
- `roles-section-16.tsx` — Bloque 6
- `closing-section-16.tsx` — Cierre

> Nota de migración: igual que el resto de la serie, estas secciones viven en `components/sections/`. Pendiente de mover a `app/charla-16-sdd-herramientas/sections/` en la limpieza general.

## Antes de proyectar (verificar — evolucionan rápido)

- **Dato JetBrains** (`spec-refresher-section.tsx`): 90% usa IA / 13% en todo el ciclo — encuesta enero 2026. Confirmar cifra por si ha cambiado.
- **Estado de los tres tools** (`sdd-ecosystem-section.tsx`): favoritos de Spec Kit (>100k), versiones/releases de OpenSpec, Spec Kit y Kiro. Si no están frescos, hablar en cualitativo.
- **Gancho de apertura** (`hero-section-16.tsx`): las referencias de actualidad (agentes que programan solos) van en el guion; confirmarlas antes de proyectar por ser noticia de la semana.
- **Referencia del refresco**: confirmar cuál es la grabación donde se explicó SDD en detalle (Charla 7 o la de SDD en Angular) para citarla.
- **Issue de la demo**: RCA-21 (Cart Drawer), instancia `da-ju-ia-talks.atlassian.net`. La web muestra el ejemplo `filtro-por-categoria` como delta spec ilustrativa; el ciclo real ensayado fue RCA-21.
- **Copilot vs Claude Code**: el guion está escrito para Copilot (slash commands en VS Code); el ensayo se hizo con Claude Code. La chuleta de comandos usa el formato `/opsx-*`. Adaptar si la demo final cambia de herramienta.

## Límites de contenido

- Nada de credenciales ni datos reales de la instancia Jira más allá de lo necesario para la demo.
- Los números concretos (favoritos, %, versiones) solo si están verificados; si no, cualitativo.

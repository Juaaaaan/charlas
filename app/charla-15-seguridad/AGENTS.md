# Charla 15 — Seguridad en IA

> Contexto específico de esta charla. Las reglas transversales del proyecto (stack, diseño, cómo se añade una charla) están en el `AGENTS.md` de la raíz.

- **Ruta:** `/charla-15-seguridad`
- **Estado:** publicada
- **Formato:** versión extendida (~90 min + preguntas), por decisión consciente de superar el formato habitual de 45-50 min. Es el cierre de la etapa en solitario antes de que vuelva el compañero en septiembre.

## Objetivo

Que la audiencia entienda con criterio por qué la seguridad en IA es distinta a la seguridad tradicional. No es asustar ni dar una clase formal de ciberseguridad. Ideas clave:

- dato e instrucción viajan por el mismo canal
- qué es prompt injection (directo e indirecto) y la técnica de exfiltración vía Markdown
- ninguna defensa es perfecta sola: se combinan capas
- ha pasado de verdad, en producción, en productos conocidos (9 casos reales)
- conectar servidores MCP o descargar modelos sin vetar es un riesgo de cadena de suministro
- por qué el modelo se niega a veces (alineamiento)
- qué hacer ante un incidente y qué le toca vigilar a cada rol

## Estructura narrativa

1. Hero — Seguridad en IA (agenda)
2. Bloque 1 — Prompt Injection en profundidad (tipos, técnica Markdown, OWASP Top 10 para LLM)
3. Bloque 2 — Cómo nos defendemos (6 capas + framework de madurez, dimensiones 3 y 7)
4. Bloque 3 — Casos reales (9 casos, 3 categorías: fuga por diseño, manipulación conversacional, autonomía sin control)
5. Bloque 4 — Cadena de suministro (MCP + modelos maliciosos, formato pickle)
6. Bloque 5 — Constitutional AI y alineamiento
7. Bloque 6+7 — Shadow AI / incident response + aplicación práctica por rol
8. Cierre — Tres ideas finales

Ideas de cierre por bloque (respetar salvo rediseño consciente):

- Bloque 1: «Un ataque de prompt injection no rompe nada. Convence.»
- Bloque 2: «No estáis aquí para eliminar el riesgo. Estáis aquí para reducirlo, capa a capa.»
- Bloque 3: «Nueve casos, tres categorías, un mismo origen: alguien confió más de lo que debía.»
- Bloque 4: «Cada servidor MCP y cada modelo que descargáis es una puerta nueva.»
- Bloque 5: «Cuando el modelo dice que no, no está fallando. Está haciendo exactamente lo que le enseñaron a hacer.»
- Bloque 6+7: «Nadie necesita ser experto en ciberseguridad. Necesita saber qué pregunta hacerse antes de confiar.»
- Cierre: «La próxima vez que un agente os pida acceso a algo, la pregunta no es "¿funciona?". Es "¿confío en quien lo ha construido?".»

## Componentes (secciones), en el orden de `page.tsx`

- `hero-section-15.tsx` — Hero / agenda
- `prompt-injection-section.tsx` — Bloque 1
- `defense-layers-section.tsx` — Bloque 2
- `real-cases-section-15.tsx` — Bloque 3
- `supply-chain-section.tsx` — Bloque 4
- `constitutional-ai-section.tsx` — Bloque 5
- `shadow-ai-role-section.tsx` — Bloque 6+7
- `closing-section-15.tsx` — Cierre

> Nota de migración: en el estado actual estas secciones siguen en `components/sections/`. Pendiente de colocarlas en `app/charla-15-seguridad/sections/` junto con la limpieza del resto de secciones antiguas.

## Antes de proyectar

- Verificar la versión actual del OWASP Top 10 para LLM (`prompt-injection-section.tsx`).
- Verificar actualizaciones del caso OpenAI/Hugging Face, julio 2026 (`real-cases-section-15.tsx`) — es muy reciente.
- Confirmar el canal real de compliance/seguridad interno si se hace explícito en el Bloque 6 (`shadow-ai-role-section.tsx`).
- La demo de prompt injection va fuera de esta web, en un entorno aislado y sin conexión a sistemas corporativos.

## Límites de contenido

- Nada de técnicas de explotación paso a paso; solo el mecanismo a nivel conceptual.
- Nada de configuraciones concretas de DLP/SIEM.
- Casos internos solo si están anonimizados.
- El caso OpenAI/Hugging Face, solo al detalle que aporte la narrativa.

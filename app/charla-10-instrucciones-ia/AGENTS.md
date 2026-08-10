# Charla 10 — Instruyendo a la IA: .github/ y .claude/

> Contexto específico de esta charla. Las reglas transversales del proyecto están en el `AGENTS.md` de la raíz.

- **Ruta:** `/charla-10-instrucciones-ia`
- **Estado:** publicada
- **Formato:** ~45 min (incluye demo en vivo con Copilot CLI)

## Objetivo

Mostrar cómo convertir el conocimiento del equipo (convenciones, decisiones técnicas, sistema de diseño) en instrucciones persistentes que la IA lee automáticamente. El "onboarding" que le harías a un developer nuevo, escrito una vez en un fichero.

Ideas clave:

- cada sesión de IA empieza desde cero si no tiene contexto
- ficheros de instrucciones (.github/copilot-instructions.md, AGENTS.md, .claude/) resuelven eso de forma persistente
- la IA no inventa el conocimiento — lo organiza; tú sigues siendo el que sabe
- agentes especializados (developer + reviewer) trabajan como un equipo
- la confianza se construye en capas: tests, linter, reviewer automático, revisión humana

## Estructura narrativa

1. Apertura — Puente desde la charla anterior + aclaración: ¿quién crea los ficheros?
2. Bloque 1 — El problema: la IA sin contexto
3. Bloque 2 — La solución: ficheros de instrucciones (Copilot vs Claude)
4. Bloque 3 — .github/ para Copilot: estructura completa
5. Demo Acto 1 — Tour por el .github/ real del proyecto RCA
6. Demo Acto 2 — Prompts en vivo: modificaciones reales con contexto
7. Demo Acto 3 — AGENTS.md en acción: developer y reviewer
8. Demo Acto 4 — ¿Cómo confiar en el resultado?
9. Bonus — .claude/ + hook Graphify
10. Cierre — 3 ideas + dónde empezar

Ideas de cierre:

- «El onboarding que le harías a un developer nuevo, escríbeselo a la IA en un fichero. Solo una vez.»
- «No hace falta repetir las convenciones en cada prompt. Las dice una vez el fichero, las respeta Copilot siempre.»
- «Un agente construye. Otro verifica. Ninguno de los dos trabaja sin contexto. Eso es un equipo de IA.»
- «La confianza se construye en capas. La IA no sustituye la verificación humana — la hace más rápida.»
- Final: «La IA nunca se olvida de leerlo.»

## Componentes (secciones), en el orden de `page.tsx`

- `hero-section-copilot.tsx` — Hero / agenda (HeroSectionCopilot)
- `problem-section-copilot.tsx` — Bloque 1: el problema (ProblemSectionCopilot)
- `solution-section.tsx` — Bloque 2: la solución (SolutionSection)
- `github-structure-section.tsx` — Bloque 3: .github/ para Copilot (GithubStructureSection)
- `demo-section-copilot.tsx` — Demo actos 1-4 (DemoSectionCopilot)
- `bonus-section.tsx` — Bonus: .claude/ + Graphify (BonusSection)
- `closing-section-copilot.tsx` — Cierre (ClosingSectionCopilot)

## Nota de numeración

Esta charla se numeró internamente como "Charla 8" en su momento (rama `feat/charla-8`), pero en la serie ordenada ocupa la posición 10. El badge del hero original decía "Charla 8"; se ha actualizado a "Charla 10" en la migración.

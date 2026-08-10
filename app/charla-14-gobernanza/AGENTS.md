# Charla 14 — Gobernanza de IA

> Contexto específico de esta charla. Las reglas transversales del proyecto están en el `AGENTS.md` de la raíz.

- **Ruta:** `/charla-14-gobernanza`
- **Estado:** publicada
- **Formato:** ~20 min + preguntas

## Objetivo

Que la audiencia entienda con criterio por qué la gobernanza importa y tenga un marco compartido para usar la IA con criterio dentro de la empresa. No es una charla jurídica ni un manual de compliance.

Ideas clave:

- el Shadow AI no nace de mala fe, nace de falta de reglas claras
- no toda IA tiene el mismo riesgo (marco del EU AI Act traducido a ejemplos)
- la gobernanza no pesa igual para cada rol de la empresa
- existe una política accionable que responde a cuatro preguntas prácticas
- ya hay dentro de la empresa una forma de medir el nivel de madurez en gobernanza (framework de 8 dimensiones)

## Estructura narrativa

1. Hero — Gobernanza de IA (agenda)
2. Bloque 1 — Casos reales de falta de gobernanza (Samsung 2023, Air Canada 2024, autoridad italiana 2023)
3. Bloque 2 — Niveles de riesgo del EU AI Act + ejercicio interactivo de clasificación
4. Bloque 3 — Qué significa la gobernanza según tu rol (developer, comercial, RRHH, management)
5. Bloque 4 — La política de uso punto por punto con casos aplicados
6. Bloque 5 + Cierre — Autoevaluación con framework de 8 dimensiones, tres ideas y checklist accionable

Ideas de cierre por bloque:

- Bloque 1: «No hubo mala fe. Hubo falta de reglas claras. Gobernar antes es mucho más barato que gobernar después.»
- Bloque 2: «La pregunta no es "¿puedo usar IA?". Es "¿qué está en juego si me equivoco?".»
- Bloque 3: «La gobernanza no es un documento que lee una persona de compliance. Es una responsabilidad repartida.»
- Bloque 4: «Una política no existe para frenaros. Existe para que sepáis qué hacer sin tener que adivinarlo.»
- Cierre: «La semana pasada aprendimos a medir. Hoy hemos aprendido a poner las reglas.»

## Componentes (secciones), en el orden de `page.tsx`

- `hero-section-14.tsx` — Hero / agenda (HeroSectionGovernance)
- `real-examples-policy.tsx` — Bloque 1: casos reales (CasosRealesSection)
- `risk-levels.tsx` — Bloque 2: niveles de riesgo + ejercicio (NivelesRiesgoSection)
- `based-on-role.tsx` — Bloque 3: gobernanza según rol (SegunRolSection)
- `policy-usage-section.tsx` — Bloque 4: política de uso (PoliticaUsoSection)
- `closing-section-14.tsx` — Bloque 5 + cierre (ClosingSectionGovernance)

## Límites de contenido

- No profundizar en detalle articulado del EU AI Act, ISO 42001 o NIST AI RMF (queda referenciado como lectura).
- No entrar en configuraciones técnicas de DLP o auditoría.
- No usar casos internos concretos sin haberlos anonimizado antes.
- No extenderse en otros marcos regulatorios (SOX, GDPR) más allá de mencionarlos.
- Usar `destructive` con moderación, reservado para señales de alerta (nivel de riesgo inaceptable, score bajo en gobernanza, «Nunca» en la matriz de datos).

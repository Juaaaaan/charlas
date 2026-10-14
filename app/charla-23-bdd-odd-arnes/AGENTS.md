# Charla 23 — Comprobar antes de construir: BDD, ODD y el arnés con nombre

> Contexto específico de esta charla. Las reglas transversales del proyecto (stack, diseño, cómo se añade una charla) están en el `AGENTS.md` de la raíz.

- **Ruta:** `/charla-23-bdd-odd-arnes` (slug provisional — pendiente de confirmación de Juan)
- **Estado:** guion en `borrador` en el Vault (`Charlas/guiones/guion-charla-23.md`), fecha de la charla 14 de octubre de 2026. En el índice (`lib/charlas.ts`), `estado` pendiente de confirmación explícita de Juan.
- **Formato:** charla con demo real sobre RCA (el carrito de compra). ~34 min + preguntas. Audiencia ~98% no técnica.

## Objetivo

Cierra la mitad "antes de construir" de la etapa Comprobar, introducida en la charla 22. Tesis única: la IA no debería decidir por sí sola qué significa correcto. Primero se define el criterio de éxito; después se genera y se verifica. BDD, ODD y AI harness engineering aparecen como nombres técnicos al servicio de esa idea, no como tres temas independientes. La mitad "después de construir" (ai-code-review + RDD) queda para una charla futura con su propia demo — **no se menciona RDD por nombre en esta sección**, para no dar la impresión de que la revisión de código ya está cubierta.

## Frases-tesis

- «La IA no debería decidir por sí sola qué significa correcto.» (hero + repetida en pantalla, Bloque 1)
- «No le pedimos a la IA que adivine qué es correcto. Se lo contamos antes de que toque el resultado.» (Bloque 2)
- «El escenario no se negocia después. Se escribe antes.» (Bloque 3)
- «El arnés no hace más inteligente al modelo. Hace más disciplinado el sistema.» (Bloque 4)
- «Verifying beats generating. Verificar vale más que generar.» (Bloque 5)

## Estructura narrativa (orden de `page.tsx`)

1. Hero — Bloque 1: callback a la charla 22 y tesis única.
2. Bloque 2 — Escenarios antes de construir: ejemplo cotidiano (solicitud de vacaciones), tabla Gherkin, ejemplo de software (login), ejemplo RCA (carrito, puente a la demo), y el caso de un bug fix (stock a cero).
3. Bloque 3 — Demo BDD: el mismo escenario del carrito, secuencia de 5 pasos, pausa deliberada «Fijaos en lo que NO ha ocurrido», frase de cierre del bloque.
4. Bloque 4 — Comportamiento por defecto: dos casos observables (cambio pequeño vs. cambio sustancial), nombre ODD, reglas, callback a la charla 16 (spec manual vs. SDD), y el nombre del arnés completo: AI harness engineering.
5. Cierre — Bloque 5: verificar vale más que generar, puente a la charla futura sobre revisión (sin nombrar RDD), última pantalla.

## Componentes (secciones), en el orden de `page.tsx`

- `hero-section-23.tsx` — Bloque 1
- `escenarios-section-23.tsx` — Bloque 2
- `demo-section-23.tsx` — Bloque 3
- `odd-section-23.tsx` — Bloque 4 (incluye el nombre del arnés al cierre del bloque)
- `closing-section-23.tsx` — Bloque 5

> Sufijo `-23` en todas las secciones, siguiendo la convención desde la charla 19.

## Notas de la demo (del guion, para quien retome esta charla)

- La demo BDD (Bloque 3) es real y en vivo sobre RCA — la web solo documenta el escenario y la secuencia, no sustituye al ensayo.
- La demo ODD (Bloque 4, los dos casos) solo debe hacerse en vivo si el ensayo reproduce de forma estable ambos comportamientos; si no, el guion indica usar capturas o una secuencia preparada. Esto no afecta al contenido de la web, que presenta ambos casos como ejemplo fijo, no como demo en directo.
- El protocolo ODD y la convención BDD están añadidos a `CLAUDE.md` y `.github/copilot-instructions.md` de RCA en `develop` (fuera de este repo).

## Decisiones pendientes de confirmar con Juan

- **Rama:** por convención (cada charla stacka sobre la rama de la charla anterior), correspondería `feat/charla-23` basada en `feat/charla-22` — sin confirmar.
- **Slug:** `charla-23-bdd-odd-arnes` es una propuesta provisional de esta sesión — sin confirmar.
- **`estado` en `lib/charlas.ts`:** sin confirmar (`publicada` vs `pendiente`).
- **Resumen/tema para `lib/charlas.ts`:** redactado en esta sesión a partir del guion — pendiente de revisión por Juan.

## Límites de contenido

- Todo el contenido en español, sin jerga: la audiencia es ~98% no técnica, salvo los bloques Gherkin, que se presentan como código legible aunque la sintaxis esté en inglés (así lo hace el propio guion).
- Ninguna sigla (BDD, ODD, AI harness engineering) aparece antes de explicar la idea que representa, siguiendo la secuencia del guion.
- Sin mención a RDD por nombre ni a la revisión de código posterior — queda reservada a una charla futura.

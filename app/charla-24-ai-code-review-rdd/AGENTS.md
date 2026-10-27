# Charla 24 — Comprobar después de construir: ai-code-review y RDD

> Contexto específico de esta charla. Las reglas transversales del proyecto (stack, diseño, cómo se añade una charla) están en el `AGENTS.md` de la raíz.

- **Ruta:** `/charla-24-ai-code-review-rdd`
- **Estado:** guion en `revisado` en el Vault (`Charlas/guiones/guion-charla-24.md`), fecha de la charla 28 de octubre de 2026. En el índice (`lib/charlas.ts`), `estado: pendiente` — el checklist de demo del guion (PR A/B abiertas, SHAs, capturas, receipts, ruta de recuperación) sigue sin completarse.
- **Formato:** charla sin construcción de código en directo — dos PR ya generadas y abiertas de antemano sobre RCA, revisadas en vivo. ~35 min + preguntas. Audiencia ~98% no técnica.
- **Primera charla que usa la estructura `app/charla-NN-tema/sections/`** (decisión explícita de Juan para esta sesión; charlas 19–23 siguen en `components/sections/*-NN.tsx`).

## Objetivo

Cierra la mitad "después de construir" de la etapa Comprobar, abierta en la charla 22 y preparada en la 23 (que cerró la mitad "antes de construir": BDD + ODD). Tesis central: antes definimos qué significa correcto; después exigimos evidencia de que un candidato concreto lo cumple. La demo reutiliza deliberadamente las mismas dos peticiones de la charla 23 (color del botón; stock cero) para que el contraste de revisión sea lo único nuevo.

## Frases-tesis

- «Antes definimos qué significa correcto. Después exigimos evidencia de que un candidato concreto lo cumple.» (hero, tesis central)
- «La IA abarata producir candidatos. No abarata automáticamente demostrar que son correctos.» (Bloque 2)
- «El tamaño del diff no decide cuánto revisar. El riesgo y la evidencia disponible, sí.» (Bloque 4)
- «La revisión no solo comprueba criterios. También descubre criterios que faltaban.» (Bloque 4)
- «Un receipt no certifica "el proyecto". Registra la evidencia obtenida sobre un candidato concreto.» (Bloque 5)
- «El modelo propone. La política limita. La persona decide.» (Bloque 5)
- «Generar produce un candidato. Verificar produce evidencia.» (cierre)

## Estructura narrativa (orden de `page.tsx`)

1. `hero-section-24.tsx` — Bloque 1: callback a la charla 23 («queda la otra mitad») y tesis central.
2. `capas-section-24.tsx` — Bloques 2+3: el nuevo cuello de botella (revisión en 3 capas: checks / agéntica / humana), pregunta anticipada sobre falsos verdes, y «el reviewer ya existía» (callback a la charla 8).
3. `demo-section-24.tsx` — Bloque 4: Caso A (botón, riesgo bajo, receipt simplificado) vs. Caso B (stock cero, riesgo alto, Gherkin + lentes 4R + hallazgo de concurrencia abierto), en contraste directo.
4. `rdd-section-24.tsx` — Bloque 5: RDD con nombre — candidato congelado, profundidad proporcional (baja/media/alta) y las cuatro lentes (Risk, Resilience, Readability, Reliability).
5. `closing-section-24.tsx` — Bloque 6: el arco completo de Comprobar (antes/después), frase final, y teaser de Publicar/Mantener.

## Notas de la demo (del guion, para quien retome esta charla)

- Las dos PR deben estar generadas y abiertas, no fusionadas, antes de la charla. La web presenta ambos receipts como contenido fijo (no demo en directo): no sustituye tener capturas y resultados reales guardados como ruta de recuperación.
- El hallazgo de concurrencia en el Caso B se presenta como riesgo adicional descubierto por la revisión, no como un criterio ya cubierto por el escenario Gherkin original.
- No se nombra RDD hasta después del contraste entre PR A y PR B (orden ya respetado en `page.tsx`: demo antes que `rdd-section-24`).
- El reviewer no se presenta en ningún momento como autoridad de merge; la autoridad de entrega es siempre humana.

## Decisiones pendientes de confirmar con Juan

- **`estado` en `lib/charlas.ts`:** fijado a `pendiente` por el checklist de demo sin completar — confirmar cuándo pasa a `publicada`.
- **Resumen/tema para `lib/charlas.ts`:** redactado en esta sesión a partir del guion — pendiente de revisión por Juan.

## Límites de contenido

- Todo el contenido en español, sin jerga sin explicar: la audiencia es ~98% no técnica, salvo el bloque Gherkin (sintaxis en inglés, como en la charla 23).
- Las siglas (RDD, 4R) no aparecen antes de que el bloque correspondiente las introduzca.
- Ningún receipt ni ninguna captura debe sugerir un estado contradictorio con el relato (p. ej. el Caso B nunca se presenta como aceptado).

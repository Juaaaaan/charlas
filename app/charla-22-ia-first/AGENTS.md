# Charla 22 — IA-first: pregúntale primero

> Contexto específico de esta charla. Las reglas transversales del proyecto (stack, diseño, cómo se añade una charla) están en el `AGENTS.md` de la raíz.

- **Ruta:** `/charla-22-ia-first`
- **Estado:** guion en `borrador` en el Vault (`Charlas/guiones/guion-charla-22.md`), con varias decisiones de contenido todavía abiertas (ver más abajo). En el índice (`lib/charlas.ts`) va como `publicada` por decisión explícita de Juan, aunque la charla es el 7 de octubre de 2026 — si el guion cambia antes de esa fecha, puede hacer falta retocar esta sección.
- **Formato:** charla de hábito, no de adopción — sin demo nueva ni código en pantalla. Recorrido conceptual con un ejercicio mental en vivo y seis «paradas» que reutilizan, como callback puro, ejemplos ya vistos en charlas anteriores. ~45 min. Audiencia ~98% no técnica.

## Objetivo

Instalar un único cambio de reflejo: antes de hacer algo vosotros, preguntarle primero a la IA. No es una charla de convencer de que la IA funciona (eso ya está hecho, la audiencia la usa a diario), sino de convertir el «cuándo me acuerdo» en un hábito por defecto — la mentalidad **IA-first**: la IA como primera pregunta, no como solución automática.

## Frase-tesis (se repite seis veces, una por parada)

> «Antes de hacerlo tú, pregúntale primero.»

## Estructura narrativa (orden de `page.tsx`)

1. Hero — Bloque 1: apertura, lo que la sala ya ha visto funcionar + la frase «no hace falta que os convenza...»
2. Bloque 2 — ¿Construir un agente, o ya existe algo hecho? (PowerApps/Power Automate vs agente, criterio corto)
3. Bloque 3 — El giro: qué es pensar en IA-first (definición + antes/después + el giro mental)
4. Bloque 4 — Ejercicio en vivo: pensad en una tarea real vuestra
5. Bloque 5 — El hilo: el ciclo Idea → Especificar → Construir → Comprobar → Publicar → Mantener
6. Bloque 6 — Las seis paradas, cada una con su ejemplo callback:
   - Idea → el encargo de RRHH
   - Especificar → SDD, Cart Drawer de RCA (Charla 16)
   - Construir → menú de OpenCode (Charla 20) + apunte 9Router/Hermes Agent
   - Comprobar → mismo spec de la 16, otro ángulo
   - Publicar → checkpoint del Analista de RFP (Charla 19)
   - Mantener → Wiki LLM e instrucciones persistentes (Charlas 11 y 8)
7. Cierre — la frase, seis veces + guiño al arnés mental

## Componentes (secciones), en el orden de `page.tsx`

- `hero-section-22.tsx` — Bloque 1
- `criterio-section-22.tsx` — Bloque 2
- `ia-first-section-22.tsx` — Bloque 3
- `ejercicio-section-22.tsx` — Bloque 4
- `ciclo-section-22.tsx` — Bloque 5
- `paradas-section-22.tsx` — Bloque 6 (las seis paradas)
- `closing-section-22.tsx` — Bloque 7

> Sufijo `-22` en todas las secciones, siguiendo la convención desde la charla 19.

## Decisiones abiertas en el guion (sin cerrar aún por Juan)

- Ejemplo del Bloque 3 (antes/después, reunión con cliente nuevo) es genérico a propósito; Juan puede sustituirlo por un caso real suyo si lo prefiere.
- 6.2 y 6.4 comparten intencionalmente el mismo ejemplo (spec de la 16) visto desde dos ángulos.
- Vigencia de 9Router y Hermes Agent (parada Construir) pendiente de verificar cerca de la fecha — son herramientas que se mueven semana a semana. Si dejan de estar vigentes, actualizar `paradas-section-22.tsx`.
- Mención al compañero en el Bloque 1 quedó deliberadamente breve en el guion (Juan no había visto esa charla al escribirlo) — no se ha incluido en la web por el mismo motivo.

## Límites de contenido

- Charla de hábito, no de adopción: no se dedica tiempo a convencer de que la IA funciona.
- Todos los ejemplos de las seis paradas son callbacks a charlas ya impartidas (11, 16, 19 y 20, además de la 8) — no se introduce contenido técnico nuevo.
- Sin jerga: la audiencia es ~98% no técnica.

# Charla 22 — IA-first: pregúntale primero

> Contexto específico de esta charla. Las reglas transversales del proyecto (stack, diseño, cómo se añade una charla) están en el `AGENTS.md` de la raíz.

- **Ruta:** `/charla-22-ia-first`
- **Estado:** guion en `borrador` en el Vault (`Charlas/guiones/guion-charla-22.md`, revisado), con algunas decisiones de contenido todavía abiertas (ver más abajo). En el índice (`lib/charlas.ts`) va como `publicada` por decisión explícita de Juan, aunque la charla es el 7 de octubre de 2026 — si el guion cambia antes de esa fecha, puede hacer falta retocar esta sección.
- **Formato:** charla de hábito, no de adopción — sin demo nueva ni código en pantalla. Recorrido conceptual con un ejercicio mental en vivo y seis «paradas» que reutilizan, como callback puro, ejemplos ya vistos en charlas anteriores. ~45 min. Audiencia ~98% no técnica.

## Objetivo

Instalar un cambio de reflejo más preciso que en la primera versión del guion: ante una tarea, primero entender el problema y pensar una solución razonable (esa primera reflexión es necesaria, no se salta); antes de invertir tiempo en ejecutarla, preguntarle a la IA qué partes puede acelerar, enriquecer o simplificar. La mentalidad **IA-first** no es pensar menos ni delegar la decisión — es no recorrer solos un camino que puede hacerse mejor acompañados. Precisión explícita en el guion: IA-first no es IA-only ni IA-always.

## Frases-tesis

- Frase que se repite una vez por parada en el Bloque 6 (sin cambios respecto a la v1 del guion): **«Antes de hacerlo tú, pregúntale primero.»**
- Frase final de cierre, nueva en esta revisión — **distinta de la anterior, a propósito**: **«Antes de invertir esfuerzo, pregúntale primero.»**, acompañada en pantalla de «IA-first no es IA-only ni IA-always: la IA abre opciones; vuestro criterio decide.»
- Frase ancla del Bloque 2: «La IA es la primera conversación sobre tu solución, no la última decisión.»

## Estructura narrativa (orden de `page.tsx`) — el orden de bloques 2 y 3 se intercambió respecto a la v1

1. Hero — Bloque 1: apertura, lo que la sala ya ha visto funcionar + «no hace falta que os convenza...»
2. Bloque 2 — El giro: la mentalidad IA-first, la distinción AI-enabled vs AI-first (concepto real, bajado de escala individual), la precisión «no es IA-only ni IA-always», el antes/después revisado (la primera reflexión es necesaria; falla no hacer la segunda pregunta antes de ejecutar) y el giro mental
3. Bloque 3 — ¿Construir o ya existe? (PowerApps/Power Automate vs agente, criterio corto + micro-ejemplo de límite: a veces no hace falta IA)
4. Bloque 4 — Ejercicio en vivo: pensad en una tarea real vuestra
5. Bloque 5 — El hilo: el ciclo Idea → Especificar → Construir → Comprobar → Publicar → Mantener
6. Bloque 6 — Las seis paradas, cada una con su ejemplo callback:
   - Idea → el encargo de RRHH
   - Especificar → SDD, Cart Drawer de RCA (Charla 16)
   - Construir → menú de OpenCode (Charla 20); Hermes Agent/9Router quedan como apunte de actualidad condicionado («si siguen vigentes»), no como hecho afirmado — la idea no depende de que sobrevivan
   - Comprobar → mismo spec de la 16, otro ángulo + nota ampliada: esto no es solo para código, también sirve para revisar correos/propuestas desde el punto de vista del destinatario
   - Publicar → checkpoint del Analista de RFP (Charla 19)
   - Mantener → Wiki LLM e instrucciones persistentes (Charlas 11 y 8)
7. Cierre — la frase final (nueva) + guiño al arnés mental (redacción revisada: «primero entendéis el camino, la IA os ayuda a explorarlo y recorrerlo mejor»)

## Componentes (secciones), en el orden de `page.tsx`

- `hero-section-22.tsx` — Bloque 1
- `ia-first-section-22.tsx` — Bloque 2
- `criterio-section-22.tsx` — Bloque 3
- `ejercicio-section-22.tsx` — Bloque 4
- `ciclo-section-22.tsx` — Bloque 5
- `paradas-section-22.tsx` — Bloque 6 (las seis paradas)
- `closing-section-22.tsx` — Bloque 7

> Sufijo `-22` en todas las secciones, siguiendo la convención desde la charla 19. Los nombres de fichero no cambiaron con el reordenamiento de bloques — solo el orden de import/uso en `page.tsx` y las etiquetas de los `SectionDivider`.

## Decisiones abiertas en el guion (sin cerrar aún por Juan)

- Ejemplo del Bloque 2 (antes/después, reunión con cliente nuevo) es genérico a propósito; Juan puede sustituirlo por un caso real suyo si lo prefiere.
- 6.2 y 6.4 comparten intencionalmente el mismo ejemplo (spec de la 16) visto desde dos ángulos.
- Vigencia de 9Router y Hermes Agent (parada Construir): ya tratados en la web como apunte condicionado, no como hecho — coherente con cómo lo deja el guion revisado.
- Mención al compañero en el Bloque 1 quedó deliberadamente breve en el guion (Juan no había visto esa charla al escribirlo) — no se ha incluido en la web por el mismo motivo.
- Frase descartada «el problema no es la confianza, es el hábito» — no incluida; Juan puede pedir recuperarla en el Bloque 1 o el Bloque 2.

## Límites de contenido

- Charla de hábito, no de adopción: no se dedica tiempo a convencer de que la IA funciona.
- Todos los ejemplos de las seis paradas son callbacks a charlas ya impartidas (11, 16, 19 y 20, además de la 8) — no se introduce contenido técnico nuevo.
- Sin jerga: la audiencia es ~98% no técnica.

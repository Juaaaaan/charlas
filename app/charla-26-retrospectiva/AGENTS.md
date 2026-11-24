# Charla 26 — Retrospectiva: qué hemos visto y para qué sirve cada cosa

> Contexto específico de esta charla. Las reglas transversales del proyecto (stack, diseño, cómo se añade una charla) están en el `AGENTS.md` de la raíz.

- **Ruta:** `/charla-26-retrospectiva`
- **Estado:** guion en `borrador` en el Vault (`Charlas/guiones/guion-charla-26.md`, versión v3), charla del 25 de noviembre de 2026. En el índice (`lib/charlas.ts`) va como `estado: pendiente` mientras queden textos por contrastar (ver más abajo) — confirmar cuándo pasa a `publicada`.
- **Formato:** charla de repaso (no se añade otra herramienta a la lista), sin demo en directo. ~37 min + preguntas. Audiencia ~98% no técnica.
- **Estructura:** sigue la de la charla 24 (`app/charla-NN-tema/sections/`), más una carpeta `data/` con el contenido de la dinámica.

## Objetivo

Afianzar y ordenar lo visto en la serie: que cada persona de la sala salga sabiendo, para cada pieza, **qué pregunta responde y para qué sirve**.

Tesis única: **«No hace falta recordar veinticinco charlas. Hace falta recordar qué pregunta responde cada cosa.»**

## Estructura narrativa (orden de `page.tsx`)

1. `hero-section-26.tsx` — Bloque 1: hoy no hay nada nuevo; se explica la dinámica.
2. `mapa-section-26.tsx` — Bloque 2: cuatro tramos, diez preguntas.
3. `repaso-section-26.tsx` — Bloque 3: **la dinámica del difuminado** (32 piezas, 12 preguntadas a la sala).
4. `vault-section-26.tsx` — Bloque 4: dos consultas preparadas al vault (pregunta → respuesta → fichas utilizadas → frase exacta de respaldo). La demostración se hace con capturas/ensayo, no con esta web; la pregunta sobre alucinaciones queda de reserva y no aparece aquí.
5. `biblioteca-section-26.tsx` — Bloque 5: vistazo a la Biblioteca (la web solo la describe; no enlaza a ella).
6. `closing-section-26.tsx` — Bloque 6: la chuleta de diez preguntas (generada desde los mismos datos), una acción y la frase final.

## Datos y dinámica

- **Todo el contenido de las piezas vive en `data/piezas.ts`** (tipos `Tramo`, `Pregunta`, `Pieza`, más `paradasCiclo`). Es una copia de las tablas del Bloque 3 del guion: si el guion cambia, se cambia aquí. La web no lee el Vault.
- `RepasoSection26` es un solo componente cliente con dos vistas:
  - **Pieza a pieza** (por defecto): una tarjeta con el texto `queSirve` difuminado; clic en el texto o Espacio lo revela y muestra la frase ancla de la pregunta. La pieza «El ciclo de seis paradas» muestra además la tabla «Dónde hemos estado en el ciclo» al revelarse.
  - **Pregunta completa**: todas las piezas de una pregunta a la vez, sin difuminar, con su frase ancla (para la chuleta).
- **Teclado:** `←` / `→` navegan (pieza o pregunta, según la vista) · `Espacio` o `Enter` revelan y, si ya está revelada, avanzan · `F` filtra «solo las preguntadas» (12) · `V` cambia de vista. Si un botón tiene el foco, Espacio/Enter hacen la acción nativa del botón.
- El estado de «revelada» se conserva al navegar; el botón «Difuminar todo» lo reinicia (útil para ensayar).
- Las 12 piezas con `preguntar: true` son las que se piden a la sala (45–60 s cada una); el resto se revela agrupado y directo, ~10 s por pieza. Si hay que recortar: las preguntas 3 y 6 se revelan sin pedir respuesta (el filtro «solo las preguntadas» no es el mismo recorte).
- Ritmo de la sala: en las primeras tres o cuatro piezas esperar 20–30 s; después, unos 10. Si nadie escribe, lanzar una intuición propia («yo diría que…») y seguir.

## Plan B

Si la web falla, la dinámica se hace igual con diapositivas (cada pieza con su texto que aparece al avanzar). El Bloque 4 y el Bloque 5 se ensayan antes y llevan capturas de reserva.

## Piezas con texto pendiente de contrastar (`verificar: true`)

La checklist del guion pide repasar estos textos contra su ficha de `Conceptos/`; **la web los muestra tal cual y no avisa en pantalla**. Repasarlos antes del miércoles:

| `id` | Pieza | Qué falta |
|---|---|---|
| `metadatos-okf` | Metadatos y enlaces entre fichas (OKF) | Repasar contra su ficha (charla 11). |
| `elegir-bien` | Elegir bien: cuatro decisiones | Contra la ficha de la 17. |
| `modos-de-trabajo` | Los modos de trabajo | Contra la ficha de la 17. |
| `modelos-que-razonan` | Modelos que razonan (rápido o razonador) | Contra la ficha de la 17. |
| `permisos-minimos` | Permisos mínimos | Contra la ficha de la 15. **Si no se sostiene, la pregunta 7 queda solo con MCP** (borrar la pieza de `data/piezas.ts`). |
| `copilot-studio` | Copilot Studio | Contra la ficha de la 13. |
| `metricas-de-ia` | Métricas de IA | Contra su ficha (13). |
| `ejecutor-abierto` | Ejecutor abierto (OpenCode) | Contra la ficha de la 20. |

En la v3 del guion se retiraron las piezas sin charla confirmada (memoria de agentes, planificación, modelos abiertos y cerrados, computer use, «piensa paso a paso», imagen y audio); todas las piezas actuales llevan charla.

## Qué NO decir ni mostrar

- La serie sigue (hay charla el 2 de diciembre, de un compañero): **nada de «la última del año», «hasta el año que viene», «cierre» ni fechas de 2027**. Por eso el último bloque se titula «La chuleta» y no «Cierre».
- No preguntar a la sala si «les suena» o «se repite» algo: se pregunta **qué creen que hace** cada pieza.
- «Publicar» y «Mantener» (tabla del ciclo) se describen solo como las dos paradas que hemos rozado. **No prometer fecha ni charla.**
- La Biblioteca: **no prometer fecha ni dirección**. La web no enlaza a ella ni muestra ninguna URL.
- No citar cifras de asistencia (las fichas dicen ~168, 141 y 110): sin aclarar, no se muestran.
- Falta el tema exacto de la charla 25 del compañero (el guion lo deja abierto). La web no cita el tema de la 21 ni el de la 25: el mapa solo dice que «completan el mapa por el lado de la herramienta».
- Nada de nombres de compañeros, clientes ni direcciones internas en lo que se enseñe.

## Decisiones pendientes de confirmar con Juan

- **Rama, slug y `estado`:** propuestos `feat/charla-26` (sobre `main`, que es la versión viva tras el merge de la 24), `charla-26-retrospectiva` y `pendiente`. Ninguno confirmado todavía.
- **Resumen/tema para `lib/charlas.ts`:** redactados a partir del guion — pendientes de revisión.
- **Consultas del Bloque 4:** la web muestra las dos preguntas preparadas y a qué pregunta del repaso deberían llevar. Si alguna se sustituye por la de reserva (porque la respuesta inventó o no encontró), actualizar `vault-section-26.tsx`. Comprobar en el ensayo que Copilot Desktop muestra de verdad las fichas que ha usado; si no, ese paso se hace abriendo a mano la ficha de respaldo.
- **Número de fichas en `Conceptos/`:** el guion pide confirmar 57 vs. 81 antes de enseñar cifras; la web no muestra ninguna.

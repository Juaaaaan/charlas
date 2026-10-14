# Charla 18 — Abriendo la caja: cómo piensa la IA por dentro (con datos en la mano)

> Contexto específico de esta charla. Las reglas transversales del proyecto (stack, diseño, cómo se añade una charla) están en el `AGENTS.md` de la raíz.

- **Ruta:** `/charla-18-como-piensa-ia`
- **Estado:** borrador — pendiente de revisión y ensayo de demo (en el índice va como `publicada` para que enlace desde la home; cambiar a `pendiente` si se prefiere «Próximamente» hasta ensayar la demo).
- **Formato:** transversal pero un peldaño más adentro. **Demo en vivo** sobre un Excel de proyecto real (con capturas de respaldo), ~51 min + preguntas. Cambio de registro respecto a la 17 (solo teoría + capturas). Un único fichero, dos herramientas.

## Objetivo

Tras aprender a *elegir* bien la IA (Charla 17), abrir la tapa y enseñar **cómo piensa por dentro**, sin una línea de código. No es un notebook ni «construir IA»: es el modelo mental que hace que todo lo de la 17 salga mejor. La misión pedagógica manda: técnica de verdad, pero sin código. Cuatro mecanismos internos, cada uno **visto ocurrir** sobre datos reales:

- mecanismo 1: predice el patrón más probable (autocompletar con esteroides)
- mecanismo 2: busca por significado — embeddings (el fotograma de la charla)
- mecanismo 3: el peligro se ha movido — con la fuente delante resiste (sabe decir «no lo tengo»); alucina sin fuente, con modelo flojo o si le cuelas una premisa falsa
- mecanismo 4: la ventana de contexto se llena (la mesa de tamaño fijo)
- meta-hilo: el salto deliberado Copilot-en-Excel ↔ chatbot es un guiño a la brújula de la 17

## Estructura narrativa (orden de `page.tsx`)

1. Hero — Abriendo la caja (gancho + el Excel + las 4 preguntas que son el mapa)
2. Bloque 1 — Mecanismo 1: predice el patrón (Copilot en Excel)
3. Bloque 2 — Mecanismo 2: busca por significado / embeddings (Excel + mapa)
4. Bloque 3 — Mecanismo 3: alucina… ¿o ya no? El peligro se ha movido (3A resiste con la fuente delante · 3B dónde sigue fallando)
5. Bloque 4 — Mecanismo 4: la ventana de contexto se llena (chatbot)
6. Bloque 5 — Qué se lleva cada rol
7. Cierre — El kit del lunes (4 respuestas) + el círculo con la 17

Frases que deben quedar (respetar salvo rediseño consciente):

- Hero: «No os pido que os creáis cómo funciona. Os lo voy a enseñar pasando, en directo, sobre este Excel.»
- Bloque 1: «La IA no entiende: predice el patrón más probable. Por eso cómo le preguntáis no es un detalle — es lo que decide lo que os devuelve.»
- Bloque 2: «La IA no busca palabras, busca significados... por eso os entiende aunque cambiéis las palabras, y encuentra el documento bueno.»
- Bloque 3: «En 2026 el peligro se ha movido: con la fuente delante, un buen modelo sabe decir «no lo tengo». Alucina cuando le quitas la fuente o le cuelas una premisa falsa — ahí es donde hay que mirar.»
- Bloque 4: «La IA no recuerda: mantiene delante lo que le cabe. En cuanto se llena la mesa, lo viejo se cae — y puede rellenarlo inventando.»
- Bloque 5: «No hace falta programar para entender la máquina. Y entenderla un poco es lo que hace que os devuelva el doble.»
- Cierre: «La próxima vez que la IA os deslumbre o os falle, ya no será magia. Sabréis qué mecanismo está funcionando por debajo.»

## Componentes (secciones), en el orden de `page.tsx`

- `hero-section-18.tsx` — Hero / las 4 preguntas
- `prediccion-section.tsx` — Bloque 1 (mecanismo 1)
- `embeddings-section.tsx` — Bloque 2 (mecanismo 2; incluye el mapa SVG ilustrativo)
- `alucinaciones-section.tsx` — Bloque 3 (mecanismo 3: 3A resiste las trampas con la fuente delante + el remate «no he alucinado» · 3B dónde sigue fallando hoy)
- `contexto-section.tsx` — Bloque 4 (mecanismo 4; la mesa)
- `roles-section-18.tsx` — Bloque 5
- `closing-section-18.tsx` — Cierre

> Nota de migración: igual que el resto de la serie, estas secciones viven en `components/sections/`. Pendiente de mover a `app/charla-18-como-piensa-ia/sections/` en la limpieza general.

> Nota sobre el mapa de embeddings: el `EmbeddingsSection` lleva una **ilustración SVG del concepto** (islas por significado + el par «misma idea, otras palabras»), no el `mapa-embeddings-riesgos.png` pre-cocinado del Vault. Ese PNG es el que se proyecta en directo; la web usa una ilustración fiel autocontenida. Si se quiere usar el PNG real, sustituir el `<svg>` por un `<Image>`.

## Antes de proyectar (verificar)

- **Fichero Excel listo** (`proyecto-anual-gestion.xlsx`) — 5 hojas + Gantt, fórmulas OK, plan a un año.
- **Copilot en Excel operativo** — licencia premium confirmada; probar el día antes en la máquina de la demo (no fiarlo al directo).
- **Mapa de embeddings pre-cocinado** (`mapa-embeddings-riesgos.png`) listo para el directo — la web ya trae su propia ilustración.
- **Chatbot general elegido** (el aprobado internamente) para los bloques 3 y 4, con la tabla ya a mano.
- **Bloque 3 reenfocado («el peligro se ha movido»)**: trampas de tabla listas (migración a la nube, ID T40, premisa falsa) para mostrar que RESISTE en vivo; captura pre-cocinada de una alucinación sin fuente (cita de nicho, modelo flojo); y captura del propio mensaje de la IA reconociendo que no alucinó. Confirmar que nada de eso aparece en el plan, para que el contraste sea limpio.
- **Capturas de respaldo** de los cuatro mecanismos por si el modelo se pone tonto ese día.
- **Slide de las 4 preguntas** — se repite en apertura y cierre (el Hero y el Cierre de la web ya lo reflejan).

## Límites de contenido

- El Gantt / el Excel es **escenografía** (el gancho de apertura), NO un quinto mecanismo: que no se coma el foco de los cuatro.
- Sin código y sin abstracción: cada mecanismo se ve ocurrir sobre datos reales; los datos son la linterna.
- Embeddings y alucinaciones ya están en la biblioteca del Vault; aquí entran **vistos ocurrir**, no explicados desde cero. Alucinación y predicción son el mismo mecanismo — mantener esa conexión.

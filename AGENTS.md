# AGENTS.md

## Proposito del proyecto

Esta web sustituye a unas diapositivas para una charla interna sobre IA generativa orientada a negocio y tecnologia para una audiencia amplia dentro de la empresa.

La experiencia debe servir como apoyo visual a una exposicion de unos 20 minutos. Tiene que funcionar bien proyectada en directo, con mensajes muy jerarquizados, bloques grandes y ritmo claro, sin parecer una landing comercial ni un articulo largo.

## Charla actual

La charla activa es:

`Charla 6 - Context Engineering`

El foco no es repetir prompt engineering ni vender herramientas. El objetivo es ayudar a la audiencia a entender con criterio:

- que context engineering va mas alla de escribir un prompt estructurado
- como decidir que informacion necesita ver la IA para resolver una tarea
- como estructurar objetivo, instrucciones, datos, ejemplos, restricciones y validacion
- como aterrizarlo en repositorios y GitHub Copilot
- que riesgos aparecen con contexto excesivo, obsoleto, contradictorio o sensible

## Estructura narrativa vigente

La web debe seguir esta narrativa salvo decision consciente de rediseño:

1. Hero / portada
2. Bloque 1 - Mas alla del prompt
3. Bloque 2 - Disenar contexto util
4. Bloque 3 - Contexto para desarrolladores y GitHub Copilot
5. Cierre

## Guion editorial por bloques

### Bloque 1 - Mas alla del prompt

Debe cubrir de forma clara y visual:

- que ya se ha hablado antes de prompt estructurado: rol, contexto, tarea, especificaciones, formato y ejemplos
- que esta charla no debe repetir esa base, sino subir de escala
- que el prompt es una pieza del sistema, no el sistema completo
- que context engineering diseña que informacion entra, de donde viene, que autoridad tiene, cuanto dura y como se valida
- que hay contexto de peticion, de sesion y de sistema/proceso

Idea de cierre del bloque:

`La pregunta deja de ser solo que le digo a la IA. Pasa a ser que necesita ver para resolver bien esta tarea.`

Transicion esperada al bloque 2:

`El siguiente reto es disenar ese contexto sin meter ruido.`

### Bloque 2 - Disenar contexto util

Debe explicar de forma sencilla:

- definir la tarea real antes de buscar informacion
- separar instrucciones de datos
- priorizar fuentes fiables, recientes y aprobadas
- ordenar objetivo, reglas, fuentes, datos y formato esperado
- pedir trazabilidad cuando importe
- mantener control humano en decisiones relevantes

Idea de cierre del bloque:

`Mas contexto no significa mejor contexto. La calidad esta en la relevancia, la estructura y la autoridad.`

### Bloque 3 - Contexto para desarrolladores y GitHub Copilot

Debe aterrizar de forma practica:

- que en desarrollo el contexto vive en el repositorio
- que GitHub Copilot funciona mejor cuando el repo explica stack, convenciones, comandos y limites
- que `README.md` explica proyecto, ejecucion y estructura
- que `.github/copilot-instructions.md` contiene instrucciones generales para Copilot
- que `.github/instructions/*.instructions.md` puede contener reglas por ruta, lenguaje o tipo de tarea
- que `.github/prompts/*.prompt.md` puede guardar prompts reutilizables
- que `AGENTS.md`, `CONTRIBUTING.md`, `ARCHITECTURE.md`, `SECURITY.md` y `docs/adr/*.md` convierten conocimiento tribal en contexto versionado

Idea de cierre del bloque:

`Si el repositorio no explica como se trabaja, Copilot improvisa mas.`

### Cierre

Debe reforzar tres ideas memorables y cerrar la charla:

1. El prompt no es el sistema.
2. Mas contexto no significa mejor contexto.
3. En desarrollo, el repositorio tambien habla con la IA.
4. El valor esta en saber que necesita saber la IA, de que fuentes puede fiarse y como validamos lo que devuelve.

## Objetivo editorial

La charla debe ayudar a perfiles funcionales y tecnicos a construir una base comun sobre como disenar el contexto que rodea a una IA y decidir cuando ese contexto esta ayudando realmente a la tarea.

No es el lugar para profundizar todavia en:

- entrenamiento o fine-tuning avanzado
- despliegues productivos complejos
- arquitecturas RAG avanzadas
- comparativas extensas entre herramientas de IA
- tutoriales detallados de GitHub Copilot

## Criterios de contenido

- Todo el contenido debe estar en espanol.
- Priorizar claridad sobre hype.
- Evitar claims grandilocuentes o absolutos.
- Evitar bloques de texto largos.
- Cada seccion debe sostener la exposicion con pocos mensajes, bien jerarquizados.
- Siempre que se hable de IA, aterrizar en:
  - que parte del trabajo hace
  - como encaja en el proceso
  - que sigue necesitando control humano
  - donde aporta valor real
- Priorizar ejemplos y formulaciones validas para una audiencia amplia de empresa, no solo para un area concreta.

## Criterios de diseno

- Debe sentirse como una charla premium y sobria.
- Priorizar legibilidad en proyector:
  - titulares claros
  - bloques visuales grandes
  - poco texto por tarjeta
  - contraste alto
- Las animaciones deben acompanar la exposicion, no distraer.
- Mantener lenguaje visual oscuro con acentos azules salvo rediseño consciente.
- Evitar widgets o interaccion compleja si no aporta valor durante la charla.
- Reutilizar componentes y estructura existentes antes de crear piezas nuevas.

## Stack y ejecucion

- Framework: Next.js 16 con App Router
- Lenguaje: TypeScript
- Estilos: Tailwind CSS v4 con variables CSS en `app/globals.css`
- Animaciones: Framer Motion
- UI base disponible: `components/ui/*`

Comandos utiles:

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npx tsc --noEmit`

## Estructura relevante

- `app/layout.tsx`: metadata global, fuentes y shell HTML
- `app/page.tsx`: orden completo de la charla
- `app/globals.css`: tokens visuales globales, colores, tipografia y tema
- `components/section-divider.tsx`: separador entre bloques
- `components/sections/*.tsx`: cada bloque narrativo vive en un archivo independiente

## Componentes activos

- `components/sections/hero-section.tsx`
- `components/sections/ai-foundations-section.tsx`
- `components/sections/token-context-section.tsx`
- `components/sections/prompt-section.tsx`
- `components/sections/closing-section.tsx`

## Secciones legacy

Existen componentes antiguos como `why-now-section.tsx`, `what-is-ai-section.tsx`, `model-llm-section.tsx`, `how-llm-works-section.tsx`, `limitations-section.tsx`, `use-cases-section.tsx` o `series-roadmap-section.tsx`.

`components/sections/copilot-workflow-section.tsx` existe, pero ahora mismo queda fuera del flujo principal porque no forma parte de la charla activa.

Ahora mismo no forman parte del flujo principal. No deben reintroducirse en `app/page.tsx` salvo decision consciente.

## Como editar

- Si cambia el mensaje de una seccion, edita su archivo en `components/sections/`.
- Si cambia el flujo narrativo, actualiza `app/page.tsx`.
- Si anades una seccion nueva, sigue el patron actual:
  - componente aislado
  - `min-h-screen` cuando aplique o bloque con gran presencia vertical
  - padding vertical amplio
  - fondo con gradiente suave
  - entrada animada con `whileInView`
  - insercion en `app/page.tsx` con `SectionDivider` cuando encaje

## Convenciones practicas

- Usar imports con alias `@/`.
- Mantener componentes de seccion autocontenidos.
- Si una seccion necesita listas de tarjetas, preferir arrays locales y `map`.
- No introducir estado si la seccion es puramente expositiva.
- Si se toca tipografia, espaciado o colores globales, hacerlo desde `app/globals.css`.

## Puntos de atencion

- Si se corrige copy, guardar siempre en UTF-8 y revisar que no aparezca mojibake.
- `app/layout.tsx` debe mantenerse con `lang="es"`.
- Si `next build` falla por bloqueo de `.next/trace`, revisar si hay un `next dev` abierto o algun proceso `node` usando `.next`.
- El nombre visible de la charla y la documentacion deben mantenerse alineados entre `AGENTS.md`, `app/layout.tsx` y `components/sections/hero-section.tsx`.

## Que haria un agente antes de tocar nada

1. Leer `app/page.tsx` para entender el orden narrativo actual.
2. Leer la seccion concreta que va a cambiar.
3. Confirmar si el cambio es editorial, visual o de ritmo.
4. Tocar lo minimo necesario para mantener coherencia entre bloques.
5. Verificar la web en local si el cambio afecta layout, animaciones o copy visible.

# AGENTS.md

## Proposito del proyecto

Esta web sustituye a unas diapositivas para una charla interna sobre IA generativa orientada a negocio y tecnologia dentro de una division de Seguros.

La experiencia debe servir como apoyo visual a una exposicion de unos 30 minutos. Tiene que funcionar bien proyectada en directo, con mensajes muy jerarquizados, bloques grandes y ritmo claro, sin parecer una landing comercial ni un articulo largo.

## Charla actual

La charla activa es:

`Charla 3 - Workflows de IA`

El foco no es vender herramientas ni hacer una demo aislada. El objetivo es ayudar a la audiencia a entender con criterio:

- como evolucionar desde un chat puntual hasta un workflow bien disenado
- por que un proceso bien dividido da mejores resultados que una conversacion aislada
- como repartir trabajo entre persona, prompt, agente y herramientas
- que papel tiene la orquestacion en la calidad, trazabilidad y reutilizacion
- como cerrar la parte conceptual antes de pasar a una demo en vivo

## Estructura narrativa vigente

La web debe seguir esta narrativa salvo decision consciente de rediseño:

1. Hero / portada
2. Bloque 1 - Del chat al workflow
3. Bloque 2 - Pensar el proceso
4. Bloque 3 - Orquestar agentes
5. Cierre

## Guion editorial por bloques

### Bloque 1 - Del chat al workflow

Debe cubrir de forma clara y visual:

- que el uso habitual empieza en un chat y por que eso tiene limites rapidos
- como mejora el resultado cuando pasamos de preguntar a estructurar prompts
- cuando tiene sentido crear un agente con una funcion mas estable
- por que el siguiente salto es orquestar varios pasos dentro de un workflow
- que esta evolucion aumenta control, claridad y consistencia

Idea de cierre del bloque:

`La evolucion natural con IA va del chat al prompt, del prompt al agente y del agente al workflow.`

Transicion esperada al bloque 2:

`Si queremos que la IA ayude de verdad, primero tenemos que pensar bien el proceso.`

### Bloque 2 - Pensar el proceso

Debe explicar de forma sencilla:

- que un workflow empieza por definir objetivo, entradas, pasos y criterio de salida
- por que dividir una tarea compleja en etapas mejora control y calidad
- que una mala secuencia arrastra errores aunque el modelo sea bueno
- como identificar dependencias, validaciones y puntos de decision humana
- ejemplos breves aplicados a Seguros: normativa, siniestros, polizas o seguimiento interno

Idea de cierre del bloque:

`Muchas veces el problema no es la herramienta. Es que el proceso todavia no esta bien pensado.`

### Bloque 3 - Orquestar agentes

Debe aterrizar de forma practica:

- que no todo lo tiene que hacer el mismo agente ni la misma persona
- como distinguir entre tareas de leer, resumir, comparar, redactar y revisar
- cuando conviene usar un agente unico y cuando conviene repartir funciones
- importancia del control humano en decisiones, riesgos y tono final
- errores tipicos: pedir todo de golpe, mezclar fases o no definir responsable de revision

Idea de cierre del bloque:

`Orquestar bien no es automatizarlo todo. Es repartir cada tarea donde tiene mas sentido.`

### Cierre

Debe reforzar tres ideas memorables:

1. La IA aporta mas valor cuando se integra en un proceso, no cuando se usa como truco puntual.
2. La calidad depende mucho de como se divide, secuencia y revisa el trabajo.
3. Orquestar bien significa combinar contexto, fases, herramientas y control humano.
4. La demo viene despues: la presentacion debe dejar preparado el criterio para entenderla.

## Objetivo editorial

La charla debe ayudar a perfiles funcionales y tecnicos a construir una base comun sobre como disenar workflows de IA aplicables a la empresa.

No es el lugar para profundizar todavia en:

- arquitecturas multiagente complejas
- integraciones tecnicas avanzadas
- automatizaciones end-to-end de alto riesgo
- comparativas extensas entre proveedores

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
- En el contexto de Seguros, priorizar ejemplos breves y utiles sobre:
  - polizas
  - siniestros
  - normativa
  - procedimientos internos
  - comunicaciones con cliente

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

`components/sections/copilot-workflow-section.tsx` existe, pero ahora mismo queda fuera del flujo principal porque el ejemplo se ensena despues en demo en vivo.

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

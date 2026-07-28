# AGENTS.md

## Proposito del proyecto

Esta web sustituye a unas diapositivas para una charla interna sobre IA generativa orientada a negocio y tecnologia para una audiencia amplia dentro de la empresa.

La experiencia debe servir como apoyo visual a una exposicion de unos 20 minutos. Tiene que funcionar bien proyectada en directo, con mensajes muy jerarquizados, bloques grandes y ritmo claro, sin parecer una landing comercial ni un articulo largo.

## Charla actual

La charla activa es:

`Charla 14 - Gobernanza de IA`

El foco no es hacer una charla juridica ni un manual de compliance. El objetivo es que la audiencia entienda con criterio:

- que el Shadow AI no nace de mala fe, nace de falta de reglas claras
- que no toda IA tiene el mismo riesgo (marco del EU AI Act traducido a ejemplos)
- que la gobernanza no pesa igual para cada rol de la empresa
- que existe una politica accionable que responde a cuatro preguntas practicas
- que ya hay dentro de la empresa una forma de medir el nivel de madurez en gobernanza (framework de 8 dimensiones)

## Estructura narrativa vigente

La web debe seguir esta narrativa salvo decision consciente de rediseño:

1. Hero - Gobernanza de IA (agenda de la charla)
2. Bloque 1 - Casos reales de falta de gobernanza (Samsung, Air Canada, autoridad italiana)
3. Bloque 2 - Niveles de riesgo del EU AI Act + ejercicio interactivo de clasificacion
4. Bloque 3 - Que significa la gobernanza segun tu rol (developer, comercial, RRHH, management)
5. Bloque 4 - La politica de uso punto por punto con casos aplicados
6. Bloque 5 + Cierre - Autoevaluacion con el framework de 8 dimensiones, tres ideas y checklist accionable

## Guion editorial por bloques

### Hero - Agenda

Debe mostrar los cuatro bloques principales como tarjetas y cerrar con la idea de que el Shadow AI no es mala fe, es falta de reglas claras.

Idea de cierre del bloque:

`El Shadow AI no es mala fe. Es falta de reglas claras. Hoy las damos.`

### Bloque 1 - Casos reales

Tres casos publicos y verificables que muestren lo que cuesta la falta de gobernanza: Samsung (2023, codigo fuente en ChatGPT), Air Canada (2024, responsabilidad del chatbot en tribunal) y la autoridad italiana (2023, bloqueo temporal de ChatGPT). Cada caso lleva un takeaway corto.

Idea de cierre del bloque:

`No hubo mala fe. Hubo falta de reglas claras. Gobernar antes es mucho mas barato que gobernar despues.`

### Bloque 2 - Niveles de riesgo

Las cuatro categorias del EU AI Act (inaceptable, alto, limitado, minimo) traducidas a ejemplos cotidianos y aplicadas al sector. Cierra con un ejercicio de cinco casos que la audiencia clasifica en voz alta antes de revelar la respuesta.

Idea de cierre del bloque:

`La pregunta no es "puedo usar IA". Es "que esta en juego si me equivoco".`

### Bloque 3 - Segun tu rol

Cuatro roles tipo de la sala (developer, comercial, RRHH, management) y que le toca vigilar especialmente a cada uno. Conecta con las dimensiones 2, 5, 7 y 8 del framework de madurez.

Idea de cierre del bloque:

`La gobernanza no es un documento que lee una persona de compliance. Es una responsabilidad repartida.`

### Bloque 4 - La politica, punto por punto

Cuatro preguntas practicas:

1. Que datos puedo compartir con que herramienta (tabla comparativa IA publica / IA corporativa)
2. Que herramientas estan aprobadas (listado interno pendiente de completar)
3. Quien revisa el output antes de que llegue a un cliente (tabla por tipo de output)
4. Que hacer si algo ya ha salido mal (canal de escalado interno pendiente de completar)

Cada punto lleva uno o dos casos aplicados reales o realistas.

Idea de cierre del bloque:

`Una politica no existe para frenaros. Existe para que sepais que hacer sin tener que adivinarlo.`

### Bloque 5 + Cierre - Autoevaluacion y tres ideas

Recuerdo rapido de la escala 0-4 del framework interno. Dos senales de interpretacion clave: score bajo en Dim. 7 = formacion urgente; score alto en Dim. 8 = candidato a champion. Cierra con tres ideas para llevarse y un checklist accionable de cuatro puntos.

Idea de cierre final:

`La semana pasada aprendimos a medir. Hoy hemos aprendido a poner las reglas.`

## Objetivo editorial

La charla debe dar a la audiencia un marco compartido para usar la IA con criterio dentro de la empresa, aterrizado en casos concretos y en una politica accionable que puedan aplicar al dia siguiente. No es una sesion tecnica ni una clase de derecho.

No es el lugar para profundizar todavia en:

- detalle articulado del EU AI Act, ISO 42001 o NIST AI RMF (queda referenciado como lectura)
- configuraciones tecnicas de DLP o auditoria
- casos internos concretos sin haberlos anonimizado antes
- politicas de otros marcos regulatorios (SOX, GDPR, etc.) mas alla de mencionarlos

## Contenido pendiente de completar antes de la charla

Antes del miercoles hay que revisar los ficheros internos de la empresa sobre gobernanza de IA y sustituir los marcadores `TODO` visibles en:

- `components/sections/politica-uso-section.tsx` (herramientas aprobadas, matriz de datos, canal de escalado)
- `components/sections/niveles-riesgo-section.tsx` (ejemplo real del sector banca/seguros en la tabla y el ejercicio)

Si algun matiz interno cambia la narrativa, actualizar tambien el bloque afectado del guion arriba.

## Criterios de contenido

- Todo el contenido debe estar en espanol.
- Priorizar claridad sobre hype.
- Evitar claims grandilocuentes o absolutos.
- Evitar bloques de texto largos.
- Cada seccion debe sostener la exposicion con pocos mensajes, bien jerarquizados.
- Todos los casos y ejemplos deben ser verificables o marcarse claramente como hipoteticos.
- Cuando se cite una empresa o un caso, incluir el ano.

## Criterios de diseno

- Debe sentirse como una charla premium y sobria.
- Priorizar legibilidad en proyector:
  - titulares claros
  - bloques visuales grandes
  - poco texto por tarjeta
  - contraste alto
- Las animaciones deben acompanar la exposicion, no distraer.
- Mantener lenguaje visual oscuro con acentos azules salvo rediseño consciente.
- Usar el color destructive con moderacion, reservado para senales de alerta (nivel de riesgo inaceptable, score bajo en gobernanza, "Nunca" en la matriz de datos).
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

- `components/sections/hero-section-14.tsx` - Hero: agenda de la charla
- `components/sections/casos-reales-section.tsx` - Bloque 1: casos reales
- `components/sections/niveles-riesgo-section.tsx` - Bloque 2: niveles de riesgo + ejercicio
- `components/sections/segun-rol-section.tsx` - Bloque 3: gobernanza segun rol
- `components/sections/politica-uso-section.tsx` - Bloque 4: politica de uso punto por punto
- `components/sections/closing-section-14.tsx` - Bloque 5 + cierre

## Secciones legacy

Existen componentes de charlas anteriores (`hero-section-13.tsx`, `copilot-studio-section.tsx`, `demo-section-13.tsx`, `metrics-section.tsx`, `closing-section-13.tsx`, `hero-section-concept.tsx`, `ai-fundations-section-concepts.tsx`, `token-context-section.tsx`, `prompt-section-concept.tsx`, `closing-section-concept.tsx`, y otros mas antiguos como `why-now-section.tsx`, `what-is-ai-section.tsx`, `model-llm-section.tsx`, `how-llm-works-section.tsx`, `limitations-section.tsx`, `use-cases-section.tsx`, `series-roadmap-section.tsx`, `ai-evolution-section.tsx`, `copilot-workflow-section.tsx`).

No forman parte del flujo principal. No deben reintroducirse en `app/page.tsx` salvo decision consciente.

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
- El nombre visible de la charla y la documentacion deben mantenerse alineados entre `AGENTS.md`, `app/layout.tsx` y `components/sections/hero-section-14.tsx`.

## Que haria un agente antes de tocar nada

1. Leer `app/page.tsx` para entender el orden narrativo actual.
2. Leer la seccion concreta que va a cambiar.
3. Confirmar si el cambio es editorial, visual o de ritmo.
4. Tocar lo minimo necesario para mantener coherencia entre bloques.
5. Verificar la web en local si el cambio afecta layout, animaciones o copy visible.

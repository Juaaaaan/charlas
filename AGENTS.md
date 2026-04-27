# AGENTS.md

## Proposito del proyecto

Esta web sustituye a unas diapositivas para una charla interna sobre IA generativa orientada a negocio y tecnologia dentro de una division de Seguros.

La experiencia debe servir como apoyo visual a una exposicion de unos 30 minutos. Tiene que funcionar bien proyectada en directo, con mensajes muy jerarquizados, bloques grandes y ritmo claro, sin parecer una landing comercial ni un articulo largo.

## Charla actual

La charla activa es:

`Charla 1 - Fundamentos practicos de la IA generativa`

El foco no es vender herramientas ni hablar de hype. El objetivo es ayudar a la audiencia a entender con criterio:

- que es la IA generativa
- que estamos usando realmente cuando usamos un chat de IA
- como funciona por dentro a alto nivel
- por que tokens y contexto importan tanto
- como pedir mejor mediante prompting

## Estructura narrativa vigente

La web debe seguir esta narrativa salvo decision consciente de rediseño:

1. Hero / portada
2. Bloque 1 - Que es la IA generativa y que estamos usando realmente
3. Bloque 2 - Tokenizacion y contexto: como funciona por dentro
4. Bloque 3 - Prompting: como pedir bien
5. Cierre

## Guion editorial por bloques

### Bloque 1 - Que es la IA generativa y que estamos usando realmente

Debe cubrir de forma clara y visual:

- que la IA generativa crea contenido nuevo a partir de instrucciones
- por que su adopcion se ha disparado
- que puede generar y por que eso cambia las reglas
- que es un modelo generativo
- que es un LLM
- como genera respuestas realmente: prediccion secuencial de texto
- que hace bien y cuales son sus limites
- diferencia entre LLM y producto
- oportunidades reales en empresa y en Seguros

Idea de cierre del bloque:

`La IA generativa no es magia ni un unico producto. Es una tecnologia basada en modelos que aporta valor si entendemos bien que estamos usando y que limites tiene.`

Transicion esperada al bloque 2:

`Si ya entendemos que estamos usando, la siguiente pregunta es como funciona por dentro.`

### Bloque 2 - Tokenizacion y contexto

Debe explicar de forma sencilla:

- que un modelo no ve palabras como una persona, sino tokens
- por que la tokenizacion afecta coste, velocidad y calidad
- que es la ventana de contexto
- que elementos forman realmente el contexto
- por que el contexto condiciona la calidad de salida
- como se relacionan mal contexto y alucinaciones
- ejemplo comparativo entre mal contexto y buen contexto

Idea de cierre del bloque:

`Muchas veces mejorar la salida no consiste en cambiar de modelo, sino en disenar mejor la entrada.`

### Bloque 3 - Prompting

Debe aterrizar de forma practica:

- que un prompt es una instruccion, no solo una pregunta
- estructura util: rol, contexto, tarea, restricciones y formato de salida
- importancia de definir bien la tarea principal
- utilidad de restricciones y formato
- cuando usar ejemplos: zero-shot, one-shot y few-shot
- errores tipicos al hacer prompting
- comparativa antes y despues de mejorar un prompt

Idea de cierre del bloque:

`Prompting no es hablar bonito con la IA. Es disenar bien la instruccion para obtener una salida util, consistente y reutilizable.`

### Cierre

Debe reforzar tres ideas memorables:

1. La IA generativa no es magia: es una tecnologia real que ya puede aportar valor.
2. La calidad de la respuesta depende en gran parte del contexto.
3. Prompting es disenar instrucciones utiles, no improvisar preguntas.

## Objetivo editorial

La charla debe ayudar a perfiles funcionales y tecnicos a construir una base comun sobre IA generativa aplicable a la empresa.

No es el lugar para profundizar todavia en:

- agentes complejos
- arquitecturas avanzadas
- automatizaciones sofisticadas
- comparativas extensas entre proveedores

## Criterios de contenido

- Todo el contenido debe estar en espanol.
- Priorizar claridad sobre hype.
- Evitar claims grandilocuentes o absolutos.
- Evitar bloques de texto largos.
- Cada seccion debe sostener la exposicion con pocos mensajes, bien jerarquizados.
- Siempre que se hable de IA, aterrizar en:
  - que es
  - como funciona a alto nivel
  - que no hace
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

Ahora mismo no forman parte del flujo principal. No deben reintroducirse en `app/page.tsx` salvo decision consciente.

## Como editar

- Si cambia el mensaje de una seccion, edita su archivo en `components/sections/`.
- Si cambia el flujo narrativo, actualiza `app/page.tsx`.
- Si anades una seccion nueva, sigue el patron actual:
  - componente aislado
  - `min-h-screen`
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
- La carpeta no esta inicializada como repositorio Git: no asumir `git status`, ramas o commits.
- Si `next build` falla por bloqueo de `.next/trace`, revisar si hay un `next dev` abierto o algun proceso `node` usando `.next`.

## Que haria un agente antes de tocar nada

1. Leer `app/page.tsx` para entender el orden narrativo actual.
2. Leer la seccion concreta que va a cambiar.
3. Confirmar si el cambio es editorial, visual o de ritmo.
4. Tocar lo minimo necesario para mantener coherencia entre bloques.
5. Verificar la web en local si el cambio afecta layout, animaciones o copy visible.

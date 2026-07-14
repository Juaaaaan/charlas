# AGENTS.md

## Proposito del proyecto

Esta web sustituye a unas diapositivas para una charla interna sobre IA generativa orientada a negocio y tecnologia para una audiencia amplia dentro de la empresa.

La experiencia debe servir como apoyo visual a una exposicion de unos 20 minutos. Tiene que funcionar bien proyectada en directo, con mensajes muy jerarquizados, bloques grandes y ritmo claro, sin parecer una landing comercial ni un articulo largo.

## Charla actual

La charla activa es:

`Charla 12 - El mapa de la IA`

El foco no es presentar contenido nuevo aislado, sino dar un marco de cuatro niveles de madurez que conecta todo lo visto en charlas anteriores (SDD, Skills, Wiki LLM, agentes developer/reviewer, RAG con el vault) y muestra hacia donde va la IA a corto plazo. El objetivo es que la audiencia entienda:

- que ya tiene una base solida construida en las charlas previas (Nivel 1)
- diez conceptos intermedios de vocabulario de IA, con ejemplos de su trabajo diario (Nivel 2)
- que ya esta trabajando en un nivel avanzado sin saberlo: agentic workflows, memoria, knowledge graphs, orquestacion y defensa ante prompt injection (Nivel 3)
- hacia donde se dirige la IA a 12-18 meses: computer use, reasoning models, agentes de codigo autonomos y gobernanza (Nivel 4)

## Estructura narrativa vigente

La web debe seguir esta narrativa salvo decision consciente de rediseño:

1. Hero - El mapa de los cuatro niveles
2. Nivel 1 - Lo que ya habeis construido (repaso relampago)
3. Nivel 2 - Los 10 conceptos que os faltan
4. Nivel 3 - El momento wow (ya estais aqui)
5. Nivel 4 + Cierre - Hacia donde va esto y tres ideas finales

## Guion editorial por bloques

### Hero - El mapa

Debe mostrar los cuatro niveles como tarjetas de agenda (Nivel 1 Fundamentos, Nivel 2 Intermedios, Nivel 3 Avanzados, Nivel 4 Frontera) y cerrar con la idea de que no hace falta saber como esta hecho el motor para saber conducir, pero ayuda saber en que marcha se esta.

### Nivel 1 - Lo que ya habeis construido

Repaso relampago de la base ya construida en charlas anteriores: SDD, Skills, Wiki LLM + OKF y el arnes completo que las conecta. No se profundiza, solo se ancla como punto de partida.

Idea de cierre del bloque:

`Esto ya lo teneis. No hace falta repetirlo. Es la base sobre la que se construye todo lo demas.`

### Nivel 2 - Los 10 conceptos que os faltan

Diez conceptos con icono, descripcion breve y frase de cierre (takeaway), todos con ejemplo ligado al trabajo diario o a una charla anterior: system prompt, context engineering, RAG, embeddings, function calling, temperature, chain-of-thought, multimodal, structured output y context window management.

Idea de cierre del bloque:

`El vocabulario importa. Diez conceptos, un objetivo: que sepais que palanca tocar.`

### Nivel 3 - El momento wow

Revela que la audiencia ya lleva semanas trabajando en el Nivel 3 sin saberlo: agentic workflows (Charla 8), memory corto/largo plazo (Charla 11), knowledge graphs (Charla 8 bonus), orchestration patterns (Supervisor Pattern) y prompt injection (bloqueado por Copilot en una prueba real).

Idea de cierre del bloque:

`El Nivel 3 no es algo que tengais que alcanzar. Es algo que ya estais haciendo.`

### Nivel 4 + Cierre - Hacia donde va esto

Frontera a 12-18 meses: computer use, reasoning models, autonomous coding agents y AI Governance (EU AI Act). Cierra con tres ideas para llevarse y la frase final sobre tener el mapa completo.

Idea de cierre del bloque:

`El Nivel 4 no es el futuro. Es el presente de los que van un paso por delante.`

## Objetivo editorial

La charla debe dar a la audiencia un marco compartido para situar cualquier concepto de IA que escuchen en el futuro, y reforzar que ya estan mas avanzados de lo que creen.

No es el lugar para profundizar todavia en:

- implementacion tecnica detallada de cada concepto del Nivel 2
- arquitecturas RAG o de agentes a nivel de codigo
- comparativas extensas de modelos o proveedores
- detalle legal exhaustivo del EU AI Act

## Criterios de contenido

- Todo el contenido debe estar en espanol.
- Priorizar claridad sobre hype.
- Evitar claims grandilocuentes o absolutos.
- Evitar bloques de texto largos.
- Cada seccion debe sostener la exposicion con pocos mensajes, bien jerarquizados.
- Siempre que se hable de un concepto del Nivel 2, cerrar con una frase corta y memorable (takeaway).
- Anclar cada concepto avanzado a una charla o demo real ya vista, no a teoria abstracta.

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

- `components/sections/hero-section.tsx` - Hero: el mapa de los cuatro niveles
- `components/sections/ai-foundations-section.tsx` - Nivel 1: repaso relampago
- `components/sections/token-context-section.tsx` - Nivel 2: los 10 conceptos
- `components/sections/prompt-section.tsx` - Nivel 3: el momento wow
- `components/sections/closing-section.tsx` - Nivel 4 + cierre

## Secciones legacy

Existen componentes antiguos como `why-now-section.tsx`, `what-is-ai-section.tsx`, `model-llm-section.tsx`, `how-llm-works-section.tsx`, `limitations-section.tsx`, `use-cases-section.tsx`, `series-roadmap-section.tsx` o `ai-evolution-section.tsx`.

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

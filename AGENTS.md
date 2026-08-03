# AGENTS.md

## Proposito del proyecto

Esta web sustituye a unas diapositivas para una charla interna sobre IA generativa orientada a negocio y tecnologia para una audiencia amplia dentro de la empresa.

La experiencia debe servir como apoyo visual a una exposicion. Tiene que funcionar bien proyectada en directo, con mensajes muy jerarquizados, bloques grandes y ritmo claro, sin parecer una landing comercial ni un articulo largo.

## Charla actual

La charla activa es:

`Charla 15 - Seguridad en IA`

Version extendida (~90 min + preguntas, por decision consciente de superar el formato habitual de 45-50 min, al ser el cierre de la etapa en solitario antes de que vuelva el compañero en septiembre).

El foco no es asustar ni dar una clase de ciberseguridad formal. El objetivo es que la audiencia entienda con criterio:

- por que la seguridad en IA es distinta a la seguridad tradicional (dato e instruccion viajan por el mismo canal)
- que es prompt injection, directo e indirecto, y la tecnica de exfiltracion via Markdown
- que ninguna defensa es perfecta sola, existen capas
- que esto ha pasado de verdad, en produccion, en productos conocidos (9 casos reales)
- que conectar servidores MCP o descargar modelos sin vetar es un riesgo de cadena de suministro
- por que el modelo se niega a veces (alineamiento)
- que hacer si se sospecha un incidente, y que le toca vigilar a cada rol

## Estructura narrativa vigente

La web debe seguir esta narrativa salvo decision consciente de rediseño:

1. Hero - Seguridad en IA (agenda de la charla)
2. Bloque 1 - Prompt Injection en profundidad (tipos, tecnica Markdown, marco OWASP)
3. Bloque 2 - Como nos defendemos (6 capas + conexion con el framework de madurez)
4. Bloque 3 - Casos reales (9 casos, 3 categorias: fuga por diseño, manipulacion conversacional, autonomia sin control)
5. Bloque 4 - Cadena de suministro (MCP Ecosystem + modelos maliciosos)
6. Bloque 5 - Constitutional AI y alineamiento
7. Bloque 6 + 7 - Shadow AI / incident response + aplicacion practica por rol
8. Cierre - Tres ideas finales

## Guion editorial por bloques

### Hero - Agenda

Debe mostrar los cinco bloques principales como tarjetas y cerrar con la idea de que en seguridad de IA la pregunta no es "puedo ejecutar esto" sino "quien tiene permiso para hablarle a esto".

### Bloque 1 - Prompt Injection

Dos tipos (directa, indirecta), la tecnica de exfiltracion via Markdown como mecanismo a recordar antes del bloque de casos reales, y el marco OWASP Top 10 para LLM como referencia de industria.

Idea de cierre del bloque:

`Un ataque de prompt injection no rompe nada. Convence.`

### Bloque 2 - Como nos defendemos

Seis capas: sanitizacion de entrada, separacion de contexto, minimo privilegio, validacion de salida, humano en el bucle, guardrails. Conexion explicita con las Dimensiones 3 y 7 del framework de madurez de 8 dimensiones.

Idea de cierre del bloque:

`No estais aqui para eliminar el riesgo. Estais aqui para reducirlo, capa a capa.`

### Bloque 3 - Casos reales

Nueve casos publicos y verificables agrupados en tres categorias: fuga de datos por diseño (EchoLeak, Slack AI, Samsung), manipulacion conversacional (Bing Chat, Chevrolet, ChatGPT/crucigrama de Windows) y autonomia sin control (Cursor, GitHub Copilot, OpenAI/Hugging Face). El ultimo caso (OpenAI/Hugging Face, julio 2026) es muy reciente — verificar actualizaciones antes de la charla.

Idea de cierre del bloque:

`Nueve casos, tres categorias, un mismo origen: alguien confio mas de lo que debia.`

### Bloque 4 - Cadena de suministro

MCP como superficie de ataque (puente con el caso Cursor del bloque anterior) + riesgo de modelos maliciosos descargados de repositorios publicos (formato pickle). Checklist de 3 preguntas antes de conectar un MCP o descargar un modelo.

Idea de cierre del bloque:

`Cada servidor MCP y cada modelo que descargais es una puerta nueva.`

### Bloque 5 - Constitutional AI

RLHF vs Constitutional AI, por que el modelo se niega a veces, conexion con los ataques del Bloque 3 como intentos de saltarse esta capa.

Idea de cierre del bloque:

`Cuando el modelo dice que no, no esta fallando. Esta haciendo exactamente lo que le enseñaron a hacer.`

### Bloque 6 + 7 - Shadow AI y aplicacion por rol

Cuatro pasos ante un incidente sospechado (no borrar, reportar, documentar, no esconder) + cuatro roles (developer, PM, comercial, RRHH/management) y que le toca vigilar a cada uno.

Idea de cierre del bloque:

`Nadie necesita ser experto en ciberseguridad. Necesita saber que pregunta hacerse antes de confiar.`

### Cierre - Tres ideas

Resumen de las tres ideas centrales y conexion explicita con el checklist de gobernanza de la Charla 14.

Idea de cierre final:

`La proxima vez que un agente os pida acceso a algo, la pregunta no es "¿funciona?". Es "¿confio en quien lo ha construido?".`

## Objetivo editorial

La charla debe dar a la audiencia un marco compartido para entender por que la seguridad en IA es distinta, con casos concretos y defensas accionables. No es una certificacion de ciberseguridad ni un curso de pentesting.

No es el lugar para profundizar todavia en:

- tecnicas de explotacion paso a paso (nada de guias de ataque reproducibles)
- configuraciones tecnicas concretas de DLP o SIEM
- casos internos concretos sin haberlos anonimizado antes
- el caso OpenAI/Hugging Face en mas detalle tecnico del que aporta la narrativa (es muy reciente, verificar antes de ampliar)

## Contenido pendiente de completar antes de la charla

Antes del miercoles:

- Verificar la version actual del OWASP Top 10 para LLM (`components/sections/prompt-injection-section.tsx`)
- Verificar actualizaciones del caso OpenAI/Hugging Face (`components/sections/real-cases-section-15.tsx`)
- Confirmar el canal real de compliance/seguridad interno si se quiere hacer explicito en el Bloque 6 (`components/sections/shadow-ai-role-section.tsx`)
- Preparar la demo aislada de prompt injection (fuera de esta web, en un entorno de pruebas separado, sin conexion a sistemas corporativos)

## Criterios de contenido

- Todo el contenido debe estar en espanol.
- Priorizar claridad sobre hype.
- Evitar claims grandilocuentes o absolutos.
- Evitar bloques de texto largos.
- Cada seccion debe sostener la exposicion con pocos mensajes, bien jerarquizados.
- Todos los casos y ejemplos deben ser verificables o marcarse claramente como hipoteticos.
- Cuando se cite una empresa o un caso, incluir el ano.
- No incluir tecnicas de ataque reproducibles paso a paso, solo el mecanismo a nivel conceptual.

## Criterios de diseno

- Debe sentirse como una charla premium y sobria.
- Priorizar legibilidad en proyector:
  - titulares claros
  - bloques visuales grandes
  - poco texto por tarjeta
  - contraste alto
- Las animaciones deben acompanar la exposicion, no distraer.
- Mantener lenguaje visual oscuro con acentos azules salvo rediseño consciente.
- Usar el color destructive con moderacion, reservado para senales de alerta (categoria de autonomia sin control en el Bloque 3, tecnica de exfiltracion en el Bloque 1).
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

- `components/sections/hero-section-15.tsx` - Hero: agenda de la charla
- `components/sections/prompt-injection-section.tsx` - Bloque 1: Prompt Injection en profundidad
- `components/sections/defense-layers-section.tsx` - Bloque 2: las 6 capas de defensa
- `components/sections/real-cases-section-15.tsx` - Bloque 3: 9 casos reales en 3 categorias
- `components/sections/supply-chain-section.tsx` - Bloque 4: cadena de suministro (MCP + modelos)
- `components/sections/constitutional-ai-section.tsx` - Bloque 5: alineamiento
- `components/sections/shadow-ai-role-section.tsx` - Bloque 6+7: Shadow AI + aplicacion por rol
- `components/sections/closing-section-15.tsx` - Cierre

## Secciones legacy

Existen componentes de charlas anteriores (`hero-section-14.tsx`, `real-examples-policy.tsx`, `risk-levels.tsx`, `based-on-role.tsx`, `policy-usage-section.tsx`, `closing-section-14.tsx`, `hero-section-13.tsx`, `copilot-studio-section.tsx`, `demo-section-13.tsx`, `metrics-section.tsx`, `closing-section-13.tsx`, `hero-section-concept.tsx`, `ai-fundations-section-concepts.tsx`, `token-context-section.tsx`, `prompt-section-concept.tsx`, `closing-section-concept.tsx`, y otros mas antiguos).

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
- El nombre visible de la charla y la documentacion deben mantenerse alineados entre `AGENTS.md`, `app/layout.tsx` y `components/sections/hero-section-15.tsx`.
- El caso OpenAI/Hugging Face (Bloque 3) es muy reciente (julio 2026) — verificar que no haya cambiado el relato antes de proyectarlo.

## Que haria un agente antes de tocar nada

1. Leer `app/page.tsx` para entender el orden narrativo actual.
2. Leer la seccion concreta que va a cambiar.
3. Confirmar si el cambio es editorial, visual o de ritmo.
4. Tocar lo minimo necesario para mantener coherencia entre bloques.
5. Verificar la web en local si el cambio afecta layout, animaciones o copy visible.

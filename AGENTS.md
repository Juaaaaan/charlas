# AGENTS.md

## Proposito del proyecto

Esta web sustituye a unas diapositivas para una charla interna sobre IA generativa orientada a negocio y tecnologia para una audiencia amplia dentro de la empresa.

La experiencia debe servir como apoyo visual a una exposicion de unos 30 minutos. Tiene que funcionar bien proyectada en directo, con mensajes muy jerarquizados, bloques grandes y ritmo claro, sin parecer una landing comercial ni un articulo largo.

## Charla actual

La charla activa es:

`Charla 4 - Automatizacion con IA`

El foco no es vender herramientas ni hacer una demo aislada. El objetivo es ayudar a la audiencia a entender con criterio:

- como evolucionar desde un chat puntual hasta un sistema automatizado
- por que un workflow manual no es lo mismo que una automatizacion operativa
- como elegir entre chat, prompt, agente, equipo de agentes o automatizacion
- que papel tienen el trigger, la decision, la accion y la supervision
- como cerrar la parte conceptual antes de pasar a una demo en vivo

## Estructura narrativa vigente

La web debe seguir esta narrativa salvo decision consciente de rediseño:

1. Hero / portada
2. Bloque 1 - Del equipo de agentes a la automatizacion
3. Bloque 2 - Elegir el nivel correcto
4. Bloque 3 - Disenar automatizacion con control
5. Cierre

## Guion editorial por bloques

### Bloque 1 - Del equipo de agentes a la automatizacion

Debe cubrir de forma clara y visual:

- que la charla anterior ya permitia resolver trabajo complejo con agentes coordinados
- que ese flujo seguia dependiendo de la persona para arrancar, pasar informacion y decidir el siguiente paso
- por que el siguiente salto natural es integrar la IA dentro del proceso
- que automatizar con IA no es solo poner reglas, sino disenar un sistema que se activa, interpreta, decide y actua
- que la autonomia siempre debe formularse junto con supervision y trazabilidad

Idea de cierre del bloque:

`El salto no es tener mas agentes. El salto es integrar la IA en el proceso correcto.`

Transicion esperada al bloque 2:

`No todo necesita automatizacion. Primero hay que elegir el nivel adecuado.`

### Bloque 2 - Elegir el nivel correcto

Debe explicar de forma sencilla:

- que no hay una unica forma de usar IA
- los cinco niveles: chat, prompt estructurado, agente individual, equipo de agentes y automatizacion
- que cada nivel aporta una mezcla distinta de rapidez, control y escalabilidad
- por que automatizar demasiado pronto suele ser un error
- que la automatizacion es un nivel de madurez, no el punto de partida

Idea de cierre del bloque:

`La clave no es automatizar todo. Es elegir el nivel adecuado.`

### Bloque 3 - Disenar automatizacion con control

Debe aterrizar de forma practica:

- que una automatizacion util combina trigger, interpretacion, decision, accion y supervision
- que no todo lo tiene que hacer el sistema sin intervencion humana
- cuando conviene aviso, aprobacion, excepcion o trazabilidad reforzada
- importancia del control humano en decisiones, riesgos y tono final
- errores tipicos: mezclar fases, automatizar sin criterio de calidad o no definir responsable de revision

Idea de cierre del bloque:

`La autonomia sin control no es madurez. Es fragilidad.`

### Cierre

Debe reforzar tres ideas memorables:

1. El chat ayuda a pensar.
2. Los agentes ayudan a hacer tareas.
3. La automatizacion ayuda a escalar trabajo.
4. El valor no esta en usar IA, sino en decidir cuando debe trabajar por ti y cuando no.

## Objetivo editorial

La charla debe ayudar a perfiles funcionales y tecnicos a construir una base comun sobre como disenar automatizaciones con IA aplicables a la empresa.

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

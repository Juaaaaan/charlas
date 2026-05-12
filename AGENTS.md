# AGENTS.md

## Proposito del proyecto

Esta web sustituye a unas diapositivas para una charla interna sobre IA generativa orientada a negocio y tecnologia para una audiencia amplia dentro de la empresa.

La experiencia debe servir como apoyo visual a una exposicion de unos 20 minutos. Tiene que funcionar bien proyectada en directo, con mensajes muy jerarquizados, bloques grandes y ritmo claro, sin parecer una landing comercial ni un articulo largo.

## Charla actual

La charla activa es:

`Charla 5 - IA en local`

El foco no es vender herramientas ni hacer una comparativa extensa de proveedores. El objetivo es ayudar a la audiencia a entender con criterio:

- que significa ejecutar IA en local frente a usar IA como servicio cloud
- como diferenciar modelos por tamano, especializacion, cuantizacion, contexto y hardware
- que usos practicos tienen sentido en local dentro de una empresa
- cuando conviene local, cloud o una combinacion de ambos
- cuales son los limites tecnicos y operativos antes de decidir si encaja en un caso real

## Estructura narrativa vigente

La web debe seguir esta narrativa salvo decision consciente de rediseño:

1. Hero / portada
2. Bloque 1 - Que es la IA en local
3. Bloque 2 - Diferenciar modelos locales
4. Bloque 3 - Usos reales y decision local frente a cloud
5. Cierre

## Guion editorial por bloques

### Bloque 1 - Que es la IA en local

Debe cubrir de forma clara y visual:

- que IA en local no significa entrenar un modelo desde cero
- que un modelo puede descargarse y ejecutarse en el equipo o infraestructura propia
- que cambia respecto a usar ChatGPT, Copilot u otros servicios online
- que se gana en control y se asume en configuracion, hardware y mantenimiento
- que local no significa automaticamente privado o seguro

Idea de cierre del bloque:

`IA en local no significa IA privada por arte de magia. Significa cambiar donde se ejecuta el modelo y quien controla el entorno.`

Transicion esperada al bloque 2:

`El primer reto es saber que modelo tienes delante.`

### Bloque 2 - Diferenciar modelos locales

Debe explicar de forma sencilla:

- como interpretar tamanos como 3B, 7B, 13B o 70B
- la diferencia entre modelos generalistas, codigo, razonamiento, embeddings o vision
- que significa cuantizacion: Q4, Q5, Q8
- por que el contexto importa pero no arregla una mala tarea
- que papel tienen CPU, GPU, RAM y VRAM en la experiencia

Idea de cierre del bloque:

`La ficha tecnica orienta. La prueba real decide.`

### Bloque 3 - Usos reales y decision local frente a cloud

Debe aterrizar de forma practica:

- usos con sentido: documentos sensibles, ayuda tecnica, RAG local y transformacion de texto
- que la IA local encaja bien con privacidad, offline, coste fijo o control de version
- que el cloud suele ganar en maxima calidad, escala, modelos punteros y menor mantenimiento
- que en empresa lo habitual puede ser una decision hibrida
- que hay que validar con ejemplos reales antes de sacar conclusiones

Idea de cierre del bloque:

`La clave no es local o cloud. Es que necesita la tarea.`

### Cierre

Debe reforzar tres ideas memorables y cerrar la charla:

1. La IA local da control, no magia.
2. El modelo se elige por tarea, datos y maquina.
3. Local y cloud no compiten siempre: muchas veces conviven.
4. El valor esta en saber cuando debe estar cerca de tus datos, cuando conviene usar cloud y como validar la decision.

## Objetivo editorial

La charla debe ayudar a perfiles funcionales y tecnicos a construir una base comun sobre como evaluar IA en local y decidir cuando tiene sentido aplicarla en la empresa.

No es el lugar para profundizar todavia en:

- entrenamiento o fine-tuning avanzado
- despliegues productivos complejos
- arquitecturas RAG avanzadas
- comparativas extensas entre herramientas locales

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

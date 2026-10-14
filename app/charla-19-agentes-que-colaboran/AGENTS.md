# Charla 19 — De responder a actuar: varios agentes que colaboran (Copilot Studio)

> Contexto específico de esta charla. Las reglas transversales del proyecto (stack, diseño, cómo se añade una charla) están en el `AGENTS.md` de la raíz.

- **Ruta:** `/charla-19-agentes-que-colaboran`
- **Estado:** guion `listo-para-impartir`. En el índice (`lib/charlas.ts`) va como `publicada` para que enlace desde la home; cambiar a `pendiente` si se prefiere «Próximamente» hasta ensayar la demo.
- **Formato:** recorrido guiado (parte 1). **NO se reconstruye nada en vivo**: se enseña el agente ya montado y se para en cada punto reseñable. ~45-50 min. Audiencia ~168 personas, 98% no técnica (RRHH, dirección, comercial).
- **Demo:** agente **Analista de RFP** en Copilot Studio analizando el pliego sintético de la academia de baile Compás.

## Objetivo

Dar el salto desde el agente que *respondía* de la charla 13 a un **equipo de agentes que actúa**: un orquestador (coordinador) + 3 agentes hijo especialistas + una herramienta de Power Automate que vuelca requisitos a Excel, con un **checkpoint humano** antes de escribir nada. La misión pedagógica manda: técnica de verdad, sin código y sin jerga, todo apoyado en el caso de negocio.

Tres mensajes que estructuran la charla:

- de responder a **actuar**: el agente ya no solo sabe, hace y deja el trabajo escrito.
- coordinar agentes se hace con **lenguaje**, no con código (el pegamento es la descripción que se leen entre sí).
- el humano tiene la **última palabra** — y eso es un diseño, no una carencia (el checkpoint es el corazón).

## Frase-tesis (repetir 2-3 veces en directo)

> En la charla 13 construimos un agente que **respondía**. Hoy vais a ver varios agentes que **trabajan juntos** para resolver algo, y que al final **te dejan a ti la última palabra**.

## Estructura narrativa (orden de `page.tsx`)

1. Hero — De responder a actuar (gancho + tesis + el caso RFP + las paradas como mapa)
2. Bloque 1 — De chatbot a equipo de agentes (la escalera + la analogía de la asesoría + eco de la 18)
3. Parada 1 — El cerebro del coordinador (rol por escrito, secciones de la instrucción, regla anti-invención)
4. Parada 2 — La sala de expertos (3 hijos, cada uno una cosa; coordinación por lenguaje; vuelta al jefe)
5. Paradas 3 y 4 — Cerebro y manos (selector de modelo, guiño 17; el salto a actuar; Power Automate → Excel)
6. Parada 5 — La demo (trampa de fechas, requisito escondido, **checkpoint humano**, corregir en vivo, el Excel)
7. Para la sala — Cinco dudas razonables (apéndice Q&A; sección opcional, se puede quitar si aprieta el tiempo)
8. Cierre — Tres ideas para llevarse + puente a la parte 2

## Frases que deben quedar (respetar salvo rediseño consciente)

- Hero: «Un agente que responde es un buen bibliotecario. Hoy vais a ver un equipo de agentes que, además, hace el trabajo.»
- Bloque 1: «El jefe no hace el trabajo: coordina y junta las piezas.»
- Parada 1: «Programar esto no ha sido escribir código. Ha sido escribir bien un encargo.»
- Parada 2: «El pegamento que une a estos agentes no es código. Es lenguaje. Se entienden leyéndose la descripción unos a otros.»
- Paradas 3-4: «Un agente que responde te ahorra buscar. Un agente que actúa te ahorra el trabajo.»
- Parada 5: «La IA que da miedo es la que actúa sola. Esta, antes de tocar nada, levanta la mano y te pregunta.»
- Cierre: «La pregunta ya no es si la IA puede ayudaros. Es qué trabajo tedioso le vais a delegar primero — sabiendo que seguís teniendo la última palabra.»

## Componentes (secciones), en el orden de `page.tsx`

- `hero-section-19.tsx` — Hero / mapa de paradas
- `escalera-section-19.tsx` — Bloque 1 (escalera + asesoría)
- `coordinador-section-19.tsx` — Parada 1
- `expertos-section-19.tsx` — Parada 2
- `herramientas-section-19.tsx` — Paradas 3 y 4
- `demo-section-19.tsx` — Parada 5 (la demo; el checkpoint humano destacado)
- `preguntas-section-19.tsx` — Apéndice Q&A (opcional)
- `closing-section-19.tsx` — Cierre

> Nota de nombres: a diferencia de la 18 (que dejaba las secciones de tema sin sufijo), aquí TODAS las secciones llevan sufijo `-19` para evitar colisiones (`demo-section.tsx` ya existía de una charla anterior) y mantener la charla autocontenida. Siguen en `components/sections/` como el resto de la serie; pendiente de migrar a `app/charla-19-.../sections/` en la limpieza general.

## Checklist previo (antes de proyectar / impartir)

- Pliego de Compás **en PDF** abierto y a mano (NO markdown — no lo ingiere bien).
- Agente **Analista de RFP** abierto en la pestaña Información general.
- **Grabación de respaldo** de la demo completa que ya funcionó (recomendación fuerte: narrarla por encima; la red y el JSON son el riesgo).
- `Entregable-RFP.xlsx` en OneDrive **vacío** y abierto en otra pestaña.
- Pestañas ordenadas: Información general → Agentes → Herramientas → panel Test.
- Notificaciones de Teams/Outlook silenciadas (se comparte pantalla).

## Notas de producción (no para decir)

- El JSON se estabilizó pidiendo exhaustividad explícita («la lista COMPLETA, todos, sin resumir»): pasó de 3 a 34 requisitos. Reforzar esa instrucción si en el ensayo se queda corto.
- Flujo Power Automate: Compose → Parse JSON → ForEach → Excel → Responder. El paso frágil histórico es el esquema del Parse JSON; no tocar antes del directo.
- Parte 2 pendiente: taller de construcción + orquestación interna + caso RRHH (cruce de Excel). No mezclar con esta.

## Límites de contenido

- Es parte 1: se enseña QUÉ hace y POR QUÉ, no CÓMO se construye. No prometer el taller aquí, solo sembrarlo.
- Sin jerga: la audiencia es 98% no técnica. Analogías de negocio (asesoría, jefe de proyecto) por delante de términos técnicos.
- El caso es sintético (academia Compás) a propósito, para no exponer datos reales de nadie.

# Charla 13 — De saber a medir: Copilot Studio y cómo saber si la IA está funcionando

> Contexto específico de esta charla. Las reglas transversales del proyecto están en el `AGENTS.md` de la raíz.

- **Ruta:** `/charla-13-copilot-studio`
- **Estado:** publicada
- **Fecha:** 22 de julio de 2026
- **Formato:** ~45 min (incluye demo en vivo)

## Objetivo

Responder la pregunta que dejó abierta la Charla 12: «¿Cómo sé que la IA me está ayudando de verdad?». Dos partes: cómo construir algo concreto (un agente en Copilot Studio) y cómo medirlo para saber si está funcionando.

Ideas clave:

- la diferencia entre un chatbot clásico y un agente (razona, reconoce lo que no sabe)
- Copilot Studio permite construir agentes sin código, con conocimiento propio de la empresa
- el agente vive en Teams, donde ya se trabaja — no requiere cambiar hábitos
- medir adopción es fácil; medir impacto real es el siguiente reto
- tres preguntas universales: ¿lo usa la gente? ¿les ayuda? ¿vuelven?

## Estructura narrativa

1. Apertura — Puente desde la Charla 12 (la pregunta que queda abierta)
2. Bloque 1 — Qué es Copilot Studio y dónde encaja (chatbot vs agente, qué es, qué no es, dónde encaja en el mapa)
3. Demo Acto 1 — Construir el agente en vivo en Copilot Studio (configuración, conocimiento vía SharePoint, despliegue en Teams)
4. Demo Acto 2 — Usar el agente en Teams (preguntas reales, pregunta de la sala)
5. Bloque 2 — Cómo saber si la IA está funcionando (engagement rate, resolution rate, deflection rate, custom metrics, apunte DORA para developers)
6. Cierre — Tres ideas para llevarse

Ideas de cierre por bloque:

- Apertura: «No basta con usar IA. Hay que saber si está funcionando.»
- Bloque 1 (chatbot vs agente): «La diferencia entre un chatbot y un agente es la misma que entre un contestador automático y una persona que realmente te escucha.»
- Bloque 1 (qué es): «La diferencia entre un LLM genérico y un agente de Copilot Studio es la misma que entre un becario recién llegado y alguien que lleva tres años en la empresa.»
- Demo Acto 1: «Un agente que reconoce lo que no sabe es más valioso que uno que siempre responde algo.»
- Demo Acto 2: «Cualquier persona de esta sala puede tener algo así funcionando esta semana.»
- Bloque 2 (métricas): «Medir adopción es fácil. Medir impacto real es el siguiente reto.»
- Cierre: «La semana pasada os di el mapa. Hoy habéis puesto el primer pin.»

## Notas técnicas de la demo

- El entorno LITE de Copilot Studio no permite subir ficheros: el conocimiento se añade vía URLs de SharePoint autenticadas.
- El panel de prueba interno de Copilot Studio no puede autenticarse contra SharePoint — el canal correcto para probar es Teams.
- El agente se despliega creando un canal específico en Teams (no aparece como bot flotante).
- El handbook corporativo 2026 está cargado como fuente de conocimiento.

## Componentes (secciones), en el orden de `page.tsx`

- `hero-section-13.tsx` — Hero / agenda (HeroSectionCopilotStudio)
- `copilot-studio-section.tsx` — Bloque 1: qué es Copilot Studio
- `demo-section-13.tsx` — Demo (actos 1 y 2)
- `metrics-section.tsx` — Bloque 2: métricas
- `closing-section-13.tsx` — Cierre

## Límites de contenido

- No entrar en configuraciones avanzadas de Copilot Studio (triggers, Power Automate, custom connectors).
- No dar detalles técnicos de DORA más allá de mencionarlo como marco — queda para charla futura.
- El agente de la demo ya está publicado; el Acto 1 muestra la configuración, no crea uno nuevo en directo.

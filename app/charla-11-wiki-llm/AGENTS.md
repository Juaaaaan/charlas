# Charla 11 — Wiki LLM: la IA que recuerda a tu equipo

> Contexto específico de esta charla. Las reglas transversales del proyecto están en el `AGENTS.md` de la raíz.

- **Ruta:** `/charla-11-wiki-llm`
- **Estado:** publicada
- **Fecha:** 6 de julio de 2026
- **Formato:** ~35-40 min + demo del compañero (5-10 min)

## Objetivo

Resolver el problema del conocimiento que solo existe en las cabezas: decisiones, dead ends, quién sabe qué. Mostrar cómo un Wiki LLM (base de conocimiento en markdown con formato OKF) se convierte en la memoria persistente del equipo, accesible para personas y para agentes de IA.

Ideas clave:

- el conocimiento más valioso no está en los sistemas, está en las personas — y las cabezas no se indexan
- un Wiki LLM no es una carpeta de notas, es memoria persistente de la empresa
- el concepto viene de Andrej Karpathy; Google lo formalizó con OKF (Open Knowledge Format)
- Obsidian + GitHub = coste cero de infraestructura
- la IA consulta el vault y responde con contexto real, sin explicarle nada
- sirve igual para developers (decisiones de arquitectura, dead ends) que para gestión (perfiles de madurez IA del equipo)

## Estructura narrativa

1. Apertura — Puente desde la Charla 8 (hoy le damos a la IA el manual de por qué hacemos las cosas así)
2. Bloque 1 — Qué es un LLM + Wiki LLM + OKF (frontmatter, grafo de conocimiento)
3. Bloque 2 — La herramienta: Obsidian + GitHub (gratuito, local, sin servidores)
4. Demo 1 — Perspectiva developer: proyecto RCA (consulta vault + genera decisión en vivo)
5. Demo 2 — Perspectiva jefe de proyecto: perfiles de equipo (consulta vault + genera perfil nuevo)
6. Cierre — 3 ideas + presentación del compañero

Ideas de cierre:

- «El conocimiento más valioso de una empresa no está en los documentos. Está en las cabezas. Y las cabezas no se indexan.»
- «Un Wiki LLM no es una carpeta de notas. Es la memoria persistente de tu empresa.»
- «Obsidian es el cuaderno. GitHub es la memoria compartida. La IA es la que lo mantiene vivo.»
- «La IA no solo conoce el código. Ahora también conoce al equipo.»

## Componentes (secciones), en el orden de `page.tsx`

- `hero-section-llm.tsx` — Hero / agenda (HeroSectionLLM)
- `ai-foundations-section-llm.tsx` — Bloque 1: qué es un Wiki LLM + OKF (AIFoundationsSectionLLM)
- `token-context-section-llm.tsx` — Demo 1: perspectiva developer (TokenContextSectionLLM)
- `prompt-section-llm.tsx` — Demo 2: perspectiva jefe de proyecto (PromptSectionLLM)
- `closing-section-llm.tsx` — Cierre (ClosingSectionLLM)

## Límites de contenido

- No entrar en configuración técnica de Obsidian o plugins más allá de lo básico.
- No profundizar en implementación de RAG o embeddings (se menciona el concepto, no el mecanismo).
- Los perfiles de equipo son con nombres ficticios.
- El vault de la demo es un vault preparado, no el real de la empresa.

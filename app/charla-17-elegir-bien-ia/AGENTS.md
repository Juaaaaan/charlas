# Charla 17 — Elegir bien la IA: herramienta, modelo y modo de trabajo

> Contexto específico de esta charla. Las reglas transversales del proyecto (stack, diseño, cómo se añade una charla) están en el `AGENTS.md` de la raíz.

- **Ruta:** `/charla-17-elegir-bien-ia`
- **Estado:** borrador — listo para revisión y ensayo (en el índice va como `publicada` para que enlace desde la home).
- **Formato:** transversal y accesible, ~50 min + preguntas. Teoría + capturas comparativas, **sin demo en vivo**. Cambio de registro deliberado tras el bloque técnico (14 gobernanza, 15 seguridad, 16 SDD) — se avisa en la apertura. Objetivo: recuperar al público general.

## Objetivo

Llevar a la audiencia de *usuario ingenuo* a *usuario con criterio*. El público ya usa IA, pero sin método: abre «la de siempre» por inercia, se queda en el modo por defecto y usa una fracción de lo que la IA sabe hacer. Ideas clave:

- «usar la IA» son cuatro decisiones, no una — la brújula de 4 capas
- capa 1: elegir herramienta (el lío de los tres «Copilot» + regla de 3 segundos; quién tiene tu contexto)
- capa 2: elegir modelo — el dial rápido/razonador + el mapa de proveedores (cerrados vs abiertos) + residencia de datos
- capa 3: los cuatro modos de trabajo (preguntar / investigar / recordar / actuar) y su conexión con el arnés de la serie
- capa 4: verificación calibrada al coste del error
- el método no caduca; los nombres de modelos, sí

## Estructura narrativa (orden de `page.tsx`)

1. Hero — Elegir bien la IA (gancho + las dos preguntas + brújula de 4 capas)
2. Bloque 1 — Capa 1: ¿Qué IA abro? (lío de nombres + regla de 3 segundos + capturas)
3. Bloque 2 — Capa 2: ¿Qué modelo elijo? (2a el dial / 2b proveedores + anexo de modelos concretos)
4. Bloque 3 — Capa 3: ¿Cómo la pongo a trabajar? (4 modos + arnés)
5. Bloque 4 — Capa 4: ¿Cuánto me la juego? (coste del error + zonas rojas + técnicas)
6. Bloque 5 — Qué se lleva cada rol
7. Cierre — El kit del lunes (3 ideas) + brújula repetida + el círculo de la serie

Frases que deben quedar (respetar salvo rediseño consciente):

- Hero: «"Usar la IA" no es una cosa. Son cuatro decisiones. Y la calidad de lo que os devuelve depende de acertarlas.»
- Bloque 1: «No hay una IA mejor. Hay una correcta para cada tarea. Para tus datos, la clave es quién tiene tu contexto.»
- Bloque 2: «No os aprendáis los nombres... Aprendeos que hay elección — y que en la empresa, la elección la marca también dónde acaban tus datos.»
- Bloque 3: «Preguntar es el modo fácil, pero es solo uno de cuatro. Investigar, recordar y actuar es donde está el 80% que os estáis perdiendo.»
- Bloque 4: «La IA se equivoca con muy buena letra. Tu trabajo no es desconfiar de todo — es saber cuánto te juegas, y verificar en consecuencia.»
- Bloque 5: «Programéis o no, cada día tomáis estas cuatro decisiones. La única pregunta es si las tomáis por inercia o con criterio.»
- Cierre: «La próxima vez, no abráis la de siempre en automático ni os quedéis en el modo por defecto. Cuatro preguntas de treinta segundos.»

## Componentes (secciones), en el orden de `page.tsx`

- `hero-section-17.tsx` — Hero / brújula
- `herramienta-section.tsx` — Bloque 1 (capa 1)
- `modelo-section.tsx` — Bloque 2 (capa 2: dial + proveedores + anexo)
- `modos-trabajo-section.tsx` — Bloque 3 (capa 3)
- `verificacion-section.tsx` — Bloque 4 (capa 4)
- `roles-section-17.tsx` — Bloque 5
- `closing-section-17.tsx` — Cierre

> Nota de migración: igual que el resto de la serie, estas secciones viven en `components/sections/`. Pendiente de mover a `app/charla-17-elegir-bien-ia/sections/` en la limpieza general.

## Antes de proyectar (verificar — evolucionan rápido)

- **Nombres de modelos del anexo** (`modelo-section.tsx`): GPT-5.6 Sol/Luna, Claude Opus 4.8 / Sonnet 5 / Haiku 4.5, Gemini 3 Pro, Grok 4.6, DeepSeek V4, Kimi K3, Qwen 3 Max, GLM-5.2, Mistral Large 3. **Cambian cada semana** — verificar vigencia el día de la charla o hablar en cualitativo (familias, no nombres).
- **El dial por herramienta** (`modelo-section.tsx`): «Instant» vs «Thinking» en ChatGPT; gama ligera vs potente en Claude. Confirmar que los nombres de los modos siguen igual en la UI.
- **Capturas Bloque 1**: misma pregunta (permiso por mudanza) sin contexto → inventa / con documento → cita / 365 Copilot → ya lo tiene. La 3ª requiere 365 Copilot licenciado; si no, quitarla.
- **Documento de ejemplo**: genérico corporativo (política, pliego, manual), no RCA.
- **Referencia de "fiarnos de la IA"**: confirmar en qué charla(s) se trató a fondo el tema de alucinaciones para citarla.

## Límites de contenido

- No es un comparador de productos ni un catálogo de modelos: se enseñan familias y criterios que no envejecen; los nombres concretos van con aviso de caducidad.
- El aviso de residencia de datos (APIs chinas corriendo desde China) es un factor de decisión, no un juicio: enlazar con gobernanza (14) y seguridad (15), y remitir a «usar solo lo aprobado por la empresa».
- Alucinaciones: ya tratado en la serie; aquí entra aplicado (capa 4), no explicado desde cero.

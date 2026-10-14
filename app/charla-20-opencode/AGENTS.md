# Charla 20 — La otra correa del arnés: el ejecutor abierto

> Contexto específico de esta charla. Las reglas transversales del proyecto (stack, diseño, cómo se añade una charla) están en el `AGENTS.md` de la raíz.

- **Ruta:** `/charla-20-opencode`
- **Fecha:** 16 de septiembre de 2026
- **Estado:** guion en `borrador`, con las tres decisiones abiertas ya cerradas. En el índice (`lib/charlas.ts`) va como `publicada` para que enlace desde la home.
- **Formato:** charla de **teoría / modelos mentales**. **NO hay demo en directo** — decisión consciente: nada frágil que dependa de la red. ~47 min. Audiencia ~168 personas, 98% no técnica.

## Objetivo

Cerrar la correa del **ejecutor** dentro del arnés. El mensaje es de **criterio y gobernanza, no de adopción**: nadie del público tiene que instalar nada. Lo que se llevan es entender una decisión que su empresa ya está tomando — quién controla la IA que usamos y dónde viven nuestros datos.

Tres mensajes que estructuran la charla:

- especificar (el QUÉ, charla 16) y ejecutar (el QUIÉN) son **dos correas distintas**.
- el ejecutor cerrado no es malo: es un **trade-off** que ha decidido el proveedor, no tú.
- abierto vs cerrado no se resuelve con un bando, sino con **tres preguntas**.

## Frase-tesis

> En la 16 especificamos y dejamos que Claude Code lo ejecutara. Hoy: ¿y si el ejecutor no te atara a nadie?

## Estructura narrativa (orden de `page.tsx`)

1. Hero — Gancho honesto en frío (ya hay compañeros usándola) + mapa del arnés + recorrido
2. Bloque 2 — Las dos correas: especificar ≠ ejecutar (QUÉ / QUIÉN)
3. Bloque 3 — El ejecutor cerrado: Claude Code + ancla de familiaridad (Copilot de Office / GitHub Copilot)
4. Bloque 4 — El giro: OpenCode, las tres propiedades invertidas
5. Bloque 5 — ¿Y a mí qué?: tres razones por las que una empresa elige lo abierto
6. Bloque 6 — Escenario concreto: la aseguradora
7. Bloque 7 — Visual guiado: recorrido comentado por opencode.ai y GitHub (opción A)
8. Bloque 8 — Equilibrio + las tres preguntas
9. Cierre — Pregunta final + círculo con la 19 + puente

## Frases que deben quedar (respetar salvo rediseño consciente)

- Hero: «En la 16 especificamos y dejamos que Claude Code lo ejecutara. Hoy: ¿y si el ejecutor no te atara a nadie?»
- Bloque 2: «Especificar y ejecutar no son lo mismo. Son dos correas distintas.»
- Bloque 3: «No es que sea malo. Es que decides tú, o decide el proveedor por ti.» / «Elegir el motor dentro de la caja no es lo mismo que controlar la caja.»
- Bloque 4: «El mismo trabajo que hace el ejecutor cerrado. Pero el motor lo eliges tú, y tus datos se quedan en casa.» / «Misma cara, dueño distinto.»
- Bloque 5: «La factura y los datos dejan de ser rehenes.»
- Bloque 6: «Esto no es teoría de garaje: ya está pasando en casas como la nuestra.»
- Bloque 7: «Todo lo de hoy cabe en este menú: quién elige el motor.»
- Bloque 8: «La pregunta no es cuál es mejor, sino qué necesitas gobernar.»
- Cierre: «¿Quién controla la IA que usa mi empresa, y dónde viven mis datos?» / «Hoy no os lleváis una herramienta. Os lleváis el criterio para entender la que viene.»

## Componentes (secciones), en el orden de `page.tsx`

- `hero-section-20.tsx` — Hero / gancho / mapa
- `correas-section-20.tsx` — Bloque 2
- `ejecutor-cerrado-section-20.tsx` — Bloque 3
- `opencode-section-20.tsx` — Bloque 4
- `por-que-importa-section-20.tsx` — Bloque 5
- `escenario-section-20.tsx` — Bloque 6
- `visual-section-20.tsx` — Bloque 7 (guion visual de las 5 paradas)
- `equilibrio-section-20.tsx` — Bloque 8
- `closing-section-20.tsx` — Cierre

> Todas las secciones llevan sufijo `-20`, como en la 19, para evitar colisiones en `components/sections/`. Pendiente de migrar a `app/charla-20-opencode/sections/` en la limpieza general.

## Bloque 7 — material de apoyo

El bloque va con **opción A: recorrido web comentado**. Cero herramienta en vivo, cero instalación. La sección `visual-section-20.tsx` es el guion visual; las capturas se proyectan aparte y hay que tenerlas listas antes del miércoles:

- Home de `opencode.ai`
- La interfaz trabajando (TUI o app de escritorio), modo Plan-Build
- **El selector de modelo / proveedor** — la más importante, es el reseñable
- Repo en GitHub: cabecera con licencia MIT + estrellas y forks
- (Opcional) Página de ecosistema con frontales de la comunidad

> La parada 3 es el pico del bloque: el instante en que se elige el motor. No moverla ni diluirla, y dejar la captura unos segundos en pantalla.

## Límites de contenido

- **Cifras de OpenCode verificadas en septiembre de 2026** y ya citadas en la web: licencia MIT, 75+ proveedores (incluidos locales, Ollama / LM Studio), ~200.000 estrellas, 900+ contribuidores, 27.000 forks, ~7,5M devs/mes. Caducan rápido: revisar antes de reutilizarlas en otra charla, y redondear al hablar en vez de soltarlas todas.
- **No nombrar ninguna solución interna real.** El escenario de la aseguradora es genérico a propósito.
- Nada de tono de guerra santa abierto-vs-cerrado: el Bloque 8 existe justo para desactivar eso.
- Sin jerga técnica: la audiencia es 98% no técnica y el mensaje no es que adopten nada.

## Notas de producción (no para decir)

- Si el Bloque 7 se queda corto de tiempo o de material, el escenario del Bloque 6 puede estirarse 1-2 min con un segundo ejemplo (p. ej. sanidad / datos de pacientes).
- El guion vive en el vault: `Charlas/guiones/guion-charla-20.md`.

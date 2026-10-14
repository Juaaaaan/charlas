# CLAUDE.md

Las instrucciones de este repositorio viven en un único sitio: **[`AGENTS.md`](./AGENTS.md)**.

Léelo antes de tocar nada. Contiene el propósito del repositorio, la estructura del
proyecto, el stack, los criterios de diseño y editoriales, las convenciones de código
y el procedimiento para añadir una charla nueva.

No dupliques aquí esas reglas: si algo cambia, se cambia en `AGENTS.md`.

## Atajos útiles

- Contexto de una charla concreta: `app/charla-NN-tema/AGENTS.md`.
- Índice de la serie: `lib/charlas.ts` (la home lo lee sola).
- Guiones y material de apoyo de charlas pasadas: `docs/guiones/`.
- Verificación antes de dar algo por hecho: `npx tsc --noEmit` (y `npm run build`
  si el cambio toca layout o datos). Ojo: `npm run lint` falla hoy porque `eslint`
  no está instalado como dependencia.

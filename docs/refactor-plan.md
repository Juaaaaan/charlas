# Plan de refactor — serie de charlas

> Documento de trabajo en la rama `refactor-talks`. Se puede borrar cuando el refactor esté cerrado.
> `refactor-talks` parte de `main` y no la toca hasta que se abra el PR.

## Decisión

**Opción A — consolidación.** Pasar de "una charla = una rama que pisa `/`" a
"una charla = una ruta dentro de un mismo proyecto", con una home que indexa todas.
`main` deja de ser "la versión vieja congelada" y pasa a ser el agregador de todas las charlas.

## Estructura objetivo

```
app/
  page.tsx                     -> home / índice (lee lib/charlas.ts)
  layout.tsx                   -> shell compartido
  charla-15-seguridad/
    page.tsx                   -> ruta de la charla
    AGENTS.md                  -> contexto de ESTA charla
    sections/                  -> secciones de la charla (colocadas junto a la ruta)
  charla-02-copilot/
    page.tsx
    AGENTS.md
    sections/
  ...
components/
  ui/                          -> shadcn (compartido, se queda)
  section-divider.tsx          -> compartido entre charlas
lib/
  charlas.ts                   -> metadatos: titulo, slug, fecha, resumen, ruta
AGENTS.md                      -> global (destilado)
```

## AGENTS.md

- El `AGENTS.md` actual es, en realidad, el de la charla 15 (contexto especifico de esa charla).
- Se parte en dos: un global destilado (stack, comandos, criterios de diseno/editoriales, como
  se anade una charla nueva, reglas de ramas/PR) + un `AGENTS.md` por charla con su contexto congelado.
- Charla 15: su `AGENTS.md` por charla sale casi tal cual del `AGENTS.md` actual.
- Charlas antiguas (2, 13, 14, y las de sufijo tematico -llm/-concept/-mcp): su contexto se fue
  sobrescribiendo, asi que hara falta su guion para reconstruirlo con fidelidad.

## Quick-wins

- [x] Ignorar `*.tsbuildinfo` y dejar de trackear `tsconfig.tsbuildinfo`
- [x] Borrar `b_ngRYSNmjpRs.zip` (export viejo de v0 de abril 2026, redundante: ya estaba todo en el repo)
- [ ] Sacar los `.md` sueltos al Vault (los mueve el autor a mano)

## Pendiente antes de construir

- Confirmar la lista de charlas a incluir en la home + nombres de carpeta/slug.
- Pasar los guiones de cada charla (viven en el Vault) para reconstruir rutas y `AGENTS.md` por charla.

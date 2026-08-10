# Plan de refactor — serie de charlas

> Documento de trabajo. Se puede borrar cuando el refactor esté cerrado.

## Decisión

**Opción A — consolidación.** Pasar de "una charla = una rama que pisa `/`" a
"una charla = una ruta dentro de un mismo proyecto", con una home que indexa todas.
`main` deja de ser "la versión vieja congelada" y pasa a ser el agregador de todas las charlas.

## Estructura objetivo

```
app/
  page.tsx                     -> home / índice (lee lib/charlas.ts)
  layout.tsx                   -> shell compartido
  charla-NN-tema/
    page.tsx                   -> ruta de la charla (con metadata propia)
    AGENTS.md                  -> contexto de ESTA charla
    sections/                  -> secciones (objetivo: colocadas aquí)
components/
  ui/                          -> shadcn (compartido)
  section-divider.tsx          -> compartido entre charlas
lib/
  charlas.ts                   -> metadatos de cada charla (la home lee este array)
AGENTS.md                      -> global (destilado)
```

## Progreso

### Quick-wins (refactor-talks)
- [x] Ignorar `*.tsbuildinfo` y dejar de trackear `tsconfig.tsbuildinfo`
- [x] Borrar `b_ngRYSNmjpRs.zip` (export viejo de v0)
- [ ] Sacar los `.md` sueltos al Vault (los mueve el autor a mano)

### Rutas migradas
- [x] Charla 15 — Seguridad en IA → `/charla-15-seguridad` (refactor-talks)
- [x] Charla 14 — Gobernanza de IA → `/charla-14-gobernanza` (second-refactor-talks)
- [x] Charla 13 — Copilot Studio → `/charla-13-copilot-studio` (second-refactor-talks)
- [x] Charla 12 — El mapa de la IA → `/charla-12-mapa-ia` (second-refactor-talks)

### AGENTS.md por charla
- [x] Charla 15 (del AGENTS.md original)
- [x] Charla 14 (de su rama feat/charla-14)
- [x] Charla 13 (reconstruido desde guion del Vault)
- [x] Charla 12 (de su rama feat/charla-12)

### Pendiente
- [ ] Colocar secciones dentro de `app/charla-NN-tema/sections/` (requiere `git rm` de las viejas)
- [ ] Limpiar el cementerio de `components/sections/` una vez todas las charlas estén migradas
- [ ] Migrar charlas anteriores (¿existen ramas feat/charla-11, -8, etc.?)

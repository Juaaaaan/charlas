# Proposal

## Why

El sitio solo tiene tema oscuro, y lo tiene a medias: `next-themes` está instalado y
existe `components/theme-provider.tsx`, pero no está montado en ningún sitio
(`app/layout.tsx` no lo usa). En `app/globals.css`, `:root` y `.dark` son dos bloques
de variables **idénticos**: hoy no hay un tema claro, hay el oscuro repetido dos veces.
Al proyectar en salas con mucha luz ambiental, y para quien tiene el sistema en claro,
un sitio forzado a oscuro es peor apoyo visual que uno que respeta la preferencia.

El coste no es el botón (trivial con `next-themes`), sino que buena parte del sitio pinta
sus fondos con `rgba(...)` oscuros hardcodeados en el JSX en vez de con los tokens. Esa
parte no tiene nada claro que mostrar cuando se pulse el toggle.

## What Changes

- Montar `ThemeProvider` (`attribute="class"`, `defaultTheme="system"`, `enableSystem`)
  en `app/layout.tsx`, envolviendo `children`, con `suppressHydrationWarning` en `<html>`.
- Escribir una paleta clara real en `:root` de `app/globals.css`, coherente con el azul
  de acento actual (`oklch(0.65 0.18 220)`), y mover la paleta oscura actual a `.dark`.
- Añadir un botón de toggle (sol/luna, `lucide-react`) fijo arriba a la derecha en
  `app/layout.tsx`, visible en todas las rutas porque el layout es compartido.
- Convertir los fondos decorativos hardcodeados en **tokens de gradiente** definidos en
  `globals.css` y redefinidos por tema, y consumirlos desde el JSX. Afecta a la home, las
  dos vistas de Biblioteca y las secciones de las 13 charlas.
- Adaptar al tema los dos sitios con color de pintura propia: el diagrama SVG de
  `embeddings-section.tsx` y los `rgba(255,255,255,…)` en `style` de
  `ai-evolution-section.tsx`.

Decisión tomada con el usuario: **el tema elegido se aplica a todo el sitio**, incluidas
las 13 rutas `app/charla-NN-*`. No se fuerza oscuro en ninguna ruta ni se oculta el
toggle en ninguna. Esto descarta el enfoque por fases que se barajó al principio.

## Capabilities

### New Capabilities
- `tema-visual`: cómo el sitio elige, recuerda y aplica el tema claro u oscuro, y qué
  garantiza sobre la legibilidad de cualquier ruta en ambos temas.

### Modified Capabilities

(Ninguna: el proyecto no tiene especificaciones previas — `openspec list --specs` no
devuelve nada.)

## Impact

Auditoría del alcance real (contada, no estimada):

- **40 ficheros** contienen literales `rgba(...)`/`#hex` o utilidades `white`/`black`.
- De esos, **7 son de `components/ui/*`** (shadcn: `bg-black/50` de overlay,
  `text-white` sobre `destructive`, `bg-white` del thumb del slider). Son correctos en
  ambos temas y **no se tocan**.
- Quedan **33 ficheros** con literales de color propios, muy repetidos:
  - 15 `hero-section*.tsx` con el **mismo par de gradientes byte a byte**.
  - 6 `closing-section*.tsx` con el **mismo gradiente byte a byte**.
  - 3 (`token-context-section`, `token-context-section-concept`, `mcps-section`,
    `how-llm-works-section`) con el mismo glow `ellipse_at_center`.
  - 3 variantes cercanas (`ia-first-section-22`, `demo-section-23`, `ciclo-section-22`).
  - 3 páginas: `app/page.tsx`, `app/biblioteca/page.tsx`, `app/biblioteca/[slug]/page.tsx`.
  - 2 casos propios: `embeddings-section.tsx` (SVG, 24 literales) y
    `ai-evolution-section.tsx` (`style` inline).

La duplicación juega a favor: la mayoría se resuelve con unos pocos tokens de gradiente
en `globals.css` y una sustitución mecánica por fichero.

- **Ya tokenizados, sin trabajo**: `components/biblioteca/*` (explorer, ego-graph,
  markdown-body) y `components/section-divider.tsx` — 0 literales de color.
- **Dependencias**: ninguna nueva. `next-themes@^0.4.6` y `lucide-react@^0.564.0` ya están
  en `package.json`.
- **Efecto lateral esperado**: hay 41 variantes `dark:` en el árbol (shadcn) que hoy no
  hacen nada porque `.dark` es igual a `:root`. Al diferenciarse las paletas pasan a
  aplicarse. Es el comportamiento que shadcn pretende, pero hay que revisarlo.
- **Rama**: se trabaja en una rama nueva desde `main`, sin push. La PR se abre solo
  cuando el usuario dé el visto bueno tras probarlo en local.

"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Control de tema, fijo arriba a la derecha en todas las rutas (vive en el layout).
 * Alterna solo entre claro y oscuro: la preferencia del sistema es el valor inicial
 * (defaultTheme="system"), pero no se expone como tercer estado — en mitad de una
 * charla, un ciclo de tres estados es peor que un interruptor.
 *
 * Qué icono se ve lo decide el CSS con la variante `dark:`, no el estado de React.
 * next-themes escribe la clase en <html> antes de hidratar, así que el icono correcto
 * sale ya en la primera pintura y no hace falta guard de montaje.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Cambiar entre tema claro y oscuro"
      title="Cambiar entre tema claro y oscuro"
      className="fixed right-4 top-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/70 text-foreground/80 backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Sun className="hidden h-[1.1rem] w-[1.1rem] dark:block" aria-hidden="true" />
      <Moon className="h-[1.1rem] w-[1.1rem] dark:hidden" aria-hidden="true" />
    </button>
  );
}

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  charlaCorta,
  paradasCiclo,
  piezas,
  preguntas,
  tramos,
  type Pieza,
} from "../data/piezas";

type Vista = "pieza" | "pregunta";

const orden = new Map(piezas.map((p, i) => [p.id, i]));
const totalPreguntadas = piezas.filter((p) => p.preguntar).length;

/** Posición de `id` dentro de `lista`; si `id` no está, la primera pieza posterior. */
function posicion(lista: Pieza[], id: string): number {
  const o = orden.get(id) ?? 0;
  const k = lista.findIndex((p) => (orden.get(p.id) ?? 0) >= o);
  return k === -1 ? lista.length - 1 : k;
}

function soltar(e: MouseEvent<HTMLElement>) {
  // Evita que el botón pulsado capture después Espacio/Enter del teclado.
  e.currentTarget.blur();
}

function nombreTramo(id: string) {
  return tramos.find((t) => t.id === id)?.nombre ?? "";
}

function TablaCiclo() {
  return (
    <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-border/70 bg-background/40">
      <p className="px-5 pt-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
        Dónde hemos estado en el ciclo
      </p>
      <div className="mt-3 divide-y divide-border/50">
        {paradasCiclo.map((p, index) => (
          <div
            key={p.parada}
            className="grid grid-cols-[2.5rem_8rem_1fr] items-baseline gap-3 px-5 py-3 md:grid-cols-[2.5rem_10rem_1fr]"
          >
            <span className="font-mono text-xs font-semibold text-foreground/50">
              {index + 1}
            </span>
            <span
              className={`text-base font-semibold md:text-lg ${
                p.rozada ? "text-foreground/65" : "text-foreground"
              }`}
            >
              {p.parada}
            </span>
            <span
              className={`text-base leading-relaxed md:text-lg ${
                p.rozada ? "text-foreground/55" : "text-foreground/82"
              }`}
            >
              {p.donde}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Chip({
  children,
  tono = "neutro",
}: {
  children: React.ReactNode;
  tono?: "neutro" | "primario";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${
        tono === "primario"
          ? "border-primary/30 bg-primary/12 text-primary"
          : "border-border/70 bg-background/40 text-foreground/65"
      }`}
    >
      {children}
    </span>
  );
}

function Boton({
  children,
  onClick,
  pulsado,
  deshabilitado,
  etiqueta,
}: {
  children: React.ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  pulsado?: boolean;
  deshabilitado?: boolean;
  etiqueta?: string;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        onClick(e);
        soltar(e);
      }}
      disabled={deshabilitado}
      aria-pressed={pulsado}
      aria-label={etiqueta}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
        pulsado
          ? "border-primary/50 bg-primary/15 text-primary"
          : "border-border/70 bg-card/70 text-foreground/80 hover:border-primary/40 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

export function RepasoSection26() {
  const [actualId, setActualId] = useState<string>(piezas[0].id);
  const [soloPreguntadas, setSoloPreguntadas] = useState(false);
  const [vista, setVista] = useState<Vista>("pieza");
  const [reveladas, setReveladas] = useState<Record<string, boolean>>({});

  const visibles = useMemo(
    () => (soloPreguntadas ? piezas.filter((p) => p.preguntar) : piezas),
    [soloPreguntadas],
  );
  const indice = posicion(visibles, actualId);
  const pieza = visibles[indice];
  const pregunta = preguntas.find((q) => q.numero === pieza.pregunta)!;
  const revelada = Boolean(reveladas[pieza.id]);

  const irAPregunta = useCallback(
    (numero: number) => {
      if (numero < 1 || numero > preguntas.length) return;
      const destino =
        visibles.find((p) => p.pregunta === numero) ??
        piezas.find((p) => p.pregunta === numero);
      if (destino) setActualId(destino.id);
    },
    [visibles],
  );

  const siguiente = useCallback(() => {
    if (vista === "pregunta") {
      irAPregunta(pieza.pregunta + 1);
      return;
    }
    const sig = visibles[indice + 1];
    if (sig) setActualId(sig.id);
  }, [vista, irAPregunta, pieza.pregunta, visibles, indice]);

  const anterior = useCallback(() => {
    if (vista === "pregunta") {
      irAPregunta(pieza.pregunta - 1);
      return;
    }
    const ant = visibles[indice - 1];
    if (ant) setActualId(ant.id);
  }, [vista, irAPregunta, pieza.pregunta, visibles, indice]);

  const alternar = useCallback((id: string) => {
    setReveladas((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const accionPrincipal = useCallback(() => {
    if (vista === "pieza" && !reveladas[pieza.id]) {
      setReveladas((prev) => ({ ...prev, [pieza.id]: true }));
      return;
    }
    siguiente();
  }, [vista, reveladas, pieza.id, siguiente]);

  const alternarFiltro = useCallback(() => {
    setSoloPreguntadas((v) => !v);
  }, []);

  const alternarVista = useCallback(() => {
    setVista((v) => (v === "pieza" ? "pregunta" : "pieza"));
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (t?.closest("input, textarea, select, [contenteditable='true']")) {
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
          e.preventDefault();
          siguiente();
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          anterior();
          break;
        case " ":
        case "Enter":
          // Sobre un botón o enlace enfocado manda su acción nativa.
          if (t?.closest("button, a")) return;
          e.preventDefault();
          accionPrincipal();
          break;
        case "f":
        case "F":
          alternarFiltro();
          break;
        case "v":
        case "V":
          alternarVista();
          break;
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [siguiente, anterior, accionPrincipal, alternarFiltro, alternarVista]);

  const piezasDeLaPregunta = piezas.filter(
    (p) => p.pregunta === pieza.pregunta,
  );
  const hayReveladas = Object.values(reveladas).some(Boolean);

  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-aura-pagina" />
      <div className="absolute inset-0 bg-glow-centro" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Bloque 3 · Las diez preguntas
          </span>
          <h2 className="mb-6 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
            ¿Para qué creéis que sirve?
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-foreground/76 md:text-2xl">
            Una frase en el chat. Si el nombre suena técnico, vale cualquier
            intuición: por el nombre, ¿qué creéis que hace?
          </p>
        </motion.div>

        {/* Controles */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Boton
              onClick={() => anterior()}
              deshabilitado={
                vista === "pieza" ? indice === 0 : pieza.pregunta === 1
              }
              etiqueta={
                vista === "pieza" ? "Pieza anterior" : "Pregunta anterior"
              }
            >
              ← Anterior
            </Boton>
            <Boton
              onClick={() => siguiente()}
              deshabilitado={
                vista === "pieza"
                  ? indice === visibles.length - 1
                  : pieza.pregunta === preguntas.length
              }
              etiqueta={
                vista === "pieza" ? "Pieza siguiente" : "Pregunta siguiente"
              }
            >
              Siguiente →
            </Boton>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Boton onClick={() => alternarFiltro()} pulsado={soloPreguntadas}>
              Solo las preguntadas ({totalPreguntadas})
            </Boton>
            <Boton
              onClick={() => alternarVista()}
              pulsado={vista === "pregunta"}
            >
              Pregunta completa
            </Boton>
            <Boton
              onClick={() => setReveladas({})}
              deshabilitado={!hayReveladas}
            >
              Difuminar todo
            </Boton>
          </div>
        </div>

        {/* Navegación por preguntas */}
        <nav
          aria-label="Preguntas"
          className="mb-6 flex flex-wrap items-center gap-2"
        >
          {preguntas.map((q) => {
            const activa = q.numero === pieza.pregunta;
            return (
              <button
                key={q.numero}
                type="button"
                onClick={(e) => {
                  irAPregunta(q.numero);
                  soltar(e);
                }}
                aria-current={activa ? "step" : undefined}
                aria-label={`Pregunta ${q.numero}: ${q.corta}`}
                className={`flex h-9 min-w-9 items-center justify-center rounded-full border px-3 font-mono text-xs font-semibold transition-colors ${
                  activa
                    ? "border-primary/50 bg-primary/15 text-primary"
                    : "border-border/70 bg-card/70 text-foreground/60 hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {q.numero}
              </button>
            );
          })}
        </nav>

        <AnimatePresence mode="wait">
          {vista === "pieza" ? (
            <motion.article
              key={`pieza-${pieza.id}`}
              className="rounded-[2rem] border border-border/70 bg-card/70 px-6 py-8 md:px-10 md:py-10"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  Pregunta {pregunta.numero} · {nombreTramo(pregunta.tramo)}
                </p>
                <p className="font-mono text-xs text-foreground/55">
                  Pieza {indice + 1} de {visibles.length}
                </p>
              </div>

              <p className="mt-3 text-lg leading-relaxed text-foreground/70 md:text-xl">
                {pregunta.titulo}
              </p>

              <h3 className="mt-6 text-4xl font-bold leading-tight text-balance text-foreground md:text-6xl">
                {pieza.nombre}
              </h3>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {pieza.charla ? <Chip>{pieza.charla}</Chip> : null}
                {pieza.preguntar ? (
                  <Chip tono="primario">
                    <span
                      aria-hidden="true"
                      className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/20 text-[10px] font-bold leading-none"
                    >
                      ?
                    </span>
                    Preguntar a la sala
                  </Chip>
                ) : null}
              </div>

              <button
                type="button"
                onClick={() => alternar(pieza.id)}
                aria-pressed={revelada}
                aria-label={
                  revelada ? "Volver a difuminar" : "Revelar para qué sirve"
                }
                className="relative mt-8 block w-full cursor-pointer overflow-hidden rounded-[1.5rem] border border-border/60 bg-background/40 px-6 py-7 text-left transition-colors hover:border-primary/40 md:px-8 md:py-9"
              >
                <span
                  className={`block text-2xl leading-relaxed text-foreground transition-[filter,opacity] duration-500 md:text-3xl ${
                    revelada
                      ? "opacity-100 blur-none"
                      : "select-none opacity-70 blur-lg"
                  }`}
                >
                  {pieza.queSirve}
                </span>
                {!revelada ? (
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    Clic o espacio para revelar
                  </span>
                ) : null}
              </button>

              {revelada ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {pieza.extra === "ciclo" ? <TablaCiclo /> : null}
                  <p className="mt-6 text-lg font-semibold leading-snug text-balance text-primary md:text-xl">
                    {pregunta.ancla}
                  </p>
                </motion.div>
              ) : null}
            </motion.article>
          ) : (
            <motion.div
              key={`pregunta-${pieza.pregunta}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="rounded-[2rem] border border-border/70 bg-card/70 px-6 py-8 md:px-10">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  Pregunta {pregunta.numero} · {nombreTramo(pregunta.tramo)}
                </p>
                <h3 className="mt-4 text-3xl font-bold leading-tight text-balance text-foreground md:text-5xl">
                  {pregunta.titulo}
                </h3>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {piezasDeLaPregunta.map((p) => (
                    <div
                      key={p.id}
                      className="flex flex-col rounded-[1.5rem] border border-border/60 bg-background/40 px-5 py-6"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        {p.charla ? <Chip>{p.charla}</Chip> : null}
                      </div>
                      <h4 className="mt-3 text-xl font-semibold text-foreground md:text-2xl">
                        {p.nombre}
                      </h4>
                      <p className="mt-3 text-base leading-relaxed text-foreground/78 md:text-lg">
                        {p.queSirve}
                      </p>
                    </div>
                  ))}
                </div>

                {piezasDeLaPregunta.some((p) => p.extra === "ciclo") ? (
                  <TablaCiclo />
                ) : null}

                <div className="mt-8 rounded-[1.5rem] border border-primary/20 bg-primary/8 px-6 py-6 text-center">
                  <p className="mx-auto max-w-3xl text-2xl font-semibold leading-snug text-balance text-foreground md:text-3xl">
                    {pregunta.ancla}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-6 text-center text-xs leading-relaxed text-foreground/55">
          ← → navegar · Espacio revela y avanza · F solo las preguntadas · V
          pregunta completa
        </p>
      </div>
    </section>
  );
}

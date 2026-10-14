"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type NodoGrafo = {
  slug: string;
  title: string;
  tipo: "charla" | "concepto";
};

type EgoGraphProps = {
  centro: NodoGrafo;
  vecinos: NodoGrafo[];
};

const RADIO = 150;
const VIEWBOX = 380;
const CENTRO_PUNTO = VIEWBOX / 2;

/**
 * Grafo "ego": el nodo actual en el centro y sus conexiones directas alrededor,
 * en círculo. Deliberadamente no es el grafo completo del vault (demasiados nodos
 * para ser legible) — es la vecindad inmediata de esta nota, que es lo que importa
 * para navegar.
 */
export function EgoGraph({ centro, vecinos }: EgoGraphProps) {
  if (vecinos.length === 0) return null;

  const posiciones = vecinos.map((vecino, i) => {
    const angulo = (2 * Math.PI * i) / vecinos.length - Math.PI / 2;
    const x = CENTRO_PUNTO + RADIO * Math.cos(angulo);
    const y = CENTRO_PUNTO + RADIO * Math.sin(angulo);
    return { vecino, x, y };
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[380px]">
      <svg
        viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {posiciones.map(({ x, y }, i) => (
          <line
            key={i}
            x1={CENTRO_PUNTO}
            y1={CENTRO_PUNTO}
            x2={x}
            y2={y}
            stroke="currentColor"
            strokeOpacity={0.22}
            strokeWidth={1.5}
            className="text-primary"
          />
        ))}
      </svg>

      {/* Nodo central */}
      <div
        className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-primary/15 px-3 py-2 text-center"
        style={{ left: CENTRO_PUNTO, top: CENTRO_PUNTO, width: 112, height: 112 }}
      >
        <span className="line-clamp-4 text-xs font-semibold leading-tight text-foreground">
          {centro.title}
        </span>
      </div>

      {posiciones.map(({ vecino, x, y }, i) => (
        <motion.div
          key={vecino.slug}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 + i * 0.05, ease: "easeOut" }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: x, top: y, width: 108 }}
        >
          <Link
            href={`/biblioteca/${vecino.slug}`}
            className={`block rounded-xl border px-2.5 py-2 text-center text-[11px] font-medium leading-tight transition-colors ${
              vecino.tipo === "charla"
                ? "border-primary/30 bg-card/80 text-foreground hover:border-primary/60"
                : "border-border/70 bg-secondary/60 text-foreground/85 hover:border-primary/40"
            }`}
          >
            <span className="line-clamp-3">{vecino.title}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

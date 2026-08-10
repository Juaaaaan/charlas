"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { charlasOrdenadas } from "@/lib/charlas";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,145,255,0.18),transparent_32%),linear-gradient(180deg,rgba(7,10,18,1)_0%,rgba(9,13,21,0.98)_54%,rgba(12,16,26,1)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,150,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,150,255,0.03)_1px,transparent_1px)] bg-[size:88px_88px]" />
      <div className="absolute left-1/2 top-16 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Serie de charlas
          </span>
        </motion.div>

        <motion.h1
          className="mt-10 max-w-4xl text-5xl font-bold tracking-tight text-balance text-foreground md:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
        >
          Charlas de IA
        </motion.h1>

        <motion.p
          className="mt-8 max-w-3xl text-xl leading-relaxed text-balance text-foreground/75 md:text-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" }}
        >
          Serie interna sobre IA generativa orientada a negocio y tecnología.
          Cada charla, su propia página.
        </motion.p>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {charlasOrdenadas.map((charla, index) => {
            const contenido = (
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.24 + index * 0.06,
                  ease: "easeOut",
                }}
                className={`group flex h-full flex-col rounded-[1.75rem] border px-7 py-8 backdrop-blur transition-colors ${
                  charla.estado === "publicada"
                    ? "border-border/70 bg-card/70 hover:border-primary/40"
                    : "border-border/40 bg-card/40"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
                    Charla {charla.numero}
                  </p>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {charla.estado === "publicada" ? charla.fecha : "Próximamente"}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-semibold leading-tight text-balance text-foreground md:text-3xl">
                  {charla.titulo}
                </h2>

                <p className="mt-4 text-base leading-relaxed text-foreground/72">
                  {charla.resumen}
                </p>

                {charla.estado === "publicada" && (
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Ver charla
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </p>
                )}
              </motion.article>
            );

            return charla.estado === "publicada" ? (
              <Link
                key={charla.slug}
                href={`/${charla.slug}`}
                className="block h-full"
              >
                {contenido}
              </Link>
            ) : (
              <div key={charla.slug} className="h-full">
                {contenido}
              </div>
            );
          })}
        </div>

        <motion.p
          className="mt-12 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Se irán añadiendo el resto de charlas de la serie a medida que se
          migren al nuevo formato.
        </motion.p>
      </div>
    </main>
  );
}

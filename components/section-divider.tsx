"use client"

import { motion } from "framer-motion"

type SectionDividerProps = {
  label?: string
}

export function SectionDivider({ label }: SectionDividerProps) {
  return (
    <motion.div
      className="flex justify-center py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-3">
        {label ? (
          <span className="rounded-full border border-primary/20 bg-primary/8 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
            {label}
          </span>
        ) : null}
        <div className="flex items-center gap-4">
          <div className="h-2 w-2 rounded-full bg-primary/50" />
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="h-2 w-2 rounded-full bg-primary/20" />
        </div>
      </div>
    </motion.div>
  )
}

"use client";

import { motion } from "framer-motion";

export function Momentum() {
  return (
    <section className="border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-card px-8 py-16 text-center md:px-16 md:py-24"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-accent/10 blur-[80px]" />
          </div>

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Momentum
            </p>
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-light leading-snug tracking-tight md:text-4xl">
              Not another to-do list.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              FINITE tracks momentum - the small daily actions that compound
              into a better life. Build momentum daily.
            </p>

            <div className="mx-auto mt-12 flex max-w-sm flex-col items-center rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
              <p className="text-xs uppercase tracking-widest text-muted">
                Today&apos;s momentum
              </p>
              <p className="mt-2 text-7xl font-extralight tabular-nums text-accent">
                72
              </p>
              <p className="mt-2 text-sm text-accent">+4 this week</p>
            </div>

            <p className="mt-12 text-sm text-muted">
              Time passes anyway. Make the days count.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

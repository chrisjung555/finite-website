"use client";

import { motion } from "framer-motion";

const TOTAL_WEEKS = 80 * 52;
const LIVED_WEEKS = 28 * 52;

function WeekGrid({ columns, rows }: { columns: number; rows: number }) {
  const total = columns * rows;
  const livedRatio = LIVED_WEEKS / TOTAL_WEEKS;

  return (
    <div
      className="grid gap-[3px]"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: total }).map((_, i) => {
        const progress = i / total;
        const isLived = progress < livedRatio;
        const isCurrent = Math.abs(progress - livedRatio) < 0.002;

        return (
          <div
            key={i}
            className={`aspect-square rounded-[1px] ${
              isCurrent
                ? "bg-accent ring-1 ring-accent/50"
                : isLived
                  ? "bg-accent/70"
                  : "bg-white/[0.08]"
            }`}
          />
        );
      })}
    </div>
  );
}

export function LifeInWeeks() {
  return (
    <section className="border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Life in weeks
            </p>
            <h2 className="mt-4 text-3xl font-light leading-snug tracking-tight md:text-4xl">
              Every week is a square.
              <br />
              Every square matters.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              See the bigger picture. Not a countdown — a perspective. A calm
              reminder to make this week count.
            </p>
            <p className="mt-8 text-sm text-muted/80">
              Make this week count.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-3xl bg-accent/5 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-card p-6 grid-fade-mask">
              <WeekGrid columns={52} rows={12} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

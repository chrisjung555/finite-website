"use client";

import { motion } from "framer-motion";

type DashboardPreviewProps = {
  year: number;
  percentComplete: number;
  daysRemaining: number;
  weeksRemaining: number;
};

export function DashboardPreview({
  year,
  percentComplete,
  daysRemaining,
  weeksRemaining,
}: DashboardPreviewProps) {
  const livedWeeks = 28;
  const totalWeeks = 52;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-md"
    >
      <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-card p-6 glow-accent">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted">
              Days left
            </p>
            <p className="mt-1 text-3xl font-light tabular-nums">{year}</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-light tabular-nums text-accent">
              {daysRemaining}
            </p>
            <p className="text-xs text-muted">days remaining</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-2 flex justify-between text-xs text-muted">
            <span>{percentComplete}% complete</span>
            <span>{weeksRemaining} weeks left</span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${percentComplete}%` }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>

        <div className="mb-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <p className="text-xs uppercase tracking-widest text-muted">
            Momentum
          </p>
          <div className="mt-2 flex items-end gap-3">
            <span className="text-5xl font-light tabular-nums">72</span>
            <span className="mb-2 text-sm text-accent">+4 this week</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
            <p className="text-[10px] uppercase tracking-wider text-muted">
              Gym
            </p>
            <p className="mt-1 text-lg font-light">3/4</p>
            <p className="text-[10px] text-muted">this week</p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
            <p className="text-[10px] uppercase tracking-wider text-muted">
              Sleep
            </p>
            <p className="mt-1 text-lg font-light">7.2h</p>
            <p className="text-[10px] text-muted">avg this week</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-3 text-[10px] uppercase tracking-wider text-muted">
            Life in weeks
          </p>
          <div
            className="grid gap-1"
            style={{ gridTemplateColumns: "repeat(13, minmax(0, 1fr))" }}
          >
            {Array.from({ length: totalWeeks }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-[2px] ${
                  i < livedWeeks
                    ? "bg-accent/80"
                    : i < livedWeeks + 4
                      ? "bg-accent/30"
                      : "bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

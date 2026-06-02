"use client";

import { motion } from "framer-motion";
import { DashboardPreview } from "./DashboardPreview";

type HeroProps = {
  year: number;
  percentComplete: number;
  daysRemaining: number;
  weeksRemaining: number;
};

export function Hero({
  year,
  percentComplete,
  daysRemaining,
  weeksRemaining,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-xs uppercase tracking-[0.3em] text-muted"
          >
            Coming soon to iOS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-light leading-[1.15] tracking-tight md:text-5xl lg:text-6xl"
          >
            Life is finite.
            <br />
            <span className="text-gradient-accent">Make it count.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
          >
            FINITE is a minimalist life dashboard that makes time visible and
            helps you build momentum every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#waitlist"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              Join the waitlist
            </a>
            <a
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-8 text-sm text-foreground transition-colors hover:border-white/20 hover:bg-white/[0.03]"
            >
              See what&apos;s inside
            </a>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <DashboardPreview
            year={year}
            percentComplete={percentComplete}
            daysRemaining={daysRemaining}
            weeksRemaining={weeksRemaining}
          />
        </div>
      </div>
    </section>
  );
}

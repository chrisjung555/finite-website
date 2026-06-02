"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Days remaining",
    description:
      "See your year at a glance — progress, days left, weeks and weekends ahead.",
    tag: "2026 · 42% complete",
  },
  {
    title: "Momentum score",
    description:
      "A daily score for whether you're moving forward — not another to-do list.",
    tag: "Momentum: 72",
  },
  {
    title: "Gym tracking",
    description:
      "Simple consistency — trained today, workouts this week, your streak.",
    tag: "3/4 this week",
  },
  {
    title: "Sleep tracking",
    description:
      "Hours, quality, weekly average, and sleep consistency over time.",
    tag: "7.2h avg",
  },
  {
    title: "Life in weeks",
    description:
      "Every week is a square. A visual reminder to live intentionally.",
    tag: "Perspective",
  },
  {
    title: "iOS widgets",
    description:
      "Glanceable momentum on your home screen. Coming soon.",
    tag: "Soon",
    soon: true,
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Features
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-tight md:text-4xl">
            Your life, made visible.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card p-6 transition-colors hover:border-white/10"
            >
              {feature.soon && (
                <span className="absolute top-4 right-4 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent">
                  Soon
                </span>
              )}
              <p className="font-mono text-xs text-accent/80">{feature.tag}</p>
              <h3 className="mt-4 text-lg font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

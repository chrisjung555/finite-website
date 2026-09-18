"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Time made visible",
    description:
      "See your year, month, and week at a glance — and exactly how much remains.",
    tag: "See your time",
  },
  {
    title: "Goals with a deadline",
    description:
      "Set what you want to accomplish today, this week, this month, and this year.",
    tag: "Decide what matters",
  },
  {
    title: "Track your progress",
    description:
      "See how much you've accomplished while the time you have left stays visible.",
    tag: "Keep moving",
  },
  {
    title: "Weekly reflection",
    description:
      "Reflect on how you spent your week and what you want to do differently next.",
    tag: "Look back",
  },
  {
    title: "Your history",
    description:
      "Look back at your goals, progress, and reflections over time.",
    tag: "See the bigger picture",
  },
  {
    title: "iOS widgets",
    description:
      "Keep your remaining time and priorities visible from your Home or Lock Screen.",
    tag: "At a glance",
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
            See your time. Decide what to do with it.
          </h2>
        </motion.div>

        <div className="mt-16 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-card p-6 transition-colors hover:border-white/10"
            >
              {feature.soon && (
                <span className="absolute top-4 right-4 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent">
                  Soon
                </span>
              )}
              <p className="min-h-[1.25rem] font-mono text-xs text-accent/80">
                {feature.tag}
              </p>
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

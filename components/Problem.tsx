"use client";

import { motion } from "framer-motion";

const insights = [
  "How much of the year has passed",
  "Whether you are building momentum",
  "How consistent you are with your goals",
  "The bigger picture of your life in weeks",
];

export function Problem() {
  return (
    <section className="border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            The problem
          </p>
          <h2 className="mt-4 text-3xl font-light leading-snug tracking-tight md:text-4xl">
            Most people drift through their days without seeing where their time
            goes.
          </h2>
          <p className="mt-6 text-lg text-muted">
            FINITE helps you see:
          </p>
        </motion.div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {insights.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="text-foreground/90">{item}</span>
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center text-xl font-light text-muted md:text-2xl"
        >
          Don&apos;t drift through life.
        </motion.p>
      </div>
    </section>
  );
}

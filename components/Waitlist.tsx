"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await res.json()) as { message?: string; error?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "You're on the list.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="waitlist" className="border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Waitlist
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-tight md:text-4xl">
            Be first to try FINITE.
          </h2>
          <p className="mt-4 text-lg text-muted">
            FINITE is coming soon to iOS. Join the waitlist and be first to
            try it.
          </p>

          <form onSubmit={handleSubmit} className="mt-10">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                disabled={status === "loading" || status === "success"}
                className="h-12 flex-1 rounded-full border border-white/10 bg-white/[0.03] px-5 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/30 disabled:opacity-50"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="h-12 shrink-0 rounded-full bg-accent px-8 text-sm font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {status === "loading" ? "Joining…" : "Join waitlist"}
              </button>
            </div>

            {message && (
              <p
                className={`mt-4 text-sm ${
                  status === "error" ? "text-red-400" : "text-accent"
                }`}
                role="status"
              >
                {message}
              </p>
            )}
          </form>

          <p className="mt-8 text-xs text-muted/70">
            No spam. Unsubscribe anytime. Your email stays private.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

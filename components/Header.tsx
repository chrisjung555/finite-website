"use client";

import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo size="sm" />
        <a
          href="#waitlist"
          className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
}

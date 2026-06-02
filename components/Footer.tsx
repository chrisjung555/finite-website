import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <Logo size="sm" />
        <p className="text-center text-sm text-muted">
          Life is finite. Make it count.
        </p>
        <p className="text-xs text-muted/60">
          © {new Date().getFullYear()} FINITE
        </p>
      </div>
    </footer>
  );
}

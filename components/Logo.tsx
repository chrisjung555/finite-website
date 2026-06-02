import Link from "next/link";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "text-lg tracking-[0.2em]",
  md: "text-xl tracking-[0.25em]",
  lg: "text-2xl tracking-[0.3em]",
};

export function Logo({ className = "", size = "md" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center font-medium uppercase ${sizes[size]} ${className}`}
      aria-label="FINITE home"
    >
      <span className="relative inline-block">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/30"
        />
        <span className="relative text-white/20">IN</span>
      </span>
      <span className="text-accent">FINITE</span>
    </Link>
  );
}

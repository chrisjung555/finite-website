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
      <span className="text-muted">IN</span>
      <span className="text-accent">FINITE</span>
    </Link>
  );
}

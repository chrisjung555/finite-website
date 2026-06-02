import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function Section({
  id,
  children,
  className = "",
  narrow = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-6 py-24 sm:px-8 sm:py-32 ${className}`}
    >
      <div
        className={`mx-auto ${narrow ? "max-w-3xl" : "max-w-6xl"}`}
      >
        {children}
      </div>
    </section>
  );
}

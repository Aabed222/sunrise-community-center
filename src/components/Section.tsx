import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

// components/HeroContainer.tsx
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  variant?: "section" | "section-header";
}

export default function Container({ children, variant = "section" }: ContainerProps) {
    const sectionHeaderClass = "container mx-auto pb-12 pt-32 md:pb-20 md:pt-40";
    const sectionClass = "container mx-auto py-12 md:py-20";

  return (
    <section className="relative">
      <div className={variant === "section-header" ? sectionHeaderClass : sectionClass}>
        {children}
      </div>
    </section>
  );
}

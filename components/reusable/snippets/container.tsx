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
    <section className="relative" data-aos="zoom-y-out">
      <div className={variant === "section-header" ? sectionHeaderClass : sectionClass}>
        <div className="px-4 py-12 md:px-12 md:py-20">
          {children}
        </div>
      </div>
    </section>
  );
}

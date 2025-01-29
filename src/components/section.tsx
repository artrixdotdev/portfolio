// For compatability with hooks/useSections.ts

import React from "react";
import { cn } from "@heroui/theme";
export type SectionProps = {
  title: string;
  id: string;
  icon: keyof typeof import("lucide-react").icons;
  children: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>;

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ icon, children, className, ...props }, ref) => {
    return (
      <section
        aria-label={icon}
        className={cn("relative", className)}
        {...props}
        ref={ref}
      >
        {children}
      </section>
    );
  },
);

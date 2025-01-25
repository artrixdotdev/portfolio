// For compatability with hooks/useSections.ts

import React from "react";

export type SectionProps = {
  title: string;
  id: string;
  icon: keyof typeof import("lucide-react").icons;
  children: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>;

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ icon, children, ...props }, ref) => {
    return (
      <section aria-label={icon} ref={ref} {...props}>
        {children}
      </section>
    );
  },
);

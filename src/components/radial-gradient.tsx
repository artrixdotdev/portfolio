import { cn } from "@heroui/react";

export const RadialGradient: React.FC<{ children?: React.ReactNode }> = ({
   children,
}) => (
   <div
      className={cn(
         "absolute pointer-events-none inset-0",
         "h-full w-full",
         "flex items-center justify-center",
         "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
      )}
   >
      {children}
   </div>
);

export const GradiantBackground: React.FC<{ children?: React.ReactNode }> = ({
   children,
}) => (
   <div
      className={cn(
         "absolute pointer-events-none inset-0",
         "h-full w-full",
         "flex items-center justify-center",
         "bg-gradient-to-b from-foreground-50/70 to-transparent",
      )}
   >
      {children}
   </div>
);

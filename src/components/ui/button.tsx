import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/util/styles";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary relative !px-1",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  active?: boolean;
  asChild?: boolean;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, active = false, asChild = false, ...props },
    ref,
  ) => {
    const Comp = motion(asChild ? Slot : "button");
    const isLinkVariant = variant === "link";

    return (
      // @ts-expect-error Not relevent
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        initial="initial"
        animate={active ? "active" : "initial"}
        whileHover="active"
        whileFocus="active"
        {...props}
      >
        {props.children}
        {isLinkVariant && (
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 rounded-sm bg-current"
            variants={{
              initial: { width: 0 },
              active: { width: "100%" },
            }}
            transition={{ duration: 0.3 }}
          />
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/libs/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 appearance-none select-none touch-manipulation	will-change-transform",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-button-gradient text-primary-foreground shadow-primary-button-shadow transition-shadow duration-300 transition-colors transition-transform  hover:bg-primary-button-gradient-hover hover:-translate-y-1 active:shadow-primary-button-shadow-active active:translate-y-1",
        secondary:
          "bg-secondary-button-gradient text-secondary-foreground shadow-secondary-button-shadow transition-shadow duration-300 transition-colors transition-transform  hover:bg-secondary-button-gradient-hover hover:-translate-y-1 active:shadow-secondary-button-shadow-active active:translate-y-1",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-6 px-6 py-6",
        sm: "h-8 rounded-md px-5 py-5 text-xs",
        lg: "h-10 rounded-md px-6 py-6 text-sm",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

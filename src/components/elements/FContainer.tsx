import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

interface FContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  paddings?: "include" | "exclude";
  size?: "default" | "full" | "sm" | "md" | "lg" | "xl";
}

const FContainerVariants = cva("container mx-auto", {
  variants: {
    paddings: {
      include: "px-6 py-10 md:py-12 lg:py-16 xl:px-12 2xl:py-20",
      exclude: "px-6 py-0",
      top: "px-6 pt-10 md:pt-12 lg:pt-16 xl:pt-12 2xl:pt-20",
      bottom: "px-6 pb-10 md:pb-12 lg:pb-16 xl:pb-12 2xl:pb-20",
    },
    size: {
      default: "max-w-screen-2xl",
      full: "max-w-full",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
    },
  },
  defaultVariants: {
    size: "default",
    paddings: "include",
  },
});

const FContainer = forwardRef<HTMLDivElement, FContainerProps>(
  ({ className, size, paddings, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(FContainerVariants({ paddings, size, className }))}
        {...props}
      />
    );
  }
);

FContainer.displayName = "FContainer";

export default FContainer;

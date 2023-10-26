import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

interface FSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  margins?: "include" | "exclude";
  component?: "section" | "div" | "main" | "header" | "footer";
}

const FSectionVariants = cva("w-full", {
  variants: {
    margins: {
      include: "my-10 md:my-12 lg:my-16 xl:my-12 2xl:my-20",
      exclude: "px-0",
      top: "mt-10 md:mt-12 lg:mt-16 xl:mt-12 2xl:mt-20",
      bottom: "mb-10 md:mb-12 lg:mb-16 xl:mb-12 2xl:mb-20",
    },
  },
  defaultVariants: {
    margins: "include",
  },
});

const FSection = forwardRef<HTMLDivElement, FSectionProps>(
  ({ className, margins, component, ...props }, ref) => {
    const Component = component || "section";

    return (
      <Component
        ref={ref}
        className={cn(FSectionVariants({ margins, className }))}
        {...props}
      />
    );
  }
);

FSection.displayName = "FSection";

export default FSection;

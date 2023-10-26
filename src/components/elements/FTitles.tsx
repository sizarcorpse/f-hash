"use client";
import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import React, { forwardRef } from "react";

interface FTitlesProps extends React.HTMLAttributes<HTMLDivElement> {
  alignment?: "start" | "center" | "end";
  space?: "default" | "lg";
  color?: "light" | "dark";
}

const FTitlesVariants = cva("flex flex-col", {
  variants: {
    alignment: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
    },
    space: {
      default: "gap-2",
      lg: "gap-3",
    },
    color: {
      default: "text-foreground",
      dark: "text-primary",
      light: "text-secondary",
    },
  },
  defaultVariants: {
    alignment: "start",
    color: "default",
    space: "default",
  },
});

const FTitles = forwardRef<HTMLDivElement, FTitlesProps>(
  ({ className, alignment, color, space, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(FTitlesVariants({ alignment, space, color, className }))}
        {...props}
      />
    );
  }
);

FTitles.displayName = "FTitles";

export default FTitles;

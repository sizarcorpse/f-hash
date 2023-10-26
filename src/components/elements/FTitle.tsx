"use client";

import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import { AnimationDefinition, motion, useAnimation } from "framer-motion";
import React, { forwardRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface FTitleProps {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "large" | "medium" | "small" | "xs";
  color?: "light" | "dark";
  className?: string;
  noAnimation?: boolean;
  children?: React.ReactNode;
  onAnimationStart?: (definition: AnimationDefinition) => void;
}

const FTitleVariants = cva("font-bold my-0", {
  variants: {
    size: {
      large: "text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl",
      default: "text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl",
      medium: "text-xl md:text-2xl xl:text-3xl",
      small: "text-base md:text-xl xl:text-2xl",
      xs: "text-sm md:text-base xl:text-xl",
    },
    color: {
      default: "text-foreground",
      dark: "text-primary",
      light: "text-secondary",
    },
  },
  defaultVariants: {
    size: "default",
    color: "default",
  },
});

const FTitle = forwardRef<HTMLHeadingElement, FTitleProps>(
  (
    { className, component = "h2", color, size, noAnimation, ...props },
    ref
  ) => {
    const controls = useAnimation();
    const { ref: inViewRef, inView } = useInView();

    useEffect(() => {
      if (inView && !noAnimation) {
        controls.start("visible");
      }
    }, [controls, inView, noAnimation]);

    const combinedRef = (node: HTMLHeadingElement) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
      inViewRef(node);
    };

    const MotionComponent = motion[component];

    return (
      <MotionComponent
        ref={combinedRef}
        className={cn(FTitleVariants({ size, color, className }))}
        initial={noAnimation ? undefined : "hidden"}
        animate={noAnimation ? undefined : controls}
        variants={
          noAnimation
            ? undefined
            : {
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }
        }
        {...props}
      />
    );
  }
);

FTitle.displayName = "FTitle";

export default FTitle;

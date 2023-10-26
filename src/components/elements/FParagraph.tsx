"use client";
import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import { AnimationDefinition, motion, useAnimation } from "framer-motion";
import React, { forwardRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface FParagraphProps {
  size?: "default" | "large" | "small" | "xs";
  color?: "light" | "dark";
  className?: string;
  noAnimation?: boolean;
  children?: React.ReactNode;
  onAnimationStart?: (definition: AnimationDefinition) => void;
}

const FParagraphVariants = cva("", {
  variants: {
    size: {
      default: "text-sm md:text-base",
      large: "text-base md:text-lg",
      small: "text-xs md:text-sm",
      xs: "text-xs",
    },
    color: {
      default: "text-foreground",
      dark: "text-primary",
      light: "text-secondary",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

const FParagraph = forwardRef<HTMLParagraphElement, FParagraphProps>(
  ({ className, size, color, noAnimation, ...props }, ref) => {
    const controls = useAnimation();
    const { ref: inViewRef, inView } = useInView();

    useEffect(() => {
      if (inView && !noAnimation) {
        controls.start("visible");
      }
    }, [controls, inView, noAnimation]);

    const combinedRef = (node: HTMLParagraphElement) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
      inViewRef(node);
    };

    return (
      <motion.p
        ref={combinedRef}
        className={cn(FParagraphVariants({ size, color, className }))}
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

FParagraph.displayName = "FParagraph";

export default FParagraph;

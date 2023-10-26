import { cn } from "@/libs/utils";

import { PropsWithChildren } from "react";

interface FSliderDotsProps {
  scrollSnaps: number[];
  selectedIndex: number;
  scrollTo: (index: number) => void;
  className?: string;
  activeClassName?: string;
}

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

const FSliderDots: React.FC<FSliderDotsProps> = ({
  scrollSnaps,
  selectedIndex,
  scrollTo,
  className,
  activeClassName,
}) => (
  <div className="embla__dots relative space-x-2 flex items-center justify-start">
    {scrollSnaps.map((_, index) => (
      <DotButton
        key={index}
        onClick={() => scrollTo(index)}
        className={cn(
          `embla__dot w-3 h-3 bg-background rounded-sm hover:bg-primary ${className}`.concat(
            index === selectedIndex
              ? ` embla__dot--selected bg-primary ${activeClassName}`
              : ` opacity-50`
          )
        )}
      />
    ))}
  </div>
);

export default FSliderDots;

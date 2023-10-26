import {
  FContainer,
  FParagraph,
  FSliderDots,
  FSubtitle,
  FTitle,
  FTitles,
} from "@/components/elements/";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";

interface ComponentProps {
  content: any;
  scrollSnaps: number[];
  selectedIndex: number;
  scrollTo: (index: number) => void | undefined;
}

const HomeHeroSlider: FC<ComponentProps> = ({
  scrollSnaps,
  selectedIndex,
  scrollTo,
  content,
}) => {
  const { subtitle, title, description, image, actions } = content;

  return (
    <FContainer paddings="exclude">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${image.src})`, filter: "blur(20px)" }}
      ></div>
      <div className="py-8 flex flex-col-reverse gap-6 items-center justify-between md:flex-row">
        <div className="flex flex-col items-start justify-start gap-6 z-10 w-full md:gap-8">
          <div className="space-y-6 w-full md:space-y-5 md:max-w-xl">
            <FTitles>
              <FSubtitle color="dark">{subtitle}</FSubtitle>
              <FTitle>{title}</FTitle>
            </FTitles>
            <FParagraph>{description}</FParagraph>
          </div>
          <div className="flex justify-start items-center flex-wrap gap-6">
            {actions.map((action: any, index: any) => (
              <Button key={index} variant={action.type} title={action.label}>
                {action.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="relative flex justify-end item-start w-full">
          <Image
            src={image.src}
            height={720}
            width={720}
            alt={image.alt}
            className="aspect-square object-cover rounded-lg"
          />
          <div className="absolute bottom-2 right-2">
            <FSliderDots
              scrollSnaps={scrollSnaps}
              selectedIndex={selectedIndex}
              scrollTo={scrollTo}
            />
          </div>
        </div>
      </div>
    </FContainer>
  );
};

export default HomeHeroSlider;

"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import dynamic from "next/dynamic";
import React, { FC, useCallback, useEffect, useState } from "react";

interface NrImageSliderProps {
  data: any;
  componentName: string;
  styles?: {};
}

const FComponentSlider: FC<NrImageSliderProps> = ({ data, componentName }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      inViewThreshold: 0.1,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnMouseEnter: true,
      }),
    ]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(
    null
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  useEffect(() => {
    const importComponent = async () => {
      try {
        const component = dynamic(
          () => import(`@/components/elements/${componentName}`)
        );
        setComponent(() => component);
      } catch (err) {
        console.error(`Cannot load dynamic component ${componentName}`, err);
      }
    };

    importComponent();
  }, [componentName]);

  return (
    <div className="embla h-full relative top-0 right-0 w-full">
      <div
        className={`embla__viewport overflow-hidden w-auto h-full`}
        ref={emblaRef}
      >
        <div className="embla__container flex touch-pan-y flex-row h-full bg-transparent">
          {Component &&
            data.map((item: any, index: any) => (
              <div
                className="embla__slide bg-none bg-transparent overflow-hidden grow-0 shrink-0 basis-full relative mr-lg"
                key={index}
              >
                <div className="h-full">
                  <Component
                    content={item}
                    scrollSnaps={scrollSnaps}
                    selectedIndex={selectedIndex}
                    scrollTo={scrollTo}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FComponentSlider;

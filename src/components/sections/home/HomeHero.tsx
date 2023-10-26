import { FComponentSlider } from "@/components/elements/";
import { FC } from "react";

interface HomeHeroProps {
  hero: any;
}

const HomeHero: FC<HomeHeroProps> = ({ hero }) => {
  const { slides } = hero;
  return (
    <main className="w-full">
      <FComponentSlider data={slides} componentName="HomeHeroSlide" />
    </main>
  );
};

export default HomeHero;

import { HomeHero } from "@/components/sections";
import config from "@/db/config.json";
import page from "@/db/home.json";

export const metadata = {
  title: config.meta.company + " - " + page.meta.title,
  description: page.meta.description,
  keywords: page.meta.keywords,
  author: config.meta.author,
  company: config.meta.company,
  robots: page.meta.robots,
  ogTitle: config.meta.company + " - " + page.meta.ogTitle,
  ogDescription: page.meta.ogDescription,
  ogImage: page.meta.ogImage,
  ogUrl: page.meta.ogUrl,
};

const Home = () => {
  const {
    contents: { hero },
  } = page;
  return (
    <div className="flex items-start min-h-screen">
      <HomeHero hero={hero} />
    </div>
  );
};

export default Home;

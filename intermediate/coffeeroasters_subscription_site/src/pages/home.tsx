import { Hero } from "../components/hero";

import homeHero from "../assets/home/desktop/image-hero-coffeepress.jpg";
import homeHeroMobile from "../assets/home/mobile/image-hero-coffeepress.jpg";

import { Collection } from "../components/collection";

export const HomePage = () => {
  return (
    <div>
      <Hero
        bg={homeHero}
        bgMobile={homeHeroMobile}
        buttonLabel="Create your plan"
        buttonTo="/create-your-plan"
        desc="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
        title="Great coffe made simple."
      />
      <Collection />
    </div>
  );
};

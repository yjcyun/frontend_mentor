import { BrowserRouter } from "react-router-dom";
import { Hero } from "./components/hero";

import { Layout } from "./components/layout";
import homeHero from "./assets/home/desktop/image-hero-coffeepress.jpg";
import homeHeroMobile from "./assets/home/mobile/image-hero-coffeepress.jpg";
import aboutHero from "./assets/home/desktop/image-hero-coffeepress.jpg";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Hero
          bg={homeHero}
          bgMobile={homeHeroMobile}
          buttonLabel="Create your plan"
          buttonTo="/create-your-plan"
          desc="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
          title="Great coffe made simple."
        />
        <Hero
          bg={aboutHero}
          bgMobile={homeHeroMobile}
          desc="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
          title="About Us"
          titleSize="medium"
          size="medium"
        />
      </Layout>
    </BrowserRouter>
  );
};

export default App;

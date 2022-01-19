import styled from "styled-components";

import { ReactComponent as CoffeeIcon } from "../assets/home/desktop/icon-coffee-bean.svg";
import { ReactComponent as GiftIcon } from "../assets/home/desktop/icon-gift.svg";
import { ReactComponent as TruckIcon } from "../assets/home/desktop/icon-truck.svg";
import { ValueCard } from "./value-card";

const ourValues = [
  {
    icon: <CoffeeIcon />,
    title: "Best quality",
    desc: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    icon: <GiftIcon />,
    title: "Exclusive benefits",
    desc: "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    icon: <TruckIcon />,
    title: "Free shipping",
    desc: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

const StyledChooseUs = styled.div`
  background: #2c343e;
  color: var(--light-cream);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 0;
  margin-bottom: 151px;
  border-radius: 10px;
  height: 577px;

  .choose-us-title {
    width: 540px;

    h2 {
      margin-bottom: 32px;
    }
  }

  .our-values {
    display: flex;
    padding: 0 85px;
    gap: 30px;
    padding-top: 86px;
  }

  @media (max-width: 1024px) {
    padding: 56px 0 0;

    .our-values {
      flex-direction: column;
      padding: 0 58px;
      margin-top: 70px;
    }
  }

  @media (max-width: 767px) {
    padding: 64px 24px 0;

    .choose-us-title {
      width: 100%;

      h2 {
        margin-bottom: 24px;
      }
    }

    .our-values {
      margin-top: 64px;
      padding: 0;
      gap: 24px;
    }
  }
`;

export const ChooseUs: React.FC = () => {
  return (
    <StyledChooseUs>
      <div className="choose-us-title">
        <h2>Why choose us?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className="our-values">
        {ourValues.map((value) => (
          <ValueCard key={value.title} {...value} />
        ))}
      </div>
    </StyledChooseUs>
  );
};

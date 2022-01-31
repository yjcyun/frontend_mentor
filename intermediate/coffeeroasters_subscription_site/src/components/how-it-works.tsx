import styled from "styled-components";
import { Card } from "./card";

const howItWorks = [
  {
    heading: "01",
    title: "Pick your coffee",
    desc: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    heading: "02",
    title: "Choose the frequency",
    desc: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    heading: "03",
    title: "Receive and enjoy!",
    desc: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

const StyledCards = styled.div`
  display: flex;
  gap: 95px;
`;

export const HowItWorks = () => {
  return (
    <>
      <h4>How it works</h4>
      <StyledCards>
        {howItWorks.map((work) => (
          <Card heading={work.heading} title={work.title} desc={work.desc} />
        ))}
      </StyledCards>
    </>
  );
};

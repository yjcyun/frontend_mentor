import styled from "styled-components";
import { Button } from "./button";

type TitleSize = "large" | "medium";
interface HeroProps {
  bg: string;
  bgMobile: string;
  buttonLabel?: string;
  buttonTo?: string;
  desc: string;
  title: string;
  titleSize?: TitleSize;
  size?: TitleSize;
}

interface StyledHeroProps {
  bg: string;
  bgMobile: string;
  size: TitleSize;
}

const StyledHero = styled.div<StyledHeroProps>`
  height: ${(props) => (props.size === "large" ? "600px" : "450px")};
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--light-cream);
  padding-left: 85px;
  margin-top: 43.5px;
  border-radius: 10px;
  align-items: center;
  display: flex;

  .hero-content {
    width: 493px;
  }

  p {
    margin-top: 32px;
    width: 445px;
    color: rgba(254, 252, 247, 0.8);
  }

  button {
    margin-top: 56px;
  }

  @media (max-width: 1024px) {
    height: ${(props) => (props.size === "large" ? "500px" : "400px")};
    padding-left: 58px;

    .hero-content {
      width: 398px;
    }

    p {
      margin-top: 24px;
    }

    button {
      margin-top: 40px;
    }
  }

  @media (max-width: 640px) {
    background-image: url(${(props) => props.bgMobile});
    padding: 0 24px;
    text-align: center;

    .hero-content {
      width: 100%;
    }

    p {
      width: 100%;
    }
  }
`;

export const Hero: React.FC<HeroProps> = ({
  bg,
  bgMobile,
  buttonLabel,
  buttonTo,
  desc,
  title,
  titleSize = "large",
  size = "large",
}) => {
  return (
    <StyledHero bg={bg} bgMobile={bgMobile} size={size}>
      <div className="hero-content">
        {titleSize === "large" ? <h1>{title}</h1> : <h2>{title}</h2>}

        <p>{desc}</p>
        {buttonLabel && <Button text={buttonLabel} to={buttonTo} />}
      </div>
    </StyledHero>
  );
};

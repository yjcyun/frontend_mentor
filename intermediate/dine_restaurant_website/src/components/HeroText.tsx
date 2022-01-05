import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

interface HeroTextProps {
  title: string | React.ReactNode;
  description: string;
  btnLabel?: string;
  btnTo?: string;
}

const StyledHeroText = styled.div`
  margin-top: 153px;

  h1 {
    width: 523px;
  }

  p {
    width: 445px;
    margin: 24px 0 42px;
  }

  @media (max-width: 1024px) {
    margin-top: 32px;

    h1 {
      width: auto;
      font-size: 4.8rem;
      line-height: 6.4rem;
      letter-spacing: -0.6px;
    }

    p {
      width: 573px;
      margin: 24px auto;
    }
  }

  @media (max-width: 680px) {
    h1 {
      width: auto;
      font-size: 3.2rem;
      line-height: 4rem;
      letter-spacing: -0.4px;
    }

    p {
      width: auto;
    }
  }
`;

export const HeroText: React.FC<HeroTextProps> = ({
  title,
  description,
  btnTo,
  btnLabel,
}) => {
  return (
    <StyledHeroText>
      <h1>{title}</h1>
      <p>{description}</p>
      {btnLabel && <Button to={btnTo}>{btnLabel}</Button>}
    </StyledHeroText>
  );
};

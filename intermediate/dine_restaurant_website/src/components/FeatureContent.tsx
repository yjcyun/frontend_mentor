import styled from 'styled-components';

import { ReactComponent as Divide } from '../assets/patterns/pattern-divide.svg';

interface FeatureContentProps {
  title: string;
  description: string;
  dark?: boolean;
}

const StyledFeatureContent = styled.div<{ dark: boolean }>`
  width: 445px;
  color: ${(props) => (props.dark ? 'var(--white)' : 'inherit')};

  h2 {
    padding: 48px 0 16px;
  }

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 680px) {
    width: 100%;

    h2 {
      font-size: 3.2rem;
      line-height: 4rem;
      letter-spacing: -0.4px;
    }
  }
`;

export const FeatureContent: React.FC<FeatureContentProps> = ({
  title,
  description,
  dark = false,
}) => {
  return (
    <StyledFeatureContent dark={dark}>
      <Divide />
      <h2>{title}</h2>
      <p>{description}</p>
    </StyledFeatureContent>
  );
};

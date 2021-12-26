import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button } from './Button';
import { Divider } from './Divider';

interface DisplyGridProps {
  alt: string;
  description: string;
  img: string;
  isHome?: boolean;
  label: string;
  title: string;
  to?: string;
}

interface GridContentProps {
  isHome: boolean;
}

const StyledGrid = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1015px;
  gap: 69px;

  &:nth-of-type(2n) {
    flex-direction: row-reverse;
    margin-left: auto;
  }

  @media (max-width: 680px) {
    flex-direction: column;
    gap: 0;

    &:nth-of-type(2n) {
      flex-direction: column;
    }
  }
`;

const GridImg = styled.div`
  display: flex;
  align-items: center;
  max-width: 540px;

  img {
    width: 100%;
    height: fit-content;
  }

  @media (max-width: 680px) {
    max-width: 100%;
  }
`;

const GridContent = styled.div<GridContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 350px;

  .content {
    padding: 32px 0;

    p {
      padding: 28px 0 24px;
    }
  }

  @media (max-width: 996px) {
    max-width: ${(props) => (props.isHome ? '339px' : '281px')};
  }

  @media (max-width: 680px) {
    max-width: fit-content;
    margin-top: 32px;

    .content {
      padding: ${(props) => (props.isHome ? '32px 0 51px' : '24px 0')};
    }
  }
`;

export const DisplayGrid: React.FC<DisplyGridProps> = ({
  alt,
  description,
  img,
  isHome = false,
  label,
  title,
  to,
}) => {
  return (
    <StyledGrid>
      <GridImg>
        <img src={img} alt={alt} />
      </GridImg>
      <GridContent isHome={isHome}>
        <Divider />
        <div className='content'>
          <h2>{title}</h2>
          <p>{description}</p>
          {to ? (
            <Link to={to}>
              <Button variant='secondary'>{label}</Button>
            </Link>
          ) : (
            <Button variant='secondary'>{label}</Button>
          )}
        </div>
        <Divider />
      </GridContent>
    </StyledGrid>
  );
};

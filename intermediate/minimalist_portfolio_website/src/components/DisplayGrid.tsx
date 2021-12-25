import styled from 'styled-components';

import Button from './Button';
import Divider from './Divider';

interface DisplyGridProps {
  alt: string;
  description: string;
  img: string;
  isHome?: boolean;
  label: string;
  title: string;
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
    gap: 0;
    flex-direction: column;
  }
`;

const GridImg = styled.div`
  max-width: 540px;

  img {
    width: 100%;
  }

  @media (max-width: 680px) {
    max-width: 100%;
  }
`;
const GridContent = styled.div<{ isHome: boolean }>`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .content {
    padding: 32px 0;
  }

  p {
    padding: 28px 0 24px;
  }

  @media (max-width: 996px) {
    max-width: ${(props) => (props.isHome ? '339px' : '281px')};
  }

  @media (max-width: 680px) {
    max-width: fit-content;
    margin-top: ${(props) => (props.isHome ? '32px' : '24px')};

    .content {
      padding: ${(props) => (props.isHome ? '32px 0 51px' : '24px 0')};
    }
  }
`;

const DisplayGrid: React.FC<DisplyGridProps> = ({
  alt,
  description,
  img,
  isHome = false,
  label,
  title,
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
          <Button variant='secondary'>{label}</Button>
        </div>
        <Divider />
      </GridContent>
    </StyledGrid>
  );
};

export default DisplayGrid;

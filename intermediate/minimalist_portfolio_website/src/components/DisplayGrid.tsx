import styled from 'styled-components';

import Button from './Button';
import Divider from './Divider';

interface DisplyGridProps {
  alt: string;
  description: string;
  img: string;
  label: string;
  title: string;
}

const StyledGrid = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1015px;

  &:nth-of-type(2n) {
    flex-direction: row-reverse;
    margin-left: auto;
  }
`;

const GridImg = styled.div`
  max-width: 540px;

  img {
    width: 100%;
  }
`;
const GridContent = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    padding: 28px 0 24px;
  }
`;

const DisplayGrid: React.FC<DisplyGridProps> = ({
  alt,
  description,
  img,
  label,
  title,
}) => {
  return (
    <StyledGrid>
      <GridImg>
        <img src={img} alt={alt} />
      </GridImg>
      <GridContent>
        <Divider />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <Button>{label}</Button>
        </div>
        <Divider />
      </GridContent>
    </StyledGrid>
  );
};

export default DisplayGrid;

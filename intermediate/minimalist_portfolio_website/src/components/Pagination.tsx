import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as PrevArrow } from '../assets/icons/arrow-left.svg';
import { ReactComponent as NextArrow } from '../assets/icons/arrow-right.svg';

import { PortfolioType } from '../data/portfolio';

interface PaginationProps {
  prev: PortfolioType;
  next: PortfolioType;
}

const StyledPagination = styled.div`
  border-top: 1px solid rgba(51, 50, 61, 0.15);
  border-bottom: 1px solid rgba(51, 50, 61, 0.15);
  display: flex;
  justify-content: space-between;
  margin: 64px 0 115px;

  @media (max-width: 996px) {
    margin: 80px 0;
  }

  @media (max-width: 680px) {
    margin: 65px 0;
  }
`;

const PaginationBlock = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 32px 0;

  &:nth-of-type(2n) {
    text-align: right;
    justify-content: flex-end;
    border-left: 1px solid rgba(51, 50, 61, 0.15);
  }

  @media (max-width: 680px) {
    &:nth-of-type(2n) a {
      flex-direction: column-reverse;
      align-items: flex-end;
    }
  }
`;

const PaginationButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 32px;

  p {
    opacity: 0.5;
    color: var(--light-black);
  }

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const Pagination: React.FC<PaginationProps> = ({ prev, next }) => {
  return (
    <StyledPagination>
      <PaginationBlock>
        <PaginationButton to={`/portfolio/${prev.slug}`}>
          <PrevArrow />
          <div>
            <h3>{prev.title}</h3>
            <p>Previous Project</p>
          </div>
        </PaginationButton>
      </PaginationBlock>
      <PaginationBlock>
        <PaginationButton to={`/portfolio/${next.slug}`}>
          <div>
            <h3>{next.title}</h3>
            <p>Next Project</p>
          </div>
          <NextArrow />
        </PaginationButton>
      </PaginationBlock>
    </StyledPagination>
  );
};

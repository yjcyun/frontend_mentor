import styled from "styled-components";

import { CardType } from "../types";
import { Card } from "./card";

interface CardGroupProps {
  data: CardType[];
}

const StyledCardGroup = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const CardGroup: React.FC<CardGroupProps> = ({ data }) => {
  return (
    <StyledCardGroup>
      {data.map((d) => (
        <Card {...d} key={d.label} />
      ))}
    </StyledCardGroup>
  );
};

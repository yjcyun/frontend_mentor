import styled from "styled-components";

interface CardProps {
  label: string;
  content: string;
}

const StyledCard = styled.div`
  border: 1px solid var(--white-20);
  background: transparent;
  padding: 20px 23px 27px;
  text-transform: uppercase;
  width: 100%;

  h4 {
    margin-bottom: 4px;
    color: var(--white-50);
  }
`;

export const Card: React.FC<CardProps> = ({ label, content }) => {
  return (
    <StyledCard>
      <h4>{label}</h4>
      <h2>{content}</h2>
    </StyledCard>
  );
};

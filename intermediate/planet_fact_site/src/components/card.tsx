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

  @media (max-width: 767px) {
    padding: 9px 24px 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      margin-bottom: 0;
      padding-top: 7px;
    }
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

import styled from "styled-components";

interface CardProps {
  heading?: string;
  img?: string;
  title: string;
  desc: string;
}

const StyledCard = styled.div`
  max-width: 285px;

  h1 {
    color: var(--pale-orange);
  }

  h3 {
    padding: 38px 0 42px;
    max-width: 255px;
  }
`;

export const Card: React.FC<CardProps> = ({ heading, img, title, desc }) => {
  return (
    <StyledCard>
      {heading ? <h1>{heading}</h1> : <img src={img} alt={title} />}
      <h3>{title}</h3>
      <p>{desc}</p>
    </StyledCard>
  );
};

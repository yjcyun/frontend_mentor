import styled from "styled-components";

interface BigSelectionProps {
  title: string;
  desc: string;
  active?: boolean;
}

const StyledBigSelection = styled.div`
  padding: 32px 28px;
  min-height: 250px;
  width: 228px;
  background: #f4f1eb;
  border-radius: 8px;
  transition: var(--transition);

  h4 {
    margin-bottom: 24px;
  }

  &:hover {
    background: var(--pale-orange);
  }

  &.active {
    background: var(--dark-cyan);

    h4 {
      color: var(--white);
    }

    p {
      color: var(--light-cream);
    }
  }
`;

export const BigSelection: React.FC<BigSelectionProps> = ({
  title,
  desc,
  active = false,
}) => {
  return (
    <StyledBigSelection className={`${active ? "active" : ""}`}>
      <h4>{title}</h4>
      <p>{desc}</p>
    </StyledBigSelection>
  );
};

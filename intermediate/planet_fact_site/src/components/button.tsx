import styled from "styled-components";

interface ButtonProps {
  bg: string;
  active?: boolean;
}

interface StyledButtonProps {
  bg: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  border: 1px solid var(--white-20);
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: 2.57px;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: var(--white);
  background: transparent;
  padding: 12px 28px;
  transition: var(--transition);

  .index {
    margin-right: 28px;
    color: var(--white-50);
  }

  &:hover {
    background: var(--white-20);
  }

  &.active {
    background: ${(props) => props.bg};
    border-color: ${(props) => props.bg};
  }
`;

export const Button: React.FC<ButtonProps> = ({ bg, active = false }) => {
  return (
    <StyledButton bg={bg} className={`${active ? "active" : ""}`}>
      <span className="index">01</span>
      <span>overview</span>
    </StyledButton>
  );
};

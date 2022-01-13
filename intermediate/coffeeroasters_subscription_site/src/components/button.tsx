import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
  disabled?: boolean;
  text: string;
  to?: string;
}

const StyledButton = styled.button`
  font-weight: 900;
  line-height: 2.5rem;
  font-size: 1.8rem;
  color: var(--white);
  background: var(--dark-cyan);
  transition: var(--transition);
  border-radius: 6px;
  width: 21.7rem;
  height: 5.6rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #66d2cf;
  }

  &.disabled {
    background: #e2dedb;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  text,
  to,
}) => {
  const navigate = useNavigate();

  return (
    <StyledButton
      className={`${disabled ? "disabled" : ""}`}
      onClick={() => {
        if (to) navigate(to);
      }}
    >
      <span className="label">{text}</span>
    </StyledButton>
  );
};

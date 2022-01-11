import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

interface ButtonProps {
  active?: boolean;
  bg: string;
  category: string;
  index: string;
  onChange: (text: string) => void;
  text: string;
  to?: string;
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
  width: 100%;
  text-align: left;

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

  @media (max-width: 767px) {
    border: none;
    text-align: center;
    line-height: 100%;
    padding: 0;
    color: var(--white-50);
    font-size: 0.9rem;
    letter-spacing: 1.93px;

    .index {
      display: none;
    }

    &:hover {
      background: none;
    }

    &.active {
      background: transparent;

      .label {
        border-bottom: 4px solid white;
        color: var(--white);
      }
    }

    .label {
      padding-bottom: 16px;
    }
  }
`;

export const Button: React.FC<ButtonProps> = ({
  active = false,
  bg,
  category,
  index,
  onChange,
  text,
  to,
}) => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  return (
    <StyledButton
      bg={bg}
      className={`${active ? "active" : ""}`}
      onClick={() => {
        if (onChange) onChange(category);
        if (to) navigate(to);
      }}
    >
      <span className="index">{index}</span>

      <span className="label">{width > 767 ? text : category}</span>
    </StyledButton>
  );
};

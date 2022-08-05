import styled, { css } from "styled-components";
import IconCheck from "../assets/icon-check.svg";

type CheckboxProps = {
  isChecked: boolean;
};

const checkedBackground =
  "linear-gradient(135deg,hsl(192, 100%, 67%) 0%, hsl(280, 87%, 65%) 80%, hsl(280, 87%, 65%) 100%)";

export const StyledCheckbox = styled.span<{ $isChecked: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 24px;
  background-image: ${(props) => (props.$isChecked ? checkedBackground : "")};
  transition: border-color 0.2s ease;

  img {
    visibility: ${(props) => (props.$isChecked ? "visible" : "hidden")};
  }

  ${({ $isChecked }) =>
    !$isChecked &&
    css`
      &:hover {
        border-image-slice: 1 !important;
        border-width: 1px;
        border-style: solid;
        background: linear-gradient(
              ${({ theme }) => theme.todoBackgroundColor},
              ${({ theme }) => theme.todoBackgroundColor}
            )
            padding-box,
          ${checkedBackground} border-box;
        border-color: transparent;
        border-radius: 50%;
      }
    `}

  @media (max-width: 576px) {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
`;

const Checkbox = ({ isChecked }: CheckboxProps) => {
  return (
    <StyledCheckbox $isChecked={isChecked}>
      <img src={IconCheck} alt="Check Icon" />
    </StyledCheckbox>
  );
};

export default Checkbox;

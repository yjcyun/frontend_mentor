import styled from "styled-components";

import { Button } from "./button";

interface ButtonGroupProps {
  activeButton: string;
  bg: string;
  onChange: (index: string) => void;
}

const buttons = [
  { index: "01", text: "overview", category: "overview" },
  { index: "02", text: "internal structure", category: "structure" },
  { index: "03", text: "surface geology", category: "geology" },
];

const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 39px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  activeButton,
  bg,
  onChange,
}) => {
  return (
    <StyledButtonGroup>
      {buttons.map((b) => (
        <Button
          active={activeButton === b.category}
          bg={bg}
          category={b.category}
          index={b.index}
          key={b.index}
          onChange={onChange}
          text={b.text}
        />
      ))}
    </StyledButtonGroup>
  );
};

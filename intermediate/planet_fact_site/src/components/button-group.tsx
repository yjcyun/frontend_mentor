import styled from "styled-components";

import { Button } from "./button";

interface ButtonGroupProps {
  activeIndex: number;
  bg: string;
  onChange: (index: number) => void;
}

const buttons = [
  { index: 0, text: "overview" },
  { index: 1, text: "internal structure" },
  { index: 2, text: "surface geology" },
];

const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  activeIndex,
  bg,
  onChange,
}) => {
  return (
    <StyledButtonGroup>
      {buttons.map((b) => (
        <Button
          bg={bg}
          index={b.index}
          text={b.text}
          key={b.index}
          active={activeIndex === b.index}
          onChange={onChange}
        />
      ))}
    </StyledButtonGroup>
  );
};

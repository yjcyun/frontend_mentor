import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Chevron } from "../assets/plan/desktop/icon-arrow.svg";

interface AccordionMenuProps {
  title: string;
  disabled?: boolean;
}

interface StyledAccordionMenuProps {
  open: boolean;
}

const StyledAccordionMenu = styled.div<StyledAccordionMenuProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: var(--grey);
  }

  svg {
    transition: var(--transition);
    transform: ${(props) => (props.open ? "rotate(180deg)" : "")};
  }

  &:hover {
    svg path {
      fill: #66d2cf;
    }
  }

  &.disabled h2 {
    color: var(--grey-50);
  }
`;

export const AccordionMenu: React.FC<AccordionMenuProps> = ({
  title,
  disabled = false,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <StyledAccordionMenu
      className={`${disabled ? "disabled" : ""}`}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <h2>{title}</h2>

      <Chevron />
    </StyledAccordionMenu>
  );
};

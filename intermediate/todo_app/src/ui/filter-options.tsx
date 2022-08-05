import styled from "styled-components";

import { TaskStatus } from "../components/todo/todo";

type FilterOptionsProps = {
  items?: { value: string; label: string }[];
  onClick: (status: TaskStatus) => void;
  selectedItem: TaskStatus;
  hideInMobile?: boolean;
};

const StyledUl = styled.ul<{ $hide: boolean }>`
  display: flex;
  gap: 18px;
  font-weight: bold;
  font-size: 14px;
  color: ${({ theme }) => theme.footerText};

  @media (max-width: 576px) {
    display: ${(props) => (props.$hide ? "none" : "flex")};
  }
`;

const StyledLi = styled.li<{ $isActive: boolean }>`
  color: ${(props) => (props.$isActive ? "#3A7CFD" : "")};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text1};
  }
`;

const status = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

const FilterOptions = ({
  hideInMobile = false,
  items = status,
  selectedItem,
  onClick,
}: FilterOptionsProps) => {
  return (
    <StyledUl $hide={hideInMobile}>
      {items.map((s) => (
        <StyledLi
          key={s.value}
          onClick={() => onClick(s.value as TaskStatus)}
          $isActive={selectedItem === s.value}
        >
          {s.label}
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default FilterOptions;

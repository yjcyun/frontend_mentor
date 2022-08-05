import styled from "styled-components";
import FilterOptions from "../../ui/filter-options";

import { TaskStatus } from "./todo";

type FilterProps = {
  size: number;
  clearCompletedTasks: () => void;
  updateFilterStatus: (status: TaskStatus) => void;
  taskStatus: TaskStatus;
};

const StyledFilter = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme }) => theme.footerText};

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const StyledClear = styled.button`
  &:hover {
    color: ${({ theme }) => theme.text1};
  }
`;

const Filter = ({
  size,
  clearCompletedTasks,
  updateFilterStatus,
  taskStatus,
}: FilterProps) => {
  return (
    <StyledFilter>
      <div>{size} items left</div>
      <FilterOptions
        onClick={updateFilterStatus}
        selectedItem={taskStatus}
        hideInMobile
      />
      <StyledClear onClick={clearCompletedTasks}>Clear Completed</StyledClear>
    </StyledFilter>
  );
};

export default Filter;

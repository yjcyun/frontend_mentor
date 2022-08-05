import styled from "styled-components";

import FilterOptions from "../../ui/filter-options";

import Filter from "./filter";
import { Task, TaskStatus } from "./todo";
import InnerList from "./inner-list";
import { StyledWrapper } from "../../style/global-style";

type ListProps = {
  tasks: Task[];
  activeTasksLength: number;
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
  clearCompletedTasks: () => void;
  updateFilterStatus: (status: TaskStatus) => void;
  taskStatus: TaskStatus;
  updateTaskOrder: (status: Task[]) => void;
};

const StyledList = styled.div`
  ${StyledWrapper}
  padding: 0;
  margin: 24px 0;

  @media (max-width: 576px) {
    padding: 0;
    margin: 16px 0;
  }
`;

const FilterOptionsWrapper = styled.div`
  ${StyledWrapper};
  display: none;
  justify-content: center;

  @media (max-width: 576px) {
    display: flex;
  }
`;

const List = ({
  tasks,
  activeTasksLength,
  clearCompletedTasks,
  updateFilterStatus,
  taskStatus,
  ...rest
}: ListProps) => {
  return (
    <>
      <StyledList>
        <InnerList tasks={tasks} taskStatus={taskStatus} {...rest} />
        <Filter
          size={activeTasksLength}
          clearCompletedTasks={clearCompletedTasks}
          updateFilterStatus={updateFilterStatus}
          taskStatus={taskStatus}
        />
      </StyledList>
      <FilterOptionsWrapper>
        <FilterOptions onClick={updateFilterStatus} selectedItem={taskStatus} />
      </FilterOptionsWrapper>
    </>
  );
};

export default List;

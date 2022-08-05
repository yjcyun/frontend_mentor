import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import ListItem from "./list-item";
import { Task, TaskStatus } from "./todo";

type InnerListProps = {
  tasks: Task[];
  taskStatus: TaskStatus;
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
  updateTaskOrder: (status: Task[]) => void;
};

const StyledEmptyContainer = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  text-align: center;
  color: ${({ theme }) => theme.text2};
`;

const InnerList = ({
  tasks,
  taskStatus,
  updateTaskOrder,
  ...rest
}: InnerListProps) => {
  const [todos, setTodos] = useState(tasks);

  useEffect(() => {
    if (tasks) {
      setTodos(tasks);
    }
  }, [tasks]);

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = [...tasks];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
    updateTaskOrder(items);
  };

  return tasks.length ? (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {todos.map((task, idx) => (
              <ListItem
                id={task.id}
                index={idx}
                key={task.id}
                label={task.label}
                isCompleted={task.isCompleted}
                {...rest}
              />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  ) : (
    <StyledEmptyContainer>
      There are no {taskStatus === "all" ? "more" : taskStatus} tasks.
    </StyledEmptyContainer>
  );
};

export default InnerList;

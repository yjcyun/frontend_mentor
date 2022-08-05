import styled from "styled-components";

import Checkbox from "../../ui/checkbox";
import IconCross from "../../assets/icon-cross.svg";
import { Draggable } from "react-beautiful-dnd";

type ListItemProps = {
  id: string;
  index: number;
  label: string;
  isCompleted: boolean;
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
};

const StyledDeleteButton = styled.button`
  opacity: 0;
  transition: 0.2s ease-out;

  img {
    width: 100%;
  }

  @media (max-width: 576px) {
    opacity: 1;
    width: 12px;
    height: 12px;
  }
`;

const StyledListItem = styled.li`
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.border};

  &:hover ${StyledDeleteButton} {
    opacity: 1;
  }

  @media (max-width: 576px) {
    padding: 15px 20px;
  }
`;

const StyledCheckboxlabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledHiddenCheckbox = styled.input`
  appearance: none;
`;

const StyledLabel = styled.span<{ $isChecked: boolean }>`
  text-decoration: ${(props) => (props.$isChecked ? "line-through" : "")};
  color: ${(props) =>
    props.$isChecked ? props.theme.text4 : props.theme.text2};
  width: 85%;
`;

const ListItem = ({
  id,
  index,
  label,
  isCompleted,
  toggleTaskCompletion,
  deleteTask,
}: ListItemProps) => {
  const toggleCheckbox = () => toggleTaskCompletion(id);

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided: any) => (
        <StyledListItem
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          id={id}
        >
          <StyledCheckboxlabel>
            <StyledHiddenCheckbox
              type="checkbox"
              name="task-item"
              onChange={toggleCheckbox}
            />
            <Checkbox isChecked={isCompleted} />
            <StyledLabel $isChecked={isCompleted}>{label}</StyledLabel>
          </StyledCheckboxlabel>

          <StyledDeleteButton
            aria-label="Remove Task"
            onClick={() => deleteTask(id)}
          >
            <img src={IconCross} alt="Cross Icon" />
          </StyledDeleteButton>
        </StyledListItem>
      )}
    </Draggable>
  );
};

export default ListItem;

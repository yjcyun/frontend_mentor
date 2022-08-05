import React, { useState } from "react";
import styled from "styled-components";

import { StyledWrapper } from "../../style/global-style";
import Checkbox from "../../ui/checkbox";

type FormProps = {
  addNewTask: (label: string) => void;
};

const StyledForm = styled.form`
  ${StyledWrapper};
  display: flex;
`;

const StyledSubmitButton = styled.button`
  display: none;
`;

const StyledInput = styled.input`
  all: unset;
  caret-color: #3a7cfd;
  color: ${({ theme }) => theme.text2};
  width: 100%;
  flex: 1;

  &::placeholder {
    color: ${({ theme }) => theme.text3};
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

const Form = ({ addNewTask }: FormProps) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addNewTask(inputValue.trim());
    setInputValue("");
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Checkbox isChecked={false} />
      <StyledInput
        onChange={onInputChange}
        placeholder="Create a new todo..."
        value={inputValue}
      />
      <StyledSubmitButton type="submit">Add</StyledSubmitButton>
    </StyledForm>
  );
};

export default Form;

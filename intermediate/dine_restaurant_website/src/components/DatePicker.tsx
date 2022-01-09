import styled from "styled-components";

const StyledDatePicker = styled.div`
  color: var(--cod-gray);
`;

export const DatePicker: React.FC = () => {
  return (
    <StyledDatePicker>
      <div>Pick a date</div>
      <select name="" id="">
        <option value="">01</option>
        <option value="">02</option>
      </select>
    </StyledDatePicker>
  );
};

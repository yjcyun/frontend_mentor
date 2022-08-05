import React from "react";
import styled from "styled-components";

export const StyledNotification = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: 50px;
  color: ${({ theme }) => theme.footerText};

  @media (max-width: 576px) {
    margin-top: 40px;
  }
`;

const BottomNotification = () => {
  return (
    <StyledNotification>
      <p>Drag and drop to reorder list</p>
    </StyledNotification>
  );
};

export default BottomNotification;

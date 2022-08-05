import { css, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Josefin Sans', sans-serif;
    background-color: ${({ theme }) => theme.backgroundColor};
    font-size: 18px;

    @media (max-width: 576px) {
      font-size: 12px;
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    outline: none;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
  }
`;

export const StyledWrapper = css`
  padding: 20px 24px;
  background-color: ${({ theme }) => theme.todoBackgroundColor};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.todoBoxShadow};

  @media (max-width: 576px) {
    padding: 15px 20px;
  }
`;

export default GlobalStyle;

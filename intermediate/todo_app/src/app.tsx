import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Header from "./components/header";
import ThemeToggler from "./components/theme-toggler";
import Todo from "./components/todo/todo";

import GlobalStyle from "./style/global-style";
import { darkTheme, lightTheme } from "./style/themes";

export type Theme = "light" | "dark";

const AppContainer = styled.div`
  background-image: url(${({ theme }) => theme.backgroundImage});
  width: 100%;
  max-height: 300px;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;

  @media (max-width: 576px) {
    background-image: url(${({ theme }) => theme.backgroundImageMobile});
    background-size: contain;
    max-height: inherit;
  }
`;

const TodoContainer = styled.div`
  max-width: 588px;
  margin: 0 auto;
  padding: 70px 24px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const App = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const isDarkTheme = theme === "dark";
  const appTheme = isDarkTheme ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyle />
      <AppContainer>
        <TodoContainer>
          <HeaderContainer>
            <Header />
            <ThemeToggler toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          </HeaderContainer>
          <Todo />
        </TodoContainer>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;

/**
 * Heading
 * Theme Toggler
 * Todo
 * - Input
 * - List
 *     - InnerList
 *        - ListItem
 *     - Filter
 *
 */

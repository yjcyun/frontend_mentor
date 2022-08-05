import styled from "styled-components";

import IconMoon from "../assets/icon-moon.svg";
import IconSun from "../assets/icon-sun.svg";

type ThemeTogglerProps = {
  toggleTheme: () => void;
  isDarkTheme: boolean;
};

const StyledIcon = styled.img`
  @media (max-width: 576px) {
    width: 20px;
    height: 20px;
  }
`;

const ThemeToggler = ({ toggleTheme, isDarkTheme }: ThemeTogglerProps) => {
  return (
    <button onClick={toggleTheme}>
      {isDarkTheme ? (
        <StyledIcon src={IconSun} alt="Sun icon" aria-label="Light mode" />
      ) : (
        <StyledIcon src={IconMoon} alt="Moon icon" aria-label="Dark mode" />
      )}
    </button>
  );
};

export default ThemeToggler;

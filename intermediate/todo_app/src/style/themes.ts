import { DefaultTheme } from "styled-components";

import lightImage from "../assets/bg-desktop-light.jpg";
import lightImageMobile from "../assets/bg-mobile-light.jpg";
import darkImage from "../assets/bg-desktop-dark.jpg";
import darkImageMobile from "../assets/bg-mobile-dark.jpg";

export const lightTheme: DefaultTheme = {
  backgroundImage: lightImage,
  backgroundImageMobile: lightImageMobile,
  backgroundColor: "#F2F2F2",
  todoBackgroundColor: "#FFFFFF",
  todoBoxShadow: "0px 35px 50px -15px rgba(194, 195, 214, 0.5)",
  text1: "#494C6B",
  text2: "#494C6B",
  text3: "#9495A5",
  text4: "#D1D2DA",
  footerText: "#9495A5",
  border: "#E3E4F1",
  closeButton: "#494C6B",
};

export const darkTheme: DefaultTheme = {
  backgroundImage: darkImage,
  backgroundImageMobile: darkImageMobile,
  backgroundColor: "#171823",
  todoBackgroundColor: "#25273D",
  todoBoxShadow: "0px 35px 50px -15px rgba(0, 0, 0, 0.5)",
  text1: "#E3E4F1",
  text2: "#C8CBE7",
  text3: "#767992",
  text4: "#4D5067",
  footerText: "#5B5E7E",
  border: "#393A4B",
  closeButton: "#5B5E7E",
};

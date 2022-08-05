import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundImage: string;
    backgroundImageMobile: string;
    backgroundColor: string;
    todoBackgroundColor: string;
    todoBoxShadow: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    footerText: string;
    border: string;
    closeButton: string;
  }
}

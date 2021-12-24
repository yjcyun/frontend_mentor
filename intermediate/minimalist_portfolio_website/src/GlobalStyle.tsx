import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* 1. colors */
    --cyan: #5FB4A2;
    --dark-blue: #203A4C;
    --light-black: #33323D;
    --very-light-grey: #FAFAFA;
    --white: #FFFFFF;
    --light-grey: #EAEAEB;
    --red: #F43030;

    /* fonts */
    --headingFF: 'Ibarra Real Nova', serif;
    --bodyFF: 'Public Sans', sans-serif;

    --transition: 0.1s ease-in-out;
  }

  /* Initialize */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: var(--bodyFF);
  }


  /* 2. Typography */
  h1,h2,h3 {
    font-family: var(--headingFF);
  }

  h1 {
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: -0.45px;
    line-height: 5rem;
  }

  h2 {
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: -0.36px;
    line-height: 4.2rem;
  }

  h3 {
    font-size: 3.2rem;
    font-weight: 400;
    letter-spacing: -0.29px;
    line-height: 3.6rem;
  }

  p {
    font-family: var(--bodyFF);
    font-size: 1.6rem;
    line-height: 3rem;
  }

  p.body2{
    font-size: 1.5rem;
  }

  /* 3. Buttons */
  button {
    border: none;
    outline: none;
    font-family: var(--bodyFF);
    cursor: pointer;
  }
`;

export default GlobalStyle;

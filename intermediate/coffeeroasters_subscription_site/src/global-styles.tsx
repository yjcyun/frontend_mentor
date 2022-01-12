import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* 1. colors */
    --dark-cyan: #0e8784;
    --dark-grey-blue: #333d4b;
    --grey: #83888f;
    --pale-orange: #fdd6ba;
    --light-cream: #fefcf7;
    --white: #fff;

    /* fonts */
    --bodyFF: 'Barlow', sans-serif;
    --headingFF: 'Fraunces', serif;

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
    color: var(--dark-grey-blue);
    background-color: var(--white);
  }

  /* 2. Typography */
  h1, h2, h3, h4 {
    font-family: var(--headingFF);
    font-weight: 900;
  }

  h1 {
    font-size: 7.2rem;
    line-height: 7.2rem;
  }

  h2 {
    font-size: 4rem;
    line-height: 4.8rem;
  }

  h3 {
    font-size: 3.2rem;
    line-height: 3.6rem;
  }

  h4 {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  p {
    font-family: var(--bodyFF);
    font-size: 1.6rem;
    line-height: 2.6rem;
  }

  p.small {
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  /* 3. Buttons */
  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-family: var(--headingFF);
  }

  /* General */
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  @media (max-width: 996px) {
  }

  @media (max-width: 767px) {
  }
`;

export default GlobalStyle;

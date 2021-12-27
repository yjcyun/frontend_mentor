import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* 1. colors */
    --beaver: #9e7f66;
    --cod-gray: #111111;
    --mirage: #17192b;
    --ebony-clay: #242b37;
    --shuttle-gray: #5c6779;

    /* fonts */
    --ff: 'Spartan', sans-serif;

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
    font-family: var(--ff);
    color: var(--ebony-clay);
  }


  /* 2. Typography */
  h1 {
    font-size: 6.4rem;
    font-weight: 300;
    letter-spacing: -0.8px;
    line-height: 7.2rem;
  }

  h2 {
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 5.6rem;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: -0.22px;
    line-height: 2.8rem;
  }

  h3.small {
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 2px;
    line-height: 2.8rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: -0.22px;
    line-height: 3rem;
  }

  p.body2{
    font-size: 1.5rem;
    letter-spacing: -0.19px;
    line-height: 2.8rem;
  }

  /* 3. Buttons */
  button {
    border: none;
    outline: none;
    font-family: var(--ff);
    cursor: pointer;
  }

  /* General */
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;

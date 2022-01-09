import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* 1. colors */
    --navy: #070724;
    --light-black: #38384F;
    --blue: #419EBB;
    --red: #D83A34;
    --yellow: #EDA249;
    --orange: #CD5120;
    --purple: #6f2ed6;
    --mint: #1ec2a4;
    --white: #fff;

    /* fonts */
    --headingFF: 'Antonio', sans-serif;;
    --bodyFF: 'Spartan', sans-serif;;

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
    color: var(--white);
  }


  /* 2. Typography */
  h1,h2 {
    font-family: var(--headingFF);
  }

  h3,h4 {
    font-family: var(--bodyFF);
    text-transform: uppercase;
    font-weight: 700;
  }

  h1 {
    font-size: 8rem;
    font-weight: 500;
    line-height: 10.3rem,;
  }

  h2 {
    font-size: 4rem;
    font-weight: 500;
    letter-spacing: -1.5px;
    line-height: 5.2rem;
  }

  h3 {
    font-size: 1.2rem;
    letter-spacing: 2.6px;
    line-height: 2.5rem;
  }

  h4 {
    font-size: 1.1rem;
    letter-spacing: 1px;
    line-height: 2.5rem;
  }

  p {
    font-family: var(--bodyFF);
    font-size: 1.4rem;
    line-height: 2.5rem;
  }

  /* 3. Buttons */
  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-family: var(--bodyFF);
  }

  /* General */
  a {
    text-decoration: none;
  }

  .gutter {
    padding: 0 40px;
    max-width: 1190px;
  }

  @media (max-width: 680px) {
    .gutter {
      margin-top: 32px;
      padding: 0 32px;

    }
  }
`;

export default GlobalStyle;

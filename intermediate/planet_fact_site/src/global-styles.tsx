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
    --dark-blue: #2D68F0;
    --white: #fff;
    --white-50: rgba(255,255,255,0.5);
    --white-20: rgba(255,255,255,0.2);
    --white-10: rgba(255,255,255,0.1);

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
    background-color: var(--navy);
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
    line-height: 10.3rem;
    text-transform: uppercase;
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

  ul {
    list-style: none;
  }



  @media (max-width: 996px) {
    h1 {
      font-size: 4.8rem;
      line-height: 100%;
    }

    h2 {
      font-size: 2.4rem;
      line-height: 100%;
      letter-spacing: 0.9px;
    }

    h4 {
      font-size: 0.8rem;
      line-height: 1.6rem;
      letter-spacing: 0.73px;
    }

    p {
      font-size: 1.1rem;
      line-height: 2.2rem;
    }
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 2rem;
      letter-spacing: -0.75px;
    }
  }


  
`;

export default GlobalStyle;

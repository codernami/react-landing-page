import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Open sans', sans-serif;
  }
  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.8rem, 5vw, 2rem);
    margin-bottom: 1rem;
  }
  p, button, li {
    font-size: clamp(1rem, 1.25vw, 1.25rem);
  }
  img {
    width: 100%;
  }
`;

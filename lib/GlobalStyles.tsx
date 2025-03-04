import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: var(--font-brand), sans-serif;
    background-color: black;
    color: white;
  }

  h1, h2, h3, h4, h5, p {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }



  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;

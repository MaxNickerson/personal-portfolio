// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    background: #f8f8f8;
    color: #333;
  }

  a {
    color: #0070f3;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;

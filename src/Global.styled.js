import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, 
  *:before, 
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.3;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;
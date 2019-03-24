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
`;

export default GlobalStyle;
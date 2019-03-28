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
    background-color: #fff;
  }

  h1,
  h2,
  p {
    margin: 0;
    padding: 0;
    font-weight: 400;
  }

  input,
  textarea,
  button,
  select,
  a {
    user-select: none; 
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  button,
  input {
    :focus {
      outline: 5px solid turquoise;
    } 
  }
`;

export default GlobalStyle;
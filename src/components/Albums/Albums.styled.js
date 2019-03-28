import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  /* Make element focusable by keyboard, and not by click */
  span {
    display: block;
    width: 100%;
    height: 100%;
  }

  :focus {
    outline: none;

    span {
      outline: 5px solid turquoise;
    }
  }

  span:focus {
    outline: none;
  }
`;
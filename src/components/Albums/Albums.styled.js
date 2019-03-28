import styled, { keyframes } from 'styled-components';

const zoomInOut = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1);
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;

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

  @media(hover:hover) {
    :hover {
      cursor: pointer;

      div:first-of-type {
        scale: 1;
        animation: ${zoomInOut} 0.5s ease-in-out 1;
      }
    }
  }
`;
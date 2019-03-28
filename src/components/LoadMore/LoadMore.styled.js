import styled, { keyframes } from 'styled-components';

const zoomInOut = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
`;

export const Button = styled.button`
  scale: 1;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #1ecee4;
  color: white;
  padding: 10px;

  @media(hover:hover) {
    :hover {
      cursor: pointer;
      animation: ${zoomInOut} 0.5s ease-in-out 1;
    }
  }
`;
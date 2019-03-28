import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { 
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  margin: 0 auto;
  border: 10px solid #f3f3f3;
  border-top: 10px solid #969696;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 1s linear infinite;
`;

export default Loader;
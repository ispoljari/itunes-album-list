import styled from 'styled-components';

export const Button = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 5px;
  background-color: #1ecee4;
  color: white;
  padding: 10px;
  opacity: 0.4;

  i {
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-135deg);
  }

  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;
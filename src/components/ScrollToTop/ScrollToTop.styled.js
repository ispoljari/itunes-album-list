import styled from 'styled-components';

export const Button = styled.button`
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  position: fixed;
  bottom: 10px;
  right: 10px;
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 5px;
  background-color: #1ecee4;
  color: white;
  padding: 10px;
  opacity: ${props => props.visible ? '0.4' : '0'};
  transition: opacity 0.5s ease, visibility 0.5s ease;

  i {
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-135deg);
  }

  @media(hover:hover) {
    :hover {
      cursor: pointer;
      opacity: 1;
    }
  }

  :focus {
      opacity: 1;
    }
`;
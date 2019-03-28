import styled from 'styled-components';

const Img = styled.img`
  height: 100%;
  max-width: ${props => props.large ? '300px' : '170px'};
  border-radius: 5px;
`;

export {
  Img
};
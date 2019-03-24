import styled from 'styled-components';

const RowStyled = styled.div`
  display: flex;

  @media (min-width: 575px) {
    margin-bottom: 10px;
  }

  // Row API

  flex-flow: ${props => (
    props.flexFlow ? props.flexFlow : 'row wrap'
  )};

  justify-content: ${props => (
    props.justifyContent ? props.justifyContent : 'flex-start'
  )};

  align-items: ${props => (
    props.alignItems ? props.alignItems : 'center'
  )};
`;

export default RowStyled;
import styled from 'styled-components';

const RowStyled = styled.div`
  display: flex;

  // Row API
  /* margin-bottom: ${props => (
    props.mb ? props.mb : 0
  )};

  margin-top: ${props => (
    props.mt ? props.mt : 0
  )}; */

  margin-bottom: 0px;

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
import styled from 'styled-components';

const RowStyled = styled.div`
  display: flex;
  margin-bottom: 0;

  flex-flow: ${props => {
    if(props.flexFlow) return props.flexFlow
    return 'row wrap'
  }};

  justify-content: ${props => {
    if(props.justifyContent) return props.justifyContent
    return 'flex-start'
  }};

  align-items: ${props => {
    if(props.alignItems) return props.alignItems
    return 'center'
  }};
`;

export default RowStyled;
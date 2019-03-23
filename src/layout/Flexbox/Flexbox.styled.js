import styled from 'styled-components';

const FlexboxStyled = styled.div`
  display: flex;

  flex-wrap: ${props => {
    if(props.wrap) return props.wrap
    return 'wrap'
  }};

  justify-content: ${props => {
    if(props.justifyContent) return props.justifyContent
    return 'center'
  }};

  align-items: ${props => {
    if(props.alignItems) return props.alignItems
    return 'center'
  }};

  align-content: ${props => {
    if(props.alignContent) return props.alignContent
    return 'center'
  }};

  flex-direction: ${props => (
    props.column ? 'column' : 'row'
  )};
`;

export default FlexboxStyled;
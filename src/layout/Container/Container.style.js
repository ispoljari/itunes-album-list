import styled from 'styled-components';

const StyledContainer = styled.div `
  padding-left: ${props => {
    if(props.fullWidth) return 0;
    return 'calc((100vw-1440px)/2)'
  }};

  padding-right: ${props => {
    if(props.fullWidth) return 0;
    return 'calc((100vw-1440px)/2)'
  }};

  padding-top: ${props => {
    if(props.fullVertical) return 0;
    return '25px';
  }};

  padding-bottom: ${props => {
    if(props.fullVertical) return 0;
    return '25px';
  }};
`;

export default StyledContainer;
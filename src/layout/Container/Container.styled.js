import styled, { css } from 'styled-components';

const StyledContainer = styled.div `
  ${props => {
    return (
      !props.fullWidth && css`
        max-width: 1440px;
        margin: 0 auto;
      `
    )
  }};

  padding-left: ${props => {
    if(props.fullWidth) return 0;
    return '25px'
  }};

  padding-right: ${props => {
    if(props.fullWidth) return 0;
    return '25px'
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
import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  padding: 0;

  ${props => {
    return (
      !props.fullWidth && css`
        max-width: 1460px;
        margin: 0 auto;
        padding: 0 10px;
      `
    )
  }};
`;

export default StyledContainer;
import styled, { css } from 'styled-components';

import { LayoutApi } from '../../common';

// TODO: refactor to remove repeating code segments

const BoxStyled = styled(LayoutApi)`
  ${props => {
    if (props.display) {
      return css`
        display: ${props.display};
      `;
    }
  }};

  ${props => {
    if (props.flexDirection) {
      return css`
        flex-direction: ${props.flexDirection};
      `;
    }
  }};

  ${props => {
    if (props.justifyContent) {
      return css`
        justify-content: ${props.justifyContent};
      `;
    }
  }}; 

  ${props => {
    if (props.alignItems) {
      return css`
        align-items: ${props.alignItems};
      `;
    }
  }};

  ${props => {
    if (props.backgroundColor) {
      return css`
        background-color: ${props.backgroundColor};
      `;
    }
  }};
`;

export default BoxStyled;
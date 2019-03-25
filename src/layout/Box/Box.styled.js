import styled, { css } from 'styled-components';

import { LayoutApi } from '../../common';

const BoxStyled = styled(LayoutApi)`
  ${props => {
    if (props.backgroundColor) {
      return css`
        background-color: ${props.backgroundColor};
      `;
    }
  }};

  ${props => {
    if (props.width) {
      return css`
        width: ${props.width};
      `;
    }
  }};
`;

export default BoxStyled;
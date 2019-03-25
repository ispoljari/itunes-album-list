import styled, { css } from 'styled-components';

import { LayoutApi } from '../../common';

const BoxStyled = styled(LayoutApi)`
  ${props => {
    if (props.display) {
      return css`
        display: ${props.display};
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
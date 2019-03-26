import styled, { css } from 'styled-components';

export const P = styled.p`
  font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1700 - 320)));
  color: ${props => props.light ? '#bebebe' : '#969696'};

  ${props => {
    if (props.mt) {
      return css`
        margin-top: ${props.mt};
      `;
    }
  }}

  @media (min-width: 1700px) {
    font-size: 18px;
  }

  @media (max-width: 320px) {
    font-size: 14px;
  }
`;
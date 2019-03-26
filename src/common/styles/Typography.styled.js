import styled, { css } from 'styled-components';

export const P = styled.p`
  font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (1700 - 320)));
  color: ${props => props.light ? '#bebebe' : '#969696'};
  text-transform: uppercase;

  ${props => {
    if (props.mt) {
      return css`
        margin-top: ${props.mt};
      `;
    }
  }}

  @media (min-width: 1700px) {
    font-size: 16px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;
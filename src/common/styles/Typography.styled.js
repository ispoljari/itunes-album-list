import styled, { css } from 'styled-components';

export const P = styled.p`
  font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (1700 - 320)));
  color: ${props => {
    if (props.light) {
      return '#bebebe';
    } else if (props.error) {
      return 'red';
    } else {
      return '#969696';
    }
  }};

  text-transform: uppercase;

  ${props => {
    let sumCSS = ``;

    if (props.mt) {
      sumCSS += `margin-top: ${props.mt};`;
    }

    if (props.textAlign) {
      sumCSS += `text-align: ${props.textAlign};`;
    }

    return css`${sumCSS}`;
  }}

  @media (min-width: 1700px) {
    font-size: 16px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;
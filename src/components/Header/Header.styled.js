import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: calc(22px + (32 - 22) * ((100vw - 320px) / (1700 - 320)));
  font-weight: 400;

  @media (min-width: 1700px) {
    font-size: 32px;
  }

  @media (max-width: 320px) {
    font-size: 22px;
  }
`;

export const P = styled.p`
  font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1700 - 320)));
  color: #969696;

  @media (min-width: 1700px) {
    font-size: 18px;
  }

  @media (max-width: 320px) {
    font-size: 14px;
  }
`;
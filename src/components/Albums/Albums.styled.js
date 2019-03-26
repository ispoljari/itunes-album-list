import styled from 'styled-components';

export const Img = styled.img`
  height: 100%;
  border-radius: 5px;
`;

export const H2 = styled.h2`
  font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1700 - 320)));

  @media (min-width: 1700px) {
    font-size: 24px;
  }

  @media (max-width: 320px) {
    font-size: 18px;
  }
`;
import styled from 'styled-components';

export const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;

export const H2 = styled.h2`
  font-size: calc(22px + (26 - 22) * ((100vw - 320px) / (1700 - 320)));

  @media (min-width: 1700px) {
    font-size: 26px;
  }

  @media (max-width: 320px) {
    font-size: 22px;
  }
`;
import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: calc(22px + (30 - 22) * ((100vw - 320px) / (1700 - 320)));

  @media (min-width: 1700px) {
    font-size: 30px;
  }

  @media (max-width: 320px) {
    font-size: 22px;
  }
`;

export const Input = styled.input`
  width: 100%;
  min-height: 40px;
  font-size: calc(16px + (18 - 16) * ((100vw - 320px) / (1700 - 320)));
  padding: 5px 10px;
  border: 1px solid #c1c1c1;

  @media (min-width: 1700px) {
    font-size: 18px;
  }

  @media (max-width: 320px) {
    font-size: 16px;
  }
`;
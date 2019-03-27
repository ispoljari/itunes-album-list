import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: calc(24px + (30 - 24) * ((100vw - 320px) / (1700 - 320)));

  @media (min-width: 1700px) {
    font-size: 30px;
  }

  @media (max-width: 320px) {
    font-size: 24px;
  }
`;

export const Input = styled.input`
  width: 100%;
  min-height: 34px;
  font-size: calc(16px + (18 - 16) * ((100vw - 320px) / (1700 - 320)));
  padding: 0 10px;
  border: 1px solid #c1c1c1;
  border-radius: 5px;

  :focus {
    outline: 5px solid turquoise;
  }

  @media (min-width: 1700px) {
    font-size: 18px;
  }

  @media (max-width: 320px) {
    font-size: 16px;
  }
`;
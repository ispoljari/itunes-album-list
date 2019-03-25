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

export const Input = styled.input`
  width: 100%;
  font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (1700 - 320)));
  padding: 5px;
  border: 1px solid #c1c1c1;
  border-radius: 5px;

  @media (min-width: 1700px) {
    font-size: 20px;
  }

  @media (max-width: 320px) {
    font-size: 16px;
  }
`;
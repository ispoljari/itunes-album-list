import styled from 'styled-components';

export const Img = styled.img`
  height: 100%;
  border-radius: 5px;
`;

export const H2 = styled.h2`
  font-size: calc(16px + (22 - 16) * ((100vw - 320px) / (1700 - 320)));

  @media (min-width: 1700px) {
    font-size: 22px;
  }

  @media (max-width: 320px) {
    font-size: 16px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  user-select: none;  
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  span {
    display: block;
    width: 100%;
    height: 100%;
  }

  :focus {
    outline: none;

    span {
      outline: 5px solid turquoise;
    }
  }

  span:focus {
    outline: none;
  }
`;
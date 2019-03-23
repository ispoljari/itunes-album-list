import styled, { css } from 'styled-components';

const ColumnStyled = styled.div`
  flex-basis: 100%;
  flex: auto;
  padding-left: 1.041666%;
  padding-right: 1.041666%;

  margin-bottom: 10px;

  // Column API
  ${props => {
    if (props.xs) { 
      return css`
        @media (max-width: 575px) {
          flex-basis: (props.xs / 12) * 100%;
        }
      `;
    } else if (props.sm) {
      return css`
        @media (min-width: 576px) {
          flex-basis: (props.sm / 12) * 100%
        }
      `;
    } else if (props.md) {
      return css`
        @media (min-width: 768px) {
          flex-basis: (props.md / 12) * 100%
        }
      `;
    } else if (props.lg) {
      return css`
        @media (min-width: 992px) {
          flex-basis: (props.lg / 12) * 100%
        }
      `;
    } else if (props.xl) {
      return css`
        @media (min-width: 1200px) {
          flex-basis: (props.xl / 12) * 100%
        }
      `;
    }
  }}
`;

export default ColumnStyled;
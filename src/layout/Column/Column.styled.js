import styled, { css } from 'styled-components';

import { LayoutApi } from '../../common';

const ColumnStyled = styled(LayoutApi)`
  flex: auto;
  padding: 0 1.041666%; /* default */
  
  /* Column API */;

  ${props => {
     if (props.xs) {
      return css`
        flex-basis: ${props.xs/12*100}%;
        margin-left: ${props.oxs ? props.oxs/12*100 : ''}%;
        max-width: ${props.xs/12*100}%;
      `;
     } else {
      return css`
        flex-basis: 100%;
        max-width: 100%;
      `;
     }
  }};

  @media (min-width: 576px) {
    ${props => {
      if (props.sm) {
        return css`
          flex-basis: ${props.sm/12*100}%;
          margin-left: ${props.osm ? props.osm/12*100 : ''}%;
          max-width: ${props.sm/12*100}%;
        `;
      }
    }};
  };

  @media (min-width: 768px) {
    ${props => {
      if (props.md) {
        return css`
          flex-basis: ${props.md/12*100}%;
          margin-left: ${props.omd ? props.omd/12*100 : ''}%;
          max-width: ${props.md/12*100}%;
        `;
      }
    }};
  };

  @media (min-width: 992px) {
    ${props => {
      if (props.lg) {
        return css`
          flex-basis: ${props.lg/12*100}%;
          margin-left: ${props.olg ? props.olg/12*100 : ''}%;
          max-width: ${props.lg/12*100}%;
        `;
      }
    }};
  };

  @media (min-width: 1200px) {
    ${props => {
      if (props.xl) {
        return css`
          flex-basis: ${props.xl/12*100}%;
          margin-left: ${props.oxl ? props.oxl/12*100 : ''}%;
          max-width: ${props.xl/12*100}%;
        `;
      }
    }};
  };
`;

export default ColumnStyled;
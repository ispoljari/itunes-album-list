import styled, { css } from 'styled-components';

import { LayoutApi } from '../../common';

const ColumnStyled = styled(LayoutApi)`
  flex: auto;
  padding: 0 1.041666%; /* default */
  
  /* Column API */;

  ${props => {
    let sumCSS = ``;

     if (props.xs) {
      sumCSS += `
        flex-basis: ${props.xs/12*100}%;
        max-width: ${props.xs/12*100}%;
      `;
      if (props.oxs) {
        sumCSS += `margin-left: ${props.oxs/12*100}%;`;
      }
     } else {
       sumCSS += `
       flex-basis: 100%;
       max-width: 100%;
      `;
     }

     return css`${sumCSS}`;
  }};

  /* refactor this code segment further, using a media-query templating function */
  
  @media (min-width: 576px) {
    ${props => {
      let sumCSS = ``;

      if (props.sm) {
        sumCSS += `
          flex-basis: ${props.sm/12*100}%;
          max-width: ${props.sm/12*100}%;
        `;

        if (props.osm) {
          sumCSS += `margin-left: ${props.osm/12*100}%;`;
        }
      }

      return css`${sumCSS}`;
    }};
  };

  @media (min-width: 768px) {
    ${props => {
      let sumCSS = ``;

      if (props.md) {
        sumCSS += `
          flex-basis: ${props.md/12*100}%;
          max-width: ${props.md/12*100}%;
        `;

        if (props.omd) {
          sumCSS += `margin-left: ${props.omd/12*100}%;`;
        }
      }

      return css`${sumCSS}`;
    }};
  };

  @media (min-width: 992px) {
    ${props => {
      let sumCSS = ``;

      if (props.lg) {
        sumCSS += `
          flex-basis: ${props.lg/12*100}%;
          max-width: ${props.lg/12*100}%;
        `;

        if (props.olg) {
          sumCSS += `margin-left: ${props.olg/12*100}%;`;
        }
      }

      return css`${sumCSS}`;
    }};
  };

  @media (min-width: 1200px) {
    ${props => {
      let sumCSS = ``;

      if (props.xl) {
        sumCSS += `
          flex-basis: ${props.xl/12*100}%;
          max-width: ${props.xl/12*100}%;
        `;

        if (props.oxl) {
          sumCSS += `margin-left: ${props.oxl/12*100}%;`;
        }
      }

      return css`${sumCSS}`;
    }};
  };
`;

export default ColumnStyled;
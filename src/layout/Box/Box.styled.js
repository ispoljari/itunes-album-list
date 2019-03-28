import styled, { css } from 'styled-components';

import { LayoutApi } from '../../common';

const BoxStyled = styled(LayoutApi)`

  ${props => {
    let sumCSS = ``;

    if (props.dsPlay) {
      sumCSS += `display: ${props.dsPlay};`;
    };

    if (props.pos) {
      sumCSS += `position: ${props.pos};`;
    };

    if (props.zIndex) {
      sumCSS += `z-index: ${props.zIndex};`;
    };

    if (props.top) {
      sumCSS += `top: ${props.top};`;
    };

    if (props.left) {
      sumCSS += `left: ${props.left};`;
    };

    if (props.right) {
      sumCSS += `right: ${props.right};`;
    };

    if (props.transf) {
      sumCSS += `transform: ${props.transf};`;
    };

    if (props.alignItems) {
      sumCSS += `align-items: ${props.alignItems};`;
    };
    
    if (props.justifyContent) {
      sumCSS += `justify-content: ${props.justifyContent};`;
    };
    
    if (props.flexDirection) {
      sumCSS += `flex-direction: ${props.flexDirection};`;
    };

    if (props.backgroundColor) {
      sumCSS += `background-color: ${props.backgroundColor};`;
    };

    if (props.background) {
      sumCSS += `background: ${props.background};`;
    };

    if (props.borderRadius) {
      sumCSS += `border-radius: ${props.borderRadius};`;
    };

    return css`${sumCSS}`;
  }};
  
`;

export default BoxStyled;
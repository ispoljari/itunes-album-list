import styled from 'styled-components';

import LayoutApi from '../../common/styles/LayoutApi.styled';

const ColumnStyled = styled(LayoutApi)`
  flex: auto;
  padding: 0 1.041666%; /* default */
  
  /* Column API */

  /* widths */
  flex-basis: ${props => {
    if (props.xs) {
      return props.xs/12*100 + '%'
    } else {
      return '100%'
    }
  }};

  @media (min-width: 576px) {
    flex-basis: ${props => {
      if (props.sm) {
        return props.sm/12*100 + '%'
      }
    }}
  }

  @media (min-width: 768px) {
    flex-basis: ${props => {
      if (props.md) {
        return props.md/12*100 + '%'
      }
    }}
  }

  @media (min-width: 992px) {
    flex-basis: ${props => {
      if (props.lg) {
        return props.lg/12*100 + '%'
      }
    }}
  }

  @media (min-width: 1200px) {
    flex-basis: ${props => {
      if (props.xl) {
        return props.xl/12*100 + '%'
      }
    }}
  }
`;

export default ColumnStyled;
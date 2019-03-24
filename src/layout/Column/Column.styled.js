import styled from 'styled-components';

const ColumnStyled = styled.div`
  flex: auto;
  padding: 0 1.041666%; /* default */
  
  /* Column API */

  /* paddings */
  padding-left: ${props => {
    if (props.pl || props.px) {
      return (props.pl || props.px)
    }
  }};

  padding-right: ${props => {
    if (props.pr || props.px) {
      return (props.pr || props.px)
    }
  }};

  padding-top: ${props => {
    if (props.pt || props.py) {
      return (props.pt || props.py)
    }
  }};

  padding-bottom: ${props => {
    if (props.pb || props.py) {
      return (props.pb || props.py)
    }
  }};

  padding: ${props => {
    if (props.p) {
      return props.p
    }
  }};

  /* margins*/
  margin-left: ${props => {
    if (props.ml || props.mx) {
      return (props.ml || props.mx)
    }
  }};

  margin-right: ${props => {
    if (props.mr || props.mx) {
      return (props.mr || props.mx)
    }
  }};

  margin-top: ${props => {
    if (props.mt || props.my) {
      return (props.mt || props.my)
    }
  }};

  margin-bottom: ${props => {
    if (props.mb || props.my) {
      return (props.mb || props.my)
    }
  }};

  margin: ${props => {
    if (props.m) {
      return props.my
    }
  }};

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
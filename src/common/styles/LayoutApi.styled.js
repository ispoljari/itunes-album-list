import styled, { css } from 'styled-components';

const LayoutApi = styled.div`
  /* &&& used to increase selector specificity */
  &&& { 
    /* paddings */
    padding-left: ${props => {
      if (typeof(props.pl) === 'string') {
        return props.pl;
      } else if (typeof(props.px) === 'string') {
        return props.px;
      }
    }};

    ${props => {
      if (typeof(props.pl) === 'object') {
        return css`
          @media (max-width: 575px) {
            padding-left: ${props.pl.xs ? props.pl.xs : ''};
          }

          @media (min-width: 576px) {
            padding-left: ${props.pl.sm ? props.pl.sm : ''};
          }
          
          @media (min-width: 768px) {
            padding-left: ${props.pl.md ? props.pl.md : ''};
          }
          
          @media (min-width: 992px) {
            padding-left: ${props.pl.lg ? props.pl.lg : ''};
          }
          
          @media (min-width: 1200px) {
            padding-left: ${props.pl.xl ? props.pl.xl : ''};
          }
        `
      } else if (typeof(props.px) === 'object') {
        return css`
          @media (max-width: 575px) {
            padding-left: ${props.px.xs ? props.px.xs : ''};
            padding-right: ${props.px.xs ? props.px.xs : ''};
          }

          @media (min-width: 576px) {
            padding-left: ${props.px.sm ? props.px.sm : ''};
            padding-right: ${props.px.sm ? props.px.sm : ''};
          }
          
          @media (min-width: 768px) {
            padding-left: ${props.px.md ? props.px.md : ''};
            padding-right: ${props.px.md ? props.px.md : ''};
          }
          
          @media (min-width: 992px) {
            padding-left: ${props.px.lg ? props.px.lg : ''};
            padding-right: ${props.px.lg ? props.px.lg : ''};
          }
          
          @media (min-width: 1200px) {
            padding-left: ${props.px.xl ? props.px.xl : ''};
            padding-right: ${props.px.xl ? props.px.xl : ''};
          }
        `
      }
    }};

    padding-right: ${props => {
      if (typeof(props.pr) === 'string') {
        return props.pr;
      } else if (typeof(props.px) === 'string') {
        return props.px;
      }
    }};

    ${props => {
      if (typeof(props.pr) === 'object') {
        return css`
           @media (max-width: 575px) {
            padding-right: ${props.pr.xs ? props.pr.xs : ''};
          }

          @media (min-width: 576px) {
            padding-right: ${props.pr.sm? props.pr.sm : ''};
          }
          
          @media (min-width: 768px) {
            padding-right: ${props.pr.md ? props.pr.md : ''};
          }
          
          @media (min-width: 992px) {
            padding-right: ${props.pr.lg ? props.pr.lg : ''};
          }
          
          @media (min-width: 1200px) {
            padding-right: ${props.pr.xl ? props.pr.xl : ''};
          }
        `
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
  }
`;

export default LayoutApi;
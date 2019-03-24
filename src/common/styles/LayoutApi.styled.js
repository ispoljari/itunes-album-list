import styled, { css } from 'styled-components';

const LayoutApi = styled.div`
  /* &&& used to increase selector specificity */
  &&& { 
    ${props => {
      if (typeof(props.pl) === 'string' || typeof(props.pr) === 'string') {
        return css`
          padding-left: ${props.pl ? props.pl : ''};
          padding-right: ${props.pr ? props.pr : ''};
        `;
      } else if (typeof(props.px) === 'string') {
        return css`
          padding-left: ${props.px};
          padding-right: ${props.px};
        `;
      } else if (typeof(props.pl) === 'object' || typeof(props.pr) === 'object') {
        return css`
          @media (max-width: 575px) {
            padding-left: ${props.pl && (props.pl.xs ? props.pl.xs : '')};
            padding-right: ${props.pr && (props.pr.xs ? props.pr.xs : '')};
          }

          @media (min-width: 576px) {
            padding-left: ${props.pl && (props.pl.sm ? props.pl.sm : '')};
            padding-right: ${props.pr && (props.pr.sm? props.pr.sm : '')};
          }
          
          @media (min-width: 768px) {
            padding-left: ${props.pl && (props.pl.md ? props.pl.md : '')};
            padding-right: ${props.pr && (props.pr.md ? props.pr.md : '')};
          }
          
          @media (min-width: 992px) {
            padding-left: ${props.pl && (props.pl.lg ? props.pl.lg : '')};
            padding-right: ${props.pr && (props.pr.lg ? props.pr.lg : '')};
          }
          
          @media (min-width: 1200px) {
            padding-left: ${props.pl && (props.pl.xl ? props.pl.xl : '')};
            padding-right: ${props.pr && (props.pr.xl ? props.pr.xl : '')};
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

    ${props => {
      if (typeof(props.pt) === 'string' || typeof(props.pb) === 'string') {
        return css`
          padding-top: ${props.pt ? props.pt : ''};
          padding-bottom: ${props.pb ? props.pb : ''};
        `;
      } else if (typeof(props.py) === 'string') {
        return css`
          padding-top: ${props.py};
          padding-bottom: ${props.py};
        `;
      } else if (typeof(props.pt) === 'object' || typeof(props.pb) === 'object') {
        return css`
          @media (max-width: 575px) {
            padding-top: ${props.pt && (props.pt.xs ? props.pt.xs : '')};
            padding-bottom: ${props.pb && (props.pb.xs ? props.pb.xs : '')};
          }

          @media (min-width: 576px) {
            padding-top: ${props.pt && (props.pt.sm ? props.pt.sm : '')};
            padding-bottom: ${props.pb && (props.pb.sm? props.pb.sm : '')};
          }
          
          @media (min-width: 768px) {
            padding-top: ${props.pt && (props.pt.md ? props.pt.md : '')};
            padding-bottom: ${props.pb && (props.pb.md ? props.pb.md : '')};
          }
          
          @media (min-width: 992px) {
            padding-top: ${props.pt && (props.pt.lg ? props.pt.lg : '')};
            padding-bottom: ${props.pb && (props.pb.lg ? props.pb.lg : '')};
          }
          
          @media (min-width: 1200px) {
            padding-top: ${props.pt && (props.pt.xl ? props.pt.xl : '')};
            padding-bottom: ${props.pb && (props.pb.xl ? props.pb.xl : '')};
          }
        `
      } else if (typeof(props.py) === 'object') {
        return css`
          @media (max-width: 575px) {
            padding-top: ${props.py.xs ? props.py.xs : ''};
            padding-bottom: ${props.py.xs ? props.py.xs : ''};
          }

          @media (min-width: 576px) {
            padding-top: ${props.py.sm ? props.py.sm : ''};
            padding-bottom: ${props.py.sm ? props.py.sm : ''};
          }
          
          @media (min-width: 768px) {
            padding-top: ${props.py.md ? props.py.md : ''};
            padding-bottom: ${props.py.md ? props.py.md : ''};
          }
          
          @media (min-width: 992px) {
            padding-top: ${props.py.lg ? props.py.lg : ''};
            padding-bottom: ${props.py.lg ? props.py.lg : ''};
          }
          
          @media (min-width: 1200px) {
            padding-top: ${props.py.xl ? props.py.xl : ''};
            padding-bottom: ${props.py.xl ? props.py.xl : ''};
          }
        `
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
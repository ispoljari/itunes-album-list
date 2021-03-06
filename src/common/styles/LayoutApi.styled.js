import styled, { css } from 'styled-components';

// refactor this code segment further, using a media-query templating function 

const LayoutApi = styled.div`
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
        `;
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
        `;
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
        `;
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
        `;
      }
    }};

    ${props => {
      if (typeof(props.ml) === 'string' || typeof(props.mr) === 'string') {
        return css`
          margin-left: ${props.ml ? props.ml : ''};
          margin-right: ${props.mr ? props.mr : ''};
        `;
      } else if (typeof(props.my) === 'string') {
        return css`
          margin-left: ${props.my};
          margin-right: ${props.my};
        `;
      } else if (typeof(props.ml) === 'object' || typeof(props.mr) === 'object') {
        return css`
          @media (max-width: 575px) {
            margin-left: ${props.ml && (props.ml.xs ? props.ml.xs : '')};
            margin-right: ${props.mr && (props.mr.xs ? props.mr.xs : '')};
          }

          @media (min-width: 576px) {
            margin-left: ${props.ml && (props.ml.sm ? props.ml.sm : '')};
            margin-right: ${props.mr && (props.mr.sm? props.mr.sm : '')};
          }
          
          @media (min-width: 768px) {
            margin-left: ${props.ml && (props.ml.md ? props.ml.md : '')};
            margin-right: ${props.mr && (props.mr.md ? props.mr.md : '')};
          }
          
          @media (min-width: 992px) {
            margin-left: ${props.ml && (props.ml.lg ? props.ml.lg : '')};
            margin-right: ${props.mr && (props.mr.lg ? props.mr.lg : '')};
          }
          
          @media (min-width: 1200px) {
            margin-left: ${props.ml && (props.ml.xl ? props.ml.xl : '')};
            margin-right: ${props.mr && (props.mr.xl ? props.mr.xl : '')};
          }
        `;
      } else if (typeof(props.mx) === 'object') {
        return css`
          @media (max-width: 575px) {
            margin-left: ${props.mx.xs ? props.mx.xs : ''};
            margin-right: ${props.mx.xs ? props.mx.xs : ''};
          }

          @media (min-width: 576px) {
            margin-left: ${props.mx.sm ? props.mx.sm : ''};
            margin-right: ${props.mx.sm ? props.mx.sm : ''};
          }
          
          @media (min-width: 768px) {
            margin-left: ${props.mx.md ? props.mx.md : ''};
            margin-right: ${props.mx.md ? props.mx.md : ''};
          }
          
          @media (min-width: 992px) {
            margin-left: ${props.mx.lg ? props.mx.lg : ''};
            margin-right: ${props.mx.lg ? props.mx.lg : ''};
          }
          
          @media (min-width: 1200px) {
            margin-left: ${props.mx.xl ? props.mx.xl : ''};
            margin-right: ${props.mx.xl ? props.mx.xl : ''};
          }
        `;
      }
    }};

    ${props => {
      if (typeof(props.mt) === 'string' || typeof(props.mb) === 'string') {
        return css`
          margin-top: ${props.mt ? props.mt : ''};
          margin-bottom: ${props.mb ? props.mb : ''};
        `;
      } else if (typeof(props.my) === 'string') {
        return css`
          margin-top: ${props.my};
          margin-bottom: ${props.my};
        `;
      } else if (typeof(props.mt) === 'object' || typeof(props.mb) === 'object') {
        return css`
          @media (max-width: 575px) {
            margin-top: ${props.mt && (props.mt.xs ? props.mt.xs : '')};
            margin-bottom: ${props.mb && (props.mb.xs ? props.mb.xs : '')};
          }

          @media (min-width: 576px) {
            margin-top: ${props.mt && (props.mt.sm ? props.mt.sm : '')};
            margin-bottom: ${props.mb && (props.mb.sm? props.mb.sm : '')};
          }
          
          @media (min-width: 768px) {
            margin-top: ${props.mt && (props.mt.md ? props.mt.md : '')};
            margin-bottom: ${props.mb && (props.mb.md ? props.mb.md : '')};
          }
          
          @media (min-width: 992px) {
            margin-top: ${props.mt && (props.mt.lg ? props.mt.lg : '')};
            margin-bottom: ${props.mb && (props.mb.lg ? props.mb.lg : '')};
          }
          
          @media (min-width: 1200px) {
            margin-top: ${props.mt && (props.mt.xl ? props.mt.xl : '')};
            margin-bottom: ${props.mb && (props.mb.xl ? props.mb.xl : '')};
          }
        `;
      } else if (typeof(props.my) === 'object') {
        return css`
          @media (max-width: 575px) {
            margin-top: ${props.my.xs ? props.my.xs : ''};
            margin-bottom: ${props.my.xs ? props.my.xs : ''};
          }

          @media (min-width: 576px) {
            margin-top: ${props.my.sm ? props.my.sm : ''};
            margin-bottom: ${props.my.sm ? props.my.sm : ''};
          }
          
          @media (min-width: 768px) {
            margin-top: ${props.my.md ? props.my.md : ''};
            margin-bottom: ${props.my.md ? props.my.md : ''};
          }
          
          @media (min-width: 992px) {
            margin-top: ${props.my.lg ? props.my.lg : ''};
            margin-bottom: ${props.my.lg ? props.my.lg : ''};
          }
          
          @media (min-width: 1200px) {
            margin-top: ${props.my.xl ? props.my.xl : ''};
            margin-bottom: ${props.my.xl ? props.my.xl : ''};
          }
        `;
      }
    }};

    ${props => {
      if (typeof(props.wd) === 'string' || typeof(props.hg) === 'string') {
        return css`
          width: ${props.wd ? props.wd : ''};
          height: ${props.hg ? props.hg : ''};
        `;
      } else if (typeof(props.wd) === 'object' || typeof(props.hg) === 'object') {
        return css`
          @media (max-width: 575px) {
            width: ${props.wd && (props.wd.xs ? props.wd.xs : '')};
            height: ${props.hg && (props.hg.xs ? props.hg.xs : '')};
          }

          @media (min-width: 576px) {
            width: ${props.wd && (props.wd.sm ? props.wd.sm : '')};
            height: ${props.hg && (props.hg.sm ? props.hg.sm : '')};
          }
          
          @media (min-width: 768px) {
            width: ${props.wd && (props.wd.md ? props.wd.md : '')};
            height: ${props.hg && (props.hg.md ? props.hg.md : '')};
          }
          
          @media (min-width: 992px) {
            width: ${props.wd && (props.wd.lg ? props.wd.lg : '')};
            height: ${props.hg && (props.hg.lg ? props.hg.lg : '')};
          }
          
          @media (min-width: 1200px) {
            width: ${props.wd && (props.wd.xl ? props.wd.xl : '')};
            height: ${props.hg && (props.hg.xl ? props.hg.xl : '')};
          }
        `;
      }
    }};

    ${props => {
      if (typeof(props.maxWd) === 'string' || typeof(props.maxHg) === 'string') {
        return css`
          max-width: ${props.maxWd ? props.maxWd : ''};
          max-height: ${props.maxHg ? props.maxHg : ''};
        `;
      } else if (typeof(props.maxWd) === 'object' || typeof(props.maxHg) === 'object') {
        return css`
          @media (max-width: 575px) {
            max-width: ${props.maxWd && (props.maxWd.xs ? props.maxWd.xs : '')};
            max-height: ${props.maxHg && (props.maxHg.xs ? props.maxHg.xs : '')};
          }

          @media (min-width: 576px) {
            max-width: ${props.maxWd && (props.maxWd.sm ? props.maxWd.sm : '')};
            max-height: ${props.maxHg && (props.maxHg.sm ? props.maxHg.sm : '')};
          }
          
          @media (min-width: 768px) {
            max-width: ${props.maxWd && (props.maxWd.md ? props.maxWd.md : '')};
            max-height: ${props.maxHg && (props.maxHg.md ? props.maxHg.md : '')};
          }
          
          @media (min-width: 992px) {
            max-width: ${props.maxWd && (props.maxWd.lg ? props.maxWd.lg : '')};
            max-height: ${props.maxHg && (props.maxHg.lg ? props.maxHg.lg : '')};
          }
          
          @media (min-width: 1200px) {
            max-width: ${props.maxWd && (props.maxWd.xl ? props.maxWd.xl : '')};
            max-height: ${props.maxHg && (props.maxHg.xl ? props.maxHg.xl : '')};
          }
        `;
      }
    }};
  }
`;

export default LayoutApi;
import styled from 'styled-components';

const LayoutApi = styled.div`
  &&& {
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
  }
`;

export default LayoutApi;
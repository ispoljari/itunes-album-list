import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BoxStyled from './Box.styled';

class Box extends Component {
  render() {
    const {children, ...styles} = this.props;

    return (
      <BoxStyled 
        {...styles}
      >
        {children}
      </BoxStyled>
    );
  }
};

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  styles: PropTypes.shape({
    dsPlay: PropTypes.string,
    alignItems: PropTypes.string,
    justifyContent: PropTypes.string,
    flexDirection: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.string,
    pl: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    pr: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    pt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    pb: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    px: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    py: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    ml: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    mr: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    mt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    mb: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    mx: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    my: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    wd: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    hg: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    maxWd: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    maxHg: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
  })
};

Box.defaultProps = {
  styles: {
    dsPlay: '',
    alignItems: '',
    justifyContent: '',
    flexDirection: '',
    backgroundColor: '',
    borderRadius: '',
    pl: '',
    pr: '',
    pt: '',
    pb: '',
    px: '',
    py: '',
    ml: '',
    mr: '',
    mt: '',
    mb: '',
    mx: '',
    my: '',
    wd: '',
    hg: '',
    maxWd: '',
    maxHg: ''
  }
};

export default Box;
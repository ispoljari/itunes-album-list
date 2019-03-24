import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RowStyled from './Row.styled';

class Row extends Component {
  render() {
    const {children, ...styles} = this.props;

    return (
      <RowStyled 
        {...styles}
      >
        {children}
      </RowStyled>
    );
  }
};

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  styles: PropTypes.shape({
    flexFlow: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string,
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
    ])
  })
};

Row.defaultProps = {
  styles: {
    flexFlow: '',
    justifyContent: '',
    alignItems: '',
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
    my: ''
  }
};

export default Row;
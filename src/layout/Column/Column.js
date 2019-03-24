import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ColumnStyled from './Column.styled';

class Column extends Component {
  render() {
    const {children, ...styles} = this.props;

    return (
      <ColumnStyled 
        {...styles}
      >
        {children}
      </ColumnStyled>
    );
  }
};

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  styles: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    oxs: PropTypes.number,
    osm: PropTypes.number,
    omd: PropTypes.number,
    olg: PropTypes.number,
    oxl: PropTypes.number,
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

Column.defaultProps = {
  styles: {
    xs: NaN,
    sm: NaN,
    md: NaN,
    lg: NaN,
    xl: NaN,
    oxs: NaN,
    osm: NaN,
    omd: NaN,
    olg: NaN,
    oxl: NaN,
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

export default Column;
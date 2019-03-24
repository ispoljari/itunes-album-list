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
    alignItems: PropTypes.string
  })
};

Row.defaultProps = {
  styles: {
    flexFlow: '',
    justifyContent: '',
    alignItems: ''
  }
};

export default Row;
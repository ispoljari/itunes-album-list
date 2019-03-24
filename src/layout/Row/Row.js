import React, { Component } from 'react';

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

export default Row;
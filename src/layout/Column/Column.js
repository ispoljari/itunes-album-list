import React, { Component } from 'react';

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

export default Column;
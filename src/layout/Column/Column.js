import React, { Component } from 'react';

import ColumnStyled from './Column.styled';

class Column extends Component {
  render() {
    const {children, ...style} = this.props;

    return (
      <ColumnStyled 
        {...style}
      >
        {children}
      </ColumnStyled>
    );
  }
};

export default Column;
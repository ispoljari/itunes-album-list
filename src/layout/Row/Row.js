import React, { Component } from 'react';

import RowStyled from './Row.styled';

class Row extends Component {
  render() {
    const {children, ...style} = this.props;

    return (
      <RowStyled 
        {...style}
      >
        {children}
      </RowStyled>
    );
  }
};

export default Row;
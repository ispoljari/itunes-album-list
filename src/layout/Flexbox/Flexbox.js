import React, { Component } from 'react';

import FlexboxStyled from './Flexbox.styled';

class Flexbox extends Component {
  render() {
    const {children, ...style} = this.props;
    
    return (
      <FlexboxStyled 
        {...style}
      >
        {children}
      </FlexboxStyled>
    );
  }
};

export default Flexbox;
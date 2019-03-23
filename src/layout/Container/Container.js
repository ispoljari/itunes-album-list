import React, { Component } from 'react';

import StyledContainer from './Container.styled';

class Container extends Component {
  render() {
    const {children, ...style} = this.props;
    
    return (
      <StyledContainer 
        {...style}
      >
        {children}
      </StyledContainer>
    )
  }
};

export default Container;
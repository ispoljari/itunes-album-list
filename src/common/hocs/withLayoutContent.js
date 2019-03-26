import React, { Component } from 'react';

const withLayoutContent = StyledComp => {
  return class withLayoutContent extends Component {
    render() {
      const {children, ...styles} = this.props;

      return (
        <StyledComp
        {...styles}
      >
        {children}
      </StyledComp>
      )
    }
  };
};

export default withLayoutContent;

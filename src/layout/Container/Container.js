import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledContainer from './Container.styled';

class Container extends Component {
  render() {
    const {children, ...styles} = this.props;

    return (
      <StyledContainer 
        {...styles}
      >
        {children}
      </StyledContainer>
    )
  }
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  styles: PropTypes.shape({
    fullWidth: PropTypes.bool
  })
};

Container.defaultProps = {
  styles: {
    fullWidth: false
  }
};

export default Container;
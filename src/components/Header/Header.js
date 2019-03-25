import React, { Component } from 'react';

import { Box } from '../../layout';

class Header extends Component {
  render() {
    return (
      <Box
        as="header"
        role="banner"
        px="20px"
        py="20px"
      > 
        Album list
      </Box>
    )
  }
}

export default Header;
import React, { Component } from 'react';

import { Row, Column, Box } from '../../layout';

class Header extends Component {
  render() {
    return (
      <Box
        as="header"
        role="banner"
        px="20px"
        py="20px"
      > 
        <Row>
          <Column
            xs={12}
            sm={6}
          >
            Album list
          </Column>
          <Column
            xs={12}
            sm={6}
          >
            Input
          </Column>
        </Row>
      </Box>
    )
  }
}

export default Header;
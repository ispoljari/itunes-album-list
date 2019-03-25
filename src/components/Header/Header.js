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
            <h1>
              Album list
            </h1>
            <p>
              Top10
            </p>
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
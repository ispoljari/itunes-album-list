import React, { Component } from 'react';

import { Row, Column, Box } from '../../layout';
import { H1, P } from './Header.styled';

class Header extends Component {
  render() {
    return (
      <Box
        as="header"
        role="banner"
        px="30px"
        py="30px"
      > 
        <Row>
          <Column
            xs={12}
            sm={6}
          >
            <H1>
              Album list
            </H1>
            <P>
              Top10
            </P>
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
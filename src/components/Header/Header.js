import React, { Component } from 'react';

import { Row, Column, Box } from '../../layout';
import { H1, Input } from './Header.styled';
import { P } from '../../common';

class Header extends Component {
  render() {
    const { limit } = this.props;

    return (
      <Box
        px={{xs:"0px", sm:"10px"}}
        py="30px"
      > 
        <Row>
          <Column
            xs={12}
            sm={5}
            md={6}
            lg={7}
            xl={8}
          >
            <Box
              as="header"
              role="banner"
            >
              <H1>
                iTunes Albums
              </H1>
              <P
                mt="5px"
              >
                Top{limit} (USA)
              </P>
            </Box>
          </Column>
          <Column
            xs={12}
            sm={7}
            md={6}
            lg={5}
            xl={4}
            mt={{xs:"15px"}}
          >
            <Input type="text" placeholder="Search" />
          </Column>
        </Row>
      </Box>
    )
  }
}

export default Header;
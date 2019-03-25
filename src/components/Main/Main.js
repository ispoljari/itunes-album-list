import React, { Component } from 'react';

import { Row, Column, Box } from '../../layout';
import { P } from '../../common/styles/Typography.styled';

class Main extends Component {
  render() {
    return (
      <Box
        as="main"
        role="main"
        px="30px"
        py={{xs:"20px", sm:"30px"}}
      >
        <Row>
          <Column>
            <P
              light
            >
              All
            </P>
          </Column>
        </Row>
      </Box>
    )
  }
};

export default Main;
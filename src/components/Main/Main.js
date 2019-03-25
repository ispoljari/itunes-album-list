import React, { Component } from 'react';

import { Albums } from '../index';
import { Row, Column, Box } from '../../layout';
import { P } from '../../common';

class Main extends Component {
  render() {
    return (
      <Box
        as="main"
        role="main"
        px="30px"
        py={{xs:"10px", sm:"30px"}}
        backgroundColor="#f7f7f7"
        borderRadius="5px"
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
        <Row
          mt="20px"
        >
          <Albums />
        </Row>
      </Box>
    )
  }
};

export default Main;
import React, { Component } from 'react';

import { Column, Box } from '../../layout';

class Albums extends Component {
  render() {
    return (
      <Column
        sm="6"
        md="4"
        pb="20px"
      >
        <Box
          backgroundColor="orange"
          px="50px"
          py="50px"
        />
      </Column>
    );
  }
};

export default Albums;


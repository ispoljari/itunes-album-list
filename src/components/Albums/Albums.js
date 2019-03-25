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
          px="10px"
          py="10px"
          width="170px"
          height="170px"
          backgroundColor="green"
        > 
          AlbImg
        </Box>
      </Column>
    );
  }
};

export default Albums;


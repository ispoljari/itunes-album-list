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
          width={{xs:"50px", sm:"70px", md:"90px", lg:"110px", xl:"130px"}}
          backgroundColor="green"
        > 
          AlbImg
        </Box>
      </Column>
    );
  }
};

export default Albums;


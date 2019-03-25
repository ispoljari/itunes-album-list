import React, { Component } from 'react';

import { Column, Box } from '../../layout';
import { P } from '../../common';

class Albums extends Component {
  render() {
    return (
      <Column
        sm="6"
        md="4"
        pb="20px"
      >
        <Box
          display="flex"
        >
          <Box
            width="170px"
            height="170px"
            backgroundColor="green"
          > 
            Img
          </Box>
          <Box
            pl="10px"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <Box
            >
              <h2>Title</h2>
              <P
                mt="5px"
              >
                Artist Name
              </P>
              <P
               mt="5px"
              >
                Released on February 16, 2018
              </P>
            </Box>
            <Box>
              <P
              >
                6.99$
              </P>
            </Box>
          </Box>
        </Box>
      </Column>
    );
  }
};

export default Albums;


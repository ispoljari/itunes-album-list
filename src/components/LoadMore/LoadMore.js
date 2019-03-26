import React, { Component } from 'react';

import { Column, Box } from '../../layout';
import { Button } from './LoadMore.styled';

class LoadMore extends Component {
  render() {
    return(
      <Column>
        <Box
          dsPlay="flex"
          justifyContent="center"
        >
          <Button>
            Load more albums
          </Button>
        </Box>
      </Column>
    )
  }
};

export default LoadMore;
import React, { Component } from 'react';

import { Column, Box } from '../../layout';
import { Button } from './LoadMore.styled';

class LoadMore extends Component {
  render() {
    const { onClick } = this.props;
    
    return(
      <Column>
        <Box
          dsPlay="flex"
          justifyContent="center"
        >
          <Button
            type="button"
            onClick={onClick}
          >
            Load more albums
          </Button>
        </Box>
      </Column>
    )
  }
};

export default LoadMore;
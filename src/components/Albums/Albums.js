import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import { Column, Box } from '../../layout';
import { P } from '../../common';
import { Img, H2 } from './Albums.styled';

const postTemplate = album => (
  <Column
    md="6"
    xl="4"
    pb="20px"
    key={uuidv4()}
  >
    <Box
      dsPlay="flex"
      backgroundColor="white"
      px="15px"
      py="15px"      
      borderRadius="5px"
    >
      <Box
        width="170px"
        height="170px"
        maxWidth={{xs:"100px"}}
        maxHeight={{xs:"100px"}}
      >
        <Img src={album.imgSrc} alt="placeholder"/>
      </Box>
      <Box
        pl="10px"
        dsPlay="flex"
        flexDirection="column"
        justifyContent="space-around"
      >
        <Box>
          <H2>{album.name}</H2>
          <P
            mt="5px"
          >
            {album.artist}
          </P>
        </Box>
        <Box>
          <P>
            {album.price}
          </P>
        </Box>
      </Box>
    </Box>
  </Column>
);

class Albums extends Component {
  render() {
    let results = [];
    let { data } = this.props;

    for (let i=0; i<10; i++) {
      results.push(postTemplate(data))
    }
    
    return (
      <React.Fragment>
        {results}
      </React.Fragment>
    );
  }
};

export default Albums;

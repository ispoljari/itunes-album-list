import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import { Column, Box } from '../../layout';
import { P } from '../../common';

const postTemplate = album => (
  <Column
    sm="6"
    lg="4"
    pb="20px"
    key={uuidv4()}
  >
    <Box
      display="flex"
    >
      <Box
        width="170px"
        height="170px"
        border="1px solid black"
      > 
        {album.imgSrc}
      </Box>
      <Box
        pl="10px"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
      >
        <Box>
          <h2>{album.name}</h2>
          <P
            mt="5px"
          >
            {album.artist}
          </P>
          <P
            mt="5px"
          >
            {album.released}
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
    let template = {
      name: 'Album',
      imgSrc: '/url/img',
      artist: "Artist Name",
      released: 'February 16, 2018',
      price: '6.99$'
    }

    for (let i=0; i<10; i++) {
      results.push(postTemplate(template))
    }
    
    return (
      <React.Fragment>
        {results}
      </React.Fragment>
    );
  }
};

export default Albums;


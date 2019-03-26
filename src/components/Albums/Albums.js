import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import { Column, Box } from '../../layout';
import { P, filterData } from '../../common';
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
      px="10px"
      py="10px"      
      borderRadius="5px"
    >
      <Box
        wd="170px"
        hg="170px"
        maxWd={{xs:"100px"}}
        maxHg={{xs:"100px"}}
      >
        <Img 
          src={album.imgSrc} alt="placeholder"
        />
      </Box>
      <Box
        pl="10px"
        dsPlay="flex"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <H2>
          {album.name}
        </H2>
        <P
          mt="5px"
        >
          {album.artist}
        </P>
      </Box>
    </Box>
  </Column>
);

class Albums extends Component {
  render() {
    let results = [];
    const { albums } = this.props;
    
    Object.keys(albums).forEach(key => {
      const filteredData = filterData(albums[key]);
      results.push(postTemplate(filteredData));
    });
    
    return (
      <React.Fragment>
        {results}
      </React.Fragment>
    );
  }
};

Albums.propTypes = {
  albums: PropTypes.instanceOf(Object)
};

Albums.defaultProps = {
  error: ''
};

export default Albums;

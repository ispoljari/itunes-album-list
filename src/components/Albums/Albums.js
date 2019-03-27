import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

const filterAlbums = (albums, filterWords) => {
  const filteredArray = Object.keys(albums).filter(key => (
    albums[key]['im:artist'].label.includes(filterWords) ||  albums[key]['im:name'].label.includes(filterWords)
  ));
  const filteredObj = filteredArray.reduce((obj, key) => {
    return {
      ...obj,
      [key]: albums[key]
    };
  }, {});

  return filteredObj;
};

const filterData = data => {
  const filteredData = {};
  
  filteredData.imgSrc = data['im:image'][2].label;
  filteredData.name = data['im:name'].label;
  filteredData.artist = data['im:artist'].label;
  filteredData.price = data['im:price'].label;

  return filteredData;
};

const errorMessage = error => (
  <Column
    key={uuidv4()}
  >
    <P
      error
      textAlign="center"
    >
      {error.message}
    </P>
  </Column>
);

class Albums extends Component {
  render() {
    let results = [];
    const { albums, error, filterWords } = this.props;
  
    const filteredAlbums = filterAlbums(albums, filterWords);
    if (!error) {
      Object.keys(filteredAlbums ).forEach(key => {
        const filteredData = filterData(filteredAlbums[key]);
        results.push(postTemplate(filteredData));
      });
    } else {
      results.push(errorMessage(error));
    }
    
    return (
      <React.Fragment>
        {results}
      </React.Fragment>
    );
  }
};

Albums.propTypes = {
  albums: PropTypes.instanceOf(Object),
  error: PropTypes.instanceOf(Error),
};

Albums.defaultProps = {
  albums: {},
  error: null
};

export default Albums;

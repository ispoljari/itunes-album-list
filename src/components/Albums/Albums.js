import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Column, Box } from '../../layout';
import { P, H2, Img } from '../../common';
import { Link } from './Albums.styled';

const filterAlbums = (albums, filterWords) => {
  const filteredArray = Object.keys(albums).filter(key => {
    const albumName = albums[key]['im:name'].label.toLowerCase();
    const artistName = albums[key]['im:artist'].label.toLowerCase();

    return (albumName.includes(filterWords) ||  artistName.includes(filterWords));
  });
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
  
  filteredData.imgSrc = data['im:image'][2] ? data['im:image'][2].label : data['im:image'][1].label;
  filteredData.fullTitle = data.title ? data.title.label : '';
  filteredData.name = data['im:name'] ? data['im:name'].label : '';
  filteredData.url = data['link'].attributes ? data['link'].attributes.href : '';
  filteredData.artist = data['im:artist'] ? data['im:artist'].label : '';
  filteredData.artistUrl = data['im:artist'].attributes ? data['im:artist'].attributes.href : '';
  filteredData.price = data['im:price'] ? data['im:price'].label : '';
  filteredData.releaseDate = data['im:releaseDate'].attributes ? data['im:releaseDate'].attributes.label : '';
  filteredData.rights = data['rights'] ? data['rights'].label : '';

  return filteredData;
};

const errorMessage = error => (
  <Column
    key={error.message}
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
  handleKeyPress = e => {
    if(e.key === 'Enter') {
      this.sendAlbumDataToModal(e);
    }
  }

  handleClick = e => {
    this.sendAlbumDataToModal(e);
  };

  sendAlbumDataToModal = e => {
    const target = e.target.closest('a');
    const album = target.dataset.album;
    this.props.showMoreInfo(album);
  }

  render() {
    let results = [];
    const { albums, error, filterWords } = this.props;

    const postTemplate = album => (
      <Column
        md={6}
        xl={4}
        pb="20px"
        key={album.artist + album.name}
      >
        <Link
          onClick={this.handleClick}
          onKeyPress={this.handleKeyPress}
          data-album={JSON.stringify(album)}
          tabIndex="0"
        >
          <span
            tabIndex="-1"
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
                  src={album.imgSrc} alt="Album cover"
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
          </span>
        </Link>
      </Column>
    );

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
  filterWords: PropTypes.string,
  error: PropTypes.instanceOf(Error),
  showMoreInfo: PropTypes.func.isRequired
};

Albums.defaultProps = {
  albums: {},
  filterWords: '',
  error: null
};

export default Albums;

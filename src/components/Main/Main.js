import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Albums, LoadMore, Modal } from '../index';
import { Row, Column, Box } from '../../layout';
import { P, H2, Img } from '../../common';
import { Spinner } from '../';

class Main extends Component {
  state = {
    modalOpen: false,
    modalAlbum: {}
  };

  handleClose = () => {
    this.setState({
      modalOpen: false
    })
  };

  openModal = albumJSON => {
    const album = JSON.parse(albumJSON);
    console.log(album);

    this.setState({
      modalAlbum: {
        ...album
      }
    }, () => {
      this.setState({
        modalOpen: true
      })
    });
  };

  render() {
    const { albums, loading, error, onClick, filterWords } = this.props;
    const { modalOpen, modalAlbum } = this.state;
    
    return (
      <Box
        as="main"
        role="main"
        px="10px"
        py="20px"
        backgroundColor="#f7f7f7"
        borderRadius="5px"
      >
        <Row>
          <Column>
            <P
              light
            >
              All
            </P>
          </Column>
        </Row>
        <Row
          mt="20px"
        >
          <Albums 
            albums={albums}
            filterWords={filterWords}
            error={error}
            showMoreInfo={albumJSON => this.openModal(albumJSON)}
          />
          <Modal
            show={modalOpen}
            handleClose={this.handleClose}
            width="90%"
            maxWidth="700px"
            background="white"
            px={{xs: "10px", sm: "20px"}}
            py={{xs: "10px", sm: "20px"}}
            borderRadius="5px"
          >
            <Row
              mb="15px"
            >
              <Column
                xs={11}
                px="0"
              >
                <H2>
                  {modalAlbum.fullTitle}
                </H2>
              </Column>
            </Row>
            <Row>
              <Column
                px="0"
              >
                <Box
                  dsPlay="flex"
                  backgroundColor="white"   
                  borderRadius="5px"
                >
                  <Box
                    wd="170px"
                    hg="170px"
                    maxWd={{xs:"100px"}}
                    maxHg={{xs:"100px"}}
                  >
                    <Img 
                      src={modalAlbum.imgSrc} alt="Album cover"
                    />
                  </Box>
                  <Box
                    pl="10px"
                    dsPlay="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                  >
                    <Box
                      mt="5px"
                    >
                      <P
                        black
                      >
                        {modalAlbum.price}
                      </P>
                    </Box>
                    <Box>
                      <P
                        textTransform="inherit"
                      >
                        {modalAlbum.releaseDate}
                      </P>
                      <P
                        mt="5px"
                        textTransform="inherit"
                        hideXS
                      >
                        {modalAlbum.rights}
                      </P>
                    </Box>
                  </Box>
                </Box>
              </Column>
            </Row>
          </Modal>
        </Row>
        <Row
          mt="10px"
        >
          {(error || loading || filterWords.length>0) ? null : 
            <LoadMore 
              onClick={onClick}
            />
          }
          <Spinner
            show={loading}
          />
        </Row>
      </Box>
    )
  }
};

Main.propTypes = {
  albums: PropTypes.instanceOf(Object),
  filterWords: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
  onClick: PropTypes.func.isRequired
};

Main.defaultProps = {
  albums: {},
  filterWords: '',
  error: null
};

export default Main;
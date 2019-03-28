import React from 'react';
import PropTypes from 'prop-types';

import { Row, Column, Box } from '../../layout/';
import { P, H2, Img } from '../../common';
import { Animate, Button, Link } from './Modal.styled';

const Modal = ({ handleClose, show, transClosing, transStarting, modalAlbum, ...styles }) => {
  const { width, maxWidth, background, px, py, borderRadius } = styles;
  return (
    <Animate
      show={show}
      transClosing={transClosing}
      transStarting={transStarting}
      pos="fixed"
      top="0"
      left="0"
      wd="100%"
      hg="100%"
    >
      <Box
        pos="fixed"
        background={background}
        wd={width}
        maxWd={maxWidth}
        px={px}
        py={py}
        borderRadius={borderRadius}
        hg="auto"
        top="50%"
        left="50%"
        transf="translate(-50%,-50%)"
      >
        <Box
          pos="absolute"
          top="10px"
          right="10px"
        >
          <Button
            type="button"
            onClick={handleClose}
            autoFocus
          >
            &#10005;
          </Button>
        </Box>
        <Row
          mb="15px"
        >
          <Column
            xs={11}
            px="0"
          >
            <H2
              large
            >
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
                wd="300px"
                hg="300px"
                maxWd={{xs:"140px"}}
                maxHg={{xs:"140px"}}
              >
                <Img 
                  src={modalAlbum.imgSrc} 
                  alt="Album cover"
                  large
                />
              </Box>
              <Box
                pl="10px"
                dsPlay="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box>
                  <P
                    large
                  >
                    {modalAlbum.price}
                  </P>
                  {modalAlbum.url ? 
                    <P
                    mt="5px"
                    textTransform="inherit"
                    large
                    black
                  >
                    Play the&nbsp;
                    <Link
                      href={modalAlbum.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      tracks
                    </Link>
                    </P> : null
                  }
                  {modalAlbum.artistUrl ? 
                    <P
                      mt="5px"
                      textTransform="inherit"
                      large
                      black
                    >
                      More by&nbsp;
                      <Link
                        href={modalAlbum.artistUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {modalAlbum.artist}
                      </Link>
                    </P> : null
                  }
                </Box>
                <Box
                  mt="20px"
                >
                  <P
                    textTransform="inherit"
                    large
                  >
                    {modalAlbum.releaseDate}
                  </P>
                  <P
                    mt="5px"
                    textTransform="inherit"
                    hideXS
                    large
                  >
                    {modalAlbum.rights}
                  </P>
                </Box>
              </Box>
            </Box>
          </Column>
        </Row>
      </Box>
    </Animate>
  )
};

Modal.propTypes = {
  styles: PropTypes.shape({
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    maxWidth: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]), 
    background: PropTypes.string, 
    px: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]), 
    py: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),  
    borderRadius: PropTypes.string 
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  transClosing: PropTypes.bool.isRequired,
  transStarting: PropTypes.bool.isRequired,
  modalAlbum: PropTypes.shape({
    fullTitle: PropTypes.string,
    imgSrc: PropTypes.string,
    price: PropTypes.string,
    url: PropTypes.string,
    artist: PropTypes.string,
    artistUrl: PropTypes.string,
    rights: PropTypes.string,
    releaseDate: PropTypes.string,
  }).isRequired
};

Modal.defaultProps = {
  styles: {
    width: '95%',
    maxWidth: '700px',
    background: 'white',
    px: '',
    py: '',
    borderRadius: '0'
  },
  modalAlbum: {
    fullTitle: '',
    imgSrc: '',
    price: '',
    url: '',
    artist: '',
    artistUrl: '',
    rights: '',
    releaseDate: ''
  }
}

export default Modal;
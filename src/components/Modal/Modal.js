import React from 'react';

import { Row, Column, Box } from '../../layout/';
import { P, H2, Img } from '../../common';
import { Button, Link } from './Modal.styled';

const Modal = ({ handleClose, show, modalAlbum, ...styles }) => {
  const { width, maxWidth, background, px, py, borderRadius } = styles;
  return (
    show ? 
    <Box
      pos="fixed"
      top="0"
      left="0"
      zIndex="100"
      wd="100%"
      hg="100%"
      background="rgba(0,0,0,0.6)"
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
                  >
                    {modalAlbum.rights}
                  </P>
                </Box>
              </Box>
            </Box>
          </Column>
        </Row>
      </Box>
    </Box> : null
  )
};

export default Modal;
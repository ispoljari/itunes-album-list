import React from 'react';

import { Row, Column, Box } from '../../layout/';
import { Button } from './Modal.styled';

const Modal = ({ handleClose, show, children }) => (
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
      background="white"
      wd="90%"
      maxWd="1000px"
      borderRadius="5px"
      hg="auto"
      top="50%"
      left="50%"
      transf="translate(-50%,-50%)"
    >
      <Row>
        <Column
          px="0"
          py="0"
        >
          <Box
            dsPlay="flex"
            justifyContent="flex-end"
          >
            <Button
              type="button"
              onClick={handleClose}
              autoFocus
            >
              &#10005;
            </Button>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column>
          {children}
        </Column>
      </Row>
    </Box>
  </Box> : null
);

export default Modal;
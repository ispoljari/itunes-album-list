import React from 'react';

import { Row, Column, Box } from '../../layout/';

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
      maxWd="800px"
      borderRadius="5px"
      hg="auto"
      top="50%"
      left="50%"
      transf="translate(-50%,-50%)"
    >
      <Row>
        <Column>
          <button
            type="button"
            onClick={handleClose}
          >
            Close
          </button>
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
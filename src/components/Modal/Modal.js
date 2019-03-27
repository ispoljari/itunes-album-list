import React from 'react';

import { Row, Column, Box } from '../../layout/';

const Modal = ({ handleClose, show, children }) => (
  show ? 
  <Box
    position="fixed"
    top="0"
    left="0"
    width="100%"
    height="100%"
    background="rgba(0,0,0,0.6)"
  >
    <Box
      position="fixed"
      background="white"
      width="80%"
      height="auto"
      top="50%"
      left="50%"
      transform="translate(-50%,-50%)"
    >
      <Row>
        <Column>
          {children}
        </Column>
      </Row>
    </Box>
  </Box> : null
);

export default Modal;
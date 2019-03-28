import React from 'react';

import { Box } from '../../layout/';
import { Button } from './Modal.styled';

const Modal = ({ handleClose, show, children, ...styles }) => {
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
        {children}
      </Box>
    </Box> : null
  )
};

export default Modal;
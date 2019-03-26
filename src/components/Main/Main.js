import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Albums } from '../index';
import { Row, Column, Box } from '../../layout';
import { P } from '../../common';

class Main extends Component {
  render() {
    const { data } = this.props;
    
    return (
      <Box
        as="main"
        role="main"
        px="30px"
        py={{xs:"10px", sm:"30px"}}
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
           data={data}
          />
        </Row>
      </Box>
    )
  }
};

Main.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }).isRequired
}

export default Main;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Albums } from '../index';
import { Row, Column, Box } from '../../layout';
import { P } from '../../common';

class Main extends Component {
  render() {
    const { albums } = this.props;
    
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
           albums={albums}
          />
        </Row>
      </Box>
    )
  }
};

Main.propTypes = {
  albums: PropTypes.instanceOf(Object).isRequired
};

export default Main;
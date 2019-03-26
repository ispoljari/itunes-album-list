import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Albums, LoadMore } from '../index';
import { Row, Column, Box } from '../../layout';
import { P } from '../../common';
import { Spinner } from '../';

class Main extends Component {
  render() {
    const { albums, loading, error, onClick } = this.props;
    
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
            error={error}
          />
        </Row>
        <Row
          mt="10px"
        >
          {(error || loading) ? null : 
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
  loading: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
  onClick: PropTypes.func.isRequired
};

Main.defaultProps = {
  albums: {},
  error: null
};

export default Main;
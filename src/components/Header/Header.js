import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Column, Box } from '../../layout';
import { H1, Input } from './Header.styled';
import { P } from '../../common';

class Header extends Component {
  render() {
    const { limit, handleChange } = this.props;

    return (
      <Box
        px={{xs:"0px", sm:"10px"}}
        py="30px"
      > 
        <Row>
          <Column
            xs={12}
            sm={5}
            md={6}
            lg={7}
            xl={8}
            px={{xs:"0px"}}
          >
            <Box
              as="header"
              role="banner"
            >
              <H1>
                Albums list
              </H1>
              <P
                mt="5px"
              >
                Top{limit} (USA)
              </P>
            </Box>
          </Column>
          <Column
            xs={12}
            sm={7}
            md={6}
            lg={5}
            xl={4}
            mt={{xs:"15px"}}
            px={{xs:"0px"}}
          >
            <Input 
              type="text" 
              placeholder="Filter results by keyword" 
              onChange={handleChange}
              tabIndex="0"
              />
          </Column>
        </Row>
      </Box>
    )
  }
}

Header.propTypes = {
  limit: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Header;
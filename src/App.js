import React, { Component } from 'react';
import { Normalize } from 'styled-normalize';

import GlobalStyle from './Global.styled';
import { 
  Container,
  Row,
  Column
} from './layout';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Normalize />
        <GlobalStyle />
        <Container>
          <Row>
            <Column>
              The layout system is complete
            </Column>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;

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
          <Row 
            style={{
              backgroundColor: 'yellow'
            }}
          >
            <Column>
              Hello from the other side.
            </Column>
          </Row>
          <Row 
            style={{
              backgroundColor: 'yellow'
            }}
          >
            <Column>
              Hello from the other side.
            </Column>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;

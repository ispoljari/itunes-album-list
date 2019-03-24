import React, { Component } from 'react';

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
        </Container>
      </React.Fragment>
    );
  }
}

export default App;

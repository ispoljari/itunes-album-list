import React, { Component } from 'react';
import { Normalize } from 'styled-normalize';

import GlobalStyle from './Global.styled';
import { 
  Container,
  Row,
  Column
} from './layout';
import { Header } from './components';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Normalize />
        <GlobalStyle />
        <Container>
          <Row>
            <Column>
              <Header />
            </Column>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;

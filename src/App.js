import React, { Component } from 'react';
import { Normalize } from 'styled-normalize';

import GlobalStyle from './Global.styled';
import { Container } from './layout';
import { Header } from './components';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Normalize />
        <GlobalStyle />
        <Container>
          <Header />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;

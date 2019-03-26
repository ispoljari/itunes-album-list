import React, { Component } from 'react';
import { Normalize } from 'styled-normalize';

import GlobalStyle from './Global.styled';
import { Container } from './layout';
import { Header, Main } from './components';

class App extends Component {
  state= {
    template: {
      name: 'Album',
      imgSrc: 'https://via.placeholder.com/170',
      artist: "Artist Name",
      price: '6.99$'
    }
  }

  render() {
    const { template } = this.state;

    return (
      <React.Fragment>
        <Normalize />
        <GlobalStyle />
        <Container>
          <Header />
          <Main 
            data={template}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;

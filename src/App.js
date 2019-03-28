import React, { Component } from 'react';
import { Normalize } from 'styled-normalize';

import GlobalStyle from './Global.styled';
import { Container } from './layout';
import { Header, Main, ScrollToTop } from './components';

class App extends Component {
  render() {
    const { loading, albums, error, limit, inputValue } = this.state;

    return (
      <React.Fragment>
        <Normalize />
        <GlobalStyle />
        <Container>
          <Header
            limit={limit}
            handleChange={this.handleChange}
          />
          <Main 
            albums={albums}
            filterWords={inputValue}
            loading={loading}
            error={error}
            onClick={this.loadAlbums}
          />
          <ScrollToTop />
        </Container>
      </React.Fragment>
    );
  }
};

export default App;

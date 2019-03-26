import React, { Component } from 'react';
import { Normalize } from 'styled-normalize';

import GlobalStyle from './Global.styled';
import { Container } from './layout';
import { Header, Main } from './components';
import { fetchData } from './common';

class App extends Component {
  state= {
    loading: false,
    limit: 10,
    albums: {},
    error: ''
  }

  loadAlbums = async () => {
      this.setState({
        loading: true,
        error: ''
      });

      const URL = `https://itunes.apple.com/us/rss/topalbums/limit=${this.state.limit}/json`;
      const results = await fetchData(URL);

      if(results !== Error) {
        console.log(results);
        this.setState({
          albums: results.feed.entry,
          loading: false
        });
      } else {
        this.setState({
          error: results,
          loading: false
        });
      }
  }

  componentDidMount() {
    this.loadAlbums();
  }

  render() {
    const { loading, albums, error } = this.state;

    return (
      <React.Fragment>
        <Normalize />
        <GlobalStyle />
        <Container>
          <Header />
          <Main 
            albums={albums}
            loading={loading}
            error={error}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;

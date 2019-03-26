import React, { Component } from 'react';
import { Normalize } from 'styled-normalize';

import GlobalStyle from './Global.styled';
import { Container } from './layout';
import { Header, Main, Spinner } from './components';
import { fetchData } from './common';

const URL = 'https://itunes.apple.com/us/rss/topalbums/limit=10/json';

class App extends Component {
  state= {
    loading: false,
    albums: {},
    error: null
  }

  loadAlbums = async () => {
      this.setState({
        loading: true,
        error: null
      });

      const results = await fetchData(URL);

      if(results !== Error) {
        console.log(results);
        this.setState({
          albums: results.feed.entry,
          loading: false
        });
      } else {
        this.setState({
          error: true,
          loading: false
        });
      }
  }

  componentDidMount() {
    this.loadAlbums();
  }

  render() {
    const { loading, albums } = this.state;

    return (
      <React.Fragment>
        <Normalize />
        <GlobalStyle />
        <Container>
          <Header />
          <Spinner
            show={loading}
          >
            <Main 
              albums={albums}
            />
          </Spinner>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Normalize } from 'styled-normalize';

import GlobalStyle from './Global.styled';
import { Container } from './layout';
import { Header, Main, ScrollToTop } from './components';
import { fetchData } from './common';

class App extends Component {
  state= {
    loading: false,
    limit: 0,
    albums: {},
    inputValue: '',
    error: null
  }

  loadAlbums = () => {
    this.setState(prevState => ({
      loading: true,
      error: null,
      limit: prevState.limit + 10
    }), () => {
      this.loadResultsFromAPI();
    })
  };


  loadResultsFromAPI = async () => {
    const URL = `https://itunes.apple.com/us/rss/topalbums/limit=${this.state.limit}/json`;
    const results = await fetchData(URL);

    if(!(results instanceof Error)) {
      this.setState({
        albums: {
          ...this.state.albums,
          ...results.feed.entry
        },
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

  handleChange = e => {
    const inputValue = e.target.value;

    this.setState({
      inputValue
    });
  }

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
}

export default App;

import React, { Component } from 'react';
import { Normalize } from 'styled-normalize';

import GlobalStyle from './Global.styled';
import { Container } from './layout';
import { Header, Main, ScrollToTop, Modal } from './components';
import { fetchData } from './common';

class App extends Component {
  state= {
    loading: false,
    limit: 0,
    albums: {},
    inputValue: '',
    error: null,
    modal: false
  };

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
  };

  componentDidMount() {
    this.loadAlbums();
  };

  handleChange = e => {
    const rawInput = e.target.value;
    const inputValue = rawInput.toLowerCase();

    this.setState({
      inputValue
    });
  };

  handleClose = () => {
    this.setState({
      modal: false
    })
  };

  openModal = albumJSON => {
    const album = JSON.parse(albumJSON);
    console.log(album);
  };

  render() {
    const { loading, albums, error, limit, modal, inputValue } = this.state;

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
            showMoreInfo={albumJSON => this.openModal(albumJSON)}
          />
          <ScrollToTop />
          <Modal
            show={modal}
            handleClose={this.handleClose}
          >
            Hello. it's me.
          </Modal>
        </Container>
      </React.Fragment>
    );
  }
};

export default App;

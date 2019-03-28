import React, { Component } from 'react';

import App from './App';
import { fetchData } from './common';

class AppContainer extends Component {
  state = {
    loading: false,
    limit: 0,
    albums: {},
    inputValue: '',
    error: null
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

  render() {
    return(
      <App 
        state={this.state}
        handleChange={this.handleChange}
        loadAlbums={this.loadAlbums}
      />
    );
  }
};

export default AppContainer;
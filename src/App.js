import React, { Component } from 'react';
import { Normalize } from 'styled-normalize';

import GlobalStyle from './Global.styled';
import { Container } from './layout';
import { Header, Main } from './components';

const URL = 'https://itunes.apple.com/us/rss/topalbums/limit=10/json';

class App extends Component {
  state= {
    template: {
      name: 'Album',
      imgSrc: 'https://via.placeholder.com/170',
      artist: "Artist Name",
      price: '6.99$'
    },
    loading: false,
    data: null
  }

  loadAlbums = async () => {
    try {
      this.setState({
        loading: true,
        error: false
      });

      const rawData = await fetch(URL);
      const data = await rawData.json();

      this.setState({
        loading: false,
        data
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: true
      });
    }
  }

  componentDidMount() {
    this.loadAlbums();
  }

  render() {
    const { template, loading, data } = this.state;
    console.log(loading);
    console.log(data);

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

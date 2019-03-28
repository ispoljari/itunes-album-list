import React from 'react';
import { Normalize } from 'styled-normalize';

import GlobalStyle from './Global.styled';
import { Container } from './layout';
import { Header, Main, ScrollToTop } from './components';

const App = ({ state, handleChange, loadAlbums }) => {
    
  const { loading, albums, error, limit, inputValue } = state;

    return (
      <React.Fragment>
        <Normalize />
        <GlobalStyle />
        <Container>
          <Header
            limit={limit}
            handleChange={handleChange}
          />
          <Main 
            albums={albums}
            filterWords={inputValue}
            loading={loading}
            error={error}
            onClick={loadAlbums}
          />
          <ScrollToTop />
        </Container>
      </React.Fragment>
    );

};

export default App;

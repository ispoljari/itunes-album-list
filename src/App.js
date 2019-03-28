import React from 'react';
import { Normalize } from 'styled-normalize';
import PropTypes from 'prop-types';

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

App.propTypes = {
  state: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    albums: PropTypes.instanceOf(Object),
    error: PropTypes.instanceOf(Error),
    limit: PropTypes.number.isRequired,
    inputValue: PropTypes.string,
  })
};

App.defaultProps = {
  albums: {},
  filterWords: '',
  error: null
};

export default App;

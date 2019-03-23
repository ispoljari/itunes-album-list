import React, { Component } from 'react';

import { 
  Container,
  Flexbox } from './layout';

class App extends Component {
  render() {
    return (
      <Container>
        <Flexbox>
          <div>
            So it begins. The greatest battle of our time...
          </div>
        </Flexbox>
      </Container>
    );
  }
}

export default App;

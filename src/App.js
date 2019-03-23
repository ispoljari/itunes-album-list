import React, { Component } from 'react';

import { 
  Container,
  Row,
  Column
} from './layout';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Column 
            xs={12}
            sm={6}
          >
            <div>
            Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be eager to deal out death in judgement. For even the very wise cannot see all ends.
            </div>          
          </Column>
          <Column
            xs={12}
            sm={6}
          >
            <div>
            It is not our part to master all the tides of the world, but to do what is in us for the succor of those years wherein we are set, uprooting the evil in the fields that we know, so that those who live after may have clean earth to till.
            </div>          
          </Column>
        </Row>
      </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';

import GlobalStyle from './Global.styled';
import { 
  Container,
  Row,
  Column
} from './layout';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Container>
          <Row 
            style={{
              backgroundColor: 'yellow'
            }}
            px={{xs:"10px", sm:"20px", md:"30px", lg:"40px", xl:"50px"}}
            py={{xs:"8px", sm:"9px", md:"7px", lg:"6px", xl:"5px"}}
            mx={{xs:"10px", sm:"20px", md:"30px", lg:"40px", xl:"50px"}}
            my={{xs:"11px", sm:"21px", md:"31px", lg:"41px", xl:"51px"}}
          >
            <Column 
              xs={12}
              sm={3}
              md={9}
              style={{
                backgroundColor: 'blue'
              }}
              px="20px"
              py="20px"
            >
              <div>
              Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be eager to deal out death in judgement. For even the very wise cannot see all ends.
              </div>          
            </Column>
            <Column
              xs={12}
              sm={9}
              md={3}
              style={{
                backgroundColor: 'green'
              }}
            >
              <div>
              It is not our part to master all the tides of the world, but to do what is in us for the succor of those years wherein we are set, uprooting the evil in the fields that we know, so that those who live after may have clean earth to till.
              </div>          
            </Column>
          </Row>
          <Row 
            style={{
              backgroundColor: 'yellow'
            }}
            p="20px"
            mt="30px"
          >
            <Column 
              xs={6}
              sm={12}
              md={4}
              style={{
                backgroundColor: 'blue'
              }}
              px="20px"
              py="20px"
            >
              <div>
              Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be eager to deal out death in judgement. For even the very wise cannot see all ends.
              </div>          
            </Column>
            <Column
              xs={6}
              sm={12}
              md={8}
              style={{
                backgroundColor: 'green'
              }}
            >
              <div>
              It is not our part to master all the tides of the world, but to do what is in us for the succor of those years wherein we are set, uprooting the evil in the fields that we know, so that those who live after may have clean earth to till.
              </div>          
            </Column>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;

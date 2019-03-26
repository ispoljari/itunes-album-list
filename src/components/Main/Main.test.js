import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';

describe('<Main />', () => {
  it('Renders without crashing', () => {
    const dummyData = {
      name: 'Album',
      imgSrc: 'https://via.placeholder.com/170',
      artist: "Artist Name",
      price: '6.99$'
    }
    
    shallow(
      <Main data={dummyData}/>
    );
  })
});


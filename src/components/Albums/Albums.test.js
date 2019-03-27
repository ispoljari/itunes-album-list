import React from 'react';
import { shallow } from 'enzyme';

import Albums from './Albums';

describe('<Albums />', () => {
  it('Renders without crashing', () => {
    const dummyData = {
      entry: {
        'im:image': 'dummy',
        'im:name': {
          label: 'dummy'
        },
        'im:artist': {
          label: 'dummy'
        },
        'im:price': 'dummy',
      }
    }
    const filterWords = "dummy";
    
    shallow(
      <Albums 
        albums={dummyData}
        filterWords={filterWords}
      />
    );
  })
});


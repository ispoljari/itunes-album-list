import React from 'react';
import { shallow } from 'enzyme';

import Albums from './Albums';

describe('<Albums />', () => {
  it('Renders without crashing', () => {
    const dummyData = {
      entry: {
        'im:image': 'dummy',
        'im:name': 'dummy',
        'im:artist': 'dummy',
        'im:price': 'dummy',
      }
    }
    
    shallow(
      <Albums 
        albums={dummyData}
      />
    );
  })
});


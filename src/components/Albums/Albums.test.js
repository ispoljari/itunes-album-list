import React from 'react';
import { shallow } from 'enzyme';

import Albums from './Albums';

describe('<Albums />', () => {
  it('Renders without crashing', () => {
    const callback = jest.fn();
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
        'link': 'dummy',
        'im:releaseDate': 'dummy'
      }
    }
    const filterWords = "dummy";
    
    shallow(
      <Albums 
        albums={dummyData}
        filterWords={filterWords}
        showMoreInfo={callback}
      />
    );
  })
});


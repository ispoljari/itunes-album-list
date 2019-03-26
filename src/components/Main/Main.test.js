import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';

describe('<Main />', () => {
  it('Renders without crashing', () => {
    const loading = false;
    
    shallow(
      <Main 
        loading={loading}
      />
    );
  })
});


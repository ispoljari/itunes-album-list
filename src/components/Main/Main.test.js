import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';

describe('<Main />', () => {
  it('Renders without crashing', () => {
    const loading = false;
    const callback = jest.fn();

    shallow(
      <Main 
        loading={loading}
        onClick={callback}
      />
    );
  })
});


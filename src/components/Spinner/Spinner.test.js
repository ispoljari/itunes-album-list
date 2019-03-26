import React from 'react';
import { shallow } from 'enzyme';

import Spinner from './Spinner';

describe('<Spinner />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Spinner />
    );
  })
});


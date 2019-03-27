import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    const limit = 10;
    const callback = jest.fn();

    shallow(
      <Header 
        limit={limit}
        handleChange={callback}
      />
    );
  })
});

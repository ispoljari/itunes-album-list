import React from 'react';
import { shallow } from 'enzyme';

import LoadMore from './LoadMore';

describe('<LoadMore />', () => {
  it('Renders without crashing', () => {
    const callback = jest.fn();

    shallow(
      <LoadMore
        onClick={callback}
      />
    );
  })
});


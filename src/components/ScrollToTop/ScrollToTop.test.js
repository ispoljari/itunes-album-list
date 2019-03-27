import React from 'react';
import { shallow } from 'enzyme';

import ScrollToTop from './ScrollToTop';

describe('<ScrollToTop />', () => {
  it('Renders without crashing', () => {
    shallow(
      <ScrollToTop />
    );
  });
});


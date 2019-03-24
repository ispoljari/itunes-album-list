import React from 'react';
import { shallow } from 'enzyme';

import Container from './Container';

describe('<Container />', () => {
  it('Renders without crashing', () => {
    const children = <div>Test Container</div>;

    shallow(
      <Container>
        {children}
      </Container>
    );
  })
});


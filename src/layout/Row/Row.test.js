import React from 'react';
import { shallow } from 'enzyme';

import Row from './Row';

describe('<Row />', () => {
  it('Renders without crashing', () => {
    const children = <div>Test Row</div>;

    shallow(
      <Row>
        {children}
      </Row>
    );
  })
});


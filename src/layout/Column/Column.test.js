import React from 'react';
import { shallow } from 'enzyme';

import Column from './Column';

describe('<Column />', () => {
  it('Renders without crashing', () => {
    const children = <div>Test Column</div>;
    
    shallow(
      <Column>
        {children}
      </Column>
    );
  })
});


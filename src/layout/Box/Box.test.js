import React from 'react';
import { shallow } from 'enzyme';

import Box from './Box';

describe('<Box />', () => {
  it('Renders without crashing', () => {
    const children = <div>Test Box</div>;
    
    shallow(
      <Box>
        {children}
      </Box>
    );
  })
});


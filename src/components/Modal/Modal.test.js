import React from 'react';
import { shallow } from 'enzyme';

import Modal from './Modal';

describe('<Modal />', () => {
  it('Renders without crashing', () => {
    const callback = jest.fn();

    shallow(
      <Modal 
        show={true}
        handleClose={callback}
      />
    );
  });
});


import React from 'react';
import { shallow, mount } from 'enzyme';

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

  it('Should call handleClose callback when button is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <Modal
        show={true}
        handleClose={callback}
      />
    );
    wrapper.find('button').simulate('click');
    expect(callback).toHaveBeenCalled();
  });
});


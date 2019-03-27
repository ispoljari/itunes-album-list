import React from 'react';
import { shallow, mount } from 'enzyme';

import LoadMore from './LoadMore';

describe('<LoadMore />', () => {
  it('Renders without crashing', () => {
    const callback = jest.fn();

    shallow(
      <LoadMore
        onClick={callback}
      />
    );
  });

  it('Should call onClick callback when button is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <LoadMore
        onClick={callback}
      />
    );
    wrapper.find('button').simulate('click');
    expect(callback).toHaveBeenCalled();
  });
});


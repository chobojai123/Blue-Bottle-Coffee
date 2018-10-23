import React from 'react';
import { shallow, mount } from 'enzyme';
import '../../setupTests';
import { Data } from '../Data';

describe('Data component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Data orders={[1, 2, 3, 4, 5]} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should have 7 headers', () => {
    expect(wrapper.find('th')).toHaveLength(7);
  });
});

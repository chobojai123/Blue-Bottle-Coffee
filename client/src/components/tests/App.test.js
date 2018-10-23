import React from 'react';
import { shallow, mount } from 'enzyme';
import '../../setupTests';
import { App } from '../App';

describe('App component', () => {
  beforeAll(() => {
    App.prototype.componentDidMount = () => {};
  });

  test('exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  test('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  test('finds only one div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div')).toHaveLength(1);
  });
});

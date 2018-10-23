import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import renderer from 'react-test-renderer';
import '../setupTests';
import configureStore from 'redux-mock-store';

import ConnectedApp, { App } from './App';

const mockStore = configureStore();

describe('<App />', () => {
  test('should render some routes', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  test('renders', () => {
    const wrapper = shallow(<App store={mockStore({ actions: {} })} />);
    expect(wrapper.exists()).toBe(true);
  });
});

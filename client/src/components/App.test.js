import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import '../setupTests';

import { App } from './App';

function setup() {
  const props = {
    fetchOrders = jest.fn()
  }

  const enzymeWrapper = mount(<App {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('<App />', () => {

  it('should render some routes', () => {
    const { enzymeWrapper } = setup();
    // const renderedComponent = shallow(<App actions={actions} />);
    // expect(renderedComponent.find(Route).length).not.toBe(0);
  });

  it('should render some routes', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Route).length).not.toBe(0);
  });
});

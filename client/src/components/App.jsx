import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import HomePage from './HomePage.jsx';

export class App extends Component {
  componentDidMount() {
    const { fetchOrders } = this.props;
    fetchOrders(1);
  }

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);

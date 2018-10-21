import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import Pagination from './Pagination';
import OrderForm from './modal/OrderForm';

import { ReactComponent as ReactLogo } from './img/beer.svg';

const options = { month: 'short', day: 'numeric' };
const date = new Date().toLocaleDateString('en-US', options);

const customStyles = {
  content: {
    position: 'absolute',
    top: '100px',
    left: '200px',
    right: '200px',
    bottom: '100px',
  },
};

Modal.setAppElement('#root');

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <div className="header">
          <ReactLogo className="logo" alt="logo" />
          <h4 className="title">blue bottle coffee</h4>
        </div>

        <span className="date">{date}</span>
        <span className="system">Perfect Ground Work Orders</span>
        <button type="button" onClick={this.openModal} className="createOrder">
          Create order
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button type="button" className="closeBtn" onClick={this.closeModal}>
            <ion-icon name="close" />
          </button>
          <h4 ref={subtitle => (this.subtitle = subtitle)}>
            Perfectly Ground Work Orders
          </h4>
          <p>Instructional text would go here --</p>
          <OrderForm closeModal={this.closeModal} />
        </Modal>
        <br />
        <Pagination />
      </div>
    );
  }
}

function mapStateToProps({ order }) {
  return { order };
}

export default connect(mapStateToProps)(HomePage);

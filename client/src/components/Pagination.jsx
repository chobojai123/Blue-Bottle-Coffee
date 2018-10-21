import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { fetchOrders } from '../actions';
import Data from './Data';

class Pagination extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(data) {
    const { fetchOrders } = this.props;
    const pageNumber = data.selected + 1;

    this.setState({ pageNumber: data.selected + 1 });

    fetchOrders(pageNumber);
  }

  render() {
    const { orders } = this.props;
    const { pageNumber } = this.state;

    return (
      <div className="data">
        <Data pageNumber={pageNumber} />
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakClassName="break-me"
          pageCount={orders === null ? 5 : orders.length / 25}
          marginPagesDisplayed={2}
          onPageChange={this.handleClick}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
        />
      </div>
    );
  }
}

function mapStateToProps({ orders }) {
  return { orders };
}

export default connect(
  mapStateToProps,
  { fetchOrders }
)(Pagination);

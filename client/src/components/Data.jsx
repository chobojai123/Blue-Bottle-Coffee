import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

export class Data extends Component {
  constructor(props) {
    super(props);
    this.renderOrders.bind(this.renderOrders);
  }

  renderOrders() {
    const { orders, pageNumber } = this.props;

    const [start, end] = [
      (pageNumber - 1) * (20 + 5),
      pageNumber * 20 + pageNumber * 5,
    ];

    return orders !== null
      ? [...orders.slice(start, end)].map(order => (
          <tr key={order.coffee + order.orderNum}>
            <td>{order.coffee}</td>
            <td>{order.coffee}</td>
            <td>{order.cases}</td>
            <td>{order.packets}</td>
            <td>
              {order.priority
                ? `${moment(order.shipDate).format('l')}  *`
                : moment(order.shipDate).format('l')}
            </td>
            <td className="td-orderNum">{`#${order.orderNum}`}</td>
            <td className="td-view">
              <ion-icon name="eye" />
            </td>
          </tr>
        ))
      : null;
  }

  render() {
    return (
      <div className="table">
        <h5>Orders</h5>
        <hr />
        <table>
          <thead>
            <tr>
              <th className="th-coffee">Coffee</th>
              <th className="th-method">Method</th>
              <th className="th-cases">Number of Cases</th>
              <th className="th-packets">Packets per Case</th>
              <th className="th-shipDate">Ship Date</th>
              <th className="th-orderNum">Order</th>
              <th className="th-view">View</th>
            </tr>
          </thead>
          <tbody>{this.renderOrders()}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ orders }) {
  return { orders };
}

export default connect(mapStateToProps)(Data);

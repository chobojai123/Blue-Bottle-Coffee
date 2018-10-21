import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  renderCheckBox,
  renderDateTimePicker,
  renderDropdownList,
  renderInputField,
} from './formOptions';
import * as actions from '../../actions';

const coffees = ['Cold Brew', 'Drip', 'Iced Coffee'];
const methods = ['Pour Over', 'Coffee Maker'];
const cases = [10, 20, 30, 40, 50];
const packets = [50];

class OrderForm extends Component {
  onSubmit(values) {
    const { submitOrder, fetchOrders, closeModal } = this.props;

    submitOrder(values).then(() => fetchOrders());
    closeModal();
  }

  renderFields() {
    return (
      <div>
        <div className="coffees">
          <label className="required-field">Coffee</label>
          <Field name="coffee" component={renderDropdownList} data={coffees} />
        </div>

        <div className="methods">
          <label className="required-field">Brew Method</label>
          <Field name="method" component={renderDropdownList} data={methods} />
        </div>

        <div className="number">
          <div className="dates">
            <label className="required-field">Ship Date</label>
            <Field
              name="shipDate"
              component={renderDateTimePicker}
              showTime={false}
            />
          </div>

          <div className="cases">
            <label className="required-field">Number of Cases</label>
            <Field name="cases" component={renderDropdownList} data={cases} />
          </div>

          <div className="packets">
            <label className="required-field">Packets per Case</label>
            <Field
              name="packets"
              component={renderDropdownList}
              data={packets}
            />
          </div>
        </div>

        <div className="notes">
          <label>Notes</label>
          <Field
            name="notes"
            type="text"
            label="notes"
            component={renderInputField}
          />
        </div>
        <div className="priority">
          <Field name="priority" label="Priority" component={renderCheckBox} />
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          {this.renderFields()}
          <button type="submit" className="btn-flat left blue white-text">
            SUBMIT WORK ORDER
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(
  reduxForm({
    form: 'orderForm',
  })(OrderForm)
);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  renderCheckBox,
  renderDateTimePicker,
  renderDropdownList,
  renderInputField,
} from './formOptions';
import { submitOrder } from '../../actions';

const coffees = ['Cold Brew', 'Drip', 'Iced Coffee'];
const methods = ['Pour Over', 'Coffee Maker'];
const cases = [10, 20, 30, 40, 50];
const packets = [50];

class OrderForm extends Component {
  onSubmit(values) {
    const { submitOrder, closeModal } = this.props;

    submitOrder(values);
    closeModal();
  }

  renderFields() {
    return (
      <div>
        <div className="coffees">
          <label className="required-field">Coffee</label>
          <Field name="coffees" component={renderDropdownList} data={coffees} />
        </div>

        <div className="methods">
          <label className="required-field">Brew Method</label>
          <Field name="methods" component={renderDropdownList} data={methods} />
        </div>

        <div className="number">
          <div className="dates">
            <label className="required-field">Ship Date</label>
            <Field
              name="dates"
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

        <div>
          <Field name="priority" label="priority" component={renderCheckBox} />
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
  { submitOrder }
)(
  reduxForm({
    form: 'orderForm',
  })(OrderForm)
);

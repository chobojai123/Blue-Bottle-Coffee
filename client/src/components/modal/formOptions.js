import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import { Checkbox, Form } from 'semantic-ui-react';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css';

Moment.locale('en');
momentLocalizer();

export const renderDropdownList = ({ input, data, valueField, textField }) => (
  <DropdownList
    {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange}
  />
);

export const renderDateTimePicker = ({
  input: { onChange, value },
  showTime,
}) => (
  <DateTimePicker
    onChange={onChange}
    format="MM/DD/YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
  />
);

export const renderCheckBox = ({ input, label }) => (
  <Form.Field>
    <Checkbox
      label={label}
      checked={false}
      onChange={(e, { checked }) => input.onChange(checked)}
    />
  </Form.Field>
);

export const renderInputField = ({ input }) => (
  <div>
    <input {...input} />
  </div>
);
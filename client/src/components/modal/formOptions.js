import React from 'react';
import DropdownList from 'react-widgets/lib/DropdownList';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
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

export const renderInputField = ({ input }) => (
  <div>
    <input {...input} />
  </div>
);

export const renderCheckBox = props => {
  return (
    <div className="flex items-center mv4 w-100">
      <input
        {...props.input}
        id={props.label}
        className="mr2"
        type="checkbox"
        checked={props.input.value}
      />
      <label htmlFor={props.label} className="priority">{props.label}</label>
    </div>
  );
};

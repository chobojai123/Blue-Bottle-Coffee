import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  orders: orderReducer,
  form: reduxForm,
});

export default rootReducer;

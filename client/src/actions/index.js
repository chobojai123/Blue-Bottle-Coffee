import axios from 'axios';
import { FETCH_ORDERS, SUBMIT_ORDER } from './types';

export const fetchOrders = () => async dispatch => {
  const res = await axios.get('/api/orders');

  dispatch({ type: FETCH_ORDERS, payload: res.data });
};

export const submitOrder = values => async dispatch => {
  const res = await axios.post('/api/orders', values);

  dispatch({ type: SUBMIT_ORDER, payload: res.data });
};

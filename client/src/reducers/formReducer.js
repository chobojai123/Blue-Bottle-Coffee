import { SUBMIT_ORDER } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SUBMIT_ORDER:
      return action.payload;
    default:
      return state;
  }
}

import { CHANGE_TOPIC } from '../actions/types';

const INITIAL_STATE = {
  topic: null,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_TOPIC:
      return { ...state, topic: action.payload.topic };
    default:
      return state;
  }
};
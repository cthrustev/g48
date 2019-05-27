import { CHANGE_LEVEL } from '../actions/types';

const INITIAL_STATE = {
  level: null,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_LEVEL:
      return { ...state, level: action.payload.level };
    default:
      return state;
  }
};
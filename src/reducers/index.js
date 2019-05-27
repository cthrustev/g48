import { combineReducers } from 'redux';

import levelReducer from './levelReducer';
import topicReducer from './topicReducer';

export default combineReducers({
  level: levelReducer,
  topic: topicReducer,
})
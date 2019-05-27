import { CHANGE_LEVEL, CHANGE_TOPIC} from './types';

export const changeLevel = level => {
  return {
    type: CHANGE_LEVEL,
    payload: {
      level,
    }
  }
};

export const changeTopic = topic => {
  return {
    type: CHANGE_TOPIC,
    payload: {
      topic,
    }
  }
};
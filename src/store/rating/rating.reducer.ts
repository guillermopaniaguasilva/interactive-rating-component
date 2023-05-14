import { AnyAction } from 'redux';
import { RATING_TYPES } from './rating.types';

const INITIAL_STATE = {
  value: 0,
};

export const ratingReducer = (state = INITIAL_STATE, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case RATING_TYPES.SET_RATING:
      return { ...state, value: payload };
    case RATING_TYPES.SET_MAX_SCORE:
      return { ...state, maxScore: payload };
    default:
      return state;
  }
};

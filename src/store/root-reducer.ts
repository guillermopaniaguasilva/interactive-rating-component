import { combineReducers } from 'redux';
import { ratingReducer } from './rating/rating.reducer';

export const rootReducer = combineReducers({
  rating: ratingReducer,
});

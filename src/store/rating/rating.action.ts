import { RATING_TYPES } from './rating.types';

export const setRating = (rating: number) => ({
  type: RATING_TYPES.SET_RATING,
  payload: rating,
});

export const setMaxScore = (maxScore: number) => ({
  type: RATING_TYPES.SET_MAX_SCORE,
  payload: maxScore,
});

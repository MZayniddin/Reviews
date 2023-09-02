import { REVIEWS_ACTION_TYPES } from "./review.types";

const INITIAL_STATE_REVIEWS = {
  reviews: [],
  isLoading: false,
  singleReview: null,
};

export const reviewsReducer = (state = INITIAL_STATE_REVIEWS, action) => {
  const { type, payload } = action;

  switch (type) {
    case REVIEWS_ACTION_TYPES.REVIEWS_START_LOADING:
      return { ...state, isLoading: true };
    case REVIEWS_ACTION_TYPES.REVIEWS_END_LOADING:
      return { ...state, isLoading: false };
    case REVIEWS_ACTION_TYPES.FETCH_REVIEWS:
      return { ...state, reviews: payload };

    default:
      return state;
  }
};

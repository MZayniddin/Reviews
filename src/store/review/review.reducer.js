import { REVIEWS_ACTION_TYPES } from "./review.types";

const INITIAL_STATE_REVIEWS = {
  reviews: [],
  categories: [],
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
    case REVIEWS_ACTION_TYPES.FETCH_USER_REVIEWS:
      return { ...state, reviews: payload };
    case REVIEWS_ACTION_TYPES.FETCH_REVIEW_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};

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
    case REVIEWS_ACTION_TYPES.FETCH_ONE_REVIEW:
      return { ...state, singleReview: payload };
    case REVIEWS_ACTION_TYPES.FETCH_REVIEW_CATEGORIES:
      return { ...state, categories: payload };
    case REVIEWS_ACTION_TYPES.LIKE_REVIEW:
    case REVIEWS_ACTION_TYPES.UPDATE_REVIEW:
    case REVIEWS_ACTION_TYPES.COMMENT_REVIEW:
      return {
        ...state,
        reviews: state.reviews.map((review) =>
          review._id === payload._id ? payload : review
        ),
        singleReview: payload,
      };
    case REVIEWS_ACTION_TYPES.DELETE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter((review) => review._id !== payload),
      };
    case REVIEWS_ACTION_TYPES.CREATE_REVIEW:
      return { ...state, reviews: [...state.reviews, payload] };

    default:
      return state;
  }
};

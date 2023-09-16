import { createSelector } from "reselect";

const selectReviewReducer = (state) => state.reviews;

export const selectReviews = createSelector(
  [selectReviewReducer],
  (reviewsSlice) => reviewsSlice.reviews
);

export const selectSingleReview = createSelector(
  [selectReviewReducer],
  (reviewsSlice) => reviewsSlice.singleReview
);

export const selectReviewsIsLoading = createSelector(
  [selectReviewReducer],
  (reviewsSlice) => reviewsSlice.isLoading
);

export const selectReviewCategories = createSelector(
  [selectReviewReducer],
  (reviewsSlice) => reviewsSlice.categories
);

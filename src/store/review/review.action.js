import { REVIEWS_ACTION_TYPES } from "./review.types";
import * as api from "../../api/index";

export const fetchReviews = () => async (dispatch) => {
  try {
    dispatch({ type: REVIEWS_ACTION_TYPES.REVIEWS_START_LOADING });

    const { data } = await api.fetchAllReviews();

    dispatch({ type: REVIEWS_ACTION_TYPES.FETCH_REVIEWS, payload: data });

    dispatch({ type: REVIEWS_ACTION_TYPES.REVIEWS_END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserReviews = (category) => async (dispatch) => {
  try {
    dispatch({ type: REVIEWS_ACTION_TYPES.REVIEWS_START_LOADING });

    const { data } = await api.getUserReviews(category);

    dispatch({ type: REVIEWS_ACTION_TYPES.FETCH_USER_REVIEWS, payload: data });

    dispatch({ type: REVIEWS_ACTION_TYPES.REVIEWS_END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchReviewCategories();

    dispatch({
      type: REVIEWS_ACTION_TYPES.FETCH_REVIEW_CATEGORIES,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

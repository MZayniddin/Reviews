import * as api from "../../api/index";
import { REVIEWS_ACTION_TYPES } from "./review.types";

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

export const fetchOneReview = (reviewId) => async (dispatch) => {
  try {
    dispatch({ type: REVIEWS_ACTION_TYPES.REVIEWS_START_LOADING });

    const { data } = await api.getOneReview(reviewId);

    dispatch({ type: REVIEWS_ACTION_TYPES.FETCH_ONE_REVIEW, payload: data });

    dispatch({ type: REVIEWS_ACTION_TYPES.REVIEWS_END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const likeReview = (reviewId) => async (dispatch) => {
  try {
    const { data } = await api.likeReview(reviewId);

    dispatch({ type: REVIEWS_ACTION_TYPES.LIKE_REVIEW, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteReview = (reviewId) => async (dispatch) => {
  try {
    await api.deleteReview(reviewId);

    dispatch({ type: REVIEWS_ACTION_TYPES.DELETE_REVIEW, payload: reviewId });
  } catch (error) {
    console.log(error);
  }
};

export const commentReview = (comment, reviewId) => async (dispatch) => {
  const { data } = await api.commentReview(comment, reviewId);
  dispatch({ type: REVIEWS_ACTION_TYPES.COMMENT_REVIEW, payload: data });
};

export const fetchUserReviews = (category, sortType) => async (dispatch) => {
  try {
    dispatch({ type: REVIEWS_ACTION_TYPES.REVIEWS_START_LOADING });

    const { data } = await api.getUserReviews(category, sortType);

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
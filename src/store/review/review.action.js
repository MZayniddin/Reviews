import { REVIEWS_ACTION_TYPES } from "./review.types";
import * as api from "../../api/index";

export const fetchReviews = () => async (dispatch) => {
  try {
    dispatch({ type: REVIEWS_ACTION_TYPES.REVIEWS_START_LOADING });

    let { data } = await api.fetchAllReviews();

    dispatch({ type: REVIEWS_ACTION_TYPES.FETCH_REVIEWS, payload: data });

    dispatch({ type: REVIEWS_ACTION_TYPES.REVIEWS_END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

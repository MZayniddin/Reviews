import * as api from "../../api/index";
import { AUTH_ACTION_TYPES } from "./auth.types";

export const googleAuth = (token) => async (dispatch) => {
  try {
    const { data } = await api.googleLogin(token);
    console.log(data);
    dispatch({ type: AUTH_ACTION_TYPES.USER_AUTH, payload: { data, token } });
  } catch (error) {
    console.log(error);
  }
};

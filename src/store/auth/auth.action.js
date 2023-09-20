import * as api from "../../api/index";
import { AUTH_ACTION_TYPES } from "./auth.types";

export const googleAuth = (token, navigate) => async (dispatch) => {
  try {
    const { data } = await api.googleLogin(token);

    dispatch({
      type: AUTH_ACTION_TYPES.USER_AUTH,
      payload: { data, token },
    });

  } catch (error) {
    console.log(error);
    alert("Something went wrong, Please try again");
  }
};

export const facebookAuth = (data) => async (dispatch) => {
  const {
    picture: {
      data: { url },
    },
    accessToken: token,
  } = data;

  data.picture = url;

  dispatch({ type: AUTH_ACTION_TYPES.USER_AUTH, payload: { data, token } });
};

export const userSignUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({
      type: AUTH_ACTION_TYPES.USER_AUTH,
      payload: { data: data.user, token: data.token },
    });
    navigate("/");
  } catch (error) {
    console.log(error);
    alert(error?.response?.data?.message);
  }
};

export const userSignIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({
      type: AUTH_ACTION_TYPES.USER_AUTH,
      payload: { data: data.user, token: data.token },
    });
    navigate("/");
  } catch (error) {
    console.log(error);
    alert(error?.response?.data?.message);
  }
};

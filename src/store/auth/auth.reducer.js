import { AUTH_ACTION_TYPES } from "./auth.types";

const INITIAL_STATE_AUTH = {
  authData: null,
};

export const authReducer = (state = INITIAL_STATE_AUTH, action) => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.USER_AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      return { ...state, authData: action.payload };

    case AUTH_ACTION_TYPES.LOGOUT:
      localStorage.removeItem("profile");
      return { ...state, authData: null };
    default:
      return state;
  }
};

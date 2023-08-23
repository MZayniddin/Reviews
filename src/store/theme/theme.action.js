import { THEME_ACTION_TYPES } from "./theme.types";

export const toggleTheme = (value) => async (dispatch) => {
  dispatch({ type: THEME_ACTION_TYPES.TOGGLE_THEME, payload: value });
};

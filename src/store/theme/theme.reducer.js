import { THEME_ACTION_TYPES } from "./theme.types";

const INITIAL_STATE_THEME = {
  mode: localStorage.getItem("theme") === "dark" ? "dark" : "light",
};

export const themeReducer = (state = INITIAL_STATE_THEME, action) => {
  const mode = action.payload ? "dark" : "light";

  switch (action.type) {
    case THEME_ACTION_TYPES.TOGGLE_THEME:
      localStorage.setItem("theme", mode);
      return { mode };

    default:
      return state;
  }
};

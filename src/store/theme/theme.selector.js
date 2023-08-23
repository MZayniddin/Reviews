import { createSelector } from "reselect";

const selectThemeReducer = (state) => state.theme;

export const selectThemeMode = createSelector(
  [selectThemeReducer],
  (themeSlice) => themeSlice.mode
);

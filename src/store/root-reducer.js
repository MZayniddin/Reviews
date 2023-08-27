import { combineReducers } from "redux";

import { themeReducer } from "./theme/theme.reducer";
import { authReducer } from "./auth/auth.reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
});

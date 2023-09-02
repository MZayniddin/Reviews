import { combineReducers } from "redux";

import { themeReducer } from "./theme/theme.reducer";
import { authReducer } from "./auth/auth.reducer";
import { reviewsReducer } from "./review/review.reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  reviews: reviewsReducer,
});

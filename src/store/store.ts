import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/auth.slice";
import i18nReducer from "./slices/i18n/i18n.slice";

export const store = configureStore({
  reducer: {
    authReducer,
    i18nReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/auth.slice";
import i18nReducer from "./slices/i18n/i18n.slice";
import { authApi } from "./api/api/auth.api";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    authReducer,
    i18nReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([authApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

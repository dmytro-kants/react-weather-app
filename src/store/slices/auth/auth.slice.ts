import { createSlice } from "@reduxjs/toolkit";
import { IAuthSliceState } from "./auth.types";
import { authApi } from "../../api/api/auth.api";

const initialState: IAuthSliceState = {
  user: {},
  isAuth: false,
  isLoading: false,
  userAuthCheck: localStorage.getItem("token") ? true : false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = {};
      state.isAuth = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => {
          localStorage.setItem("token", payload.accessToken);
          state.user = { ...payload };
          state.isAuth = true;
        }
      )
      .addMatcher(authApi.endpoints.logoutUser.matchFulfilled, (state) => {
        localStorage.removeItem("token");
        state.user = {};
        state.isAuth = false;
      })
      .addMatcher(
        authApi.endpoints.checkUser.matchFulfilled,
        (state, { payload }) => {
          state.isAuth = true;
          state.user = payload;
          state.error = null;
          state.userAuthCheck = false;
        }
      )
      .addMatcher(authApi.endpoints.checkUser.matchRejected, (state) => {
        state.isAuth = false;
        state.error = null;
        state.userAuthCheck = false;
        localStorage.removeItem("token");
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;

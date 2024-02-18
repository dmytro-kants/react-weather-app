import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "../../../utils/baseQueryWithReauth";
import {
  ILogoutInputs,
  ILogoutResponse,
  IRefreshResponse,
  ISignInInputs,
  ISignInResponse,
  ISignUpInputs,
  ISignUpResponse,
} from "../../../types/auth.types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    registerUser: builder.mutation<ISignUpResponse, ISignUpInputs>({
      query: (data) => {
        return {
          url: "registration",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation<ISignInResponse, ISignInInputs>({
      query: (data) => {
        return {
          url: "login",
          method: "POST",
          credentials: "include",
          body: data,
        };
      },
    }),
    logoutUser: builder.mutation<ILogoutResponse, ILogoutInputs>({
      query: (data) => {
        return {
          url: "logout",
          method: "POST",
          credentials: "include",
          body: data,
        };
      },
    }),
    checkUser: builder.query<IRefreshResponse, void>({
      query: () => {
        return {
          url: "refresh",
          method: "GET",
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useCheckUserQuery,
} = authApi;

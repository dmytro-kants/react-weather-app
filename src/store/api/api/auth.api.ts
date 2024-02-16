import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "../../../utils/baseQueryWithReauth";
import { IGenericResponse } from "./auth.types";
import { ISignUpInputs } from "../../../types/forms/forms.types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    registerUser: builder.mutation<IGenericResponse, ISignUpInputs>({
      query(data) {
        return {
          url: "registration",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation({
      query(data) {
        return {
          url: "login",
          method: "POST",
          credentials: "include",
          body: data,
        };
      },
    }),
    logoutUser: builder.mutation({
      query(data) {
        return {
          url: "logout",
          method: "POST",
          credentials: "include",
          body: data,
        };
      },
    }),
    checkUser: builder.query({
      query() {
        return {
          url: "refresh",
          method: "GET",
          credentials: "include",
        };
      },
    }),
    getAllUsers: builder.query({
      query() {
        return {
          url: "getAllUsers",
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
  useGetAllUsersQuery,
} = authApi;

import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query";
import { API_URL } from "./constants";
import { logoutUser } from "../store/slices/auth/auth.slice";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers) => {
    headers.set("authorization", `Bearer ${localStorage.getItem("token")}`);

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: "refresh",
        method: "GET",
        credentials: "include",
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      // @ts-ignore
      localStorage.setItem("token", refreshResult.data.accessToken);
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logoutUser());
    }
  }
  return result;
};
export default baseQueryWithReauth;

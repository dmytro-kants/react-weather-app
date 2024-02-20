import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { API_URL } from "../../../utils/constants";
import { ISingleProductResponse } from "../../../types/products.types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getSingleProduct: builder.query<ISingleProductResponse, string | undefined>(
      {
        query: (data) => {
          return {
            url: `getSingleProduct?productCode=${data}`,
            method: "GET",
          };
        },
      }
    ),
    getFilters: builder.mutation({
      query: (data) => {
        return {
          url: `getAllFilters`,
          method: "POST",
          body: { filters: data },
        };
      },
    }),
  }),
});

export const { useGetSingleProductQuery, useGetFiltersMutation } = productsApi;

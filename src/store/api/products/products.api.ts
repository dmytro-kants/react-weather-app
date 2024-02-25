import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { API_URL } from "../../../utils/constants";
import { createApi } from "@reduxjs/toolkit/query/react";
import { IFilter, IProduct, Subcategory } from "../../../types/products.types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getSingleProduct: builder.query<IProduct, string | undefined>({
      query: (data) => {
        return {
          url: `getSingleProduct?productCode=${data}`,
          method: "GET",
        };
      },
    }),
    getSubcategories: builder.query<Subcategory[], string | undefined>({
      query: (data) => {
        return {
          url: `getSubcategories?category=${data}`,
          method: "GET",
        };
      },
    }),
    getFilteredProducts: builder.query<
      { products: IProduct[]; maxPage: number },
      {
        filterParams: string;
        category: string;
        subcategory: string;
      }
    >({
      query: (filters) => {
        return {
          url: `getFilteredProducts`,
          method: "GET",
          params: filters,
        };
      },
    }),
    updateFilters: builder.query<
      { filteredResults: IFilter[]; maxPrice: number; minPrice: number },
      { filterParams: string; category: string; subcategory: string }
    >({
      query: (filters) => {
        return {
          url: `updateFilters`,
          method: "GET",
          params: filters,
        };
      },
    }),
  }),
});

export const {
  useGetSingleProductQuery,
  useGetFilteredProductsQuery,
  useUpdateFiltersQuery,
  useGetSubcategoriesQuery,
} = productsApi;

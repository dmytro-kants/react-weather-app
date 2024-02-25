import { LazyQueryTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryDefinition,
} from "@reduxjs/toolkit/query";

interface Translation {
  value: string;
  label?: string;
}

interface Translations {
  en: Translation;
  ua: Translation;
}

interface AdditionalInfoItem {
  value: string;
  translations: Translations;
}

interface AdditionalInfo {
  [key: string]: AdditionalInfoItem;
}

export interface IProduct {
  price: number;
  productCode: string;
  images: string[];
  name: {
    value: string;
    translations: Translations;
  };
  category: {
    value: string;
    translations: Translations;
  };
  subcategory: {
    value: string;
    translations: Translations;
  };
  filterParams: AdditionalInfo;
  additionalInfo: AdditionalInfo;
}
//////////////////////////////////////////////////////////////////////////
interface FilterValue {
  count: number;
  filterKey: string;
  translations: Translations;
}

export interface IFilter {
  key: string;
  values: FilterValue[];
}

export interface ProductSliceInitialState {
  minPrice: number;
  maxPrice: number;
}

export interface Subcategory {
  value: string;
  translations: {
    en: { value: string };
    ua: { value: string };
  };
}
//////////////////////////////////////////
export interface ITriggerProduct
  extends LazyQueryTrigger<
    QueryDefinition<
      {
        filterParams: string;
        category: string;
        subcategory: string;
      },
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta
      >,
      never,
      IProduct[],
      "productsApi"
    >
  > {}

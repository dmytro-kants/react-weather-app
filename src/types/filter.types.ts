export type FilterValue = {
  filterKey: string;
  count: number;
  translations: {
    en: FilterTranslation;
    ua: FilterTranslation;
  };
};

type FilterTranslation = { value: string; label: string };

export interface IGetFiltersResponse {
  key: string;
  values: FilterValue[];
}

export interface IGetFiltersInputs {
  key: string;
  values: string[];
}

////////////////////////////////////////////////////////////////
export interface IFilterSliceState {
  currentFilters: IGetFiltersResponse[] | [];
}

import * as Styles from "./styles";
import { FilterValue, IGetFiltersResponse } from "../../../types/filter.types";
import { FC, useEffect } from "react";
import { SetURLSearchParams } from "react-router-dom";
import { useTranslations } from "../../../hooks/useTranslations";
import { productsApi } from "../../../store/api/products/products.api";

type FilterComponentProps = {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  handleFilterClick: (filterKey: string, value: string) => void;
};

const FilterComponent: FC<FilterComponentProps> = ({
  searchParams,
  setSearchParams,
  handleFilterClick,
}) => {
  const [
    triggerFilters,
    {
      data: filtersData,
      isFetching: filtersIsFetching,
      isError: filtersIsError,
    },
  ] = productsApi.endpoints.updateFilters.useLazyQuery();

  const { lang } = useTranslations();

  useEffect(() => {
    const filters = searchParams.toString();
    triggerFilters(filters, true);
  }, [searchParams, triggerFilters]);

  if (filtersIsFetching) {
    return <>...loading</>;
  }

  if (filtersIsError) {
    return <>oops, error</>;
  }
  return (
    <Styles.FilterWrapper>
      {searchParams.size > 0 ? (
        <div onClick={() => setSearchParams([])}>reset</div>
      ) : null}

      {filtersData &&
        filtersData.map((filter: IGetFiltersResponse) => {
          if (filter.values.length > 0) {
            return (
              <div key={filter.key}>
                <h2>{filter.values[0].translations[lang].label}</h2>
                <div>
                  {filter.values.map((el: FilterValue) => {
                    if (typeof el === "object") {
                      if (el.count) {
                        return (
                          <p
                            key={el.filterKey}
                            onClick={() =>
                              handleFilterClick(
                                filter.key,
                                el.translations.en.value
                              )
                            }
                          >
                            {el.translations[lang].value}: {el.count}
                          </p>
                        );
                      }
                      return (
                        <p
                          style={{ color: "green", fontWeight: "bold" }}
                          key={el.filterKey}
                          onClick={() =>
                            handleFilterClick(
                              filter.key,
                              el.translations.en.value
                            )
                          }
                        >
                          {el.translations[lang].value}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            );
          }
          return null;
        })}
    </Styles.FilterWrapper>
  );
};

export default FilterComponent;

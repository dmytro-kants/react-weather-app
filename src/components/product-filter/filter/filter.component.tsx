import * as Styles from "./styles";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { SetURLSearchParams } from "react-router-dom";
import { useTranslations } from "../../../hooks/useTranslations";
import { productsApi } from "../../../store/api/products/products.api";
import { Slider } from "@mui/material";

type FilterComponentProps = {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  handleFilterClick: (filterKey: string, value: string) => void;
  minAndMaxPrices: { min: number; max: number } | undefined;
};

const FilterComponent: FC<FilterComponentProps> = ({
  searchParams,
  setSearchParams,
  handleFilterClick,
  minAndMaxPrices,
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
  const [currentSliderValues, setCurrentSliderValues] = useState<number[]>([]);

  const handleChange = (_: Event, newValue: number | number[]): void => {
    if (Array.isArray(newValue)) {
      setCurrentSliderValues(newValue);
    }
  };

  const handleMinInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const newMinValue = Number(event.target.value);
    if (minAndMaxPrices && newMinValue <= minAndMaxPrices.max) {
      setCurrentSliderValues((prev) => [newMinValue, prev[1]]);
    }
  };

  const handleMaxInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const newMaxValue = Number(event.target.value);
    if (minAndMaxPrices && newMaxValue >= minAndMaxPrices.min) {
      setCurrentSliderValues((prev) => [prev[0], newMaxValue]);
    }
  };

  const handleSubmitPriceRange = () => {};

  useEffect(() => {
    const filterParams = searchParams.toString();
    let category: string = "";
    let subcategory: string = "";
    triggerFilters({ filterParams, category, subcategory }, true);
  }, [searchParams, triggerFilters]);

  useEffect(() => {
    if (filtersData && filtersData.every((item) => item.values.length === 0)) {
      setSearchParams([]);
    }
  }, [filtersData, setSearchParams]);

  useEffect(() => {
    if (minAndMaxPrices) {
      setCurrentSliderValues([minAndMaxPrices.min, minAndMaxPrices.max]);
    }
  }, [minAndMaxPrices, setCurrentSliderValues]);

  if (filtersIsFetching) {
    return <>...loading</>;
  }

  if (filtersIsError) {
    return <>oops, error</>;
  }

  return (
    <Styles.FilterWrapper>
      {minAndMaxPrices ? (
        <>
          <button onClick={() => setSearchParams([])}>reset</button>
          <input
            type="number"
            value={currentSliderValues[0]}
            onChange={(e) => handleMinInput(e)}
          />{" "}
          -{" "}
          <input
            type="number"
            value={currentSliderValues[1]}
            onChange={handleMaxInput}
          />{" "}
          грн.
          <button onClick={handleSubmitPriceRange}>Ok</button>
          {minAndMaxPrices.min !== minAndMaxPrices.max &&
          minAndMaxPrices.max !== -Infinity &&
          minAndMaxPrices.min !== Infinity ? (
            <Slider
              getAriaLabel={() => "Price Range"}
              value={currentSliderValues}
              min={minAndMaxPrices.min}
              max={minAndMaxPrices.max}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              disableSwap
            />
          ) : null}
        </>
      ) : null}

      {filtersData &&
        filtersData.map((filter) => {
          if (filter.values.length > 0) {
            return (
              <div key={filter.key}>
                <h2>{filter.values[0].translations[lang].label}</h2>
                <div>
                  {filter.values.map((element) => {
                    if (typeof element === "object") {
                      if (element.count) {
                        return (
                          <p
                            key={element.filterKey}
                            onClick={() =>
                              handleFilterClick(
                                filter.key,
                                element.translations.en.value
                              )
                            }
                          >
                            {element.translations[lang].value}: {element.count}
                          </p>
                        );
                      }
                      return (
                        <p
                          style={{ color: "green", fontWeight: "bold" }}
                          key={element.filterKey}
                          onClick={() =>
                            handleFilterClick(
                              filter.key,
                              element.translations.en.value
                            )
                          }
                        >
                          {element.translations[lang].value}
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

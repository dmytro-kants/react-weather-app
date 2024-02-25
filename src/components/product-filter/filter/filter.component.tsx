import * as Styles from "./styles";
import { useEffect } from "react";
import { useTranslations } from "../../../hooks/useTranslations";
import { productsApi } from "../../../store/api/products/products.api";
import { Slider } from "@mui/material";
import { formatQueryParams } from "../../../utils/formatQueryParams";
import usePriceSlider from "../../../hooks/usePriceSlider";
import { useParams } from "react-router-dom";

const FilterComponent = () => {
  const [
    triggerFilters,
    {
      data: filtersData,
      isFetching: filtersIsFetching,
      isError: filtersIsError,
    },
  ] = productsApi.endpoints.updateFilters.useLazyQuery();

  const { lang } = useTranslations();
  const { category, subcategory } = useParams();
  const {
    setSearchParams,
    setCurrentSliderValues,
    searchParams,
    currentSliderValues,
    handleChange,
    handleMinInput,
    handleMaxInput,
    handleSubmitPriceRange,
  } = usePriceSlider({ filtersData });

  const handleReset = () => {
    setSearchParams([]);
    if (filtersData) {
      setCurrentSliderValues([filtersData.minPrice, filtersData.maxPrice]);
    }
  };

  useEffect(() => {
    triggerFilters(
      {
        filterParams: searchParams.toString(),
        category: category || "",
        subcategory: subcategory || "",
      },
      true
    );
  }, [searchParams, triggerFilters, category, subcategory]);

  useEffect(() => {
    if (filtersIsError) {
      setSearchParams([]);
    }
  }, [filtersIsError, setSearchParams]);

  if (filtersIsFetching) {
    return <>...loading</>;
  }

  return (
    <Styles.FilterWrapper>
      {filtersData ? (
        <>
          <button onClick={handleReset}>reset</button>
          <input
            value={currentSliderValues[0] || 0}
            onChange={(e) => handleMinInput(e)}
            min={currentSliderValues[0]}
            max={filtersData.maxPrice}
          />{" "}
          -{" "}
          <input
            value={currentSliderValues[1] || 1}
            onChange={(e) => handleMaxInput(e)}
            min={filtersData.minPrice}
            max={currentSliderValues[1]}
          />{" "}
          грн.
          <button onClick={handleSubmitPriceRange}>Ok</button>
          <Slider
            getAriaLabel={() => "Price Range"}
            value={currentSliderValues}
            min={filtersData.minPrice}
            max={filtersData.maxPrice}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            disableSwap
          />
        </>
      ) : null}

      {filtersData &&
        filtersData.filteredResults.map((filter) => {
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
                              formatQueryParams(
                                searchParams,
                                setSearchParams,
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
                            formatQueryParams(
                              searchParams,
                              setSearchParams,
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

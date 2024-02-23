import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { formatQueryParams } from "../utils/formatQueryParams";
import { IFilter } from "../types/products.types";

interface IUsePriceSlider {
  filteredResults: IFilter[];
  maxPrice: number;
  minPrice: number;
}

const usePriceSlider = ({
  filtersData,
}: {
  filtersData: IUsePriceSlider | undefined;
}) => {
  const [currentSliderValues, setCurrentSliderValues] = useState<number[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (_: Event, newValue: number | number[]): void => {
    if (Array.isArray(newValue)) {
      setCurrentSliderValues(newValue);
    }
  };

  const handleMinInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const newMinValue = Number(event.target.value);
    if (filtersData) {
      if (newMinValue <= filtersData.maxPrice) {
        setCurrentSliderValues((prev) => [newMinValue, prev[1]]);
      } else {
        setCurrentSliderValues((prev) => [filtersData.maxPrice, prev[1]]);
      }
    }
  };

  const handleMaxInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const newMaxValue = Number(event.target.value);
    if (filtersData) {
      if (newMaxValue <= filtersData.maxPrice) {
        setCurrentSliderValues((prev) => [prev[0], newMaxValue]);
      } else {
        setCurrentSliderValues((prev) => [prev[0], filtersData.maxPrice]);
      }
    }
  };

  const handleSubmitPriceRange = (): void => {
    formatQueryParams(
      searchParams,
      setSearchParams,
      "lt",
      currentSliderValues[1] > currentSliderValues[0]
        ? String(currentSliderValues[1])
        : String(currentSliderValues[0])
    );
    formatQueryParams(
      searchParams,
      setSearchParams,
      "gt",
      String(currentSliderValues[0])
    );
  };

  useEffect(() => {
    if (
      Number(searchParams.get("gt") as string) >
      Number(searchParams.get("lt") as string)
    ) {
      searchParams.delete("gt");
      searchParams.delete("lt");
      setSearchParams(searchParams);
    }

    if (filtersData) {
      setCurrentSliderValues([
        Number(searchParams.get("gt")) || filtersData.minPrice,
        Number(searchParams.get("lt")) || filtersData.maxPrice,
      ]);
    }
  }, [filtersData, setCurrentSliderValues, searchParams]);

  return {
    setSearchParams,
    setCurrentSliderValues,
    searchParams,
    currentSliderValues,
    handleChange,
    handleMaxInput,
    handleMinInput,
    handleSubmitPriceRange,
  };
};

export default usePriceSlider;

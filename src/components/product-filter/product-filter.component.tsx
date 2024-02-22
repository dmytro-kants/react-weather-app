import { useSearchParams } from "react-router-dom";
import FilterComponent from "./filter/filter.component";
import ResultProductsComponent from "./result-products/result-products.component";
import * as Styles from "./styles";
import { useEffect, useState } from "react";
import { productsApi } from "../../store/api/products/products.api";

const ProductFilterComponent = () => {
  const [
    triggerProducts,
    {
      data: productsData,
      isFetching: productsIsFetching,
      isError: productsIsError,
    },
  ] = productsApi.endpoints.getFilteredProducts.useLazyQuery();

  // lazy-query hooks to get filters and products
  const [minAndMaxPrices, setMinAndMaxPrices] = useState<{
    min: number;
    max: number;
  }>();
  // query params handling
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterClick = (filterKey: string, value: string) => {
    let newParams = new URLSearchParams(searchParams);
    let currentValues = newParams.getAll(filterKey);
    currentValues = currentValues[0]?.split(",") || [];

    if (currentValues.includes(value)) {
      currentValues = currentValues.filter((val) => val !== value);
    } else {
      currentValues.push(value);
    }

    if (currentValues.length > 0) {
      newParams.set(filterKey, currentValues.join(","));
    } else {
      newParams.delete(filterKey);
    }

    setSearchParams(newParams.toString());
  };

  useEffect(() => {
    if (productsData) {
      const min: number = Math.min(
        ...productsData.map((product) => product.price)
      );
      const max: number = Math.max(
        ...productsData.map((product) => product.price)
      );
      console.log(min, max);

      setMinAndMaxPrices({ min: min, max: max });
    }
  }, [productsData, setMinAndMaxPrices]);

  return (
    <Styles.ProductFilterWrapper>
      <FilterComponent
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        handleFilterClick={handleFilterClick}
        minAndMaxPrices={minAndMaxPrices}
      />
      <ResultProductsComponent
        searchParams={searchParams}
        productsData={productsData}
        productsIsError={productsIsError}
        productsIsFetching={productsIsFetching}
        triggerProducts={triggerProducts}
      />
    </Styles.ProductFilterWrapper>
  );
};

export default ProductFilterComponent;

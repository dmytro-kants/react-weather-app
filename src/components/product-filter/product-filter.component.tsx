import { useSearchParams } from "react-router-dom";
import FilterComponent from "./filter/filter.component";
import ResultProductsComponent from "./result-products/result-products.component";
import * as Styles from "./styles";

const ProductFilterComponent = () => {
  // lazy-query hooks to get filters and products

  // query params handling
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterClick = (filterKey: string, value: string) => {
    let newParams = searchParams;
    let currentValues = newParams.getAll(filterKey);
    if (currentValues.includes(value)) {
      currentValues = currentValues.filter((val) => val !== value);
    } else {
      currentValues.push(value);
    }
    newParams.delete(filterKey);
    currentValues.forEach((val) => newParams.append(filterKey, val));
    setSearchParams(newParams.toString());
  };

  return (
    <Styles.ProductFilterWrapper>
      <FilterComponent
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        handleFilterClick={handleFilterClick}
      />
      <ResultProductsComponent searchParams={searchParams} />
    </Styles.ProductFilterWrapper>
  );
};

export default ProductFilterComponent;

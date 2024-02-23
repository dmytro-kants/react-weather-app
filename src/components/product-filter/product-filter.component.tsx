import FilterComponent from "./filter/filter.component";
import ResultProductsComponent from "./result-products/result-products.component";
import * as Styles from "./styles";

const ProductFilterComponent = () => {
  return (
    <Styles.ProductFilterWrapper>
      <FilterComponent />
      <ResultProductsComponent />
    </Styles.ProductFilterWrapper>
  );
};

export default ProductFilterComponent;

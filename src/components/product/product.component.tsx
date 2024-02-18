import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../store/api/products/products.api";
import { useTranslations } from "../../hooks/useTranslations";
import ProductSpinner from "../common/loading-spinners/product-spinner/product-spinner";
import ErrorComponent from "../common/error/error.component";

const ProductComponent = () => {
  const { productCode } = useParams();
  const { lang } = useTranslations();
  const { data, isLoading, isSuccess, isError } =
    useGetSingleProductQuery(productCode);
  console.log(data);

  if (isLoading) {
    return <ProductSpinner />;
  }
  if (isError) {
    return <ErrorComponent status={500} />;
  }
  if (!data) {
    return <ErrorComponent status={404} />;
  }
  if (isSuccess) {
    return <div>{data[lang].name}</div>;
  }
  return null;
};
export default ProductComponent;

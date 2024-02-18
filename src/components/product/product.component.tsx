import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../store/api/products/products.api";
import ProductSpinner from "../common/loading-spinners/product-spinner/product-spinner";
import ErrorComponent from "../common/error/error.component";
import * as Styles from "./styles";
import ImageViewerComponent from "./image-viewer/image-viewer.component";

const ProductComponent = () => {
  const { productCode } = useParams();
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
    return (
      <Styles.ProductComponent>
        <ImageViewerComponent images={data.images} />
      </Styles.ProductComponent>
    );
  }
  return null;
};
export default ProductComponent;

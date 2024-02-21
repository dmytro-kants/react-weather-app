import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../store/api/products/products.api";
import ProductSpinner from "../common/loading-spinners/product-spinner/product-spinner";
import ErrorComponent from "../common/error/error.component";
import * as Styles from "./styles";
import ImageViewerComponent from "./image-viewer/image-viewer.component";
import InfoContainerComponent from "./info-container/info-container.component";

const ProductComponent = () => {
  const { productCode } = useParams();
  const { data, isLoading, isSuccess, isError } =
    useGetSingleProductQuery(productCode);

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
        <Styles.ProductContainerMain>
          <ImageViewerComponent images={data.images} />
          <InfoContainerComponent data={data} />
        </Styles.ProductContainerMain>
      </Styles.ProductComponent>
    );
  }
  return null;
};
export default ProductComponent;

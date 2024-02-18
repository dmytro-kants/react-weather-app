import { Rings } from "react-loader-spinner";
import BaseContainer from "../../base-container/base-container.wrapper";
import * as Styles from "./styles";
import { useTranslations } from "../../../../hooks/useTranslations";
const ProductSpinner = () => {
  const { t } = useTranslations();
  return (
    <BaseContainer>
      <Styles.ProductSpinner>
        <Styles.ProductSpinnerText>
          <p>{t["spinner.loading"]}</p>
        </Styles.ProductSpinnerText>
        <Rings
          visible={true}
          height="600"
          width="600"
          color="#373737"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </Styles.ProductSpinner>
    </BaseContainer>
  );
};

export default ProductSpinner;

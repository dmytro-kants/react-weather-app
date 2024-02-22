import { FC } from "react";
import * as Styles from "./styles";
import { useTranslations } from "../../../hooks/useTranslations";
import { IProduct } from "../../../types/products.types";

interface InfoContainerComponentProps {
  data: IProduct;
}

const InfoContainerComponent: FC<InfoContainerComponentProps> = ({ data }) => {
  const { lang } = useTranslations();

  return (
    <Styles.InfoWrapper>
      <Styles.InfoName>{data.name.translations[lang].value}</Styles.InfoName>
      <Styles.InfoProductCode>
        Код товару: {data.productCode}
      </Styles.InfoProductCode>
      <Styles.InfoProductPrice>💰 {data.price} грн.</Styles.InfoProductPrice>
      {Object.entries(data.additionalInfo).map(([key, element]) => {
        if (!element.translations[lang].value) {
          return null;
        }
        return (
          <div key={key}>
            <p>
              {element.translations[lang]?.label}:{" "}
              {element.translations[lang].value}
            </p>
          </div>
        );
      })}
    </Styles.InfoWrapper>
  );
};
export default InfoContainerComponent;

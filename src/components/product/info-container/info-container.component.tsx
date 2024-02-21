import { FC } from "react";
import { ISingleProductResponse } from "../../../types/products.types";
import * as Styles from "./styles";
import { useTranslations } from "../../../hooks/useTranslations";

interface InfoContainerComponentProps {
  data: ISingleProductResponse;
}

const InfoContainerComponent: FC<InfoContainerComponentProps> = ({ data }) => {
  const { lang } = useTranslations();

  return (
    <Styles.InfoWrapper>
      <Styles.InfoName>{data.name[lang]}</Styles.InfoName>
      <Styles.InfoProductCode>
        Код товару: {data.productCode}
      </Styles.InfoProductCode>
      <Styles.InfoProductPrice>💰 {data.price} грн.</Styles.InfoProductPrice>
      {data.additionalInfo.map((el) => {
        return (
          <p>
            {el[lang].name} : {el[lang].value}
          </p>
        );
      })}
    </Styles.InfoWrapper>
  );
};

export default InfoContainerComponent;

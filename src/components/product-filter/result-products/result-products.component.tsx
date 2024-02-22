import { useTranslations } from "../../../hooks/useTranslations";
import { FC, useEffect } from "react";
import { IProduct, ITriggerProduct } from "../../../types/products.types";

type ResultProductsComponentProps = {
  searchParams: URLSearchParams;
  productsData: IProduct[] | undefined;
  productsIsFetching: boolean;
  productsIsError: boolean;
  triggerProducts: ITriggerProduct;
};

const ResultProductsComponent: FC<ResultProductsComponentProps> = ({
  searchParams,
  productsData,
  productsIsError,
  productsIsFetching,
  triggerProducts,
}) => {
  const { lang } = useTranslations();

  useEffect(() => {
    const filterParams = searchParams.toString();
    let category: string = "";
    let subcategory: string = "";
    triggerProducts({ filterParams, category, subcategory }, true);
  }, [searchParams, triggerProducts]);

  if (productsIsFetching) {
    return <>...loading</>;
  }

  if (productsIsError) {
    return <>oops, error</>;
  }
  return (
    <>
      {productsData &&
        productsData.map((entries) => {
          return (
            <div
              style={{ border: "solid 1px black" }}
              key={entries.productCode}
            >
              {" "}
              Price: {entries.price}
              <ul>
                {Object.entries(entries.additionalInfo).map(([key, info]) => (
                  <li key={key}>
                    <strong>{info.translations[lang].label}:</strong>{" "}
                    {info.translations[lang].value}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
    </>
  );
};

export default ResultProductsComponent;

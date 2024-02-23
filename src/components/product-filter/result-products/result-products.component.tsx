import { useTranslations } from "../../../hooks/useTranslations";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { productsApi } from "../../../store/api/products/products.api";

const ResultProductsComponent = () => {
  const { lang } = useTranslations();
  const [searchParams] = useSearchParams();

  const [
    triggerProducts,
    {
      data: productsData,
      isFetching: productsIsFetching,
      isError: productsIsError,
    },
  ] = productsApi.endpoints.getFilteredProducts.useLazyQuery();

  useEffect(() => {
    const filterParams = searchParams.toString();
    let category: string = "Category 1";
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

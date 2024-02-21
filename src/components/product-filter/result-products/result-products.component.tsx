import { useTranslations } from "../../../hooks/useTranslations";
import { productsApi } from "../../../store/api/products/products.api";
import { FC, useEffect } from "react";

type ResultProductsComponentProps = {
  searchParams: URLSearchParams;
};

const ResultProductsComponent: FC<ResultProductsComponentProps> = ({
  searchParams,
}) => {
  const [
    triggerProducts,
    {
      data: productsData,
      isFetching: productsIsFetching,
      isError: productsIsError,
    },
  ] = productsApi.endpoints.getFilteredProducts.useLazyQuery();
  const { lang } = useTranslations();
  useEffect(() => {
    const filters = searchParams.toString();
    triggerProducts(filters, true);
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
        productsData.map((e: any) => {
          return (
            <>
              {" "}
              Price: {e.price}
              <ul>
                {(Object.entries(e.additionalInfo) as [string, any][]).map(
                  ([key, info]) => (
                    <li key={key}>
                      <strong>{(info as any).translations[lang].label}:</strong>{" "}
                      {(info as any).translations[lang].value}
                    </li>
                  )
                )}
              </ul>
            </>
          );
        })}
    </>
  );
};

export default ResultProductsComponent;

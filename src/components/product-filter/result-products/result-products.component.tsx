import { useTranslations } from "../../../hooks/useTranslations";
import { ChangeEvent, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { productsApi } from "../../../store/api/products/products.api";
import { formatQueryParams } from "../../../utils/formatQueryParams";
import { Pagination, Stack, Typography } from "@mui/material";

const ResultProductsComponent = () => {
  const { lang } = useTranslations();
  const [searchParams, setSearchParams] = useSearchParams();
  const { category, subcategory } = useParams();
  const [
    triggerProducts,
    {
      data: productsData,
      isFetching: productsIsFetching,
      isError: productsIsError,
    },
  ] = productsApi.endpoints.getFilteredProducts.useLazyQuery();

  const handleSortByChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    formatQueryParams(searchParams, setSearchParams, "sort", e.target.value);
  };

  const handlePageChange = (_: ChangeEvent<unknown>, page: number): void => {
    formatQueryParams(searchParams, setSearchParams, "page", String(page));
  };

  useEffect(() => {
    triggerProducts(
      {
        filterParams: searchParams.toString(),
        category: category || "",
        subcategory: subcategory || "",
      },
      true
    );
  }, [searchParams, triggerProducts, category, subcategory]);

  if (productsIsFetching) {
    return <>...loading</>;
  }

  if (productsIsError) {
    return <>oops, error</>;
  }
  return (
    <>
      <select
        value={searchParams.get("sort") || "default"}
        onChange={(e) => handleSortByChange(e)}
      >
        <option value="default">Релевантність</option>
        <option value="price-asc">За зростанням ціни</option>
        <option value="price-desc">За спаданням ціни</option>
      </select>

      {productsData && productsData.products.length > 0 ? (
        productsData.products.map((entries) => {
          return (
            <div
              style={{ border: "solid 1px black" }}
              key={entries.productCode}
            >
              {" "}
              Name: {entries.name.translations[lang].value}
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
        })
      ) : (
        <>No products found..</>
      )}
      <Stack spacing={2}>
        <Typography>Page: {searchParams.get("page") || 1}</Typography>
        <Pagination
          count={productsData?.maxPage}
          page={Number(searchParams.get("page")) || 1}
          onChange={handlePageChange}
        />
      </Stack>
    </>
  );
};

export default ResultProductsComponent;

import { useParams } from "react-router-dom";
import { useGetSubcategoriesQuery } from "../../store/api/products/products.api";
import { useEffect, useState } from "react";
import { useTranslations } from "../../hooks/useTranslations";
import { Subcategory } from "../../types/products.types";
import NotFoundComponent from "../not-found/not-found.component";
import ProductFilterComponent from "../product-filter/product-filter.component";

const SubcategoryComponent = () => {
  const { category, subcategory } = useParams();
  const { lang } = useTranslations();
  const { data, isLoading } = useGetSubcategoriesQuery(category);
  const [subcategoryInfo, setSubcategoryInfo] = useState<Subcategory>();

  useEffect(() => {
    data?.forEach((el) => {
      if (el.value === subcategory) {
        setSubcategoryInfo(el);
      }
    });
  }, [setSubcategoryInfo, subcategory, data]);

  if (isLoading) {
    return <>loading</>;
  }
  if (subcategoryInfo) {
    return (
      <>
        <h2>{subcategoryInfo.translations[lang].value}</h2>
        <ProductFilterComponent />
      </>
    );
  }
  if (!subcategoryInfo) {
    return <NotFoundComponent />;
  }
  return null;
};

export default SubcategoryComponent;

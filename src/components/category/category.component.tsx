import { Link, useParams } from "react-router-dom";
import { useGetSubcategoriesQuery } from "../../store/api/products/products.api";
import ProductFilterComponent from "../product-filter/product-filter.component";
import { useTranslations } from "../../hooks/useTranslations";

const CategoryComponent = () => {
  const { category } = useParams();
  const { lang } = useTranslations();
  const { data } = useGetSubcategoriesQuery(category);

  return (
    <>
      {data?.map((subcategory) => {
        return (
          <Link
            key={subcategory.value}
            to={`/search/${category}/${subcategory.value}`}
          >
            {subcategory.translations[lang].value}
          </Link>
        );
      })}
      <ProductFilterComponent />
    </>
  );
};

export default CategoryComponent;

import { useParams } from "react-router-dom";
import BaseContainer from "../../components/common/base-container/base-container.wrapper";
import NotFoundComponent from "../../components/not-found/not-found.component";
import CategoryComponent from "../../components/category/category.component";
import { CATEGORIES } from "../../utils/constants";

const CategoryPage = () => {
  const { category } = useParams();

  let formattedCategory = category;

  if (formattedCategory) {
    formattedCategory =
      formattedCategory.charAt(0).toUpperCase() + formattedCategory.slice(1);
  }

  if (formattedCategory) {
    if (CATEGORIES.includes(formattedCategory)) {
      return (
        <BaseContainer>
          <CategoryComponent />
        </BaseContainer>
      );
    } else {
      return <NotFoundComponent />;
    }
  }

  return null;
};

export default CategoryPage;

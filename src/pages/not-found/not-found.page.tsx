import BaseContainer from "../../components/common/base-container/base-container.component";
import NotFoundPageComponent from "../../components/common/not-found-page/not-found-page.component";
import Layout from "../../layout/layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <BaseContainer>
        <NotFoundPageComponent />
      </BaseContainer>
    </Layout>
  );
};

export default NotFoundPage;

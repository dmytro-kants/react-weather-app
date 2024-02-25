import { Link } from "react-router-dom";
import BaseContainer from "../../components/common/base-container/base-container.wrapper";

const MainPage = () => {
  return (
    <BaseContainer>
      <Link to="/search/beds">
        <div>Beds</div>
      </Link>
      <Link to="/search/sofas">
        <div>Sofas</div>
      </Link>
      <Link to="/search/chairs">
        <div>Chairs</div>
      </Link>
      <Link to="/search/mattresses">
        <div>Mattresses</div>
      </Link>
    </BaseContainer>
  );
};

export default MainPage;

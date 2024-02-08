import BaseContainer from "../base-container/base-container.component";
import * as Styles from "./styles";

const Header = () => {
  return (
    <BaseContainer>
      <Styles.Header>
        <Styles.Logo>Weather React App 🌤️</Styles.Logo>
      </Styles.Header>
    </BaseContainer>
  );
};

export default Header;

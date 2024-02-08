import BaseContainer from "../base-container/base-container.component";
import * as Styles from "./styles";

const Header = () => {
  return (
    <Styles.Header>
      <BaseContainer>
        <Styles.HeaderContainer>
          <Styles.Logo>Weather React App 🌤️</Styles.Logo>
          <Styles.LoginButton>
            <p>Login</p>
          </Styles.LoginButton>
        </Styles.HeaderContainer>
      </BaseContainer>
    </Styles.Header>
  );
};

export default Header;

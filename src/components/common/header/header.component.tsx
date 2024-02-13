import { Link, useNavigate } from "react-router-dom";
import BaseContainer from "../base-container/base-container.component";
import AuthButton from "../buttons/auth-button/auth-button.component";
import * as Styles from "./styles";
import { useAuth } from "../../../hooks/useAuth";
import CartButton from "../buttons/cart-button/cart-button.component";
import LangSwitcher from "../lang-switcher/lang-switcher.component";

const Header = () => {
  const { handleLogout, isAuth } = useAuth();
  const navigate = useNavigate();

  return (
    <Styles.Header>
      <BaseContainer>
        <Styles.HeaderContainer>
          <Link to="/">
            <Styles.Logo>Furniture React App 🛋️</Styles.Logo>
          </Link>
          <LangSwitcher />
          <Styles.Buttons>
            <CartButton handleClick={() => navigate("/cart")} />
            {isAuth ? (
              <AuthButton type="logout" handleClick={() => handleLogout()} />
            ) : (
              <>
                <AuthButton
                  type="signup"
                  handleClick={() => navigate("/registration")}
                />
                <AuthButton
                  type="signin"
                  handleClick={() => navigate("/login")}
                />
              </>
            )}
          </Styles.Buttons>
        </Styles.HeaderContainer>
      </BaseContainer>
    </Styles.Header>
  );
};

export default Header;

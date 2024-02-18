import { Link, useNavigate } from "react-router-dom";
import BaseContainer from "../base-container/base-container.wrapper";
import AuthButton from "../buttons/auth-button/auth-button.component";
import * as Styles from "./styles";
import CartButton from "../buttons/cart-button/cart-button.component";
import LangSwitcher from "../lang-switcher/lang-switcher.component";
import { useAppSelector } from "../../../hooks/redux-hooks";
import ProfileButton from "../buttons/profile-button/profile-button.component";

const Header = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
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
              <>
                <ProfileButton handleClick={() => navigate("/profile")} />
              </>
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

import { Link, useNavigate } from "react-router-dom";
import BaseContainer from "../base-container/base-container.component";
import AuthButton from "../buttons/auth-button/auth-button.component";
import * as Styles from "./styles";
import { useAuth } from "../../../hooks/useAuth";

const Header = () => {
  const { handleLogout, isAuth, user } = useAuth();
  const navigate = useNavigate();

  return (
    <Styles.Header>
      <BaseContainer>
        <Styles.HeaderContainer>
          <Link to="/">
            <Styles.Logo>Weather React App 🌤️</Styles.Logo>
          </Link>
          <Styles.Buttons>
            {isAuth ? (
              <AuthButton
                type="Logout"
                handleClick={() => handleLogout(user.email)}
              />
            ) : (
              <>
                <AuthButton
                  type="Sign up"
                  handleClick={() => navigate("/registration")}
                />
                <AuthButton
                  type="Sign in"
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

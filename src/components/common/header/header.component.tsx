import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import BaseContainer from "../base-container/base-container.component";
import AuthButton from "../buttons/auth-button/auth-button.component";
import * as Styles from "./styles";
import { logoutAsync } from "../../../store/slices/auth.slice";

const Header = () => {
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.authReducer.user);

  const handleLogout = () => {
    dispatch(logoutAsync({ email: user.email }));
  };

  return (
    <Styles.Header>
      <BaseContainer>
        <Styles.HeaderContainer>
          <Link to="/">
            <Styles.Logo>Weather React App 🌤️</Styles.Logo>
          </Link>
          <Styles.Buttons>
            {isAuth ? (
              <AuthButton type="Logout" handleClick={handleLogout} />
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

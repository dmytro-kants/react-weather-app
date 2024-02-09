import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { loginAsync, logoutAsync } from "../../../store/slices/auth.slice";
import BaseContainer from "../base-container/base-container.component";
import AuthButton from "../buttons/auth-button/auth-button.component";
import * as Styles from "./styles";

const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.authReducer.user);
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);

  const handleLogin = () => {
    try {
      dispatch(loginAsync({ email: "1234@1.ua", password: "123das123" }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    dispatch(logoutAsync({ email: user.email }));
  };

  return (
    <Styles.Header>
      <BaseContainer>
        <Styles.HeaderContainer>
          <Styles.Logo>Weather React App 🌤️</Styles.Logo>
          <Styles.Buttons>
            {isAuth ? (
              <AuthButton type="Logout" handleClick={handleLogout} />
            ) : (
              <>
                <AuthButton type="Sign Up" />
                <AuthButton type="Sign In" handleClick={handleLogin} />
              </>
            )}
          </Styles.Buttons>
        </Styles.HeaderContainer>
      </BaseContainer>
    </Styles.Header>
  );
};

export default Header;

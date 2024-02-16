import { Link, useNavigate } from "react-router-dom";
import BaseContainer from "../base-container/base-container.wrapper";
import AuthButton from "../buttons/auth-button/auth-button.component";
import * as Styles from "./styles";
import CartButton from "../buttons/cart-button/cart-button.component";
import LangSwitcher from "../lang-switcher/lang-switcher.component";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { useLogoutUserMutation } from "../../../store/api/api/auth.api";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Header = () => {
  const { isAuth, user } = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();

  const [logoutUser, { isError, isSuccess, isLoading, error }] =
    useLogoutUserMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Logged out successfully");
    }
    if (isError) {
      if (Array.isArray((error as any).data.error)) {
        (error as any).data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: "top-right",
          })
        );
      } else {
        toast.error((error as any).data.message, {
          position: "top-right",
        });
      }
    }
  }, [isLoading, isError, isSuccess, error]);

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
              <AuthButton type="logout" handleClick={() => logoutUser(user)} />
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

import { useNavigate } from "react-router-dom";
import BaseContainer from "../../components/common/base-container/base-container.wrapper";
import { useEffect } from "react";
import SignInForm from "../../components/auth/signin-form.component";
import { useAppSelector } from "../../hooks/redux-hooks";

const SignInPage = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <BaseContainer>
      <SignInForm />
    </BaseContainer>
  );
};

export default SignInPage;

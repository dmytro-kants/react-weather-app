import { useNavigate } from "react-router-dom";
import BaseContainer from "../../components/common/base-container/base-container.component";
import SignInForm from "../../components/signin/signin-form/signin-form.component";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

const SignInPage = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <BaseContainer>
      <SignInForm />
    </BaseContainer>
  );
};

export default SignInPage;

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BaseContainer } from "../../components/common/base-container/styles";
import SignUpForm from "../../components/auth/signup-form.component";
import { useAppSelector } from "../../hooks/redux-hooks";

const SignUpPage = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <BaseContainer>
      <SignUpForm />
    </BaseContainer>
  );
};

export default SignUpPage;

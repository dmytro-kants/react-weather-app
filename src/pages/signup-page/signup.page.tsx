import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { BaseContainer } from "../../components/common/base-container/styles";
import SignUpForm from "../../components/auth/signup-form.component";

const SignUpPage = () => {
  const { isAuth } = useAuth();
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

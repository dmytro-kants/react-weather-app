import { SubmitHandler, useForm } from "react-hook-form";
import * as Styles from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ISignInInputs } from "../../types/forms/forms.types";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const SignInForm = () => {
  const { handleLogin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInInputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<ISignInInputs> = (data) => handleLogin(data);

  return (
    <Styles.AuthFormWrapper>
      <Styles.AuthTextTitle>Login to your account</Styles.AuthTextTitle>
      <Styles.AuthTextDescription>
        Enter your email and password
      </Styles.AuthTextDescription>
      <Styles.AuthForm onSubmit={handleSubmit(onSubmit)}>
        <Styles.AuthInput
          placeholder="Enter your email..."
          {...register("email")}
        />
        {errors.email?.message && (
          <Styles.AuthErrorText>{errors.email?.message}</Styles.AuthErrorText>
        )}
        <Styles.AuthInput
          type="password"
          placeholder="Enter your password..."
          {...register("password")}
        />
        {errors.password?.message && (
          <Styles.AuthErrorText>
            {errors.password?.message}
          </Styles.AuthErrorText>
        )}
        <Styles.AuthButton type="submit" value={"Sign in"} />
      </Styles.AuthForm>
      <Styles.AuthRedirectLink to={`/registration`}>
        create new account
      </Styles.AuthRedirectLink>
    </Styles.AuthFormWrapper>
  );
};

export default SignInForm;

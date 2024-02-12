import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import * as Styles from "./styles";
import { ISignUpInputs } from "../../types/forms/forms.types";
import { useAuth } from "../../hooks/useAuth";
import { useTranslation } from "react-i18next";

const schema = yup
  .object({
    email: yup.string().email().required("Enter your email..."),
    name: yup.string().required().min(3).max(24),
    password: yup.string().required().min(8).max(32),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

const SignUpForm = () => {
  const { t } = useTranslation();
  const { handleRegistration } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpInputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<ISignUpInputs> = (data) =>
    handleRegistration(data);

  return (
    <Styles.AuthFormWrapper>
      <Styles.AuthTextTitle>Register new account</Styles.AuthTextTitle>
      <Styles.AuthTextDescription>
        Enter your email, choose username and password
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
          placeholder="Choose your username..."
          {...register("name")}
        />
        {errors.name?.message && (
          <Styles.AuthErrorText>{errors.name?.message}</Styles.AuthErrorText>
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
        <Styles.AuthInput
          type="password"
          placeholder="Confirm your password..."
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message && (
          <Styles.AuthErrorText>
            {errors.confirmPassword?.message}
          </Styles.AuthErrorText>
        )}
        <Styles.AuthButton type="submit" value={"Sign up"} />
      </Styles.AuthForm>
      <Styles.AuthRedirectLink to={`/login`}>
        already have an account?
      </Styles.AuthRedirectLink>
    </Styles.AuthFormWrapper>
  );
};

export default SignUpForm;

import { SubmitHandler, useForm } from "react-hook-form";
import * as Styles from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ISignInInputs } from "../../types/forms/forms.types";
import { useTranslations } from "../../hooks/useTranslations";

const SignInForm = () => {
  const { t, isKeyOf } = useTranslations();

  const schema = yup.object({
    email: yup.string().email().required("signin_page.errors.required"),
    password: yup.string().required("signin_page.errors.required"),
  });
  const { handleLogin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInInputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<ISignInInputs> = (data) => handleLogin(data);
  return (
    <Styles.AuthFormWrapper>
      <Styles.AuthTextTitle>{}</Styles.AuthTextTitle>
      <Styles.AuthTextDescription>{}</Styles.AuthTextDescription>
      <Styles.AuthForm onSubmit={handleSubmit(onSubmit)}>
        <Styles.AuthInput {...register("email")} />
        {<Styles.AuthErrorText>{errors.email?.message}</Styles.AuthErrorText>}
        <Styles.AuthInput type="password" {...register("password")} />
        {errors.password?.message && isKeyOf(errors.password?.message, t) && (
          <Styles.AuthErrorText>
            {t[errors.password?.message]}
          </Styles.AuthErrorText>
        )}
        <Styles.AuthButton type="submit" />
      </Styles.AuthForm>
      <Styles.AuthRedirectLink to={`/registration`}>{}</Styles.AuthRedirectLink>
    </Styles.AuthFormWrapper>
  );
};

export default SignInForm;

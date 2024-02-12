import { SubmitHandler, useForm } from "react-hook-form";
import * as Styles from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { ISignInInputs } from "../../types/forms/forms.types";

const SignInForm = () => {
  const { t } = useTranslation();

  const schema = yup.object({
    email: yup
      .string()
      .email("login_page.errors.valid-email")
      .required("login_page.errors.enter-email"),
    password: yup.string().required("login_page.enter-password"),
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
      <Styles.AuthTextTitle>
        {t("login_page.login-text-1")}
      </Styles.AuthTextTitle>
      <Styles.AuthTextDescription>
        {t("login_page.login-text-2")}
      </Styles.AuthTextDescription>
      <Styles.AuthForm onSubmit={handleSubmit(onSubmit)}>
        <Styles.AuthInput
          placeholder={t("login_page.enter-email")}
          {...register("email")}
        />
        {errors.email?.message && (
          <Styles.AuthErrorText>
            {t(errors.email?.message)}
          </Styles.AuthErrorText>
        )}
        <Styles.AuthInput
          type="password"
          placeholder={t("login_page.enter-password")}
          {...register("password")}
        />
        {errors.password?.message && (
          <Styles.AuthErrorText>
            {t(errors.password?.message)}
          </Styles.AuthErrorText>
        )}
        <Styles.AuthButton type="submit" value={t("login_page.sign-in")} />
      </Styles.AuthForm>
      <Styles.AuthRedirectLink to={`/registration`}>
        {t("login_page.create-new-account")}
      </Styles.AuthRedirectLink>
    </Styles.AuthFormWrapper>
  );
};

export default SignInForm;

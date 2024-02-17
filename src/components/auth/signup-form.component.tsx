import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import * as Styles from "./styles";
import { useRegisterUserMutation } from "../../store/api/auth/auth.api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ISignUpInputs } from "../../types/auth.types";
import { useTranslations } from "../../hooks/useTranslations";

const schema = yup.object({
  email: yup
    .string()
    .email("signup_page.errors.isEmail")
    .required("signup_page.errors.required"),
  name: yup
    .string()
    .required("signup_page.errors.required")
    .min(3, "signup_page.errors.minName")
    .max(24, "signup_page.errors.maxName"),
  password: yup
    .string()
    .required("signup_page.errors.required")
    .min(8, "signup_page.errors.minPassword")
    .max(32, "signup_page.errors.minPassword"),
  confirmPassword: yup
    .string()
    .required("signup_page.errors.required")
    .oneOf([yup.ref("password")], "signup_page.errors.passwordsMatch"),
});

const SignUpForm = () => {
  const navigate = useNavigate();
  const { t, isKeyOf } = useTranslations();
  const [registerUser, { isSuccess, isError, error }] =
    useRegisterUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpInputs>({ resolver: yupResolver(schema) });

  useEffect(() => {
    if (isSuccess) {
      toast.success(t["signup_page.toast.success"]);
      navigate("/login");
    }
    if (isError) {
      if (Array.isArray((error as any).data.error)) {
        (error as any).data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: "top-right",
          })
        );
      } else {
        toast.error(t["signup_page.toast.error"], {
          position: "top-right",
        });
      }
    }
  }, [isError, isSuccess, navigate, error, t]);

  const onSubmit: SubmitHandler<ISignUpInputs> = (data) => registerUser(data);

  return (
    <Styles.AuthFormWrapper>
      <Styles.AuthTextTitle>{t["signup_page.text.one"]}</Styles.AuthTextTitle>
      <Styles.AuthTextDescription>
        {t["signup_page.text.two"]}
      </Styles.AuthTextDescription>
      <Styles.AuthForm onSubmit={handleSubmit(onSubmit)}>
        <Styles.AuthInput
          placeholder={t["signup_page.text.enter-email"]}
          {...register("email")}
        />
        {errors.email?.message && isKeyOf(errors.email?.message, t) && (
          <Styles.AuthErrorText>
            {t[errors.email?.message]}
          </Styles.AuthErrorText>
        )}
        <Styles.AuthInput
          placeholder={t["signup_page.text.enter-username"]}
          {...register("name")}
        />
        {errors.name?.message && isKeyOf(errors.name?.message, t) && (
          <Styles.AuthErrorText>{t[errors.name?.message]}</Styles.AuthErrorText>
        )}
        <Styles.AuthInput
          type="password"
          placeholder={t["signup_page.text.enter-password"]}
          {...register("password")}
        />
        {errors.password?.message && isKeyOf(errors.password?.message, t) && (
          <Styles.AuthErrorText>
            {t[errors.password?.message]}
          </Styles.AuthErrorText>
        )}
        <Styles.AuthInput
          type="password"
          placeholder={t["signup_page.text.confirm-password"]}
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message &&
          isKeyOf(errors.confirmPassword?.message, t) && (
            <Styles.AuthErrorText>
              {t[errors.confirmPassword?.message]}
            </Styles.AuthErrorText>
          )}
        <Styles.AuthButton
          type="submit"
          value={t["signup_page.text.sign-up"]}
        />
      </Styles.AuthForm>
      <Styles.AuthRedirectLink to={`/login`}>
        {t["signup_page.text.alredy-have-account"]}
      </Styles.AuthRedirectLink>
    </Styles.AuthFormWrapper>
  );
};

export default SignUpForm;

import { SubmitHandler, useForm } from "react-hook-form";
import * as Styles from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslations } from "../../hooks/useTranslations";
import { useLoginUserMutation } from "../../store/api/auth/auth.api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ISignInInputs } from "../../types/auth.types";

const SignInForm = () => {
  const { t, isKeyOf } = useTranslations();
  const navigate = useNavigate();
  const [loginUser, { isError, isLoading, isSuccess, error }] =
    useLoginUserMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(t["signin_page.toast.success"]);
      navigate("/");
    }
    if (isError) {
      if (Array.isArray((error as any).data.error)) {
        (error as any).data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: "top-right",
          })
        );
      } else {
        toast.error(t["signin_page.toast.error"], {
          position: "top-right",
        });
      }
    }
  }, [isLoading, navigate, isSuccess, isError, error, t]);

  const schema = yup.object({
    email: yup
      .string()
      .email("signin_page.errors.isEmail")
      .required("signin_page.errors.required"),
    password: yup.string().required("signin_page.errors.required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInInputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<ISignInInputs> = (data) => loginUser(data);

  return (
    <Styles.AuthFormWrapper>
      <Styles.AuthTextTitle>{t["signin_page.text.one"]}</Styles.AuthTextTitle>
      <Styles.AuthTextDescription>
        {t["signin_page.text.two"]}
      </Styles.AuthTextDescription>
      <Styles.AuthForm onSubmit={handleSubmit(onSubmit)}>
        <Styles.AuthInput
          {...register("email")}
          placeholder={t["signin_page.text.enter-email"]}
        />
        {errors.email?.message && isKeyOf(errors.email?.message, t) && (
          <Styles.AuthErrorText>
            {t[errors.email?.message]}
          </Styles.AuthErrorText>
        )}
        <Styles.AuthInput
          type="password"
          {...register("password")}
          placeholder={t["signin_page.text.enter-password"]}
        />
        {errors.password?.message && isKeyOf(errors.password?.message, t) && (
          <Styles.AuthErrorText>
            {t[errors.password?.message]}
          </Styles.AuthErrorText>
        )}
        <Styles.AuthButton
          type="submit"
          value={t["signin_page.text.sign-in"]}
        />
      </Styles.AuthForm>
      <Styles.AuthRedirectLink to={`/registration`}>
        {t["signin_page.text.create-new-account"]}
      </Styles.AuthRedirectLink>
    </Styles.AuthFormWrapper>
  );
};

export default SignInForm;

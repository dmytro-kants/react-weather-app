import { SubmitHandler, useForm } from "react-hook-form";
import * as Styles from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ISignInInputs } from "../../types/forms/forms.types";
import { useTranslations } from "../../hooks/useTranslations";
import { useLoginUserMutation } from "../../store/api/api/auth.api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignInForm = () => {
  const { t, isKeyOf } = useTranslations();
  const navigate = useNavigate();
  const [loginUser, { isError, isLoading, isSuccess, error }] =
    useLoginUserMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Logged in successfully");
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
        toast.error((error as any).data.message, {
          position: "top-right",
        });
      }
    }
  }, [isLoading, navigate, isSuccess, isError, error]);

  const schema = yup.object({
    email: yup.string().email().required("signin_page.errors.required"),
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

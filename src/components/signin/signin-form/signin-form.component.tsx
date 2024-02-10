import { SubmitHandler, useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../../../utils/constants";
import * as Styles from "./styles";
import { useAuth } from "../../../hooks/useAuth";
import { useEffect } from "react";

interface Inputs {
  email: string;
  password: string;
}

const SignInForm = () => {
  const { handleLogin } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = () => handleLogin();

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <Styles.SignInForm onSubmit={handleSubmit(onSubmit)}>
      <Styles.SignInInput
        placeholder="Enter your email..."
        {...register("email", {
          required: true,
          pattern: EMAIL_REGEX,
        })}
      />
      {errors.email && <span>This field is required</span>}
      <Styles.SignInInput
        type="password"
        placeholder="Enter your password..."
        {...register("password", { required: true })}
      />
      <Styles.SignInButton type="submit" value={"Sign in"} />
    </Styles.SignInForm>
  );
};

export default SignInForm;

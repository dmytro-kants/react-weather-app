import { FC } from "react";
import * as Styles from "./styles";

interface AuthButtonProps {
  type: "Sign in" | "Sign up" | "Logout";
  handleClick?: () => void;
}

const AuthButton: FC<AuthButtonProps> = ({ type, handleClick }) => {
  return (
    <Styles.AuthButton $type={type} onClick={handleClick}>
      <p>{type}</p>
    </Styles.AuthButton>
  );
};

export default AuthButton;

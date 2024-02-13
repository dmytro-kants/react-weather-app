import { FC } from "react";
import * as Styles from "./styles";
import { useTranslations } from "../../../../hooks/useTranslations";

interface AuthButtonProps {
  type: "signin" | "signup" | "logout";
  handleClick?: () => void;
}

const AuthButton: FC<AuthButtonProps> = ({ type, handleClick }) => {
  const { t } = useTranslations();
  return (
    <Styles.AuthButton $type={type} onClick={handleClick}>
      <p>{t[`header.buttons.${type}`]}</p>
    </Styles.AuthButton>
  );
};

export default AuthButton;

import { FC } from "react";
import * as Styles from "./styles";
import { useTranslation } from "react-i18next";

interface AuthButtonProps {
  type: "login" | "registration" | "logout";
  handleClick?: () => void;
}

const AuthButton: FC<AuthButtonProps> = ({ type, handleClick }) => {
  const { t } = useTranslation();
  return (
    <Styles.AuthButton $type={type} onClick={handleClick}>
      <p>{t(`header.${type}`)}</p>
    </Styles.AuthButton>
  );
};

export default AuthButton;

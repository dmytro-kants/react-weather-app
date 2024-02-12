import { FC } from "react";
import * as Styles from "./styles";
import { useTranslation } from "react-i18next";

interface CartButtonProps {
  handleClick?: () => void;
}

const CartButton: FC<CartButtonProps> = ({ handleClick }) => {
  const { t } = useTranslation();
  return (
    <Styles.CartButton onClick={handleClick}>
      <p>{t("header.cart")}</p>
    </Styles.CartButton>
  );
};

export default CartButton;

import { FC } from "react";
import * as Styles from "./styles";
import { useTranslations } from "../../../../hooks/useTranslations";

interface CartButtonProps {
  handleClick?: () => void;
}

const CartButton: FC<CartButtonProps> = ({ handleClick }) => {
  const { t } = useTranslations();

  return (
    <Styles.CartButton onClick={handleClick}>
      <p>{t["header.buttons.cart"]}</p>
    </Styles.CartButton>
  );
};

export default CartButton;

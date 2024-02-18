import { FC } from "react";
import { useTranslations } from "../../../../hooks/useTranslations";
import * as Styles from "./styles";

interface ProfileButtonProps {
  handleClick?: () => void;
}

const ProfileButton: FC<ProfileButtonProps> = ({ handleClick }) => {
  const { t } = useTranslations();
  return (
    <Styles.ProfileButton onClick={handleClick}>
      <p>{t["header.buttons.profile"]}</p>
    </Styles.ProfileButton>
  );
};
export default ProfileButton;

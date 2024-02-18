import { useTranslations } from "../../hooks/useTranslations";
import * as Styles from "./styles";

const NotFoundComponent = () => {
  const { t } = useTranslations();

  return (
    <Styles.NotFoundComponent>
      <Styles.Text>{t["not_found_page.text"]}</Styles.Text>
      <Styles.StyledLink to="/">
        {t["not_found_page.returnLink"]}
      </Styles.StyledLink>
    </Styles.NotFoundComponent>
  );
};

export default NotFoundComponent;

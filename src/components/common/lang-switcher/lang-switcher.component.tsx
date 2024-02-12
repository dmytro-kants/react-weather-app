import { useTranslation } from "react-i18next";
import * as Styles from "./styles";

const LangSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <Styles.LangSwitcher>
      <Styles.LangSwitcherOption
        onClick={() => i18n.changeLanguage("ua")}
        $isActive={i18n.resolvedLanguage === "ua" ? true : false}
      >
        УКР
      </Styles.LangSwitcherOption>
      <p style={{ fontSize: "20px", margin: 0, cursor: "default" }}>|</p>
      <Styles.LangSwitcherOption
        onClick={() => i18n.changeLanguage("en")}
        $isActive={i18n.resolvedLanguage === "en" ? true : false}
      >
        ENG
      </Styles.LangSwitcherOption>
    </Styles.LangSwitcher>
  );
};

export default LangSwitcher;

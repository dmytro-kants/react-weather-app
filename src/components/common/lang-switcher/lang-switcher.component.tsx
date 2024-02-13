import { useTranslations } from "../../../hooks/useTranslations";
import * as Styles from "./styles";

const LangSwitcher = () => {
  const { lang, setCurrentLang } = useTranslations();
  return (
    <Styles.LangSwitcher>
      <Styles.LangSwitcherOption
        onClick={() => setCurrentLang("ua")}
        $isActive={lang === "ua" ? true : false}
      >
        УКР
      </Styles.LangSwitcherOption>
      <p style={{ fontSize: "20px", margin: 0, cursor: "default" }}>|</p>
      <Styles.LangSwitcherOption
        onClick={() => setCurrentLang("en")}
        $isActive={lang === "en" ? true : false}
      >
        ENG
      </Styles.LangSwitcherOption>
    </Styles.LangSwitcher>
  );
};

export default LangSwitcher;

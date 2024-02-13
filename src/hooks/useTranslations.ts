import { setLang } from "../store/slices/i18n/i18n.slice";
import { translations } from "../utils/translations";
import { useAppDispatch, useAppSelector } from "./redux-hooks";

interface IUseTranslations {
  t: typeof translations.en;
  setCurrentLang: (lang: string) => void;
  lang: string;
  supportedLanguages: Record<string, string>;
  isKeyOf: (
    key: string,
    obj: typeof translations.en
  ) => key is keyof typeof translations.en;
}

export const useTranslations = (): IUseTranslations => {
  const dispatch = useAppDispatch();
  const t = useAppSelector(
    (state) => state.i18nReducer.translations[state.i18nReducer.lang]
  );
  const setCurrentLang = (lang: string) => dispatch(setLang(lang));
  const lang = useAppSelector((state) => state.i18nReducer.lang);
  const supportedLanguages = useAppSelector(
    (state) => state.i18nReducer.supportedLanguages
  );

  function isKeyOf(key: string, obj: typeof t): key is keyof typeof t {
    return key in obj;
  }

  return {
    t,
    isKeyOf,
    setCurrentLang,
    lang,
    supportedLanguages,
  };
};

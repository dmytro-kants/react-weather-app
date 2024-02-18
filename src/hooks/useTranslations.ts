import { setLang, addTrans } from "../store/slices/i18n/i18n.slice";
import { Languages } from "../types/i18n.types";
import { translations } from "../utils/translations";
import { useAppDispatch, useAppSelector } from "./redux-hooks";

interface IUseTranslations {
  t: typeof translations.en;
  setCurrentLang: (lang: Languages) => void;
  lang: Languages;
  supportedLanguages: Record<string, string>;
  isKeyOf: (
    key: string,
    obj: typeof translations.en
  ) => key is keyof typeof translations.en;
  addTranslate: (trans: { [key: string]: string }) => void;
}

export const useTranslations = (): IUseTranslations => {
  const dispatch = useAppDispatch();
  const t = useAppSelector(
    (state) => state.i18nReducer.translations[state.i18nReducer.lang]
  );
  const setCurrentLang = (lang: Languages) => dispatch(setLang(lang));
  const lang = useAppSelector((state) => state.i18nReducer.lang);
  const supportedLanguages = useAppSelector(
    (state) => state.i18nReducer.supportedLanguages
  );

  const isKeyOf = (key: string, obj: typeof t): key is keyof typeof t => {
    return key in obj;
  };
  const addTranslate = (trans: { [key: string]: string }) =>
    dispatch(addTrans(trans));

  return {
    t,
    isKeyOf,
    setCurrentLang,
    addTranslate,
    lang,
    supportedLanguages,
  };
};

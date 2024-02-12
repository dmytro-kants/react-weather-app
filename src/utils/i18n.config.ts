import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";

i18next.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  returnNull: false,
  fallbackLng: "en",
  debug: true,
});

export default i18next;

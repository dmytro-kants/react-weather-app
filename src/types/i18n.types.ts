import { translations } from "../utils/translations";

interface Translations {
  [key: string]: typeof translations.en;
}

export interface II18nSliceState {
  lang: Languages;
  supportedLanguages: Record<string, string>;
  translations: Translations;
}

export type Languages = "en" | "ua";

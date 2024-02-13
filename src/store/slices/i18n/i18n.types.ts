import { translations } from "../../../utils/translations";

interface Translations {
  [key: string]: typeof translations.en;
}

export interface II18nSliceState {
  lang: string;
  supportedLanguages: Record<string, string>;
  translations: Translations;
}

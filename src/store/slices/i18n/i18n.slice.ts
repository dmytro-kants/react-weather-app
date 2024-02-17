import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  defaultLanguage,
  supportedLanguages,
} from "../../../utils/i18n.config";
import { II18nSliceState } from "../../../types/i18n.types";
import { translations } from "../../../utils/translations";

const initialState: II18nSliceState = {
  lang: defaultLanguage,
  supportedLanguages: { ...supportedLanguages },
  translations,
};

export const i18nSlice = createSlice({
  name: "i18n",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
    addTrans: (state, action: PayloadAction<{ [key: string]: string }>) => {
      console.log(action);

      state.translations = {
        ...state.translations,
        en: {
          ...state.translations.en,
          [action.payload.name]: action.payload.content,
        },
      };
    },
  },
});

export const { setLang, addTrans } = i18nSlice.actions;

export default i18nSlice.reducer;

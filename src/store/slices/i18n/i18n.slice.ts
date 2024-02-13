import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  defaultLanguage,
  supportedLanguages,
} from "../../../utils/i18n.config";
import { II18nSliceState } from "./i18n.types";
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
  },
});

export const { setLang } = i18nSlice.actions;

export default i18nSlice.reducer;

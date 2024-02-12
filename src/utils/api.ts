import axios from "axios";
import { API_URL } from "./constants";
import { logoutAsync } from "../store/slices/auth.slice";
import { RootState } from "../store/store";
import { Action, AsyncThunkAction, Store } from "@reduxjs/toolkit";

type AppStore = Store<RootState, Action> & {
  dispatch: {
    <ReturnType>(
      asyncAction: AsyncThunkAction<ReturnType, any, any>
    ): ReturnType;
    <A extends Action>(action: A): A;
  };
};
let store: AppStore | undefined;

export const injectStore = (_store: AppStore) => {
  store = _store;
};

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("token", response.data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        store?.dispatch(logoutAsync());
        console.log("Не авторизований!");
      }
    }
    throw error;
  }
);

export default $api;

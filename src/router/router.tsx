import { createBrowserRouter } from "react-router-dom";
import "../index.css";
import RouterElement from "./router-element";
import MainPage from "../pages/main-page/main.page";
import NotFoundPage from "../pages/not-found-page/not-found.page";
import SignInPage from "../pages/signin-page-page/signin.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterElement page={<MainPage />} />,
    errorElement: <RouterElement page={<NotFoundPage />} />,
  },
  {
    path: "/login",
    element: <RouterElement page={<SignInPage />} />,
  },
]);

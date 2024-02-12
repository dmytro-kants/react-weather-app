import { createBrowserRouter } from "react-router-dom";
import "../index.css";
import RouterElement from "./router-element";
import MainPage from "../pages/main-page/main.page";
import NotFoundPage from "../pages/not-found-page/not-found.page";
import SignInPage from "../pages/signin-page/signin.page";
import SignUpPage from "../pages/signup-page/signup.page";
import CartPage from "../pages/cart-page/cart.page";

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
  {
    path: "/registration",
    element: <RouterElement page={<SignUpPage />} />,
  },
  {
    path: "/cart",
    element: <RouterElement page={<CartPage />} />,
  },
]);

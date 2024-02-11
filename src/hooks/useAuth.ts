import { useCallback } from "react";
import {
  checkAuthAsync,
  loginAsync,
  logoutAsync,
  registrationAsync,
} from "../store/slices/auth.slice";
import { ISignInInputs, ISignUpInputs } from "../types/forms/forms.types";
import { useAppDispatch, useAppSelector } from "./redux-hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, isAuth, userAuthCheck } = useAppSelector(
    (state) => state.authReducer
  );

  const handleLogin = useCallback(
    (data: ISignInInputs) => {
      dispatch(loginAsync({ ...data }))
        .unwrap()
        .then(() => navigate("/"))
        .catch((error: string) => {
          toast.error(error);
        });
    },
    [dispatch, navigate]
  );

  const handleRegistration = useCallback(
    (data: ISignUpInputs) => {
      dispatch(registrationAsync({ ...data }))
        .unwrap()
        .then(() => navigate("/login"))
        .catch((error: string) => {
          toast.error(error);
        });
    },
    [dispatch, navigate]
  );

  const handleLogout = useCallback(
    (email?: string) => {
      dispatch(logoutAsync({ email }));
    },
    [dispatch]
  );

  const handleRefreshToken = useCallback(() => {
    dispatch(checkAuthAsync());
  }, [dispatch]);

  return {
    user,
    isAuth,
    userAuthCheck,
    dispatch,
    handleLogin,
    handleRegistration,
    handleLogout,
    handleRefreshToken,
  };
};

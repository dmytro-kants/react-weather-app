import { loginAsync, logoutAsync } from "../store/slices/auth.slice";
import { useAppDispatch, useAppSelector } from "./redux-hooks";

export const useAuth = () => {
    const dispatch = useAppDispatch();
    const {user, isAuth, userAuthCheck} = useAppSelector((state) => state.authReducer);
    const handleLogin = () => {
        try {
            dispatch(loginAsync({ email: "1234@1.ua", password: "123das123" }));
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = () => {
        dispatch(logoutAsync({ email: user.email }));
    };

    return {user, isAuth, userAuthCheck, dispatch, handleLogin, handleLogout}
}
export type UserType = {
    email: string,
    password: string,
    name: string,
    refreshToken: string,
}

export interface AuthSliceState {
    user: Partial<UserType>,
    isAuth: Boolean,
    userAuthCheck: Boolean,
    isLoading: Boolean,
    error: any,
}

export interface LoginAsyncInterface {
    email: string,
    password: string,
}

export interface LogoutAsyncInterface {
    email?: string,
}
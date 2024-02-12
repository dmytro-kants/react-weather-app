export type UserType = {
  email: string;
  password: string;
  name: string;
  refreshToken: string;
};

export interface IAuthSliceState {
  user: Partial<UserType>;
  isAuth: boolean;
  userAuthCheck: boolean;
  isLoading: boolean;
  error: any;
}

export interface IAuthReturn {
  id: string;
  email: string;
  name: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegistration extends ILogin {
  name: string;
}

export interface ILogout {
  email?: string;
}

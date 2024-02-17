export type UserType = {
  email: string;
  password: string;
  name: string;
};

// RTK Query types
export interface ISignInInputs {
  email: string;
  password: string;
}

export interface ISignUpInputs extends ISignInInputs {
  name: string;
  confirmPassword: string;
}

export interface ILogoutInputs {
  user: Partial<UserType>;
}

export interface ISignInResponse {
  user: UserType;
  accessToken: string;
}

export interface ISignUpResponse {
  user: UserType;
}

export interface ILogoutResponse {
  user: UserType;
}

export interface IRefreshResponse {
  user: UserType;
  accessToken: string;
}
// AuthSlice types

export interface IAuthSliceState {
  user: Partial<UserType>;
  isAuth: boolean;
  userAuthCheck: boolean;
  isLoading: boolean;
  error: any;
}

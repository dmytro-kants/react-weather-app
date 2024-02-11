import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  IAuthReturn,
  IAuthSliceState,
  ILogin,
  ILogout,
  IRegistration,
  UserType,
} from "../../types/slices/auth.types";
import $api from "../../http/api";
import axios from "axios";
import { API_URL } from "../../utils/constants";

const initialState: IAuthSliceState = {
  user: {},
  isAuth: false,
  isLoading: false,
  userAuthCheck: localStorage.getItem("token") ? true : false,
  error: null,
};

export const loginAsync = createAsyncThunk<
  IAuthReturn,
  ILogin,
  { rejectValue: string }
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const { email, password } = credentials;
    const response = await $api.post(
      "/login",
      { email, password },
      { withCredentials: true }
    );
    localStorage.setItem("token", response.data.accessToken);
    return {
      id: response.data.id,
      email: response.data.email,
      name: response.data.name,
    };
  } catch (e: any) {
    return rejectWithValue(e.response?.data?.message);
  }
});

export const registrationAsync = createAsyncThunk<
  IAuthReturn,
  IRegistration,
  { rejectValue: string }
>("auth/registration", async (credentials, { rejectWithValue }) => {
  try {
    const { email, password, name } = credentials;
    const response = await $api.post("/registration", {
      email,
      password,
      name,
    });
    localStorage.setItem("token", response.data.accessToken);
    return {
      id: response.data.id,
      email: response.data.email,
      name: response.data.name,
    };
  } catch (e: any) {
    return rejectWithValue(e.response?.data?.message);
  }
});

export const logoutAsync = createAsyncThunk<
  {},
  ILogout,
  { rejectValue: string }
>("auth/logout", async (credentials, { rejectWithValue }) => {
  try {
    const { email } = credentials;
    localStorage.removeItem("token");
    await $api.post("/logout", { email }, { withCredentials: true });
    return {};
  } catch (e: any) {
    return rejectWithValue("Logout failed");
  }
});

export const checkAuthAsync = createAsyncThunk<
  IAuthReturn,
  void,
  { rejectValue: string }
>("auth/checkAuth", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/refresh`, {
      withCredentials: true,
    });
    localStorage.setItem("token", response.data.accessToken);
    return {
      id: response.data.id,
      email: response.data.email,
      name: response.data.name,
    };
  } catch (e: any) {
    return rejectWithValue(e.response?.data?.message);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isAuth = true;
        console.log({ ...action.payload });

        state.user = { ...action.payload };
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(registrationAsync.fulfilled, (state, action) => {
        state.error = null;
      })
      .addCase(registrationAsync.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.isAuth = false;
        state.user = {};
        state.error = null;
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(checkAuthAsync.fulfilled, (state, action) => {
        state.isAuth = true;
        console.log({ ...action.payload });

        state.user = { ...action.payload };
        state.error = null;
        state.userAuthCheck = false;
      })
      .addCase(checkAuthAsync.rejected, (state, action) => {
        state.isAuth = false;
        state.error = action.payload;
        state.userAuthCheck = false;
        localStorage.removeItem("token");
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) =>
          action.type.endsWith("/fulfilled") ||
          action.type.endsWith("/rejected"),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const { setIsAuth, setIsLoading, setUser } = authSlice.actions;

export default authSlice.reducer;

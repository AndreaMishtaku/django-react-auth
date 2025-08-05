import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import type { set } from "react-hook-form";

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}
export interface IAuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: IUser | null;
}

const initialState: IAuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (
    credentials: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post("/auth/login", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { access, refresh, user } = response.data;

      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);

      return { access, refresh, user };
    } catch (error) {
      return rejectWithValue((error as any).message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (
      state: IAuthState,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem("access_token", action.payload.accessToken);
      localStorage.setItem("refresh_token", action.payload.refreshToken);
    },
    setUser: (state: IAuthState, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.accessToken = action.payload.access;
      state.refreshToken = action.payload.refresh;
      state.user = action.payload.user;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    });
  },
});

export const { setTokens, setUser, logout } = authSlice.actions;

export default authSlice.reducer;

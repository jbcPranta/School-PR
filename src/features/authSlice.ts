import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, AuthState } from "../models/models";

const initialState: AuthState = {
  user: null,
  token: null,
  message: null,
  password_reset_token: null,
  reset_message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string; message: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.message = action.payload.message;
      localStorage.setItem("token", action.payload.token); // Save token
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.message = null;
      localStorage.removeItem("token"); // Remove token
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

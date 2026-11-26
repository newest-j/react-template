import { createSlice } from "@reduxjs/toolkit";

interface User {
  name?: string;
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authslice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action: { payload: User }) => {
      state.user = action.payload;
    },
    signup: (state, action: { payload: User }) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, signup, logout } = authslice.actions;
export default authslice.reducer;

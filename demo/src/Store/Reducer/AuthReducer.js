import { createSlice } from '@reduxjs/toolkit';

const data = { status: false };

const authSlice = createSlice({
  name: 'AuthReducer',
  initialState: data,
  reducers: {
    login: (state, action) => {
      state.status = action.payload;
    },
    logout: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

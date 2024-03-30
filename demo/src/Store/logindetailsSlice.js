// tokenSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const logindetails = createSlice({
  name: "logindetails",
  initialState: {
    details: {
      username: "",
      isloggedIn: "",
    },
  },
  reducers: {
    setLoginDetails: (state, action) => {
      console.log(action.payload, "payload");
      state.details = action.payload;
    },
    resetLoginDetails: (state) => {
      state.details = {
        username: "",
        isloggedIn: "",
      };
    },
  },
});

export const { setLoginDetails, resetLoginDetails } = logindetails.actions;

export default logindetails.reducer;

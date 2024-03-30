// store.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logindetailsSlice from "./logindetailsSlice";
import tokenSlice from "./tokenSlice";
import axios from "axios";

// Axios interceptor setup
axios.interceptors.request.use(
  (config) => {
    const token = store.getState().token.token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const rootReducer = combineReducers({
  token: tokenSlice,
  login: logindetailsSlice,
  // Add other reducers here if needed
});

// Configure persist options
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token", "login"], // Only persist token state
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Export persistor for use in React component
export const persistor = persistStore(store);

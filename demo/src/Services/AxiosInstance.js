// axiosInstance.js
import axios from "axios";
import { setToken } from "../Store/tokenSlice";
import { store } from "../Store/Store";

const instance = axios.create({
  baseURL: "http://localhost:8000/",
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const token = store.getState().token;
    console.log(token, "token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token.token}`;
      console.log("im here", config.headers["Authorization"]);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // Handle token refresh or logout here
    }
    return Promise.reject(error);
  }
);

export default instance;

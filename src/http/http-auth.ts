import axios from "axios";
import { StoreToken } from "src/utils/StoreToken";

export const http_auth = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

http_auth.interceptors.request.use(
  function (config) {
    const token = StoreToken.getToken();

    if (token) {
      config.headers.Authorization = `${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

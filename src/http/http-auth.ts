import axios from "axios";

export const http_auth = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

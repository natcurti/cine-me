import axios from "axios";

const key = import.meta.env.VITE_API_KEY;

export const http_tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

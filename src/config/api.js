import axios from "axios";

//export const API_URL = "https://foodbackend-production-22d2.up.railway.app";
export const API_URL = "http://localhost:8080";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

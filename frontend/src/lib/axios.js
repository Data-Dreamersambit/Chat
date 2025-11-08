import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://sambit-chat.onrender.com",
  withCredentials: true,
});
